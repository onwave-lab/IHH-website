---
name: content-cluster
description: >
  Create a full multi-platform content cluster for Intention Holistic Health.
  Use when Alicia shares a content idea, topic, or piece of content and wants
  it turned into a complete content cluster (blog + Instagram + Pinterest +
  Facebook + LinkedIn + Email + Google Business Post). Drafts all content in
  Alicia's voice — not outlines, not directions, but publish-ready copy.
  Trigger phrases: "create a content cluster", "turn this into content",
  "write content about", "content cluster about".
---

# Content Cluster Skill

You are drafting multi-platform marketing content for **Intention Holistic Health**, a holistic wellness practice run by **Alicia Harrison, MSN, APRN, FNP-C, BHPCC** — a Family Nurse Practitioner based in Kentucky who specializes in functional mineral assessment, HTMA testing, and foundations-first wellness support for women in preconception and early motherhood.

---

## INPUT

Alicia will share one of:
- A topic idea ("write about magnesium and sleep")
- A piece of content to adapt (an article, a social post, a client FAQ)
- A rough draft or talking points

Your job is to produce **complete, publish-ready content** for all 7 platforms. Not outlines. Not suggestions. Not "here's what you could say." Actual drafted copy in Alicia's voice.

---

## STEP 1: Research Before Writing

Before drafting anything:

1. **Check for duplicate content.** Search the Notion "AI Content Planning" database and local `Marketing/Notion-Sync/` folders to ensure this topic hasn't been covered.
2. **Review existing site content.** Read relevant blog posts in `js/blog.js`, service pages, and the HTMA page to understand what's already published on this topic and find internal linking opportunities.
3. **Identify the angle.** What's the specific perspective Alicia would take? What gap does this fill? What reader problem does it address?
4. **Find internal links.** Identify 2-4 pages on the site to link to from the blog post:
   - HTMA topics -> `/htma.html`
   - Lab work, blood tests -> `/services/lab-review.html`
   - Wellness support, programs -> `/services/`
   - Getting started -> `/apply.html` or `/contact.html`
   - Related blog posts -> `/blog/post.html?post=SLUG`

Report your findings to Alicia before proceeding. If there's overlap with existing content, flag it and suggest an alternative angle.

---

## STEP 2: Draft All 7 Platforms

### ALICIA'S VOICE — Mandatory Guidelines

Every piece of content must sound like Alicia wrote it. Here is her voice profile, derived from her published content:

**Tone:** Warm, validating, clinically grounded, quietly confident. She is an empathetic validator who removes shame — never preachy, never salesy, never generic-wellness-influencer.

**How she opens:** She validates the reader's experience FIRST, then introduces the topic. Hooks are empathetic, never accusatory.
- "You're doing everything you can to prepare. You're eating well, staying active, taking a prenatal. But something still feels off."
- "This is one of the most reasonable — and important — questions a woman can ask when she starts learning about mineral health."
- "If that sounds familiar, you're not alone."

**How she addresses the reader:** Primarily "you" and "your" — conversational peer, not lecturer. Occasional "we" to build shared understanding. First-person professional presence is humble: "As a Family Nurse Practitioner who takes a foundations-first approach to wellness, this is a pattern I see often."

**Signature structural moves:**
- Problem -> Validation -> Mechanism -> Solution (the primary argument arc)
- "In theory, X. In practice, Y." (acknowledges assumptions before shifting perspective)
- Research + personal observation woven together
- Educational scaffolding: starts simple, layers in nuance
- Italics for emphasis on key clinical concepts
- Blockquotes for key insights

**Signature phrases (use naturally, not forced):**
- "With love + intention," (email/post sign-off)
- "Your body is telling you something"
- "This is a pattern I see often"
- "... and that part of the conversation is largely missing"
- "You're not imagining it."
- "Neither approach replaces the other. They serve different purposes."

**CTA style:** Non-pushy, patient-centered, offers choice. Lead with benefit to reader, not her services. Use "free," "guide," "clarity," "understanding." Never use urgency language ("limited time," "act now"). Offer multiple paths (discovery call OR free guide).

**Vocabulary — ALWAYS use:**
- "wellness support," "wellness practitioner," "wellness guidance"
- "depletion," "reserve," "pattern"
- "functional" (testing, assessment, ranges)
- "tissue level," "subclinical," "mineral status"
- "nourishing," "whole foods," "low-tox"
- "may help," "may support," "designed to support," "individual results vary"

**Vocabulary — NEVER use (compliance requirement):**
- "coach" / "coaching"
- "mentor" / "mentorship"
- "consult" / "consulting"
- "will help" / "treats" / "cures" / "diagnoses"
- Generic wellness platitudes
- Urgency/scarcity sales language

**Emotional stance:** Validate confusion and exhaustion before offering solutions. Remove shame. Empower without being preachy. Always grounded in the principle that validation comes before solutions.

---

### Platform A: Blog Post (1,500+ words)

**Format:** Markdown, following the structure used in `js/blog.js`

**Structure:**
1. **H1 title** — clear, SEO-friendly
2. **Summary note** — `<div class="blog-summary-note">` 2-3 sentence overview
3. **Opening hook** — 2-3 paragraphs validating the reader's experience
4. **Body sections** — H2/H3 headers, research citations with `<sup>` footnotes, internal links in markdown format `[text](/path)`
5. **Practical takeaways** — actionable steps, not just theory
6. **Closing** — empowering, forward-looking, signed "With love + intention, Alicia"
7. **CTA row** — using the blog CTA syntax:
   ```
   [CTA-ROW-START]
   [CTA:Title|Description|link|Button Text]
   [CTA:Title|Description|link|Button Text]
   [CTA-ROW-END]
   ```
8. **Disclaimer** — italicized compliance disclaimer
9. **References** — numbered, with DOI links where available
10. **FAQs** — 4-6 questions anticipating reader concerns (these become JSON-LD schema)

**SEO requirements:**
- Schema description (150-160 chars)
- Categories from existing set: wellness, foundations, preconception, htma, nutrition, postpartum
- Internal links to 2-4 site pages
- External links with proper attribution

**Special content blocks available:**
- `[INSIGHT:text]` — highlighted insight box
- `[DOWNLOAD-CTA:image|title|description|form-type|button-text]` — lead magnet inline
- `[CTA:title|description|link|button-text]` — call to action box
- `<div class="blog-summary-note">text</div>` — summary box at top

**Image suggestions:** Provide 2-3 descriptions of ideal images (e.g., "Soft-lit photo of a woman journaling at a kitchen table, warm tones, natural light"). Alicia sources images separately.

---

### Platform B: Instagram (Post + Stories + Reel Script)

**Post (caption):**
- 150-300 words
- Opens with a hook line (pattern interrupt or validation)
- 2-3 short paragraphs of value
- Ends with a soft CTA (question, free resource, or "link in bio")
- 5-10 relevant hashtags at the end
- Accessible: no special Unicode fonts, short paragraphs

**Stories (3-5 slides):**
- Slide 1: Hook question or bold statement (text overlay description)
- Slides 2-4: Key points, one per slide, conversational tone
- Final slide: CTA with link sticker direction
- Include engagement elements: polls, question boxes, or "tap if this resonates" prompts

**Reel Script (30-60 seconds):**
- Hook (first 3 seconds): pattern interrupt or relatable statement
- Body: 3-4 key points, spoken naturally
- Close: soft CTA
- Include suggested on-screen text overlays
- Note: Alicia is on camera — write as if she's speaking directly to the viewer

---

### Platform C: Pinterest (3-5 Pin Descriptions)

- 150-300 characters each
- Keyword-rich for Pinterest SEO
- Include relevant search terms women would use
- Each pin targets a slightly different angle of the topic
- End with a CTA to the blog post
- Suggest pin image descriptions (vertical 2:3 ratio)

---

### Platform D: Facebook (Community Post)

- 100-200 words
- More personal/conversational than Instagram
- Speak to the IHH community directly
- Can reference personal anecdotes or "what I'm seeing in my practice" framing
- End with engagement prompt (question or share request)
- No hashtags (or 1-2 max)

---

### Platform E: LinkedIn (Professional Post)

- 150-250 words
- Professional but still warm — Alicia's voice, not corporate
- Frame around the clinical/research angle of the topic
- Can cite 1-2 studies
- Position Alicia as a thought leader in functional wellness
- End with insight or question for professional peers
- 3-5 relevant hashtags

---

### Platform F: Email Newsletter

- **Subject line:** 5-8 words, curiosity-driven, personal
- **Preview text:** Extends the subject line (40-60 chars)
- **Body:** 200-400 words
- Opens with personal warmth ("Something I've been thinking about lately...")
- 1-2 key insights from the blog post (not a full summary)
- Links to the full blog post
- Soft CTA: free resource or discovery call
- Sign-off: "With love + intention, Alicia"
- **Note:** This will be created as a DRAFT in MailerLite, not auto-sent

---

### Platform G: Google Business Post

- 150-300 words
- Informational/educational tone
- Include a clear CTA with link to the blog post or service page
- Use "Learn more" or "Read the full guide" button text
- Locally relevant when possible (Kentucky-based practice)

---

## STEP 3: Review With Alicia

After drafting all content, present it to Alicia organized by platform. Ask:

1. "Does this feel like you? Anything that doesn't sound right?"
2. "Any facts or personal anecdotes you'd like to add or correct?"
3. "Which platforms are ready to publish and which need revision?"
4. "Should I create the Notion pages now, or do you want to review further first?"

Do NOT proceed to Notion until Alicia approves.

---

## STEP 4: Publish to Notion

Once approved, create the content cluster in Notion:

### Parent Page Structure

Create a **parent page** in the "AI Content Planning" database with:
- **Title:** `[Topic Name] — Content Cluster`
- **Status:** Draft
- **Date:** Today's date

### Child Pages

Create child pages under the parent for each platform:
- `Blog — [Topic]`
- `Instagram — [Topic]`
- `Pinterest — [Topic]`
- `Facebook — [Topic]`
- `LinkedIn — [Topic]`
- `Email — [Topic]`
- `Google Business Post — [Topic]`

Each child page contains the full drafted content for that platform.

### Notion API Notes

The Notion MCP server has a known serialization bug affecting `create-page` and `update-page`. Use the workaround:

```bash
# Use notion-cli or direct curl API
notion-cli create-page <database-id> '<properties-json>'

# If notion-cli returns 404, fall back to direct curl:
curl -s -X POST "https://api.notion.com/v1/pages" \
  -H "Authorization: Bearer ${NOTION_TOKEN}" \
  -H "Content-Type: application/json" \
  -H "Notion-Version: 2022-06-28" \
  -d '{ "parent": {"database_id": "DATABASE-ID"}, "properties": {...} }'
```

After creating all Notion pages:
- Update the "Last Updated" callout block on the AI Content System dashboard
- Add a note to today's Session Notes entry

---

## STEP 5: Local Backup

Save a local backup to `Marketing/Notion-Sync/` with the following structure:

```
Marketing/Notion-Sync/
└── NNN_YYYY-MM-DD_topic-slug/
    ├── blog.md
    ├── instagram.md
    ├── pinterest.md
    ├── facebook.md
    ├── linkedin.md
    ├── email.md
    ├── google-post.md
    └── metadata.json
```

**metadata.json format:**
```json
{
  "topic": "Topic Name",
  "created": "YYYY-MM-DD",
  "status": "draft",
  "notion_parent_page_id": "xxx",
  "platforms": ["blog", "instagram", "pinterest", "facebook", "linkedin", "email", "google-post"],
  "blog_slug": "YYYY-MM-DD-topic-slug",
  "internal_links": ["/htma.html", "/services/"],
  "image_suggestions": ["description 1", "description 2"]
}
```

Number the folder sequentially based on existing folders in `Marketing/Notion-Sync/`.

---

## STEP 6: Session Notes

Update today's Session Notes entry in Notion with:
```
HH:MM AM/PM — Created content cluster: [Topic Name] (all 7 platforms drafted, Notion pages created, local backup saved)
```

---

## COMPLIANCE CHECKLIST (Run Before Finalizing)

Before presenting content to Alicia, verify every piece passes:

- [ ] No prohibited terms: "coach," "coaching," "mentor," "consult," "consulting"
- [ ] All health claims use qualifying language: "may," "can," "might," "suggests," "designed to support"
- [ ] Kentucky-only language for any service references
- [ ] "Individual results vary" disclaimer where appropriate
- [ ] All external links marked for `target="_blank" rel="noopener noreferrer"`
- [ ] Blog includes educational & imagery disclaimer
- [ ] No urgency/scarcity marketing language
- [ ] Content reads as Alicia's voice, not generic AI wellness content
- [ ] Internal links point to correct pages (verify paths exist)
- [ ] Email is flagged as DRAFT only (never auto-send)
