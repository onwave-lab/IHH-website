# IHH B2B Partner Program — Design Spec

**Date:** 2026-05-15
**Status:** Approved by Alicia / Kyle (brainstorm session 2026-05-15)
**Branch:** `drafts-website-edits`

This spec captures the brainstormed design for a B2B clinic-to-clinic HTMA partnership program, its marketing approach, and the supporting landing page. The terminal deliverable for the initial build is a funnel-ready landing page at `/partners/`.

---

## 1. Offer

### Program name
**The Mineral Method™ — by IHH**

A clinically-led 60-day mineral rebalancing program delivered by Intention Holistic Health on behalf of select perinatal and women's wellness practices in Kentucky.

### Partnership structure
**Co-branded referral.** Both brands visible to the patient. Partner clinic and IHH each retain their own brand, with the program positioned as a joint offering.

### Service model
**Clinical NP care, Kentucky only (initially).** Each patient establishes an NP-patient relationship with Alicia Harrison (MSN, APRN, FNP-C, BHPCC, HTMA-Certified). Year 2 layers in insurance billing for the office-visit components once credentialing is complete.

### Target partner clinics (Year 1)
The perinatal / women's wellness ecosystem in Kentucky:
- OB/GYN, midwifery practices, birth centers
- Pelvic floor PT
- Perinatal mental health practitioners

### Patient deliverable
- HTMA kit + lab processing
- Customized supplement & lifestyle protocol
- 60-min results review session (live, telehealth)
- 45-min follow-up at 6–8 weeks (live, telehealth)
- Written summary returned to partner clinic (patient consent required)

### Pricing
- **Patient pays IHH directly: $695** (cash-pay; HSA/FSA eligible)
- **Partner Practice Discount: $645** when referred by a Partner Practice (tangible "we got you $50 off")
- **Excludes:** supplements (dispensed separately via Fullscript)

### Patient flow
1. **Partner Clinic Intake (~30 min staff time)** — co-branded intake form, HIPAA authorization, patient pays IHH via Practice Better link
2. **IHH Delivery (weeks 1–8)** — kit ships, sample processed, results reviewed live, protocol delivered
3. **Return to Partner (weeks 8–10)** — 6–8wk recheck, written summary to partner clinic

### Partner compensation
**$75 per completed intake**, paid monthly. Reimburses actual administrative work performed at intake (form completion, sample collection coordination, records prep). Triggered by intake submission — **not** by patient enrollment, **not** tied to volume of referrals.

This structure is AKS personal-services-safe-harbor-eligible only if:
- Set in advance, fixed amount
- FMV-justified against documented admin labor
- Itemized in written agreement
- 12-month minimum term
- Patient pays IHH directly (partner clinic never touches patient money)

### Non-monetary partner benefits
- Free annual HTMA + Mineral Method program for clinic owner + 1 staff member
- Co-branded patient education materials (brochure, exam-room poster, social tiles)
- Listing on `intentionholistichealth.com/partners`
- Quarterly co-branded webinar slot
- Priority same-week booking for their patients

### Volume target (Year 1, post-maternity launch)
**Scenario A:** 3–5 anchor partners, 5–15 patients/mo total, ~$5K/mo net to IHH, no additional hires required. Ramp toward Scenario B (8–12 partners + VA hire) in Year 2.

---

## 2. Operational & legal scaffolding

### Agreement stack
1. **Partner Practice Agreement** (IHH ↔ Partner clinic) — 12-month minimum term, auto-renew, 60-day notice termination, mutual non-solicit
2. **Business Associate Agreement (BAA)** (IHH ↔ Partner clinic) — HIPAA-required for PHI transmission
3. **Patient HIPAA Authorization** — patient signs at partner intake, authorizes both directions of PHI flow
4. **IHH Patient Consent to Treat** — Alicia's standard NP-patient consent

**All four require attorney review before Partner #1 signs.** Estimated legal spend: $2–3K.

### HIPAA / PHI handling
- Partner → IHH PHI transmission via HIPAA-compliant form (Practice Better intake form or JotForm HIPAA tier)
- IHH → Partner summary back: encrypted PDF or secure portal, only with explicit patient authorization
- BAA in place before any PHI flows

### Money flow
```
Patient ──$695──> Practice Better ──> IHH
IHH ──$75 × completed intakes/mo──> Partner clinic (ACH, monthly)
IHH ──supplements (optional)──> Fullscript ──> Patient direct
```
- Partner never handles patient money
- 1099-NEC to partner if year-end reimbursements >$600
- Supplements dispensed separately via Fullscript — keeps revenue model clean

### Clinical safety / escalation
- Out-of-scope referral back to partner clinic (not third party) — reinforces partner as anchor
- Pregnancy + medication screen at intake; Alicia reviews before protocol
- 24-hour adverse-event reporting between IHH and partner

### SLA commitments (in agreement)
- Results review session booked within 10 business days of HTMA lab return
- Written summary back to partner within 5 business days of final follow-up
- IHH responds to partner inquiries within 2 business days
- Quarterly patient satisfaction survey shared with partner

### Non-solicitation (mutual)
- During the 60-day program + 12 months after, IHH will not actively market additional services to the patient without notifying the partner first
- Patient self-selection into IHH's broader practice is permitted (cannot block)
- Partner agrees not to offer competing HTMA services during the partnership term

### Pre-launch checklist (Phase 0 prerequisites)
1. Attorney reviews all 4 documents
2. BAA template selected (Practice Better's, if available)
3. Partner intake form built in HIPAA-compliant tool
4. IHH internal SOP for processing partner-referred patients (Notion)
5. Partner onboarding kit: welcome packet, materials, 1-hr training deck
6. Notion tracking sheet: active partners, monthly intakes, monthly reimbursements, in-flight patients
7. Practice Better B2B booking service ("Partner Practice Discovery Call — 15 min")

### Constraints affecting launch timeline
- **Maternity leave Aug–Oct 2026:** hard cutoff for new patient intake ~mid-June 2026 so all in-flight patients complete before leave
- **Insurance credentialing in progress:** Year 2 enhancement, not Year 1

---

## 3. Marketing approach

### Phase map

| Phase | Dates | Focus | Marketing intensity |
|---|---|---|---|
| 0 — Infrastructure | May 15 – Jun 30, 2026 | Build legal/page/materials; identify 1 warm pilot partner | None |
| 1 — Soft pilot (optional) | Jul 2026 | 1–2 pilot patients end-to-end | None |
| 2 — Quiet capture | Aug 1 – Oct 31, 2026 | Landing page captures interest; "Applications open for November cohort" | Passive |
| 3 — Active launch | Nov 1, 2026 – Apr 30, 2027 | Full outbound + content + paid test | All channels live |
| 4 — Year 2 evolution | May 2027+ | Insurance credentialing live; add insurance-offset patient track | Continue + scale |

### Channel mix (Phase 3)

**Tier 1 — Highest signal:**
- Warm intros from existing IHH patients (ask "who's your OB/midwife/PFPT?")
- Alicia's existing practitioner network (personal coffee meetings)
- In-person practice visits (Louisville/Lexington/Bowling Green/NKY metros)

**Tier 2 — Scalable:**
- LinkedIn (Alicia personal, 2 posts/wk + DM outreach to KY clinic owners)
- B2B content hub on `/partners/...` (6 long-form articles, 1 case study, 1 white paper)
- B2B email sequence via Gmail/Workspace (NOT MailerLite — wrong tool for B2B)
- Podcast guesting (perinatal, midwifery, functional medicine)

**Tier 3 — Defensive moat:**
- KY industry orgs (ACOG, ACNM, APTA Pelvic Health KY chapters)
- Strategic lab partnerships (Trace Elements, ARL)
- Local KY healthcare PR (Louisville Business First, KY Health News)

**Tier 4 — Paid (small test, ~$800/mo total):**
- LinkedIn ads to KY clinic owners ($500/mo)
- Google Ads on intent terms ($200/mo)
- Retargeting ($100/mo)
- Evaluate quarterly; kill if CPL >$150 by mo 4

### Messaging framework

**Primary value prop:**
> Add a clinically-led mineral health program to your practice — without adding clinical hours.

**Three pain points addressed:**
1. Your patients ask about minerals and you can't offer it
2. Adding a service line means clinical hours you don't have
3. You want to offer more — without losing them to another practice

**Three differentiators:**
1. Clinically-led (MSN, APRN, FNP-C, HTMA-Certified)
2. We don't poach (60-day program; patient returns with written summary)
3. Compensation for intake admin (FMV, monthly, predictable)

### Sales motion
1. **Discovery call (15 min)** — mutual fit screen → send info packet
2. **Fit conversation (30 min)** — agreement walkthrough → decision
3. **Agreement review (~2 wks)** — partner attorney back-and-forth
4. **Onboarding training (1 hr)** — Practice Better, intake form, in-office script, reimbursement statement
5. **30-day check-in (30 min)** — feedback + refinements

---

## 4. Landing page architecture

### URL & navigation
- **URL:** `/partners/index.html`
- **Sitemap:** priority 0.8, lastmod = launch date
- **Navigation:** footer-only link during Phases 0–2 (quiet); promote to main nav in Phase 3 (Nov 2026)

### Page structure (12 sections)
1. **Hero** — headline + sub + primary CTA + credential trust strip
2. **The problem** — 3 pain points mirrored
3. **The program in 60 seconds** — what it is + 3-step patient journey
4. **What you get** — partner compensation + value-in-kind bundle
5. **What it looks like in your practice** — operational reality (~30min/intake, 1hr onboarding total)
6. **Who delivers it** — Alicia bio + credentials
7. **For your patient** — pricing transparency, 60-day timeline
8. **Built right** — HIPAA, agreements, KY-licensed NP, AKS-structured (4-card legal reassurance)
9. **FAQ accordion** — top 10 preempted partner concerns
10. **Who this is for** — self-deselect filter
11. **CTA repeat** — primary + secondary email
12. **Footer** — standard IHH footer

### Conversion flow
- **Primary CTA:** "Apply to Partner" → Netlify Form submission (B2B inquiry form, distinct from B2C apply form)
  - Form name: `partner-practice-inquiry`
  - Success redirect: `/partners/?success=inquiry`
  - Honeypot + GA4 tracking
- **Secondary CTA:** `mailto:` link with prefilled subject line
- **Future (Phase 3):** Practice Better B2B booking link as primary CTA, once that service is created in Practice Better

### Visual approach
- Reuses IHH design system (Playfair Display, brand palette, existing CSS architecture)
- Differentiates from B2C tone: tighter, more data, less script font
- No Beautifully Delicious Script use → no BDScript subset changes needed
- Mobile-first responsive
- 3-step patient journey visual: SVG icon row, collapses vertical on mobile

### SEO & meta
- Title: "Partner With IHH — HTMA Partnership Program for KY Practices | Intention Holistic Health"
- Meta description: "A co-branded HTMA mineral health partnership for Kentucky perinatal and women's wellness practices. Clinically-led by NP Alicia Harrison. Apply to partner."
- OG image: placeholder using existing `/images/og-image.jpg` for initial build; B2B-specific OG to be generated via `seo-image-gen` skill in Phase 1
- Canonical: `https://www.intentionholistichealth.com/partners/`
- Schema: `Service` (Mineral Method) + `ProfessionalService` (IHH)

### Analytics
Per CLAUDE.md GA4 conventions:
- `data-track-section` on each of 12 sections
- `data-track-cta="b2b-inquiry-submit"` on form submit
- `data-track-cta="b2b-email"` on email link
- FAQ accordion expansion fires `faq_expand` event

### Initial build scope (Phase 0, this commit)
- `partners/index.html` — full page per architecture
- Page-specific CSS in inline `<style>` block (page is self-contained, no shared component needed)
- Netlify Form for B2B inquiry (funnel-ready immediately)
- `/sitemap.xml` updated with `/partners/` entry
- Notion task created: "Activate B2B footer/nav link in November 2026"
- Placeholders called out inline:
  - OG image: reuses existing `og-image.jpg` (B2B-specific to be generated)
  - Partner FAQ content: drafted from preempted-concerns list; may be refined post-attorney review
  - Practice Better B2B booking link: not yet created — Netlify Form is the funnel for now
  - Partner showcase section: empty until first partner signs

### Out of scope for this build
- Downloadable Partner Practice Kit PDF (Phase 3)
- MailerLite B2B group/automation (Phase 3)
- Site-wide footer "For Practices" link sweep (Phase 3)
- Application form for direct partner self-service (current Netlify Form is sufficient)
- Case-study sub-pages (Phase 3 once first partner produces results)
