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

## Update (later Oct 19): Alicia answered the open questions
- **Recordings:** a separate screen walkthrough that Alicia records on her own time and uploads to a secure platform. The live visit is NOT recorded. The forms, Privacy and Terms drafts now say "a secure, HIPAA-compliant platform (such as the Practice Better client portal)."
- **Prescriptions:** Alicia does not prescribe. The [IF OFFERED] paragraphs are removed, and the consents now say services don't include prescription medications.
- **Lab Review is retired.** The offer is now Discovery Session + Mineral Insight + Kids Mineral Insight (+ Mom + Child Bundle).
  - Added `force = true` to the existing `/services/lab-review` redirects (it pointed to Discovery but the file still existed, so it was being served).
  - Repointed 9 blog links to the Discovery Session.
  - Removed Lab Review from the PB forms.
- **Portal/Fullscript/Discovery buttons stay in the SAME tab** (Alicia's choice). The misleading "Opens … in a new tab" titles were changed on 21 pages.
- **Suggested CLAUDE.md edits** (for the Mac Claude to make):
  - Remove the Lab Review rows from the "User Flow" diagram, "Key Conversion Points" and the "Internal Linking Strategy" table. Point lab and blood work topics to `/services/discovery-session.html`.
  - Note the same-tab exception for `data-portal-*` / `data-fullscript` overlay links under "External Links."

## Update (evening Oct 19): photos removed from the repo
- **The repo is PUBLIC.** At Alicia's request, the 16 family photos (her kids) were removed from `source-assets/photos/family-2026-10/` on both drafts and `launch-2026-10`. They remain in git history.
- **Suggested rule:** never commit Alicia's personal or family photos to this repo. Only optimized images actually used on the site go in `images/`. Consider making the repo private: Netlify deploys still work, and history would be hidden.
- **Canva launch posts:** 5 photo swaps plus the minerals-carousel "just a few of the minerals that often show up out of balance on HTMA" line are drafted in Canva and await Alicia's "save."

## Update (Oct 20): photo credit rule
- **Rule:** any social post using a branding-shoot photo (kitchen, porch, couch, white blazer) must tag `📷 @amberticephoto`. The handle is @amberticephoto, NOT @amberticephotography. It's added to the Notion captions for L1, Evergreen A, C, E and Kids 6, and noted at the top of `docs/launch-kit.md`.
- L1 and L2 captions were rewritten and proofed in Notion. Alicia is hand-editing L1 too; keep her edits.
