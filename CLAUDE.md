# ACTION REQUIRED (2026-03-03)

> `.mcp.json` and `archive/localhost*.json` were removed from git tracking for security. After pulling, if you see these as untracked files, that's expected — they're now gitignored. No action needed from you, just `git pull` as normal.

---

# Claude.md - Project Instructions and Guardrails

**Lookup Data:** See `CLAUDE-REFERENCE.md` for IDs, code snippets, hex values, detailed procedures, checklists, and design specs.

---

## Project Folders Structure

**IMPORTANT:** There are TWO separate IHH project folders:

| Folder | Path | Purpose |
|--------|------|---------|
| **Website** | `~/Intention-Holistic-Health-website` | Website codebase (HTML, CSS, JS, Netlify) |
| **Business** | `~/Intention-Holistic-Health` | Business operations (finance, marketing strategy, CEO summit notes) |

Both projects share Notion integration configuration. When updating documentation (especially `docs/notion-system-architecture.md`), sync changes to both folders.

### Source Assets & Non-Served Files

The `/source-assets/` directory contains raw/original image files that are **kept in the git repo** for cross-device sync but **excluded from Netlify deploys** via `.netlifyignore`. These files are never served to visitors.

| Directory | Contents |
|-----------|----------|
| `source-assets/photos/` | Raw DSLR photos (moved from images/photos/) |
| `source-assets/blog-originals/` | Full-size blog source images (*-original.*) |
| `source-assets/about-originals/` | Full-size about page PNGs |
| `source-assets/originals/` | Miscellaneous source images |

**Also excluded from deploys** (via `.netlifyignore`, not moved):
- `images/fallback/` — Legacy fallback images, no longer referenced
- `fonts/*.ttf` — TTF source fonts; CSS uses WOFF2 versions instead

**When adding new raw/source images:** Place them in the appropriate `source-assets/` subdirectory, not in `images/`. Only optimized, web-ready images should go in `images/`.

### Image Optimization Pipeline

A script at `scripts/optimize-images.js` generates responsive WebP variants from source images:

```bash
node scripts/optimize-images.js <input-image> [--sizes 900,500,400,300] [--quality 90]
```

Output follows the naming convention: `filename.webp`, `filename-small.webp`, `filename-small-xs.webp`, `filename-mobile.webp`.

### Font Format

All fonts use **WOFF2** format (converted from TTF on 2026-04-10, ~54% smaller). The `@font-face` declarations in `main.css` and all `<link rel="preload">` tags reference `.woff2` files. TTF source files remain in `/fonts/` but are excluded from deploys via `.netlifyignore`.

---

## Workflow

First, think through the problem. Plan tasks using the TodoWrite tool (Claude Code's built-in task tracking).
Check in with me before starting work—I'll verify the plan.
Then, complete the todos one by one, marking them off as you go.
At every step, give me a high-level explanation of what you changed.
Keep every change simple and minimal. Avoid big rewrites.
At the end, update session notes in Notion summarizing the changes.

## Keeping Your Local Copy Up to Date

**Before starting work**, run `git pull` in this folder to get the latest changes from GitHub. This ensures you're working with the most recent version of the codebase.

```bash
git pull
```

---

## Notion-Based Documentation System

**Architecture Documentation:** `/docs/notion-system-architecture.md`

Internal documentation is stored in Notion (not git) for cross-device sync and professional project management. The system uses **linked databases** following Notion's official best practices.

### System Overview

**Dashboard Page:** "AI Content System" (see `CLAUDE-REFERENCE.md` for ID)

**Databases:**

| Database | Purpose | Key Properties |
|----------|---------|----------------|
| **Session Notes** | Track work sessions across devices | Date, Environment, Status, Completed, Pending, Notes |
| **Tasks & Projects** | Track actionable items with priority | Status, Priority, Category, Due Date, Assignee |
| **Accounts Inventory** | Track external services and integrations | Category, Account ID, Status, Access, Last Verified |

### Session Start Checklist

**Before starting any work session:**

1. **Check for CLAUDE.md updates:**
   - Query Session Notes database for recent entries
   - If CLAUDE.md was updated by another device, prompt user to review changes

2. **Check for pending tasks:**
   - Query Tasks & Projects database where Status != Done
   - Review high-priority items first

3. **Check recent session notes:**
   - Review last 2-3 session entries for context

### Session Notes Workflow

Session notes are organized **by date** (one entry per day), not by individual sessions. Each entry is updated throughout the day as work progresses.

**Format:**
- **Title:** `YYYY-MM-DD` (e.g., `2026-01-09`)
- **Completed:** Timestamped list of actions in chronological order
- **Pending:** Bullet list of remaining items
- **Notes:** Context for future sessions

**Completed field format:**
```
HH:MM AM/PM — Action taken
HH:MM AM/PM — Next action taken
```

**Example:**
```
6:45 PM — Tested Notion & MailerLite MCP servers (both working)
6:50 PM — Updated .mcp.json in all 3 project folders
7:00 PM — Committed and pushed changes to GitHub

8:10 PM — Optimized blog image with responsive versions
8:30 PM — Committed/pushed to drafts-website-edits
```

**Workflow:**
1. At start of session, check if a note exists for today's date
2. If exists → update the existing note (append new timestamped items)
3. If not → create new note titled with today's date
4. Update throughout the session, not just at the end

**IMPORTANT**: Session notes MUST be updated in Notion before committing and pushing to GitHub.

### AI Content System Page Updates

The AI Content System dashboard page has a **"Last Updated"** callout block at the top. This MUST be updated whenever any changes are made to the page or its databases.

**How to update:** Use the Notion API to update this specific block (not append new content). See `CLAUDE-REFERENCE.md` for the callout block ID and curl command.

**Format:** `Last Updated: [Month] [Day], [Year] at [H:MM] [AM/PM] CST | Updated By: [Environment]`

**Example:** `Last Updated: January 8, 2026 at 1:15 PM CST | Updated By: Local VS Code`

**When to update:**
- After adding/editing entries in any database on the page
- After reorganizing or cleaning up the page structure
- After adding new databases or linked views
- After any significant Notion changes during a session

**Environment values:**
- `Local VS Code` - Working from local VS Code with Claude Code
- `Browser Codex` - Working from browser-based Codex
- `Mobile` - Working from Notion mobile app
- `Manual` - Direct edits in Notion UI

### Accounts & Services Inventory

When creating or integrating ANY new external account or service, **immediately add an entry to the Accounts Inventory database**. See `CLAUDE-REFERENCE.md` for the entry format.

This includes:
- Google services (Analytics, Cloud, Search Console, etc.)
- Email marketing platforms
- Payment processors
- Third-party APIs
- Hosting/deployment services
- Client management tools

**Before finishing a session that involved new accounts:** Verify the Notion inventory is up to date.

### API Capabilities & Limitations

#### Notion API Limitations (Permanent)

These are Notion API limitations that require **manual UI steps**:

| Operation | API Support | Manual Steps Required |
|-----------|-------------|----------------------|
| **Create new databases** | NO | Must create in Notion UI first |
| **Status property options** | NO | Add options via Notion UI > Edit property |
| **Select/Multi-select options** | Partial | Can use existing options, but new ones need UI |
| **Database views** | NO | Must create views in Notion UI |
| **Relation properties** | Partial | Create in UI, then API can use them |

#### MCP Server Bug (Known Issue)

The official Notion MCP server has a **serialization bug** affecting `create-page`, `update-page`, and `move-page` operations. Object parameters are double-stringified, causing validation errors.

**Bug Status:**
- [Issue #82](https://github.com/makenotion/notion-mcp-server/issues/82) - Parameter serialization bug
- [Issue #3023](https://github.com/anthropics/claude-code/issues/3023) - Claude Code specific issue

| MCP Operation | Status | Workaround |
|---------------|--------|------------|
| Query databases | ✅ Works | Use MCP tools |
| Search | ✅ Works | Use MCP tools |
| Get page/database | ✅ Works | Use MCP tools |
| **Create page** | ❌ Broken | Use `notion-cli` |
| **Update page** | ❌ Broken | Use `notion-cli` |
| **Move page** | ❌ Broken | Use `notion-cli` |

#### Workaround: notion-cli Tool

A global CLI tool is installed at `~/.local/bin/notion-cli` that bypasses the MCP bug by making direct API calls.

See `CLAUDE-REFERENCE.md` for notion-cli commands and property JSON formats.

**When guiding user through manual Notion UI steps** (database creation, property options, status groups, relations, views), see `CLAUDE-REFERENCE.md` for step-by-step walkthroughs and color conventions.

### MCP Configuration

The `.mcp.json` file configures the Notion integration. It uses environment variable `${NOTION_TOKEN}` - each device must have `NOTION_TOKEN` set in their environment with a valid Notion API token.

### Database IDs Reference

See `CLAUDE-REFERENCE.md` for all Notion database IDs.

---

## Analytics Reports

**Template:** `/docs/analytics-report-template.md`

When the user requests analytics (e.g., "Pull my analytics summary", "How's the funnel performing?", "Show me traffic"), generate a report following the standard template. See `CLAUDE-REFERENCE.md` for the analytics API endpoint and report types.

**Key metrics to always include:**
- Traffic overview (users, sessions, bounce rate, avg duration)
- Lead funnel performance (Homepage → Services → PB Click)
- Top pages
- Engagement depth (scroll milestones, time on page)
- Traffic sources
- Key events (cta_click, form_submit, etc.)
- Friction watch (Services page metrics)

**GA4 UI-only features** (cannot pull via API): Funnel explorations, Path explorations, Audience sizes

---

## Deployment Workflow

**IMPORTANT: Only push to `drafts-website-edits` branch.**

Netlify uses credit-based pricing. Each production deploy costs 15 credits. Branch deploys are **FREE**. See `CLAUDE-REFERENCE.md` for full credit cost breakdown.

**Workflow to minimize costs:**
- **After edits**: Push only to `drafts-website-edits`
- **Preview changes**: User tests on localhost (free)
- **Deploy to production**: User merges to main in bulk (1-2x/week max)

**DO NOT** push to main after every change. Let the user handle merges to main.

## Cache Management & Browser Caching

**IMPORTANT:** When updating JS, CSS, or images that affect user-facing functionality, be aware of browser caching. CSS/JS/HTML use `must-revalidate` (always checks for fresh content). Images/fonts cache 3 months with revalidation. No manual cache-busting needed — a normal page refresh gets the latest version. See `CLAUDE-REFERENCE.md` for full cache settings, troubleshooting steps, and history.

## Branching Policy

All work is done on `drafts-website-edits`. Push to this branch only. User merges to `main` for production deploys.

## Model Selection

**Default Model:** claude-sonnet-4-5-20250929 (Sonnet 4.5). Use Opus for planning/architecture/complex debugging. Use Haiku for simple edits/lookups. See `CLAUDE-REFERENCE.md` for the full model selection guide.

## Content Cluster Skill (Auto-Invoke)

When the user shares a content topic, idea, piece of content to adapt, or says anything like "write content about X," "turn this into content," "create a content cluster," or "content cluster about X" — invoke the `/content-cluster` skill. Do not wait for the user to type the slash command; recognize the intent and invoke it automatically.

## Adding New Content (Blog Posts, Copy, etc.)

When adding new content to the site, **always ask about style preferences** before implementing:

### Available Blog Templates

1. **Default Template** (`/blog/post.html`)
   - Two-column layout with sidebar
   - Category filtering in sidebar
   - Newsletter signup in sidebar
   - Standard blog card format

2. **Superior Style Template** (`/blog/post-superior.html`)
   - Full-width single column layout
   - Author block with credentials ("Written by [Name], MSN, APRN, FNP-C")
   - Reading progress bar at top
   - In-content CTA boxes (use `[CTA:title|description|link|text]` in content)
   - Previous/Next post navigation
   - Optional disclaimer and references sections
   - More generous spacing and larger typography

### Workflow for New Content

1. **Ask which template/style to use:**
   - "Would you like to use the default blog style or the Superior-style full-width template?"
   - "I have two blog templates available: [describe both]. Which would you prefer?"

2. **If a new style is requested:**
   - Ask for a reference link or detailed description
   - Create a new template following the existing pattern
   - Document the new template in this file

3. **For new posts**, gather:
   - Title and content
   - Featured image
   - Categories
   - Template preference
   - Any special elements (disclaimer, references, in-content CTAs)

4. **Before publishing any new blog post:**
   - Verify the post includes appropriate disclosures (Educational & Imagery Disclaimer)
   - If disclaimer is missing, prompt Alicia to add one or use the standard disclaimer (see `CLAUDE-REFERENCE.md`)
   - Always ask before pushing to GitHub

### Internal Linking Strategy

**Proactively offer to add internal links** in blog posts to relevant service pages. This helps:
- Guide readers to services that can help them
- Increase conversion from visitor to client
- Improve SEO through internal linking

**Key pages to link to:**
| Topic in Blog Post | Link To |
|--------------------|---------|
| HTMA, mineral testing, hair analysis | `/htma.html` (What is HTMA?) |
| Lab work, blood tests, "normal" results | `/services/lab-review.html` |
| Wellness support, hormone support | `/services/` |
| Getting started, booking | `/apply.html` or `/contact.html` |

**When to suggest links:**
- After writing or reviewing blog content
- When a post mentions services Alicia offers
- When a post discusses problems that her services solve

**Example prompt to user:**
> "This post discusses HTMA testing. Would you like me to add a link to the 'What is HTMA?' page so readers can learn more and potentially book a consultation?"

---

## Promotional System Template

When creating a new promotion, follow the Promotional System Template in `CLAUDE-REFERENCE.md`. The system uses a bottom floating bar + popup modal pattern (based on the Intentional Reset promo). Includes full design specs, breakpoints, styling, behavior, implementation checklist, and current promotion details.

---

## Brand & Style Preferences

### Typography

**Stylized Section Titles (Alicia's Preference)**
- Font: Playfair Display
- Style: Italic
- Transform: Uppercase (all caps)
- Letter-spacing: 0.08em
- CSS class: `.ir-styled-title`

Use this style for section headings throughout service pages and landing pages where an elegant, editorial feel is desired.

**Home Page Banner Fonts (top to bottom)**
1. **Playfair Display SC** - Small caps variant for headlines
2. **Glacial Indifference** - Clean sans-serif for body/subtext
3. **Beautifully Delicious Script** - Script font for accent/signature text

These are the specific fonts used in the hero banner design and should be used when recreating banner elements in HTML/CSS.

**IMPORTANT: BDScript Subset Font**

The Beautifully Delicious Script font uses a **subset** (`/fonts/BDScript-subset.woff2`) to reduce file size. When adding new text that uses this font (`.hero-banner-script`, `.script-title`, `.contact-hero-title`), you **MUST**:

1. Check that all characters in the new text are included in the subset
2. Current subset characters: `S T I P C A e r v i c s h n t o a l m p . (space)`
3. If new characters are needed, regenerate the subset (see `CLAUDE-REFERENCE.md` for command)
4. Update the comment in `css/main.css` to reflect the new character set

Missing characters will fall back to a generic cursive font, causing inconsistent rendering across devices.

### Brand Colors

Only use colors from the official brand palette (see `/brand/Branding Board.pdf`). See `CLAUDE-REFERENCE.md` for hex values.

## Branch Merges

- Before merging any branch (including draft → live), explicitly confirm readiness with the requester/owner.
- Ensure a rollback path exists (e.g., source branch retained or a pre-merge tag/commit reference recorded) so the merge can be reversed if issues arise.

## Git Configuration

- **Use SSH for GitHub pushes** (not HTTPS). The remote should be `git@github.com:trymebroh/IHH-website.git`
- If push fails with credential errors, check the remote with `git remote -v` and switch to SSH if needed:
  ```bash
  git remote set-url origin git@github.com:trymebroh/IHH-website.git
  ```

## Google Analytics 4 (GA4) Tracking

**Measurement ID:** See `CLAUDE-REFERENCE.md` for the GA4 measurement ID.

### Required for ALL New Pages

Every new HTML page MUST include the GA4 tracking code in the `<head>` section. See `CLAUDE-REFERENCE.md` for the tracking code snippet.

### Tracking Attributes for Funnel Analytics

Add these data attributes to enable detailed funnel tracking:
- `data-track-section` on key sections (hero, services-overview, pricing, faq)
- `data-track-cta` on CTA buttons

See `CLAUDE-REFERENCE.md` for HTML examples, automatically tracked events, per-page checklists, recommended sections to track, and how to view analytics.

---

## Site Architecture

See `README.md` for the full page hierarchy, file organization, and navigation structure.

### User Flow

```
Homepage → Learn (HTMA page, Blog) → Service Page → Apply Page → Patient Portal
                                         ↓
                               Lab Review (direct booking OK)
```

**Key Conversion Points:**
1. **HTMA/Wellness Services:** Redirect to Practice Better for booking
2. **Lab Review:** Redirect to Practice Better for direct booking
3. **Intentional Reset:** Landing page only (direct link, not in nav) → Practice Better

---

## SEO & Technical SEO

### Schema Markup Guidelines

When adding new pages, include appropriate JSON-LD schemas:

**Service Pages:** Use `Service` + `FAQPage` schemas
**Educational/Article Pages:** Use `Article` + `FAQPage` schemas
**About/Team Pages:** Use `Person` schema
**Homepage:** Use `LocalBusiness` schema (already done)

### Sitemap Maintenance

**IMPORTANT:** When modifying ANY public-facing HTML page, update its `lastmod` date in `/sitemap.xml` to today's date. This includes content changes, CTA updates, styling changes that affect the page's rendered output, and structural changes. Do NOT skip this step — stale `lastmod` dates reduce crawl efficiency.

When adding new public pages:
1. Add entry to `/sitemap.xml`
2. Set appropriate `priority` (1.0 homepage, 0.9 services, 0.8 main pages, 0.7 blog, 0.3 legal)
3. Set `lastmod` to today's date

When modifying existing pages:
1. Update the `lastmod` date for every modified page in `/sitemap.xml`
2. If changes affect blog.js (which renders all blog posts), update `lastmod` for `/blog/` and any blog posts whose rendered content changed

See `CLAUDE-REFERENCE.md` for implemented SEO components, robots.txt rules, and SEO audit checklist.

---

## Data & Integrations

### Netlify

**Deployment:** Auto-deploys from `drafts-website-edits` branch
**Forms:** Netlify Forms handles contact and application forms (`contact.html`, `apply.html`)
**Functions:** `/netlify/functions/` — `subscribe.js` (MailerLite), `ga4-analytics.js` (analytics proxy), `easter-egg-track.js` (Netlify Blobs)

### MailerLite Email Marketing

**API Integration:** Newsletter and lead magnet forms submit to MailerLite via Netlify Function (`/.netlify/functions/subscribe`)

**Environment Variable Required:** `MAILERLITE_API_KEY` — Must be set in Netlify dashboard (Site settings → Environment variables)

**Subscriber Groups:** See `CLAUDE-REFERENCE.md` for MailerLite group IDs.

**Forms Using MailerLite:**
| Location | Form Type | Groups Added To |
|----------|-----------|-----------------|
| Homepage newsletter section | `newsletter` | Newsletter Subscribers |
| Homepage exit-intent popup | `lead-magnet` | Both groups (gets checklist + newsletter) |
| Blog sidebar | `newsletter` | Newsletter Subscribers |
| Blog bottom popup | `newsletter` | Newsletter Subscribers |

**Bot Protection (REQUIRED for all forms):** All MailerLite forms must include honeypot field + time-based check. See `CLAUDE-REFERENCE.md` for the MailerLite integration flow, bot protection implementation details, and newsletter form HTML template.

### Cookie Consent

- **Consent Mode v2** implemented for GA4
- Cookies stored in `localStorage`:
  - `cookie_consent` - 'accepted' or 'declined'
  - `popup_dismissed` - exit-intent popup state
  - `newsletter_subscribed` - blog popup state
  - `device_id` - easter egg tracking ID

---

## Compliance Requirements

### Terminology Restrictions

**NEVER use these terms in user-facing content:**
- "coach" / "coaching"
- "mentor" / "mentorship"
- "consult" / "consulting"

**Use instead:**
- "wellness practitioner"
- "wellness support"
- "guidance"
- "program" (e.g., "Signature Program")

### Results/Outcomes Language

Avoid definitive claims. Use qualifying language:
- "may help" instead of "will help"
- "designed to support" instead of "treats"
- "individual results vary" disclaimers

### Service Availability

- **Kentucky residents only** for all clinical services
- Update any "available anywhere" language to reflect this

### Legal Pages

Legal pages (`/legal/*.html`) require attorney review before changes.
See Notion "AI Content System" → Tasks/Todo section for pending legal review items.

### External Links (Global Rule)

**ALL external links MUST open in a new tab.** This is a non-negotiable requirement.

When adding any link that goes to an external website:
1. Add `target="_blank"` to open in new tab
2. Add `rel="noopener noreferrer"` for security
3. This applies to blog posts, service pages, footer links, and all content

**In blog.js markdown:** External links are automatically detected and rendered with proper attributes. Any link starting with `http://` or `https://` will get `target="_blank" rel="noopener noreferrer"` added automatically.

---

## Audit Checklists

When creating new pages, blog posts, or revising content, follow the relevant checklist in `CLAUDE-REFERENCE.md`:

- **New Page Checklist** — navigation, sitemap, GA4, meta tags, schema, responsiveness
- **New Blog Post Checklist** — content/images, SEO, QA, optional promotion, post-publish cleanup
- **Content Revision Checklist** — terminology, links, images, mobile preview
- **SEO Audit Checklist** — periodic full-site audit

### Social Preview Edge Function

**IMPORTANT:** When adding a new blog post to `blog.js`, you MUST also add the post metadata to `/netlify/edge-functions/blog-og-tags.js`. Social crawlers can't render JS, so this Edge Function injects OG tags server-side. See `CLAUDE-REFERENCE.md` for the code template and testing URLs.

### Blog Image Optimization

Blog images must be optimized with **4 responsive WebP versions** (900px, 500px, 400px, 300px). See `CLAUDE-REFERENCE.md` for the full Blog Image Optimization Workflow including Python scripts, required image sizes, aspect ratio calculations, and how responsive images work in the codebase.

### Blog Post Schema & Sitemap

Each blog post should include a `schema` object with a `description` field (150-160 chars). Blog.js auto-generates the full Article JSON-LD schema. See `CLAUDE-REFERENCE.md` for the schema code template and blog image aspect ratio guide.

**IMPORTANT:** Blog post URLs use the `?post=` parameter, NOT `?slug=`. See `CLAUDE-REFERENCE.md` for the sitemap entry template.

### Lighthouse Check for Blog Posts

Run Lighthouse audit targeting: Performance 80+, Accessibility 90+, SEO 90+. See `CLAUDE-REFERENCE.md` for the command.

### Homepage Blog Scroller Verification

After adding a new post, verify it appears in the homepage blog section:
1. Check that `blog.js` posts array has the new post at the correct position (newest first)
2. Load homepage and confirm the new post thumbnail/title appears in the blog scroller
3. Click through to verify the link works

---

## Safari Developer Tools (Mac)

For Safari developer tools guide (shortcuts, setup, console, network, cache clearing), see `CLAUDE-REFERENCE.md`. Note: Current environment is Linux/WSL.

---

## Quick Reference

### Key URLs

See `CLAUDE-REFERENCE.md` for all key URLs (live site, branch deploy, GitHub, GA4, Practice Better, Fullscript).

**Note:** The branch deploy URL always shows the latest `drafts-website-edits` branch. Use this for testing before merging to main. Branch deploys are FREE (no Netlify credits).

### Contact & Credentials

See `CLAUDE-REFERENCE.md` for contact email and Alicia Harrison's credentials (MSN, APRN, FNP-C, BHPCC).
