# HTMA-First Repositioning + Kids Mineral Insight

**Prepared:** October 10, 2026 · **Branch:** `drafts-website-edits` · **Status:** Draft for Alicia's review. Not ready for production.

> **Do not merge to `main` yet.** The new Kids Mineral Insight page has bracketed placeholders, and several privacy, consent, and legal items (Part 5) must be resolved first. The page is set to `noindex` so search engines skip it until launch.

---

## Part 0. What I changed in the draft site (summary)

| Page | What changed |
|---|---|
| **NEW: `services/kids-mineral-insight.html`** | Full landing page: hero, "for the parent doing all the research," who it's for, what HTMA is and isn't, everything included, 6-step process, the 60-minute review, the private recorded walkthrough, what families receive, exclusions, pediatrician and urgent-care statements, eligibility and timeline, 9 FAQs, and a pediatric disclaimer. CTA = "Join the Enrollment List" (goes to the contact form with the subject pre-filled). |
| **Homepage** | New headline ("Strong Foundations for Moms + Kids"), HTMA in the hero copy, "Hi I'm Alicia" rewritten in your mom-and-NP voice, two new "doors" (*Deep in the Mom Years* and *Looking for Answers for Your Child*), a bridge paragraph, new service cards (Mineral Insight / Kids Mineral Insight / Discovery Session), mom-symptom items in "Running on Empty," and light Uncover–Rebuild–Sustain edits. New title and meta description. |
| **Mineral Insight (women)** | Removed "20s and 30s." Added an *In the Busy Mom Years* column (sleep, brain fog, low energy, less patience), your "I like real information before building a plan" line, a cross-link to the kids page, and an FAQ "Can my child do HTMA too?" |
| **What is HTMA?** | Now an umbrella education page with a "Two Ways to Start" section (women / kids). Softened overstated claims (see 1D). Hero buttons go to the two pathways. Fixed four buttons that pointed to the old **Intentional Reset** booking link. |
| **Services (Packages & Programs)** | New quiz option "I'm looking for answers for my child," a *For Your Child* card, an FAQ "Do you work with children?", and updated meta description. |
| **Discovery Session** | FAQ "Can I book a Discovery Session for my child?" (No. Kids start with eligibility screening.) |
| **Every page** | Nav dropdown, mobile menu, and footer now include Mineral Insight and Kids Mineral Insight. Footer tagline: "Foundations-first HTMA support for Kentucky women and the kids they're raising." |
| **Contact** | Subject field pre-fills from the link (used by the kids enrollment-list buttons). |
| **sitemap.xml / llms.txt** | Dates updated. The kids page entry is added but commented out until launch. llms.txt describes the new offer. |
| **Not touched** | Legal page *content* (privacy, terms, disclaimer). Per CLAUDE.md these need attorney review; proposed language is in Part 5. Only the nav links on those pages changed. |

**Decisions I made for you (easy to reverse):**
1. **Family-foundations homepage direction**, told from mom's point of view (reasoning in Part 3).
2. **"Join the Enrollment List" instead of "Enroll now"** on the kids page. You can't legally open pediatric enrollment until the privacy policy and consent documents are updated, so this keeps the page honest and still captures interested moms. At launch, swap the button for the Practice Better enrollment link (there's a `PRE-LAUNCH` comment marking it).
3. **"Consultative" was not used.** Hayes's scope sentence said "focused consultative service," but CLAUDE.md bans "consult." I used "focused wellness service."
4. **No Amen-branded terms anywhere.** The brain-health influence appears only as structure: one meaningful goal, 1–3 actions, barriers, the child's strengths, and follow-through at the follow-up.
5. **Discovery Session moved to the "Not sure yet?" card** on the homepage, so HTMA is clearly the lead offer.

---

## Part 1. Current-site audit (before these changes)

### 1A. Pages and sections that excluded or overlooked children
- **Homepage:** hero ("Your Body for Motherhood"), "Women come to me through one of two doors," service cards, and footer were adult-women only. Kids appeared only as the reason mom wants energy ("model wellness for your kids").
- **Services page:** "I help women in their 20s and 30s," quiz with only adult options, no pediatric pathway.
- **Mineral Insight:** "For Kentucky women in their 20s and 30s" (also excluded moms of older kids, who are often in their 40s).
- **HTMA page:** every journey card was preconception/pregnancy/postpartum.
- **About page** (not changed): "My focus is preconception preparation and postpartum depletion recovery." → *Recommend adding one sentence about supporting families and kids. I left it for you to word personally.*
- **Footer (sitewide):** "Helping Kentucky women prepare for pregnancy and rebuild after birth."
- **Newsletter heading** (not changed): "The functional wellness email for women who want clarity." Fine for now. Consider a kids lead magnet later (see 1H).

### 1B. Language that should stay
- "Intentional. Simple. Sustainable." and "foundations first"
- "Running on empty," "you don't have to figure this out alone," "without spending six months in a podcast rabbit hole"
- "These aren't signs something is wrong with you…"
- "I work alongside your primary care provider, OB-GYN, or midwife, not in place of them." (Now extended to pediatricians on kids content.)
- Preconception and postpartum doors: kept word for word, including the easter egg.

### 1C. Language that needs revision (done unless noted)
- "20s and 30s" on homepage, services, and Mineral Insight → removed.
- "Women come to me through one of two doors" → "Families usually find me through one of these doors."
- HTMA page: "Intention Mineral Insight Package" / "Intention Signature Program" were outdated names → updated to Mineral Insight / Kids Mineral Insight / The Intention Method.
- **apply.html (not changed, needs your decision):** says "book your **complimentary 20-minute** discovery call," which contradicts the **$198, 60-minute** Discovery Session. Its service dropdown lists "Lab Review" (that page now redirects), and it has an "Age" field that's confusing if a parent applies for a child. *Recommend retiring apply.html or rewriting it.*
- **Legal pages' nav (not changed):** still shows old labels ("1:1 Wellness Support," "Lab Review" linking to the Discovery page). I only added the two new links. Worth a nav-only cleanup; it's not legal content.

### 1D. Statements that may overstate what HTMA can establish
| Where | Before | After |
|---|---|---|
| HTMA hero trust line | "Research-Backed" | "Screening Tool" |
| HTMA intro | "a functional medicine test… Minerals reflect long-term cellular activity and provide insight into how your body manages energy, hormones…" | "a screening test… Read in context, those patterns *may* offer insight…" plus a new **"What HTMA isn't"** paragraph |
| HTMA intro | "valuable tool for identifying mineral imbalances… that influence fertility" | "useful starting point for exploring mineral patterns… that *may be associated with*…" |
| Preconception card | "HTMA **identifies** mineral patterns related to thyroid function, ovulation…" | "HTMA **may reflect** patterns associated with thyroid activity, nutrient status, and stress" |
| Low-tox card | "HTMA **can detect** certain heavy metals… This allows us to identify potential environmental exposures" | "HTMA also **reports** certain toxic elements… A higher result isn't a diagnosis of exposure or poisoning…" |
| Quiz | "root-cause, whole-body approach" | "foundations-first, whole-body approach" |
| Benefits | "Minerals are **the foundation of nearly every system**" / "These areas **directly influence** fertility" | "Minerals are **involved in** nearly every system" / "These areas **matter for**…" |
| Research section | "Research-Backed Testing… **validated by government agencies**" / "**EPA Validated**" | "What the Research Says… it also has real limitations" / "EPA Report" |
| Research FAQ | "Yes. Extensive research has **established** the link… reports **validate**…" | Balanced answer that names limitations (hair treatments, collection, lab methods) |
| Services FAQ (**not changed**) | "HTMA **reveals** long-term patterns… **critical** factors for hormone health… and fertility" | *Suggest:* "HTMA reflects longer-term patterns… that may relate to hormone health, energy, and fertility." |
| Services FAQ (**not changed**) | "I have, however, seen my foundational protocol **change the efficacy** of these treatments" | *Suggest softening:* "…seen foundational support make other treatments easier to tolerate for some clients." (This is an outcome claim.) |
| Blog (**not audited line by line**) | 30+ posts | Recommend a pass for "reveals / identifies / root cause" before promoting HTMA-for-kids content. |

### 1E. Navigation changes
Done: Services dropdown and mobile menu now list Discovery Session · **Mineral Insight (Women)** · **Kids Mineral Insight** · Packages and Programs · What is HTMA?. Footer Quick Links include both. Some pages call the first link "Sessions" and others "Discovery Session"; recommend standardizing on "Discovery Session."

### 1F. Conflicting age, privacy, scope, or service statements
1. **Privacy Policy §7:** "Our services are not directed toward individuals under age 18." **Direct conflict.** See Part 5.
2. **Terms §2.1** lists what clinical services "do not constitute… primary care, urgent care, emergency care, OB-GYN care…". It should also exclude **pediatric primary care / well-child care / vaccinations**.
3. **Terms §6 / Disclaimer §4** say clients maintain a PCP / OB-GYN / midwife. Add **pediatrician** and clarify that the parent is the responsible party for a minor.
4. **Terms §3:** "consult your primary care provider, OB-GYN, or specialist." Add pediatrician.
5. **Privacy §2.1 / §3.1 / Terms §11** use "coaching services." This conflicts with the site-wide terminology rule; flag for counsel when the policy is reopened anyway.
6. **Privacy, Terms, and Disclaimer mention "Kajabi."** Confirm whether Kajabi is still used.
7. **Disclaimer §6** gives 988 for mental-health crises. Good. Keep it in pediatric materials.
8. **Discovery Session copy** says "You'll leave knowing whether HTMA or a structured program is the right fit." Fine for adults. Kids skip it (FAQ added).

### 1G. Calls to action that don't fit direct pediatric enrollment
- "Book a Discovery Session" (`l.bttr.to/h0MUI`): adult flow. Kids now route to the enrollment list.
- HTMA page buttons → **old Intentional Reset booking** (`bookings?s=664b9722…`). **Fixed** (now point to the pathways section). Note `services/intentional-reset.html` still uses it but redirects away.
- apply.html: see 1C.
- Homepage "Let's Talk" → contact form. Fine for both audiences.

### 1H. SEO opportunities
- **New keyword cluster:** "HTMA for kids," "hair mineral test for kids," "kids mineral test Kentucky," "pediatric HTMA," plus symptom-intent searches moms run ("picky eater minerals," "magnesium for kids sleep," "toddler constipation magnesium"). Run `ihh-keyword-research-checklist.md` as a third audience ("Parents").
- **Blog content cluster** (use the content-cluster skill), each linking to the kids page: *What HTMA can and can't tell you about your child* · *Picky eating and minerals: what to look at first* · *Sleep foundations for kids* · *HTMA vs. bloodwork for kids*. YMYL topics, so your NP credential and careful language are an advantage.
- **Lead magnet idea:** "Kids Foundations Checklist" (food, hydration, sleep, routine) → MailerLite group "Parents."
- **Schema:** Service schema with an age range (2–17) is on the kids page. FAQ schema intentionally omitted (retired site-wide).
- **Homepage title** now leads with "HTMA for Kentucky Women & Kids," your highest-intent, most searchable term.
- **Images:** the kids page reuses the mom-and-toddler photo. A photo of an older child or teen (or hair-sample/kit imagery) would help the 6–17 audience see themselves.

### 1I. Compliance questions to resolve before publishing (for Alicia)
1. Has counsel updated the Privacy Policy, Terms, Disclaimer, and NPP for minors? (Part 5)
2. Do your malpractice/liability policy and Kentucky BON scope cover pediatric wellness services for ages 2–17? Confirm with your carrier in writing.
3. Does TEI (the lab) have pediatric reference ranges and collection guidance for young children (sample size for short hair)?
4. Who can consent: both parents, either parent, a legal guardian? How will you verify custody and decision-making authority?
5. What is your adolescent confidentiality policy (what a 14-year-old tells you vs. what parents see in the portal)?
6. Recording: consent form, where recordings are stored, retention period, who can access them, and whether a minor appears on screen (ideally only the protocol document does).
7. Does your BHPCC / Amen certification agreement allow any public reference? (The site currently shows a "Certified Brain Health Professional" seal. Confirm that's permitted too.)
8. Supplement recommendations for children: dosing references you'll use, and how Fullscript handles pediatric orders.

---

## Part 2. Recommended site structure

```
Home
├── For Women
│   ├── Mineral Insight (HTMA-led, the women's entry offer)
│   ├── Discovery Session (not-sure-yet option)
│   └── The Intention Method (multi-month program, on /services/)
├── For Kids → Kids Mineral Insight (ages 2–17)
├── What is HTMA? (umbrella education → both pathways)
├── About
├── Blog
├── Contact / Enrollment list
└── Legal: Privacy · Terms · Medical Disclaimer
```

**Implemented as:** a Services dropdown with both offers named. I did *not* add separate top-level "For Women" / "For Kids" nav items. That would mean restyling the header, and the dropdown already makes both paths one click away. If you'd like the more visible version later, the next step is to replace "Services" with two top-level items, "For You" and "For Your Kids."

**Should the HTMA page become an umbrella, or should the pediatric explanation live only on its own page?**
I recommend a **combination, which is what I built:** `htma.html` is the umbrella that explains HTMA once (including what it isn't) and hands off to two pathways, while the kids page carries its own complete, parent-specific "what HTMA is and isn't."

| | Umbrella HTMA page | Pediatric content only on the kids page |
|---|---|---|
| **Pros** | One authoritative page ranks for "what is HTMA"; consistent limitations language; natural place for moms to discover the kids offer | Parents get a page written entirely for them; pediatric caveats never dilute the women's message |
| **Cons** | Risk of mixed messaging if pediatric caveats crowd the maternal story | Duplicated explanations can drift apart; misses the "what is HTMA" searcher who's a mom |
| **How I balanced it** | Umbrella keeps the maternal journey cards and adds one "Two Ways to Start" section | Kids page repeats only the parent-critical "is / is not" points |

---

## Part 3. Homepage directions

### Recommendation: Family-foundations, told from mom's point of view (implemented)
Your buyer for *both* offers is the same person: a Kentucky mom who's researching answers for her child while running low herself. A conservative homepage would hide the offer you're betting on (and the "mom years" symptoms you want to capture) below the fold. Leading with "Moms + Kids" while keeping your maternal voice, imagery, and preconception/postpartum doors grows the brand without turning it generic or sounding like pediatric primary care. The tradeoff: preconception visitors see "Kids" in the headline. That's mitigated because their door is the first one in "Who this is for."

**Implemented copy (in `index.html`):**
- **Title:** HTMA for Kentucky Women & Kids | Intention Holistic Health
- **Meta description:** Foundations-first HTMA support from a Kentucky family NP for women preparing for pregnancy, rebuilding after birth, or raising kids, plus Kids Mineral Insight for ages 2–17.
- **Hero headline:** Strong Foundations / for Moms + Kids
- **Hero support:** Foundations-first HTMA support for Kentucky women preparing for pregnancy, rebuilding after birth, or deep in the mom years—and for the kids they're raising, ages 2–17.
- **Primary/secondary CTA:** Explore Services / Get to Know Me (unchanged buttons); the service cards carry the pathway CTAs.
- **Who this is for:** four doors (Preparing for Pregnancy · Rebuilding After Birth · Deep in the Mom Years · Looking for Answers for Your Child)
- **Bridge:** "…the same foundations that carry you through pregnancy and postpartum (nourishment, minerals, sleep, steady routines) are the ones your kids are building right now. That's why I support both."
- **Service cards:** For You: Mineral Insight · For Your Child: Kids Mineral Insight · Not Sure Yet?: Discovery Session (+ text link to The Intention Method)
- **Uncover–Rebuild–Sustain:** kept, with "(or your child's)," "prioritized… supplement guidance when indicated," and "the busy mom years, or helping your kids build healthy routines."
- **Final CTA:** unchanged ("Book a Discovery Session" under the Foundations Model; the newsletter stays the last section).

### Alternative: Conservative evolution (ready to paste if you prefer it)
Keeps maternal health dominant and adds kids as a clearly signposted second path.
- **Title:** Intention Holistic Health | HTMA for Pregnancy Prep, Postpartum & Kentucky Families
- **Meta:** Foundations-first HTMA support for Kentucky women preparing for pregnancy or rebuilding after birth—now with Kids Mineral Insight for ages 2–17.
- **Hero headline:** Prepare + Restore / Your Body for Motherhood *(unchanged)*
- **Hero support:** Foundations-first HTMA support for Kentucky women preparing for pregnancy or rebuilding after birth—so motherhood doesn't have to feel like running on empty.
- **Small line under hero (new):** *Also supporting the kids you're raising →* Kids Mineral Insight, ages 2–17
- **Who this is for:** keep the two original doors; add one short paragraph: "Looking for answers for your child too? Kids Mineral Insight is a focused HTMA assessment for ages 2–17, alongside your pediatrician's care."
- **Service cards:** Discovery Session · Mineral Insight · Kids Mineral Insight (replacing The Intention Method card)
- **Bridge:** "When you're depleted, it ripples through your home. When you're ready, the same foundations can support your kids, too."
- **Framework / final CTA:** unchanged.

---

## Part 4. Kids Mineral Insight page

Built at `services/kids-mineral-insight.html`. Everything in Hayes's checklist is on the page: SEO title/meta, hero, who it's for, HTMA is/isn't, parent-recognizable concerns (framed as "a parent might notice," with an explicit "none of these mean something is wrong" line), inclusions, process, the 60-minute review, the private recording, what families receive, exclusions, eligibility, pediatrician requirement, timeline, price placeholder, shipping/turnaround placeholders, the scope statement, the urgent-care statement, and PHI-through-Practice-Better language.

**Every placeholder** (highlighted yellow on the page; search the file for `draft-placeholder`):
- `[insert all-inclusive price]`
- `[confirm what shipping is included]`
- `[confirm recording-access period]`
- `[insert timeframe]` (screening & enrollment)
- `[insert shipping timeline]`
- `[insert lab turnaround]`
- `[insert total weeks]`
- `[Adolescent privacy language pending review by Kentucky healthcare counsel.]` (teen privacy FAQ)

---

## Part 5. Privacy, consent, and operational items to resolve before pediatric enrollment opens

> ⚠️ **FOR REVIEW BY KENTUCKY HEALTHCARE COUNSEL / COMPLIANCE SUPPORT.** The language below is a *starting draft for discussion only*. It has **not** been approved and must not be published as-is.

### 5A. Every statement that must change
| # | Location | Current | Needed |
|---|---|---|---|
| 1 | `legal/privacy.html` §7 Children's Privacy | "Our services are not directed toward individuals under age 18…" | Replace with a minors section (draft below). Update "Last Updated." |
| 2 | Privacy §2.4 / §3.2 | PHI collected "when you become a clinical patient" | Add: for a minor, PHI is provided by and accessible to the parent/guardian per the consent and adolescent-privacy policy |
| 3 | Privacy §8 | Patient HIPAA rights | Clarify the parent/guardian as personal representative for minors, and exceptions |
| 4 | Terms §2.1 | Service exclusions | Add pediatric primary care, well-child care, vaccinations, school/sports physicals |
| 5 | Terms §4 Telehealth | Adult framing | Minor must be physically in KY; parent/guardian present or available for visits [counsel to define] |
| 6 | Terms §6 Client Responsibilities | "Maintain a primary care provider" | "…or, for a minor, an established pediatrician or PCP" |
| 7 | Disclaimer §4 | PCP, OB-GYN, midwife | Add pediatrician |
| 8 | Disclaimer §5 | Results discussed with "your primary healthcare provider" | "…or your child's pediatrician" |
| 9 | HIPAA Notice of Privacy Practices (in Practice Better) | Adult | Add personal-representative and minor-access sections |
| 10 | Practice Better intake forms | Adult intake | Pediatric intake, 3-day diary, eligibility screener |
| 11 | Practice Better consent forms | Adult telehealth + treatment consent | Parent/guardian consent and minor authorization; adolescent assent (age-banded); recording consent |
| 12 | Practice Better portal accounts | One adult per account | Decide on parent-managed child profiles vs. teen access; set message permissions |
| 13 | Practice Better services/packages | None for kids | Create a "Kids Mineral Insight" package (price, lab kit, 60-min review, 20–30-min follow-up) and booking link to replace the enrollment-list button |
| 14 | apply.html | "Age *" field, adult-only flow | Retire or add a parent path (no child PHI on the form) |
| 15 | Contact form note | "Don't submit PHI" | Already present. The kids page repeats it. |
| 16 | MailerLite | No parents segment | Optional "Kids Mineral Insight interest" group; never store child health data there |
| 17 | Malpractice / scope | Adult practice | Written confirmation that pediatric wellness services are covered |
| 18 | Recording workflow | n/a | Secure screen recording tool, storage location (Practice Better upload), retention period, deletion process, written consent |

### 5B. Draft language for counsel review (NOT APPROVED)

**[DRAFT, privacy policy §7, Children's Privacy]**
> Our website is not directed to children, and we do not knowingly collect personal information from children through website forms, newsletters, or social media. Certain clinical services, including Kids Mineral Insight, are provided to Kentucky residents under 18 only with the consent of a parent or legal guardian. Protected health information about a minor is collected solely through our HIPAA-compliant client portal and is handled as described in our Notice of Privacy Practices, including how parents and guardians may access a minor's records and any limits on that access permitted or required by Kentucky law. If we learn that personal information about a child was submitted through a non-secure channel, we will delete it promptly.

**[DRAFT, guardian consent summary]**
> I am the parent or legal guardian of the child named above and have the legal authority to consent to their care. I consent to a hair tissue mineral analysis (HTMA), review of the information I provide, telehealth visits, and individualized wellness recommendations. I understand HTMA is a screening tool and not a diagnostic test, that this service does not replace my child's pediatrician or primary-care provider, and that it does not include urgent, emergency, or after-hours care.

**[DRAFT, adolescent assent and privacy (ages ~12–17)]**
> We'll explain your plan in a way that makes sense to you, and you're welcome to ask questions and share your own goals. Your parent or guardian will have access to your records and recommendations, except where Kentucky law allows certain information to stay private. If something you share makes us worried about your safety, we may need to tell a parent or another appropriate adult.

**[DRAFT, telehealth for minors]**
> Telehealth visits for a minor require the child to be physically located in Kentucky at the time of the visit, and a parent or guardian must [attend / be available during] each visit. [Counsel to confirm.]

**[DRAFT, recording consent]**
> With your consent, Alicia will create a private screen recording that walks through your child's written protocol. The recording shows the protocol document, not your child, and is shared only with you through the secure Practice Better portal. It will be available for [recording-access period] and then deleted. You may decline the recording or withdraw consent at any time without affecting your child's care. Please do not post or share it publicly.

**[DRAFT, minor access to the portal]**
> Parents or guardians manage the portal account for children under [age]. Adolescents ages [X–17] may [view / message] through a linked account, as described in our adolescent privacy policy.

---

## Part 6. Launch checklist (Kids Mineral Insight)

- [ ] Counsel review complete for Part 5 items 1–12; legal pages updated (with attorney sign-off)
- [ ] Malpractice/scope confirmation on file
- [ ] Practice Better: package, forms, consents, NPP, and booking link created
- [ ] Fill every `draft-placeholder` on the kids page (8 items, listed in Part 4)
- [ ] Replace the three "Join the Enrollment List" buttons with the enrollment link (`PRE-LAUNCH` comment in the hero), or keep the waitlist if you prefer to screen by email first
- [ ] Remove `<meta name="robots" content="noindex, follow">` from the kids page
- [ ] Uncomment the kids page entry in `sitemap.xml`; remove "Enrollment opening soon" in `llms.txt`
- [ ] Optional: older-child imagery; kids lead magnet; first 2–3 blog posts in the cluster
- [ ] Add "Kids Mineral Insight" to the Accounts/Tasks tracking in Notion as needed
- [ ] Merge `drafts-website-edits` → `main` (record the pre-merge commit for rollback)

---

## Part 7. Open questions for Alicia

1. **Women's Mineral Insight pricing:** it's still "Personalized, start with a Discovery Session." To make HTMA *the* entry offer for moms too, consider a fixed-price, direct-purchase version that mirrors the kids package (HTMA + report + 60-min review + recording + short follow-up). Want me to draft that?
2. Do you like **"Strong Foundations for Moms + Kids"**, or would you prefer the conservative headline?
3. Should siblings get a **multi-child price**?
4. Should moms who buy both get a **bundle** (mom + child HTMA)?
5. **Ages 2–3:** is a hair sample practical for very young toddlers with fine/short hair (TEI minimums)? If not, start at 4.
