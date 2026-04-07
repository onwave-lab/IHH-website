// Netlify Function: GA4 Analytics & Google Ads Data
// Fetches analytics data from Google Analytics 4 API and Google Ads API

const crypto = require('crypto');
const https = require('https');

// GA4 Property ID
const GA4_PROPERTY_ID = '517511231';

// Google Ads config (credentials from env vars)
const GOOGLE_ADS_CUSTOMER_ID = (process.env.GOOGLE_ADS_CUSTOMER_ID || '').replace(/-/g, '');

// Create JWT for Google API authentication
function createJWT(credentials) {
  const header = {
    alg: 'RS256',
    typ: 'JWT'
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/analytics.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  };

  const base64Header = Buffer.from(JSON.stringify(header)).toString('base64url');
  const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signatureInput = `${base64Header}.${base64Payload}`;

  const sign = crypto.createSign('RSA-SHA256');
  sign.update(signatureInput);
  const signature = sign.sign(credentials.private_key, 'base64url');

  return `${signatureInput}.${signature}`;
}

// Get access token from Google
async function getAccessToken(credentials) {
  const jwt = createJWT(credentials);

  return new Promise((resolve, reject) => {
    const postData = new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    }).toString();

    const options = {
      hostname: 'oauth2.googleapis.com',
      path: '/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.access_token) {
            resolve(parsed.access_token);
          } else {
            reject(new Error(parsed.error_description || 'Failed to get access token'));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

// Get OAuth access token for Google Ads using refresh token
async function getAdsAccessToken() {
  const postData = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
    client_id: process.env.GOOGLE_ADS_CLIENT_ID,
    client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET
  }).toString();

  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'oauth2.googleapis.com',
      path: '/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.access_token) {
            resolve(parsed.access_token);
          } else {
            reject(new Error(parsed.error_description || 'Failed to get Ads access token'));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

// Query Google Ads API using GAQL
async function fetchAdsData(accessToken, query) {
  const postData = JSON.stringify({ query });

  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'googleads.googleapis.com',
      path: `/v19/customers/${GOOGLE_ADS_CUSTOMER_ID}/googleAds:search`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'developer-token': process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.error || (Array.isArray(parsed) && parsed[0]?.error)) {
            const err = parsed.error || parsed[0].error;
            reject(new Error(err.message || JSON.stringify(err)));
          } else {
            resolve(parsed);
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

// Build GAQL date filter
function getAdsDateFilter(days) {
  if (days === '7') return 'LAST_7_DAYS';
  if (days === '14') return 'LAST_14_DAYS';
  if (days === '30') return 'LAST_30_DAYS';
  // Custom range
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - parseInt(days));
  const fmt = d => d.toISOString().split('T')[0].replace(/-/g, '');
  return `BETWEEN '${start.toISOString().split('T')[0]}' AND '${end.toISOString().split('T')[0]}'`;
}

// Google Ads report queries
function getAdsQuery(reportType, days) {
  const dateFilter = getAdsDateFilter(days);
  const isRange = dateFilter.startsWith('BETWEEN');
  const dateClause = isRange
    ? `segments.date ${dateFilter}`
    : `segments.date DURING ${dateFilter}`;

  const queries = {
    'ads-campaigns': `
      SELECT campaign.name, campaign.status,
        metrics.impressions, metrics.clicks, metrics.cost_micros,
        metrics.conversions, metrics.average_cpc, metrics.ctr
      FROM campaign
      WHERE ${dateClause}
        AND campaign.status != 'REMOVED'
      ORDER BY metrics.cost_micros DESC`,

    'ads-keywords': `
      SELECT ad_group_criterion.keyword.text,
        ad_group_criterion.keyword.match_type,
        campaign.name, ad_group.name,
        metrics.impressions, metrics.clicks, metrics.cost_micros,
        metrics.conversions, metrics.average_cpc, metrics.ctr
      FROM keyword_view
      WHERE ${dateClause}
      ORDER BY metrics.impressions DESC
      LIMIT 25`,

    'ads-search-terms': `
      SELECT search_term_view.search_term,
        campaign.name,
        metrics.impressions, metrics.clicks, metrics.cost_micros,
        metrics.conversions, metrics.ctr
      FROM search_term_view
      WHERE ${dateClause}
      ORDER BY metrics.impressions DESC
      LIMIT 25`,

    'ads-overview': `
      SELECT metrics.impressions, metrics.clicks, metrics.cost_micros,
        metrics.conversions, metrics.average_cpc, metrics.ctr,
        metrics.interactions, metrics.cost_per_conversion
      FROM customer
      WHERE ${dateClause}`
  };

  return queries[reportType];
}

// Format Google Ads response
function formatAdsReport(rawData, reportType) {
  const allRows = [];
  const resultsList = rawData.results || [];

  for (const result of resultsList) {
      const row = {};
      const m = result.metrics || {};
      const c = result.campaign || {};
      const ag = result.adGroup || {};
      const kw = result.adGroupCriterion?.keyword || {};
      const st = result.searchTermView || {};

      if (c.name) row.campaign = c.name;
      if (c.status) row.status = c.status;
      if (ag.name) row.adGroup = ag.name;
      if (kw.text) row.keyword = kw.text;
      if (kw.matchType) row.matchType = kw.matchType;
      if (st.searchTerm) row.searchTerm = st.searchTerm;

      if (m.impressions) row.impressions = parseInt(m.impressions).toLocaleString();
      if (m.clicks) row.clicks = parseInt(m.clicks).toLocaleString();
      if (m.costMicros) row.cost = '$' + (parseInt(m.costMicros) / 1000000).toFixed(2);
      if (m.conversions) row.conversions = parseFloat(m.conversions).toFixed(1);
      if (m.averageCpc) row.avgCPC = '$' + (parseInt(m.averageCpc) / 1000000).toFixed(2);
      if (m.ctr) row.ctr = (parseFloat(m.ctr) * 100).toFixed(2) + '%';
      if (m.costPerConversion) row.costPerConversion = '$' + (parseInt(m.costPerConversion) / 1000000).toFixed(2);

      allRows.push(row);
  }

  return {
    reportType,
    rowCount: allRows.length,
    rows: allRows
  };
}

// Call GA4 Data API
async function fetchGA4Data(accessToken, reportType = 'overview', dateRange = '30') {
  const startDate = `${dateRange}daysAgo`;
  const endDate = 'today';

  // Different report configurations
  const reports = {
    overview: {
      dateRanges: [{ startDate, endDate }],
      metrics: [
        { name: 'activeUsers' },
        { name: 'sessions' },
        { name: 'screenPageViews' },
        { name: 'bounceRate' },
        { name: 'averageSessionDuration' }
      ]
    },
    pages: {
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [
        { name: 'screenPageViews' },
        { name: 'activeUsers' }
      ],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: 20
    },
    sources: {
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: 'sessionSource' }],
      metrics: [
        { name: 'sessions' },
        { name: 'activeUsers' }
      ],
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
      limit: 10
    },
    events: {
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: 'eventName' }],
      metrics: [
        { name: 'eventCount' }
      ],
      orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
      limit: 20
    },
    blog: {
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: 'pageTitle' }],
      metrics: [
        { name: 'screenPageViews' },
        { name: 'activeUsers' },
        { name: 'averageSessionDuration' }
      ],
      dimensionFilter: {
        filter: {
          fieldName: 'pagePath',
          stringFilter: {
            matchType: 'BEGINS_WITH',
            value: '/blog/post'
          }
        }
      },
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: 20
    },
    daily: {
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: 'date' }],
      metrics: [
        { name: 'activeUsers' },
        { name: 'sessions' },
        { name: 'screenPageViews' }
      ],
      orderBys: [{ dimension: { dimensionName: 'date' }, desc: false }]
    },
    channels: {
      dateRanges: [{ startDate, endDate }],
      dimensions: [
        { name: 'sessionSource' },
        { name: 'sessionMedium' },
        { name: 'sessionDefaultChannelGroup' }
      ],
      metrics: [
        { name: 'sessions' },
        { name: 'activeUsers' },
        { name: 'bounceRate' },
        { name: 'averageSessionDuration' }
      ],
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
      limit: 20
    },
    paid: {
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [
        { name: 'sessions' },
        { name: 'activeUsers' },
        { name: 'screenPageViews' },
        { name: 'bounceRate' },
        { name: 'averageSessionDuration' }
      ],
      dimensionFilter: {
        filter: {
          fieldName: 'sessionMedium',
          stringFilter: {
            matchType: 'EXACT',
            value: 'cpc'
          }
        }
      },
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
      limit: 20
    }
  };

  const requestBody = reports[reportType] || reports.overview;

  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(requestBody);

    const options = {
      hostname: 'analyticsdata.googleapis.com',
      path: `/v1beta/properties/${GA4_PROPERTY_ID}:runReport`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.error) {
            reject(new Error(parsed.error.message));
          } else {
            resolve(parsed);
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

// Format the response for readability
function formatReport(rawData, reportType) {
  if (!rawData.rows) {
    return { message: 'No data available for this period', rows: [] };
  }

  const metrics = rawData.metricHeaders?.map(h => h.name) || [];
  const dimensions = rawData.dimensionHeaders?.map(h => h.name) || [];

  const rows = rawData.rows.map(row => {
    const formatted = {};

    dimensions.forEach((dim, i) => {
      formatted[dim] = row.dimensionValues?.[i]?.value;
    });

    metrics.forEach((metric, i) => {
      let value = row.metricValues?.[i]?.value;
      // Format specific metrics
      if (metric === 'bounceRate') {
        value = (parseFloat(value) * 100).toFixed(1) + '%';
      } else if (metric === 'averageSessionDuration') {
        const seconds = parseFloat(value);
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        value = `${mins}m ${secs}s`;
      } else if (!isNaN(value)) {
        value = parseInt(value).toLocaleString();
      }
      formatted[metric] = value;
    });

    return formatted;
  });

  return {
    reportType,
    rowCount: rawData.rowCount,
    rows
  };
}

exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Get credentials from environment
    const credentialsJson = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
    if (!credentialsJson) {
      throw new Error('GA4 credentials not configured');
    }

    const credentials = JSON.parse(credentialsJson);

    // Get query parameters
    const params = event.queryStringParameters || {};
    const reportType = params.report || 'overview';
    const dateRange = params.days || '30';

    // Route to Google Ads API or GA4 API
    if (reportType.startsWith('ads-')) {
      const query = getAdsQuery(reportType, dateRange);
      if (!query) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            error: 'Invalid ads report type',
            validTypes: ['ads-overview', 'ads-campaigns', 'ads-keywords', 'ads-search-terms']
          })
        };
      }

      const adsToken = await getAdsAccessToken();
      const rawData = await fetchAdsData(adsToken, query);
      const formattedData = formatAdsReport(rawData, reportType);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          customerId: GOOGLE_ADS_CUSTOMER_ID,
          dateRange: `Last ${dateRange} days`,
          ...formattedData
        }, null, 2)
      };
    }

    // GA4 reports
    const accessToken = await getAccessToken(credentials);
    const rawData = await fetchGA4Data(accessToken, reportType, dateRange);
    const formattedData = formatReport(rawData, reportType);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        property: GA4_PROPERTY_ID,
        dateRange: `Last ${dateRange} days`,
        ...formattedData
      }, null, 2)
    };

  } catch (error) {
    console.error('GA4 API Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Failed to fetch analytics data',
        message: error.message
      })
    };
  }
};
