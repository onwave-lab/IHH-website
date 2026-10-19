---
date: 2026-10-19 15:13 (CT)
repo: IHH-website
branch: drafts-website-edits
session: Kids launch prep: PB links, legal drafts, pre-launch QA, Practice Better forms, family photos
---
## Learned
- Practice Better links in use:
  - Discovery Session: `bookings?s=6894cebcc20ac9665db9dcfd`
  - Mineral Insight (Women) checkout: `bookings?p=6acad095f072e6911e13a8ba`
  - Kids waitlist form: `forms?f=6acacca5e76a32ba8c48eb73`
- Practice Better can record visits only with the AI Charting Assistant add-on. Recordings appear in Client Record → Notes & Recordings and stay private until shared. Files uploaded to the client portal must be under 120MB.
- The Lab Review CTA (`PORTAL_URLS.labReview`) uses the generic booking link, not a $219 Lab Review booking.

## Decisions Alicia made
- Prices: Mineral Insight $398, Kids Mineral Insight $398, Mom + Child Bundle $748 (save $48), Discovery $198, Lab Review $219.
- Discovery wording is "$100 is credited…", not a "code." Behind the scenes it may be a discount code.
- Until the bundle package exists, the Bundle button uses the Kids waitlist form.
- HTMA "screening tool, not a diagnosis" wording goes only in disclaimers and FAQ, never in post or page body.
- Parents see all results at every age, and a parent takes part in every kids visit.
- Don't mention kit shipping or postage on the site.
- Consent forms must cover all functional and conventional labs (not just HTMA) and supplements in full.
- Leave homeopathy and "biomedical autism" language out of the forms.

## Suggested memory / rule changes
- Legal pages on drafts carry a "DRAFT pending KY attorney review" comment. Don't merge legal/*.html to main until counsel approves.
- New docs:
  - `docs/legal-drafts-for-attorney.md` (attorney packet)
  - `docs/practice-better-forms.md` (15 copy-and-paste PB forms)
- New photos are in `source-assets/photos/family-2026-10/` (16 originals plus a README with use ideas). Alicia is uploading more. Don't place any on pages or posts until she says so.

## Possible conflicts with existing rules
- Portal, Fullscript and Discovery buttons with `data-portal-*` open in the SAME tab after the redirect overlay, which conflicts with the "external links open in a new tab" rule. Waiting on Alicia's decision.

## Open questions for Alicia
- Option 1 (record the live visit in PB, needs the add-on) or Option 2 (screen-walkthrough upload)? Option 1 means changing the Recording Consent wording.
- Does she prescribe? If not, delete the [IF OFFERED] paragraphs in forms 2, 3 and 7.
- Lab Review page: keep it with a real booking link, or hide it?
- Same-tab vs. new-tab for the portal and supplement buttons.
- Still pending:
  - Kids and Bundle PB package links
  - finding the attorney
  - confirming malpractice covers pediatric clients
  - filling the [BRACKETS] in the forms
