# Claude Reference Data

This file contains IDs, code snippets, hex values, detailed procedures, checklists, and design specs. All behavioral instructions and rules remain in CLAUDE.md.

---

## Notion IDs

### Database IDs

| Database | ID |
|----------|-----|
| Session Notes | `2e277f92-bf69-80ed-a966-c331880b4dc2` |
| Tasks & Projects | `2e277f92-bf69-80de-aab2-fdc2e1e8613c` |
| Accounts Inventory | `2e277f92-bf69-802e-88c7-f0b2b097c011` |
| Dashboard Page (AI Content System) | `2df77f92-bf69-808a-80d5-e5929cf6160b` |
| Last Updated Callout Block | `2e277f92-bf69-81fd-b227-e17198f29b1d` |

---

## Code Snippets

### Last Updated Callout - Update Command

```bash
curl -X PATCH "https://api.notion.com/v1/blocks/2e277f92-bf69-81fd-b227-e17198f29b1d" \
  -H "Authorization: Bearer ${NOTION_TOKEN}" \
  -H "Content-Type: application/json" \
  -H "Notion-Version: 2022-06-28" \
  -d '{"callout": {"rich_text": [{"text": {"content": "Last Updated: [DATE] at [TIME] CST | Updated By: [ENV]"}}]}}'
```

### Property JSON Formats (for notion-cli)

```javascript
// Title (required for most databases)
{"title": [{"text": {"content": "My Title"}}]}

// Rich Text
{"rich_text": [{"text": {"content": "Some text"}}]}

// Select
{"select": {"name": "Option Name"}}

// Multi-Select
{"multi_select": [{"name": "Tag1"}, {"name": "Tag2"}]}

// Status
{"status": {"name": "Active"}}

// Date
{"date": {"start": "2026-01-08"}}

// URL
{"url": "https://example.com"}
```

### notion-cli Commands

```bash
# Create a page in a database
notion-cli create-page <database-id> '{"Title": {"title": [{"text": {"content": "Page Name"}}]}}'

# Update a page
notion-cli update-page <page-id> '{"Status": {"status": {"name": "Done"}}}'

# Query a database
notion-cli query <database-id>

# Search
notion-cli search "query"

# Help
notion-cli help
```

**Known Issue (2026-01-19):** The `notion-cli` tool sometimes returns 404 errors for databases that exist and are shared. If `notion-cli create-page` fails with "Could not find database", use direct curl instead:

```bash
# Direct API - Create page (use this if notion-cli fails)
curl -s -X POST "https://api.notion.com/v1/pages" \
  -H "Authorization: Bearer ${NOTION_TOKEN}" \
  -H "Content-Type: application/json" \
  -H "Notion-Version: 2022-06-28" \
  -d '{
    "parent": {"database_id": "DATABASE-ID-HERE"},
    "properties": {
      "Task": {"title": [{"text": {"content": "Task name"}}]},
      "Status": {"status": {"name": "Backlog"}},
      "Priority": {"select": {"name": "Medium"}},
      "Category": {"multi_select": [{"name": "Technical"}]},
      "Description": {"rich_text": [{"text": {"content": "Description here"}}]}
    }
  }'
```

### GA4 Tracking Code

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-3GFCR5ZRMZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-3GFCR5ZRMZ');
</script>
```

### GA4 Tracking Attributes Examples

```html
<!-- Section Tracking -->
<section data-track-section="hero">...</section>
<section data-track-section="services-overview">...</section>
<section data-track-section="pricing">...</section>
<section data-track-section="faq">...</section>

<!-- CTA Tracking -->
<a href="/apply.html" class="btn" data-track-cta="apply-hero">Apply Now</a>
<a href="/htma.html" data-track-cta="learn-htma">Learn More</a>
```

### Newsletter Form HTML Template

```html
<form data-mailerlite data-form-type="newsletter" data-form-source="page_location">
  <!-- REQUIRED: Honeypot field for bot protection -->
  <input type="text" name="website" class="hp-field" tabindex="-1" autocomplete="off" aria-hidden="true">
  <input type="email" name="email" required>
  <button type="submit">Subscribe</button>
  <p class="form-message" style="display:none;"></p>
</form>
```

**Notes:**
- `data-form-source` should identify where the form is (e.g., "homepage_newsletter", "blog_sidebar")
- Honeypot field is required - bots fill it, humans can't see it
- Time-based check (3 seconds) is handled automatically by main.js

### Sitemap Entry Template

**IMPORTANT:** Blog URLs use `?post=` parameter (not `?slug=`).

```xml
<url>
  <loc>https://www.intentionholistichealth.com/blog/post.html?post=your-post-slug</loc>
  <lastmod>2025-01-04</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>
```

### Lighthouse Check Command

```bash
lighthouse https://drafts-website-edits--intentionholistichealth.netlify.app/blog/post.html?slug=your-post-slug --only-categories=performance,accessibility,seo --output=json --output-path=/dev/null --chrome-flags="--headless" 2>&1 | grep -E "(performance|accessibility|seo)"
```

### Blog Image Dimension Check

```bash
identify -format '%wx%h' /path/to/image.webp
```

### BDScript Subset Regeneration

```bash
npx --yes glyphhanger --whitelist="STIPCA ervicshntolamp. " --subset=/fonts/BDScript-Regular.ttf --formats=woff2
# Note: After regenerating, the output will be BDScript-subset.woff2 in /fonts/
# All fonts use WOFF2 format (converted 2026-04-10). TTF source files are in /fonts/ but excluded from deploys via .netlifyignore.
```

### Analytics API Endpoint

```
curl https://drafts-website-edits--intentionholistichealth.netlify.app/.netlify/functions/ga4-analytics?report=TYPE&days=N
```

Report types: `overview`, `pages`, `sources`, `events`, `daily`

---

## Netlify Credits Tracking

**Billing Cycle:** Resets January 26, 2025
**Plan:** Personal (1,000 credits) - operating as Free tier (300 credit target)

| Date | Action | Credits Used | Running Total |
|------|--------|--------------|---------------|
| Pre-Jan 13 | Previous usage | 207.5 | 207.5 |
| Jan 13 | Merge: MailerLite enhancements | 15 | 222.5 |
| Jan 13 | Merge: Bot protection | 15 | 237.5 |

**Credit Costs Reference:**
- Production deploy: 15 credits
- Branch deploy: FREE
- Bandwidth: 10 credits/GB
- Web requests: 3 credits/10,000

---

## IDs and Values

### MailerLite Group IDs

| Group | ID | Form Type |
|-------|-----|-----------|
| Newsletter Subscribers | `175195722960864384` | `newsletter` |
| Holistic Habits Checklist (legacy) | `175195632248554684` | — |
| Running on Empty Guide (Depletion Signals) | `178510205243360596` | `lead-magnet` |
| Welcome Sequence | `176503189578712288` | default fallback |
| Supplement Guide Downloads | `177801439665456539` | `supplement-guide` |
| Supplement Review Waitlist | `177801256141587628` | `supplement-review-waitlist` |
| Confident Supplement Choices Interest | `177807031141401967` | `course-interest` |
| Kitchen Staples Checklist | `177893653596866162` | `kitchen-staples` |
| Current Clients | `175196347878606776` | — |
| Preconception | `175196323812738757` | — |
| Pregnancy | `175196330073785625` | — |
| Postpartum | `175196336313861959` | — |

### MailerLite Authentication

If MailerLite API returns "Unauthenticated":
1. Go to: **MailerLite Dashboard → Integrations → Developer API**
2. Copy the API token
3. Update in `~/.zshrc` (Mac) or `~/.bashrc` (Linux/WSL):
   ```bash
   export MAILERLITE_API_KEY="your_new_token_here"
   ```
4. Restart terminal or run `source ~/.zshrc`

### GA4 Measurement ID

`G-3GFCR5ZRMZ`

### BDScript Current Subset Characters

`S T I P C A e r v i c s h n t o a l m p . (space)`

---

## Brand Hex Values

| Color | Hex |
|-------|-----|
| Light Sage | `#CDCFC0` |
| Warm Tan | `#D6C7B4` |
| Taupe | `#AD9985` |
| Sage Green | `#8D9488` |
| Charcoal | `#4A4B49` |
| Cream | `#F9F5F0` |

---

## Key URLs

| Resource | URL |
|----------|-----|
| Live Site | https://www.intentionholistichealth.com |
| Branch Deploy | https://drafts-website-edits--intentionholistichealth.netlify.app |
| GitHub Repo | git@github.com:trymebroh/IHH-website.git |
| GA4 Property | G-3GFCR5ZRMZ |
| Practice Better | https://my.practicebetter.io |
| Fullscript | https://us.fullscript.com/welcome/intentionholistichealth |

### Contact Email

`info@intentionholistichealth.com`

### Business Phone (SMS/Text)

`(270) 238-0813` (Google Voice) | SMS link: `sms:+12702380813`

### Credentials (Alicia Harrison)

| Credential | Full Name |
|------------|-----------|
| MSN | Master of Science in Nursing |
| APRN | Advanced Practice Registered Nurse |
| FNP-C | Family Nurse Practitioner - Board Certified |
| BHPCC | Brain Health Professional Coaching Certification |

---

## Model Selection Guide

**Default Model:** claude-sonnet-4-5-20250929 (Sonnet 4.5)

Use `/model` to switch models based on the task phase:

| Phase | Recommended Model | Rationale |
|-------|-------------------|-----------|
| **Planning & Architecture** | Opus 4.5 | Complex reasoning, system design, trade-off analysis |
| **Code Implementation** | Sonnet 4.5 | Best balance of speed, cost, and code quality |
| **Bug Fixes & Small Changes** | Sonnet 4.5 or Haiku 3.5 | Quick iterations, straightforward tasks |
| **Code Review & Refactoring** | Opus 4.5 | Deep understanding of patterns, edge cases |
| **Documentation** | Sonnet 4.5 | Clear writing with good context understanding |
| **Quick Questions & Lookups** | Haiku 3.5 | Fast responses, lower cost |

**When to upgrade to Opus 4.5:**
- Designing new features or systems from scratch
- Debugging complex, multi-file issues
- Security-sensitive code review
- Performance optimization requiring deep analysis

**When Haiku 3.5 is sufficient:**
- Simple file edits
- Running commands and scripts
- Straightforward Q&A about the codebase

---

## Notion Manual UI Walkthroughs

### 1. Creating a New Database
Walk user through Notion UI:
1. Open parent page in Notion
2. Type `/database` and select "Database - Full page"
3. Name the database
4. Add properties (see property types below)
5. Set icon and description
6. Share with integration: `...` menu → Connections → Add integration

### 2. Adding/Editing Property Options
Status, Select, and Multi-select options must be created in UI:

1. Click property header → "Edit property"
2. Add options with names
3. **Set colors** (API cannot set colors):
   - Click the color dot next to each option
   - Available colors: `default`, `gray`, `brown`, `orange`, `yellow`, `green`, `blue`, `purple`, `pink`, `red`

### Notion Color Conventions

| Property Type | Option | Color |
|---------------|--------|-------|
| Priority | High | Red |
| Priority | Medium | Yellow |
| Priority | Low | Green |
| Status | To-do group | Gray |
| Status | In Progress group | Blue |
| Status | Complete group | Green |
| Environment | Local VS Code | Blue |
| Environment | Browser Codex | Purple |
| Environment | Mobile | Green |
| Category | Legal | Orange |
| Category | Technical | Blue |
| Category | Content | Green |
| Category | SEO | Purple |
| Category | Marketing | Pink |
| Access | Alicia (Owner) | Purple |
| Access | Developer | Blue |
| Access | API Only | Gray |

### 3. Setting Up Status Property Groups
Status properties have special grouping (To-do, In Progress, Complete):

1. Click Status property header → "Edit property"
2. Add options under each group header
3. Drag options between groups to reorganize
4. Set colors for each option

### 4. Creating Relations Between Databases
1. In source database, click `+` to add property
2. Select "Relation"
3. Choose target database
4. Toggle "Show on [target]" for two-way relation
5. Name the property on both sides

### 5. Creating Database Views
Views cannot be created via API:

1. Click `+` next to existing view tabs
2. Choose view type: Table, Board, Calendar, List, Gallery, Timeline
3. Configure:
   - **Filter**: Click "Filter" → Add conditions
   - **Sort**: Click "Sort" → Add sort rules
   - **Group by**: (Board view) Select grouping property
   - **Properties**: Show/hide columns

**Recommended views per database:**
| Database | View | Type | Filter/Config |
|----------|------|------|---------------|
| Session Notes | Recent | Table | Date = Past week |
| Session Notes | Calendar | Calendar | By Date |
| Tasks | Active | Board | Status ≠ Done, Group by Status |
| Tasks | By Priority | Table | Sort by Priority |
| Accounts | All | Table | None |
| Accounts | By Category | Board | Group by Category |

### Alternative Notion Integrations

If MCP bug is fixed or more capabilities are needed:
- **Better Notion MCP** - 75% API coverage with optimized operations
- **Direct API via Netlify Functions** - Full API access including database creation
- **Zapier/Make.com** - No-code automation with full Notion connectors

---

## Deployment Credit Costs

| Plan | Credits/Month | Cost |
|------|---------------|------|
| Free | 300 | $0 |
| Personal | 1,000 | $9/month |

**Credit costs:**
- Production deploy: 15 credits
- Bandwidth: 10 credits/GB
- Web requests: 3 credits/10,000
- Form submission: 1 credit
- Deploy previews: FREE
- Branch deploys: FREE

**Free tier target:** 4-5 production deploys/month = 60-75 credits, leaving ~225 for traffic.

---

## Cache Management Details

### Current Cache Settings (netlify.toml)

| Asset Type | Cache Duration | Revalidation | Notes |
|------------|----------------|--------------|-------|
| **Images** | 3 months | must-revalidate | Checks for updates on each request |
| **Fonts** | 3 months | must-revalidate | Checks for updates on each request |
| **CSS** | 0 (always check) | must-revalidate | Always verifies freshness |
| **JS** | 0 (always check) | must-revalidate | Always verifies freshness |
| **HTML** | 0 (always check) | must-revalidate | Always verifies freshness |

### How It Works

- `must-revalidate` means browsers ask Netlify "has this changed?" before using cached version
- Netlify responds with **304 Not Modified** (use cache) or **200 + new file** (download update)
- Users get fresh content without hard refreshing

### Proactive Checklist for URL/Behavior Changes

When making changes to URLs, links, or JS behaviors that users might have cached:

1. **JS-controlled URLs** (like `PORTAL_URLS` in main.js):
   - Cache headers now handle this automatically
   - No manual cache-busting needed

2. **If users report stale content:**
   - First verify the deploy went through on Netlify
   - Confirm the file is correct on the CDN (fetch the raw file URL)
   - If CDN is correct but users see old version → browser cache issue
   - With current settings, a normal page refresh should fix it

3. **Images that change frequently:**
   - Consider using versioned filenames (e.g., `hero-v2.webp`) for critical images
   - Or reduce cache time further in netlify.toml if needed

### History

- **2026-01-10:** Changed JS/CSS/HTML from `immutable` (1 year) to `must-revalidate` after booking URL update wasn't propagating to users. Images and fonts changed from 1 year to 3 months with must-revalidate.

---

## Promotional System Template

**Reference:** "Design this like the Intentional Reset promo" - Use this template for future promotions.

### Overview

The promotional system consists of two components:
1. **Bottom Floating Bar** - Persistent, non-intrusive bar at bottom of screen
2. **Info Popup Modal** - Detailed information shown when bar is clicked

### Design Specifications

#### Bottom Promo Bar

| Breakpoint | Height | Elements Shown |
|------------|--------|----------------|
| **Desktop** (>1024px) | 60px | Thumbnail + "NEW" badge + Text + "See Details" button |
| **Tablet** (768-1024px) | 55px | Thumbnail + "NEW" badge + Text + "See Details" button |
| **Mobile** (<768px) | 50px | "NEW" badge + Text + Dismiss X (no thumbnail, no button) |

**Styling:**
- Background: Sage green (`--color-sage-green` / #8D9488)
- Text: Cream (`--color-cream` / #F9F5F0)
- Badge: Cream background with sage text
- Hover: Darker sage (`--color-sage-dark`)
- Position: Fixed to bottom, z-index 1000

**Behavior:**
- Clicking anywhere on bar opens the modal (except dismiss button)
- Dismiss button: **Mobile only** - saves to sessionStorage so it doesn't reappear that session
- Desktop/Tablet: Always visible (no dismiss option)

#### Popup Modal

**Content Structure:**
1. Hero image from the promotion (full width, top)
2. "NEW" badge
3. Title (Playfair Display)
4. Subtitle (italic)
5. Description (2-3 sentences)
6. Two CTAs:
   - Primary: "Learn More" → Links to promotion page
   - Secondary: "Apply Now" → Links to `/apply.html`

**Styling:**
- Background: Cream
- Max-width: 420px (95% on mobile)
- Border-radius: 12px
- Overlay: Semi-transparent black (60% opacity)

**Behavior:**
- Opens with fade-in + slide-up animation
- Closes via: X button, clicking overlay, or Escape key
- Body scroll locked when open

### Implementation Checklist for New Promotions

When creating a new promotion:

1. [ ] Create promotional hero image (portrait orientation works best, ~950x1188)
2. [ ] Update bar thumbnail reference in HTML
3. [ ] Update modal image reference in HTML
4. [ ] Update "NEW" badge text if needed (or change to "LIMITED TIME", etc.)
5. [ ] Update bar text copy
6. [ ] Update modal title, subtitle, and description
7. [ ] Update CTA links (primary → promo page, secondary → apply page)
8. [ ] Add promo HTML/JS to desired pages (before cookie consent banner)

### Files Modified for Promotions

| File | Purpose |
|------|---------|
| `/css/main.css` | Contains `.promo-bottom-bar` and `.promo-modal` styles |
| Target pages | HTML for bar + modal + inline JS (added before `</body>`) |

### Current Promotion: Intentional Reset

**Active on pages:**
- `index.html` (Homepage)
- `htma.html` (What is HTMA?)
- `services/services.html` (Packages & Programs)
- `services/lab-review.html` (Lab Review)

**Promo page:** `/services/intentional-reset.html`

---

## GA4 Tracking Details

### Events Automatically Tracked

The following events are already tracked in `/js/main.js`:

| Event | Description |
|-------|-------------|
| `cta_click` | Any element with `data-track-cta` attribute |
| `section_view` | When sections with `data-track-section` scroll 50% into view |
| `form_submit` | All form submissions |
| `popup_shown` | Exit-intent popup displays |
| `popup_closed` | Exit-intent popup dismissed |
| `outbound_click` | Clicks on external links |

### Checklist for New Pages

When creating any new page:

1. [ ] Add GA4 tracking code to `<head>`
2. [ ] Add `data-track-section` to key sections (hero, services, pricing, CTA, FAQ)
3. [ ] Add `data-track-cta` to all CTA buttons
4. [ ] Ensure page includes `/js/main.js` script
5. [ ] Test tracking with GA4 Realtime reports

### Checklist for New Blog Posts

Blog posts use JavaScript rendering in `/js/blog.js`, so:

1. [ ] GA4 is already loaded on blog pages (`/blog/post.html`, `/blog/post-superior.html`)
2. [ ] Add tracking attributes to any inline CTAs in blog content
3. [ ] Form tracking is automatic for newsletter signup

### Recommended Sections to Track

| Page Type | Recommended Sections |
|-----------|---------------------|
| Service pages | hero, problem, solution, process, pricing, faq, final-cta |
| Landing pages | hero, features, benefits, testimonials, cta |
| Blog posts | content, related-posts, newsletter-signup |
| Apply/Contact | form-start, form-submit |

### Viewing Analytics

- **Realtime:** GA4 > Reports > Realtime (see live visitors)
- **Events:** GA4 > Reports > Engagement > Events
- **Conversions:** Set up conversion events in GA4 > Admin > Events > Mark as conversion

---

## Site Architecture & Structure

### Page Hierarchy

```
/ (index.html)                    # Homepage - main entry point
├── /about.html                   # About Alicia page
├── /contact.html                 # Contact form page
├── /apply.html                   # Application form for services
├── /htma.html                    # Educational: What is HTMA?
├── /services/
│   ├── services.html             # Main services page (HTMA packages)
│   ├── lab-review.html           # Lab Review service
│   └── intentional-reset.html    # Limited-time offer (no nav link)
├── /blog/
│   ├── index.html                # Blog listing page
│   ├── post.html                 # Default blog post template
│   └── post-superior.html        # Full-width blog post template
├── /legal/
│   ├── terms.html                # Terms of Service
│   ├── privacy.html              # Privacy Policy
│   └── disclaimer.html           # Medical Disclaimer
├── /drafts/                      # Draft versions (not indexed)
├── /archive/                     # Archived pages (not indexed)
├── /tasks/                       # Internal task files (not indexed)
└── /session-notes/               # Session documentation (not indexed)
```

### Navigation Structure

**Desktop Navigation:**
- Home | About | Blog | Services (dropdown) | Contact | Supplements | Patient Portal

**Services Dropdown:**
- Sessions → `/services/lab-review.html`
- Packages and Programs → `/services/`
- What is HTMA? → `/htma.html`

**Mobile Navigation:**
- Same structure in hamburger menu

**Footer Quick Links:**
- About, Blog, Sessions, Packages and Programs, What is HTMA?, Contact

**Footer Resources:**
- Supplements, Patient Portal

**Footer Legal:**
- Terms, Privacy, Disclaimer
- Social icons: Instagram, Facebook, Pinterest, LinkedIn

### Service Menu Structure (3-Tier)

The homepage presents services in three categories:

| Type | Description | Links To |
|------|-------------|----------|
| **Sessions** | One-time consultations for quick clarity | `/services/lab-review.html` |
| **Packages** | Structured offerings with defined scope | `/services/` |
| **Personalized Programs** | Ongoing, tailored patient-provider support | `/services/` |

**Homepage Card Copy:**
1. **Sessions**: "Focused, one-time consultations designed to bring clarity to a specific question or concern — no long-term commitment required."
2. **Packages**: "Structured offerings with a clear scope — including testing, interpretation, and actionable guidance to build your wellness foundation."
3. **Personalized Programs**: "Ongoing, tailored support with a patient-provider partnership — for those ready for deeper, long-term wellness guidance."

---

## SEO Implementation Status

### Implemented SEO Components

| Component | File/Location | Status |
|-----------|---------------|--------|
| robots.txt | `/robots.txt` | Implemented |
| sitemap.xml | `/sitemap.xml` | Implemented |
| LocalBusiness Schema | `/index.html` | Implemented |
| Service Schema | `/services/` | Implemented |
| Article Schema | `/htma.html` | Implemented |
| Person Schema | `/about.html` | Implemented |
| FAQPage Schema | Multiple pages | Implemented |
| Meta descriptions | All pages | Implemented |
| Open Graph tags | All pages | Implemented |
| Canonical URLs | Via og:url | Implemented |

### robots.txt Rules

Currently blocked directories:
- `/drafts/` - Draft page versions
- `/archive/` - Archived pages
- `/tasks/` - Internal task files
- `/session-notes/` - Session documentation

Explicitly allowed (for JS-rendered content):
- `/blog/post.html` - Blog post template (Googlebot renders JS)
- `/blog/post-superior.html` - Full-width blog post template

### SEO Audit Checklist (Periodic)

Run this audit when making significant changes:

```
[ ] All pages have unique meta descriptions
[ ] No duplicate H1 tags on any page
[ ] All images have alt text
[ ] Internal links are not broken
[ ] External links work and open in new tab
[ ] Schema markup validates (use Google Rich Results Test)
[ ] Sitemap is up to date
[ ] robots.txt is correct
[ ] Page speed acceptable (use Lighthouse)
[ ] Mobile-friendly (use Google Mobile-Friendly Test)
```

---

## MailerLite Integration Details

### How It Works

1. Form has `data-mailerlite` attribute and `data-form-type` (newsletter or lead-magnet)
2. JavaScript in `main.js` intercepts form submission
3. Bot protection checks (honeypot + time-based) run first
4. Sends to `/.netlify/functions/subscribe`
5. Function adds subscriber to appropriate MailerLite group(s)
6. MailerLite automation delivers lead magnet email (configured in MailerLite dashboard)

### Bot Protection (REQUIRED for all forms)

All forms must include bot protection to prevent spam subscriptions:

1. **Honeypot field** - Hidden field that bots fill out:
   ```html
   <input type="text" name="website" class="hp-field" tabindex="-1" autocomplete="off" aria-hidden="true">
   ```

2. **Time-based check** - JavaScript tracks first interaction and rejects submissions under 3 seconds

3. **CSS for honeypot** (already in main.css):
   ```css
   .hp-field { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; pointer-events: none; }
   ```

The JavaScript in `main.js` automatically handles the time-based check for any form with `data-mailerlite` attribute. Just add the honeypot input to the HTML.

### External Integrations

| Service | Purpose | Integration Point |
|---------|---------|-------------------|
| Practice Better | Patient portal, scheduling | External link |
| Fullscript | Supplements store | External link |
| Google Analytics 4 | Analytics | JS tracking code |
| MailerLite | Email marketing, lead magnets | Netlify Function API |

---

## Audit Checklists

### New Page Checklist

When creating any new page, verify:

```
[ ] Page added to navigation (if public)
[ ] Page added to sitemap.xml
[ ] GA4 tracking code in <head>
[ ] Cookie consent banner included
[ ] data-track-section on key sections
[ ] data-track-cta on CTA buttons
[ ] Meta description (150-160 chars)
[ ] og:title, og:description, og:image tags
[ ] Appropriate JSON-LD schema
[ ] Mobile responsive design
[ ] BHPCC seal in footer (if applicable)
[ ] External links have target="_blank" rel="noopener"
[ ] Font preloads included
[ ] /js/main.js included
```

### New Blog Post Checklist

**Content & Images:**
```
[ ] Post added to blog.js posts array (newest first)
[ ] Featured image optimized with ALL 4 responsive versions (see "Blog Image Optimization Workflow" below):
    - filename.webp (900px, <50KB) - blog post desktop
    - filename-mobile.webp (500px, <20KB) - blog post mobile
    - filename-small.webp (400px, <15KB) - cards desktop
    - filename-small-xs.webp (300px, <10KB) - cards mobile
[ ] Image dimensions checked and aspect ratio set in blog.js (cardAspectRatio, imageAspectRatio)
[ ] All images have descriptive alt text
[ ] Image licensing verified (stock photo license, original, etc.)
[ ] All 4 image versions in /images/blog/ folder
[ ] Source image removed from root directory
[ ] Categories assigned
[ ] Internal links to relevant service pages
[ ] Disclaimer at end of post
[ ] No prohibited terminology (coach, mentor, consult)
```

**SEO & Discoverability:**
```
[ ] Article JSON-LD schema added to blog.js post object (see below)
[ ] Post added to sitemap.xml with proper URL
[ ] Meta description set (150-160 chars)
[ ] Post metadata added to Edge Function (see "Social Preview Edge Function" below)
```

**Quality Assurance:**
```
[ ] Lighthouse check run (performance 80+, accessibility 90+, SEO 90+)
[ ] Homepage blog scroller verified (newest post appears)
[ ] Related posts display correctly on blog listing
[ ] GA4 tracking verified (page loads, section views fire)
[ ] Mobile preview checked (images, text, CTAs display correctly)
```

**Optional - Promotion:**
```
[ ] Ask: Should this be emailed to newsletter subscribers?
[ ] Ask: Pinterest-optimized image needed? (vertical 2:3 ratio)
[ ] Ask: Request faster indexing via Search Console URL Inspection? (not required - Google auto-crawls sitemap)
```

**Post-Publishing Cleanup (after user merges to main or says "publish"):**
```
[ ] Remove any leftover source images from root directory (e.g., "Untitled design.png")
[ ] Verify all blog images are in /images/blog/ folder only
[ ] Confirm no untracked temporary files remain
```

### Content Revision Checklist

Before publishing any content changes:

```
[ ] Terminology compliance check (no coach/mentor/consult)
[ ] Kentucky-only language for services
[ ] Results/outcomes language is qualified
[ ] Internal links are working
[ ] No broken images
[ ] Mobile preview looks correct
```

---

## Social Preview Edge Function

Blog posts use JavaScript rendering, which means social media crawlers (Facebook, LinkedIn, Twitter) cannot see the actual content. The Edge Function at `/netlify/edge-functions/blog-og-tags.js` injects proper Open Graph tags server-side.

```javascript
// In /netlify/edge-functions/blog-og-tags.js, add to BLOG_POSTS object:
'your-post-slug': {
  title: 'Your Post Title',
  excerpt: 'Your 1-2 sentence excerpt for social previews...',
  image: '/images/blog/your-image.webp'
}
```

**Testing social previews (after deploy):**
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/

---

## Blog Image Optimization Workflow

**IMPORTANT:** Blog images must be optimized for responsive loading. The site uses these images in THREE locations:
1. **Blog post page** - Featured image (full + mobile versions)
2. **Blog index page** - Card thumbnails (small + small-xs versions)
3. **Homepage carousel** - Recent posts section (small + small-xs versions)

### Required Image Versions

For each blog post, create these 4 optimized WebP versions:

| File Suffix | Width | Use Case | Target Size |
|-------------|-------|----------|-------------|
| `.webp` | 900px | Blog post (desktop) | <50KB |
| `-mobile.webp` | 500px | Blog post (mobile) | <20KB |
| `-small.webp` | 400px | Cards (desktop) | <15KB |
| `-small-xs.webp` | 300px | Cards (mobile) | <10KB |

### Image Optimization Steps

1. **Get the source image** (usually uploaded to root directory as "Untitled design.png" or similar)

2. **Check dimensions and calculate aspect ratio:**
   ```bash
   python3 -c "from PIL import Image; img=Image.open('SOURCE_IMAGE.png'); print(f'Size: {img.size}, Aspect: {img.size[1]/img.size[0]*100:.2f}%')"
   ```

3. **Create all responsive versions:**
   ```bash
   cd images/blog && python3 << 'EOF'
   from PIL import Image
   import os

   # Load original image (adjust path as needed)
   original = Image.open('../../SOURCE_IMAGE.png')
   basename = 'your-post-slug'  # Change to match blog post slug

   sizes = {
       f'{basename}.webp': 900,
       f'{basename}-mobile.webp': 500,
       f'{basename}-small.webp': 400,
       f'{basename}-small-xs.webp': 300,
   }

   for filename, target_width in sizes.items():
       ratio = original.size[1] / original.size[0]
       target_height = int(target_width * ratio)
       resized = original.resize((target_width, target_height), Image.LANCZOS)

       # Handle transparency
       if resized.mode in ('RGBA', 'P'):
           background = Image.new('RGB', resized.size, (255, 255, 255))
           if resized.mode == 'P':
               resized = resized.convert('RGBA')
           background.paste(resized, mask=resized.split()[3] if len(resized.split()) == 4 else None)
           resized = background

       resized.save(filename, 'WEBP', quality=80)
       print(f"Created {filename}: {target_width}x{target_height}, {os.path.getsize(filename)/1024:.1f}KB")
   EOF
   ```

4. **Update blog.js post entry:**
   ```javascript
   {
     slug: 'your-post-slug',
     image: '/images/blog/your-post-slug.webp',  // Must be .webp
     cardAspectRatio: 'XX.XX%',   // Calculate: (height/width)*100
     imageAspectRatio: 'XX.XX%',  // Same value
     // ... other properties
   }
   ```

5. **Delete source image from root directory**

### How Responsive Images Work

The codebase automatically uses the correct image version:

**Blog post page (`blog.js`):**
- Replaces `.webp` with `-mobile.webp` for srcset
- Mobile devices load ~15KB instead of ~41KB

**Blog index cards (`blog.js`):**
- Replaces `.webp` with `-small.webp` for thumbnail
- Creates `-small-xs.webp` variant for mobile srcset

**Homepage carousel (`index.html`):**
- Same logic as blog index cards
- Uses `-small.webp` and `-small-xs.webp` with srcset

### Fallback Behavior

All image tags include `onerror="this.src='${post.image}'"` which falls back to the full-size image if a responsive version is missing. However, always create all 4 versions to ensure optimal performance.

---

## Blog Post JSON-LD Schema

Each blog post in `blog.js` should include a `schema` object with a description:

```javascript
{
  slug: 'post-slug',
  title: 'Post Title',
  // ... other properties
  schema: {
    description: 'SEO meta description for the post (150-160 chars)'
  }
}
```

The `blog.js` file automatically generates a full Article schema using:
- `title` → headline
- `date` → datePublished/dateModified
- `image` → image URL
- `schema.description` → description (falls back to excerpt if not provided)
- Author and publisher info are auto-populated

The schema is dynamically injected into the `<head>` when the post loads.

---

## Blog Image Aspect Ratios

**Always check image dimensions** when adding a new blog post and set appropriate aspect ratios:

```bash
identify -format '%wx%h' /path/to/image.webp
```

Calculate aspect ratio: `height / width * 100%`

| Aspect Ratio | Percentage | When to Use |
|--------------|------------|-------------|
| 16:9 | 56.25% | Default - most landscape images |
| 3:2 | 66.67% | Standard photo format |
| 4:3 | 75% | Classic/square-ish |
| 1:1 | 100% | Square images |

**Add to blog post object in blog.js:**
```javascript
{
  slug: 'post-slug',
  // ... other properties
  cardAspectRatio: '75%',      // For blog listing cards
  imageAspectRatio: '75%',     // For featured image on post page
}
```

**Note:** Only add these properties if the image differs from 16:9. The default (56.25%) is used automatically if not specified.

---

## Standard Blog Disclaimer

All blog posts should include this disclaimer (or similar) at the end:

> This content is for educational and informational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. It does not replace individualized medical advice, diagnosis, or treatment. Readers should consult their licensed healthcare provider regarding personal health concerns.
>
> Any individuals depicted in images on this website or associated content are models or stock photography subjects and are not patients, clients, or recipients of services from Intention Holistic Health. Images are used for illustrative purposes only and do not represent clinical relationships, medical outcomes, or specific health conditions.
>
> Intention Holistic Health provides educational wellness guidance and, where applicable, Kentucky-based nurse practitioner services within scope and licensure.

---

## Safari Developer Tools (Mac)

This section applies when working on Safari on macOS.

### Key Shortcuts

| Action | Shortcut |
|--------|----------|
| Hard Refresh (clear cache) | `Command + Option + R` |
| Open Developer Tools | `Command + Option + I` |
| Reload Page | `Command + R` |

### One-Time Setup: Enable Developer Menu

Before using Developer Tools, you must enable the Develop menu:

1. Open Safari → **Settings** (or Preferences)
2. Click the **Advanced** tab
3. Check **"Show Develop menu in menu bar"**
4. Close Settings

You should now see "Develop" in the Safari menu bar.

### Opening Developer Tools

1. Press `Command + Option + I`
   - OR: Click **Develop** menu → **Show Web Inspector**
2. The Web Inspector panel opens (usually at bottom of window)

### Checking for JavaScript Errors

When a page isn't loading correctly:

1. Open Developer Tools (`Command + Option + I`)
2. Click the **Console** tab (in the Web Inspector toolbar)
3. Look for **red error messages**
4. Errors show:
   - The error message (what went wrong)
   - The file and line number (where it happened)
5. Copy the error text to share for debugging

### Inspecting Network Requests

To check if files are loading:

1. Open Developer Tools (`Command + Option + I`)
2. Click the **Network** tab
3. Refresh the page (`Command + R`)
4. Look for:
   - **Red entries** = failed to load
   - **Status codes**: 200 = success, 404 = not found, 500 = server error
5. Click any entry to see details

### Clearing Cache Manually

If hard refresh doesn't work:

1. Click **Develop** menu → **Empty Caches**
2. Then refresh with `Command + R`

Or clear all website data:
1. Safari → **Settings** → **Privacy**
2. Click **Manage Website Data**
3. Search for the site and click **Remove**

### Viewing Page Source

1. Right-click anywhere on the page
2. Select **Inspect Element**
3. The Elements tab shows the HTML structure
4. Use the arrow tool to hover over elements and see their code
