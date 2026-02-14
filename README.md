# Intention Holistic Health Website

A custom-built website for Intention Holistic Health PLLC — a holistic wellness practice led by Alicia Harrison, MSN, APRN, FNP-C, serving Kentucky women through pregnancy, postpartum, and motherhood.

## Tech Stack

- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript (no frameworks)
- **Styling**: Modern CSS with CSS Grid/Subgrid and Flexbox, CSS Variables for theming
- **Hosting**: Netlify with GitHub integration (auto-deploy from `drafts-website-edits` branch)
- **Blog System**: JavaScript-based with markdown-style content, persona toggle, and download promos
- **Forms**: Netlify Forms (contact/apply) + MailerLite API via Netlify Functions (newsletter/lead magnets)
- **Analytics**: Google Analytics 4 with custom event tracking
- **Edge Functions**: Server-side Open Graph tag injection for blog social previews

## Project Structure

```
/
├── index.html                  # Homepage
├── about.html                  # About Alicia page
├── contact.html                # Contact form page
├── apply.html                  # Application form for services
├── htma.html                   # Educational: What is HTMA?
├── supplement-guide.html       # Supplement Guide landing page
├── kitchen-staples.html        # Kitchen Staples Checklist landing page
├── links.html                  # Link-in-bio page
├── services/
│   ├── index.html              # Packages & Programs (3-tier service menu)
│   ├── lab-review.html         # Lab Review service
│   └── intentional-reset.html  # Limited-time offer landing page
├── blog/
│   ├── index.html              # Blog listing page
│   ├── post.html               # Default blog post template (two-column + sidebar)
│   └── post-superior.html      # Full-width blog post template
├── legal/
│   ├── terms.html              # Terms of Service
│   ├── privacy.html            # Privacy Policy
│   └── disclaimer.html         # Medical Disclaimer
├── css/
│   ├── main.css                # Global styles, header, footer, components
│   ├── blog.css                # Blog listing and post styles
│   ├── blog-superior.css       # Full-width blog template styles
│   ├── htma.css                # HTMA educational page styles
│   ├── services-v2.css         # Services page styles
│   ├── about-v2.css            # About page styles
│   ├── supplement-guide.css    # Supplement guide page styles
│   └── links.css               # Link-in-bio page styles
├── js/
│   ├── main.js                 # Global: nav, popups, GA4 events, cookie consent, MailerLite
│   ├── blog.js                 # Blog: post rendering, search, persona toggle, promos
│   └── blog-superior.js        # Full-width blog template JS
├── fonts/                      # Self-hosted fonts (Playfair Display, Poppins, BDScript, Glacial)
├── images/
│   ├── blog/                   # Blog post images (4 responsive sizes each)
│   ├── hero/                   # Hero banner images
│   ├── services/               # Service page images
│   ├── about/                  # About page images
│   ├── graphics/               # Decorative graphics
│   └── ...                     # Lead magnet previews, favicons, etc.
├── brand/                      # Brand assets (logo, branding board)
├── netlify/
│   ├── functions/
│   │   ├── subscribe.js        # MailerLite newsletter/lead magnet subscriptions
│   │   ├── ga4-analytics.js    # GA4 analytics API proxy
│   │   └── easter-egg-track.js # Easter egg counter (Netlify Blobs)
│   └── edge-functions/
│       └── blog-og-tags.js     # Blog post Open Graph tags for social previews
├── docs/                       # Internal documentation
├── netlify.toml                # Netlify config (redirects, headers, caching)
├── robots.txt                  # Search engine crawl rules
├── sitemap.xml                 # XML sitemap for search engines
├── CLAUDE.md                   # Project instructions for AI assistant
├── CLAUDE-REFERENCE.md         # IDs, code snippets, hex values
├── QUICKSTART_GUIDE.md         # Owner's guide for managing the site
├── WORKFLOW.md                 # Branching and deployment workflow
└── README.md                   # This file
```

## Local Development

### Running Locally

1. Open a terminal in the project directory
2. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```
3. Open http://localhost:8000 in your browser

### Making Changes

1. Edit HTML/CSS/JS files directly
2. Refresh browser to see changes
3. Test on multiple viewport sizes (mobile, tablet, desktop)

## Deployment

### Branching Strategy

- **`drafts-website-edits`**: Main working branch. Netlify auto-deploys branch previews (free).
- **`main`**: Production branch. Merges trigger production deploys (15 credits each).
- **`browser-coded-branch`**: For browser-based coding sessions.

### Preview URL

https://drafts-website-edits--intentionholistichealth.netlify.app

See `WORKFLOW.md` for the full branching and deployment process.

## Adding Blog Posts

Blog posts are defined in `/js/blog.js` in the `BLOG_POSTS` array. Each post uses markdown-style content rendered client-side. See `CLAUDE.md` for the full blog post checklist.

## Design Tokens

Colors and spacing are defined as CSS variables in `/css/main.css`:

### Brand Colors
- `--color-sage-green: #8D9488` (primary)
- `--color-warm-tan: #D6C7B4` (secondary)
- `--color-cream: #F9F5F0` (backgrounds)
- `--color-charcoal: #4A4B49` (text)
- `--color-light-sage: #CDCFC0` (accents)
- `--color-taupe: #AD9985` (accents)

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## External Integrations

| Service | Purpose |
|---------|---------|
| [Practice Better](https://my.practicebetter.io) | Patient portal, scheduling |
| [Fullscript](https://us.fullscript.com/welcome/intentionholistichealth) | Supplements store |
| [MailerLite](https://www.mailerlite.com) | Email marketing, lead magnets |
| Google Analytics 4 | Analytics and event tracking |
| Google Search Console | Search performance monitoring |

## Support

For questions about managing this website, refer to `QUICKSTART_GUIDE.md`.

---

Built with care for Intention Holistic Health PLLC.
