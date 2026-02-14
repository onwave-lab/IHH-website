// Netlify Function: Subscribe to MailerLite
// Securely handles newsletter and lead magnet signups

const MAILERLITE_API_URL = 'https://connect.mailerlite.com/api/subscribers';

// Group IDs from MailerLite
const GROUPS = {
  newsletter: '175195722960864384',           // Newsletter Subscribers
  leadMagnet: '178510205243360596',           // Running on Empty Guide (Depletion Signals Guide)
  holisticHabits: '175195632248554684',       // Holistic Habits Checklist (legacy)
  welcomeSequence: '176503189578712288',      // Welcome Sequence
  supplementGuide: '177801439665456539',      // Supplement Guide Downloads
  supplementReviewWaitlist: '177801256141587628',  // Supplement Review Waitlist
  courseInterest: '177807031141401967',       // Confident Supplement Choices Interest
  kitchenStaples: '177893653596866162'         // Kitchen Staples Checklist
};

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // CORS headers for browser requests
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const data = JSON.parse(event.body);
    const { email, firstName, formType, source, state, persona } = data;

    // Validate email
    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Valid email is required' })
      };
    }

    // Determine which group(s) to add subscriber to
    let groupIds = [];

    if (formType === 'lead-magnet' || formType === 'popup') {
      // Lead magnet signups go to checklist group
      // Checklist automation delivers PDF, then copies to Welcome Sequence
      groupIds = [GROUPS.leadMagnet];
    } else if (formType === 'supplement-guide') {
      // Supplement guide downloads - automation delivers PDF
      groupIds = [GROUPS.supplementGuide];
    } else if (formType === 'supplement-review-waitlist') {
      // Supplement review service waitlist
      groupIds = [GROUPS.supplementReviewWaitlist];
    } else if (formType === 'course-interest') {
      // Confident Supplement Choices course interest
      groupIds = [GROUPS.courseInterest];
    } else if (formType === 'kitchen-staples') {
      // Kitchen Staples Checklist downloads
      groupIds = [GROUPS.kitchenStaples];
    } else {
      // Newsletter signups go to Welcome Sequence
      // Automation runs welcome emails, then moves to Newsletter Subscribers
      // If already in Newsletter Subscribers, automation is excluded (won't re-run)
      groupIds = [GROUPS.welcomeSequence];
    }

    // Get API key from environment variable
    const apiKey = process.env.MAILERLITE_API_KEY;

    if (!apiKey) {
      console.error('MAILERLITE_API_KEY environment variable not set');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Server configuration error' })
      };
    }

    // Build subscriber data
    const subscriberData = {
      email: email.toLowerCase().trim(),
      groups: groupIds,
      status: 'active',
      fields: {}
    };

    // Add first name if provided
    if (firstName && firstName.trim()) {
      subscriberData.fields.name = firstName.trim();
    }

    // Add signup source for tracking
    if (source) {
      subscriberData.fields.signup_source = source;
    }

    // Add state if provided
    if (state) {
      subscriberData.fields.state = state;
    }

    // Add persona if provided (from blog persona toggle)
    if (persona) {
      subscriberData.fields.persona = persona;
    }

    // Send to MailerLite
    const response = await fetch(MAILERLITE_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(subscriberData)
    });

    const result = await response.json();

    if (!response.ok) {
      // Handle MailerLite errors
      console.error('MailerLite error:', result);

      // Check for already subscribed (not really an error)
      if (response.status === 422 && result.message?.includes('already')) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            success: true,
            message: 'You\'re already subscribed!'
          })
        };
      }

      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({
          error: result.message || 'Subscription failed',
          details: result.errors || null
        })
      };
    }

    // Success!
    let successMessage = 'Successfully subscribed!';
    if (formType === 'lead-magnet' || formType === 'popup') {
      successMessage = 'Check your email for your Depletion Signals Guide!';
    } else if (formType === 'supplement-guide') {
      successMessage = 'Check your email for your free Supplement Guide!';
    } else if (formType === 'supplement-review-waitlist') {
      successMessage = 'You\'re on the waitlist! We\'ll notify you when spots open.';
    } else if (formType === 'course-interest') {
      successMessage = 'Thanks! We\'ll notify you when the course launches.';
    } else if (formType === 'kitchen-staples') {
      successMessage = 'Check your email for your free Kitchen Staples Checklist!';
    } else {
      successMessage = 'Successfully subscribed to the newsletter!';
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: successMessage
      })
    };

  } catch (error) {
    console.error('Subscribe function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'An unexpected error occurred' })
    };
  }
};
