/* ============================================
   BLOG JAVASCRIPT
   Handles markdown parsing and blog functionality
   ============================================ */

// Default promo config — used when a post doesn't specify its own
const DEFAULT_PROMO = {
  title: 'Depletion Signals Checklist',
  modalTitle: 'Get Your Free Guide',
  description: 'Not sure where to start? This free checklist can help you recognize what your body may already be telling you.',
  descriptionShort: 'Not sure where to start? Recognize what your body may be telling you.',
  badge: 'Free Download',
  ctaText: 'Get the Free Guide',
  formType: 'lead-magnet',
  modalFormType: 'lead-magnet',
  image: '/images/depletion-signals-guide-preview-inline.webp',
  imageSidebar: '/images/depletion-signals-guide-preview-sidebar.webp',
  imageThumb: '/images/depletion-signals-guide-preview-thumb.webp'
};

// Blog post data - this would typically come from a build process
// For simplicity, we define posts here that can be easily updated
const BLOG_POSTS = [
  {
    slug: '2026-02-13-htma-complete-guide-maternal-health',
    title: 'HTMA Testing for Maternal Health: What Your Blood Work May Be Missing',
    date: '2026-02-13',
    author: 'Alicia Harrison, MSN, APRN, FNP-C',
    excerpt: 'What is HTMA testing and why does it matter for maternal health? Learn what functional mineral testing reveals for preconception and postpartum that standard blood work may miss.',
    image: '/images/blog/htma-complete-guide-maternal-health.webp',
    cardAspectRatio: '66.67%',
    imageAspectRatio: '66.67%',
    categories: ['wellness', 'foundations', 'htma', 'preconception'],
    personaToggle: {
      label: "Want to Skip Ahead? I'm...",
      options: [
        {
          id: 'preparing',
          label: 'Preparing',
          description: 'Planning for pregnancy',
          sections: ['htma-for-preconception-building-reserves-before-pregnancy'],
          skipLabel: 'HTMA for Preconception'
        },
        {
          id: 'rebuilding',
          label: 'Rebuilding',
          description: 'In early motherhood',
          sections: ['htma-and-early-motherhood-understanding-depletion-after-birth'],
          skipLabel: 'HTMA and Early Motherhood'
        }
      ]
    },
    content: `
# HTMA Testing for Maternal Health: What Your Blood Work May Be Missing
## What Functional Mineral Testing Reveals for Preconception and Postpartum

*This guide is for educational purposes only and is not medical advice. Always consult your healthcare provider.*

&nbsp;

**In This Guide**

- [What Is HTMA?](#what-is-htma-hair-tissue-mineral-analysis)
- [Why "Normal" Labs Don't Always Tell the Full Story](#why-normal-labs-dont-always-tell-the-full-story)
- [Key Minerals and Why They Matter](#key-minerals-and-why-they-matter)
- [Why Mineral Ratios Matter More Than Individual Levels](#why-mineral-ratios-matter-more-than-individual-levels)
- [HTMA for Preconception](#htma-for-preconception-building-reserves-before-pregnancy)
- [HTMA and Early Motherhood](#htma-and-early-motherhood-understanding-depletion-after-birth)
- [The Intention Foundations Model](#the-intention-foundations-model)
- [How to Get Started with HTMA Testing](#how-to-get-started-with-htma-testing)
- [References](#references)
- [Frequently Asked Questions](#faqs)

<div class="blog-summary-note">HTMA (Hair Tissue Mineral Analysis) is a functional screening tool that measures mineral levels stored in your tissues over a 3\u20134 month window\u2014something standard blood work doesn\u2019t capture. For women planning pregnancy or recovering postpartum, HTMA can reveal mineral depletion patterns that routine labs may miss. This guide covers what HTMA measures, how it compares to blood work, key minerals for maternal health, and how to get started with testing.</div>

If you\u2019re planning for pregnancy or in early motherhood and wondering why you still don\u2019t feel like yourself despite \u201cnormal\u201d labs, this guide is for you.

As a Family Nurse Practitioner who takes a holistic, foundations-first approach to wellness, I incorporate functional testing, including HTMA (Hair Tissue Mineral Analysis), to help women understand what their body may be communicating. This guide explains what HTMA is, how it differs from the labs you\u2019d typically get at your doctor\u2019s office, and why mineral status matters, especially for women planning pregnancy or rebuilding after birth.

## What Is HTMA (Hair Tissue Mineral Analysis)?

[Hair Tissue Mineral Analysis](/htma.html), commonly called HTMA, is a screening tool that measures the mineral content of your hair. A small sample of hair is cut close to the scalp and sent to a certified laboratory, where it\u2019s analyzed for mineral levels and toxic metal exposure.

Unlike standard blood work, which shows what\u2019s circulating in your bloodstream at a single point in time, HTMA reflects mineral levels deposited in your tissues over the previous three to four months.

> Blood work shows your checking account balance. HTMA shows your savings account. Both matter, but if you only look at your checking account, you may miss that your savings are running low.

HTMA is a screening and assessment tool, not a diagnostic test. It provides data points that, when a qualified practitioner interprets them with your symptoms and health history, may help identify patterns worth exploring further.

### How HTMA Works

The process is simple:

1. A small sample of hair (about 1 to 1.5 inches from the scalp) is collected
2. The sample is sent to a CLIA-certified laboratory
3. The lab measures essential minerals, mineral ratios, and toxic metals
4. A qualified practitioner interprets the results in the context of your health history, symptoms, and goals

The test is non-invasive, painless, and shows mineral patterns that other common lab tests may not capture.

### What HTMA Measures

HTMA typically reports on:

- **Essential minerals:** Calcium, magnesium, sodium, potassium, zinc, copper, iron, manganese, chromium, selenium, phosphorus, and more
- **Mineral ratios:** Calcium-to-magnesium, sodium-to-potassium, zinc-to-copper, calcium-to-potassium, and others
- **Toxic metals:** Lead, mercury, cadmium, arsenic, aluminum

## Why \u201cNormal\u201d Labs Don\u2019t Always Tell the Full Story

One of the most common things I hear from women is: *\u201cMy blood work is normal, but I still don\u2019t feel right.\u201d* If that sounds familiar, you\u2019re not alone \u2014 I wrote about [why \u201cnormal\u201d labs don\u2019t always mean optimal](/blog/post.html?post=2025-01-09-labs-normal-feel-off) in a separate post.

When you go to your primary care provider, the labs they order are typically limited. They\u2019re screening for disease or clear deficiency: things like anemia, thyroid dysfunction, or blood sugar problems. If nothing flags, you\u2019re told everything looks fine.

And for what those labs are designed to do, that\u2019s accurate. But \u201cnothing is wrong\u201d and \u201cmy body is functioning at its best\u201d are two very different things.

In a typical family practice visit, your provider may order a CBC, a metabolic panel, maybe thyroid markers. It\u2019s a relatively short list, and the reference ranges are broad. They\u2019re built to catch disease, not to evaluate how well your body is actually running.

Functional testing, including HTMA, offers a different perspective.

When working with women, I look at things differently. I may order a much broader panel of blood work based on your symptoms and history, and I evaluate those results using narrower, optimal ranges \u2014 not just checking whether you fall within \u201cnormal limits.\u201d I\u2019m looking at how your markers relate to each other, not just whether each one clears the bar individually. I also add tools like HTMA that provide information blood work simply doesn\u2019t capture.

Research supports this approach. A study published in *Clinical Chemistry* found that less than 1% of total body magnesium is in the blood, meaning serum magnesium levels don\u2019t reliably reflect what\u2019s actually stored in your tissues (Elin, 1987). A follow-up review in *Nutrients* confirmed this remains a significant limitation of standard blood testing (Workinger et al., 2018). Your blood work can look fine while your body\u2019s reserves are quietly running low.

Neither approach replaces the other. They serve different purposes. I offer [blood work review](/services/lab-review.html) in addition to HTMA based on your symptoms, history, and individual needs as part of my [packages and programs](/services/). The goal is always to use the right combination of tools to build a complete picture.

## Key Minerals and Why They Matter

Understanding the roles of key minerals can help you see why mineral status matters so much, particularly during pregnancy preparation and early motherhood. The information below is for educational purposes, not self-diagnosis.

### Magnesium

Magnesium is involved in over 300 processes in your body. It supports energy production, muscle function, blood sugar balance, sleep quality, and nervous system regulation. Many women are already running low before pregnancy, and pregnancy increases the demand significantly.

### Zinc

Zinc is essential for hormone production, immune function, wound healing, and cellular repair. Research published in *Biology of Reproduction* identifies zinc as a critical component in processes that regulate female reproductive health and fertility (Garner et al., 2021). Zinc also needs to be balanced with copper, and that balance is one of the most common patterns I evaluate on HTMA.

### Copper

Copper supports iron metabolism, connective tissue, and nervous system function. What most people don\u2019t realize is that estrogen directly influences copper levels. When estrogen rises, copper tends to rise with it. This makes the copper-zinc dynamic particularly relevant during and after pregnancy, when estrogen fluctuates dramatically.

### Calcium

Calcium is foundational for bone health, muscle contraction, nerve function, and fetal skeletal development. During pregnancy, your body prioritizes getting calcium to your baby. Research published in *Physiological Reviews* found that the average fetus accumulates approximately 30 grams of calcium by birth, with more than 80% of that in the third trimester alone (Kovacs, 2016). Your body adapts by absorbing more calcium from food and, when needed, drawing from your own skeletal reserves.

### Sodium and Potassium

These two get overlooked, but on HTMA, they\u2019re some of the most telling markers. The sodium-to-potassium ratio is often evaluated in relation to how the body is handling stress over time. Both are regulated by hormones produced by the adrenal glands, so their balance can reflect how your body is managing its overall stress response.

### Iron

Iron deficiency is the most common nutritional deficiency worldwide, and women of reproductive age are hit hardest. Iron isn\u2019t tested directly on most HTMA panels, but HTMA can reveal patterns in copper and zinc that may influence how your body absorbs and uses iron. Iron status is best assessed through blood work (ferritin, serum iron, TIBC), and I include these tests when appropriate as part of my programs.

[DOWNLOAD-CTA:/images/depletion-signals-guide-preview-inline.webp|Depletion Signals Checklist|Not sure where to start? This free checklist can help you recognize what your body may already be telling you.|lead-magnet|Get the Free Guide]

## Why Mineral Ratios Matter More Than Individual Levels

One of the most valuable things about HTMA is that it shows mineral ratios, the relationships between minerals, not just their individual levels.

Minerals don\u2019t work in isolation. They push and pull against each other. When one mineral runs high, it often suppresses another. When a ratio is off, it can affect how your body uses those minerals even if the individual levels look fine on paper.

Key ratios evaluated on HTMA include:

- **Calcium-to-Magnesium:** May reflect patterns related to metabolic function and nervous system balance
- **Sodium-to-Potassium:** Often evaluated in relation to adrenal function and the body\u2019s stress response
- **Zinc-to-Copper:** Relevant to hormone balance and immune function
- **Calcium-to-Potassium:** May relate to thyroid function and energy metabolism

A qualified practitioner looks at these ratios with your symptoms to identify patterns, not to diagnose conditions, but to understand where your body may be compensating.

## HTMA for Preconception: Building Reserves Before Pregnancy

If you\u2019re planning pregnancy in the next 6 to 18 months, functional mineral assessment may be one of the most valuable steps you can take. For a broader look at how to prepare your body before conception, see [Your Body Is the First Home](/blog/post.html?post=2024-11-15-body-first-home).

Pregnancy places significant demands on your body\u2019s mineral reserves. The question isn\u2019t just \u201cAm I healthy enough to get pregnant?\u201d It\u2019s \u201cDoes my body have the reserves to sustain what pregnancy requires?\u201d

### Why Assess Minerals Before Pregnancy?

- **Identify patterns early.** If you address mineral imbalances before conception, you\u2019re not starting pregnancy already running low.
- **Move beyond \u201cmedically cleared.\u201d** Standard preconception blood work screens for disease but doesn\u2019t assess whether you\u2019re optimally resourced. Functional testing adds that layer.
- **Personalize your preparation** rather than guessing which supplements to take. Functional testing results may help guide a more targeted approach.
- Minerals like zinc, magnesium, and balanced copper are directly involved in **hormonal function and reproductive health.** Supporting them before pregnancy matters.

### Common Preconception Patterns on HTMA

Patterns commonly observed in preconception HTMA testing include:

- Low magnesium with elevated calcium
- Zinc-copper imbalance
- Low sodium-to-potassium ratio
- Low overall mineral reserves

These patterns don\u2019t indicate disease. They suggest areas where the body may benefit from targeted support before the demands of pregnancy begin.

### When to Test

Ideally, 6 to 12 months before you plan to conceive. This allows time to identify patterns, make changes, and retest to see progress. Even 3 months of intentional preparation may make a meaningful difference.

[CTA:Thinking About HTMA?|If you\u2019re planning pregnancy and want to understand your mineral status before conception, a clarity call is a great place to start\u2014zero pressure, just honest conversation about your goals.|apply|Book a Clarity Call]

## HTMA and Early Motherhood: Understanding Depletion After Birth

Functional mineral assessment may be most valuable \u2014 and most overlooked \u2014 in early motherhood.

### What Is Maternal Depletion?

Maternal nutrient depletion describes the cumulative physical and nutritional toll of pregnancy, birth, and early motherhood. It\u2019s a concept that\u2019s gained more attention in recent years, and the research backs it up.

A study published in *PLOS One* found that 90% of postpartum women in the study were zinc deficient, calling it \u201cthe first comprehensive study indicating that zinc deficiency is highly prevalent among postpartum women\u201d (Kristufkova et al., 2025). And zinc is just one mineral.

Maternal depletion is distinct from postpartum depression, though depletion can coexist with or contribute to mood changes.

### The Gap in Standard Postpartum Care

Most postpartum care centers around the 6-week checkup. If your limited labs come back normal and there\u2019s no clinical depression, you\u2019re generally told you\u2019re fine.

But those labs weren\u2019t designed to assess mineral reserves or whether your body has what it needs to rebuild. Many women leave that appointment still feeling unlike themselves. Not because their provider doesn\u2019t care, but because the testing that\u2019s typically done may not capture the full picture.

Functional assessment \u2014 HTMA and targeted blood work \u2014 fills part of that gap. It doesn\u2019t replace medical care. It adds to it.

### What Pregnancy Commonly Draws From

Pregnancy and birth draw heavily from your mineral reserves. Some of what research has shown:

- **Magnesium demand increases significantly** during pregnancy
- **Copper and zinc dynamics shift** as estrogen fluctuates during and after pregnancy
- **Calcium is actively transferred to your baby**, with roughly 30 grams accumulated by birth, most of it in the third trimester (Kovacs, 2016)
- **Iron stores are commonly depleted** in women of reproductive age

### Why Generic Advice Often Isn\u2019t Enough

\u201cJust eat well and rest\u201d is good advice on paper \u2014 and [food should always be the foundation](/blog/post.html?post=2025-01-15-minerals-from-food) \u2014 but without knowing where you\u2019re specifically depleted, you\u2019re rebuilding without a roadmap.

Functional mineral assessment provides actual data. Instead of guessing which supplements to take or following generic nutrition advice, you can see which minerals your body may need most and in what balance. That\u2019s what makes it personal instead of generic.

### When to Test in Early Motherhood

Most women benefit from functional mineral assessment starting around 3 to 6 months after birth, once the most acute hormonal shifts have begun to settle. Testing can be valuable at any point, especially if you\u2019re still not feeling like yourself months later.

Retesting every 3 to 4 months can help track progress and adjust your plan.

## The Intention Foundations Model

I take a holistic, foundations-first approach. Whether a woman is preparing for pregnancy or rebuilding after birth, the process follows three steps.

**Step 1: UNCOVER**
Share your story and complete functional assessments, which may include HTMA, blood work, or both depending on your needs. The goal is to understand where your body may be compensating. This isn\u2019t about finding problems. It\u2019s about understanding your starting point.

**Step 2: REBUILD**
Follow a personalized plan that addresses nourishment, mineral reserves, and nervous system support. This is tailored to your specific patterns and life demands, not a generic protocol.

**Step 3: SUSTAIN**
Build habits and rhythms that protect your reserves long-term. Sustainable wellness isn\u2019t about perfection. It\u2019s about building a foundation that holds.

[See the full process details](/services/)

## How to Get Started with HTMA Testing

### Preparing for the Test

HTMA requires a small hair sample, typically about 1 to 1.5 inches of hair closest to the scalp. A few preparation guidelines help ensure accurate results:

- **Avoid medicated shampoos** (like Head & Shoulders or dandruff treatments) for 2 weeks before your sample
- **Avoid swimming in treated pools** for 1 to 2 weeks if possible
- If you color or chemically treat your hair, let your practitioner know so they can factor that into interpretation
- **No special fasting or timing** is required (unlike some blood tests)

The sample is mailed to a certified laboratory, and results are typically available within 2 to 3 weeks.

### What to Expect from Your Results

Your results will include individual mineral levels, mineral ratios, and toxic metal screening. On their own, these numbers can be hard to make sense of. Context matters enormously.

A qualified practitioner will look at:

- Your mineral levels relative to optimal ranges (not just the broad reference ranges used in standard care)
- Mineral ratios and what they suggest about how your body is functioning
- Your specific symptoms and health history next to the data
- Patterns that may connect to what you\u2019re experiencing day to day

The goal is never to alarm you. It\u2019s to give you a clear picture and a path forward.

### Working with a Practitioner

HTMA interpretation is nuanced. The same mineral level can mean different things depending on the ratios, the patterns, and the person. That\u2019s why working with a practitioner experienced in functional mineral assessment makes such a difference.

When working with women, I incorporate HTMA as part of my holistic approach \u2014 along with blood work when appropriate, health history review, and ongoing guidance. Results are reviewed in detail during a one-on-one session where we connect the data to your lived experience and create a personalized plan.

*Clinical services are currently available to Kentucky residents.*

## References

1. Elin, R.J. (1987). Assessment of magnesium status. *Clinical Chemistry*, 33(11), 1965-1970. DOI: 10.1093/clinchem/33.11.1965

2. Garner, T.B., Hester, J.M., Carothers, A., & Diaz, F.J. (2021). Role of zinc in female reproduction. *Biology of Reproduction*, 104(5), 976-994. DOI: 10.1093/biolre/ioab023

3. Kovacs, C.S. (2016). Maternal Mineral and Bone Metabolism During Pregnancy, Lactation, and Post-Weaning Recovery. *Physiological Reviews*, 96(2), 449-547. DOI: 10.1152/physrev.00027.2015

4. Kristufkova, A., et al. (2025). Micronutrient dynamics and deficiency risk across pregnancy and postpartum in a Slovak cohort. *PLOS One*, 20(9), e0331125. DOI: 10.1371/journal.pone.0331125

5. Workinger, J.L., Doyle, R.P., & Bortz, J. (2018). Challenges in the Diagnosis of Magnesium Status. *Nutrients*, 10(9), 1202. DOI: 10.3390/nu10091202

## Your Next Step

If you\u2019re preparing for pregnancy and want to know whether your body has the reserves to sustain it, or you\u2019re months into motherhood and still don\u2019t feel like yourself, functional mineral assessment may give you the answers you\u2019ve been looking for.

You don\u2019t have to keep guessing. And you don\u2019t have to accept \u201cthis is just how it is.\u201d

[CTA:Book a Free Discovery Call|I\u2019d love to hear where you are and talk through whether HTMA testing makes sense for you.|apply|Book Your Free Call]

[CTA:Download the Depletion Signals Checklist|Not sure where to start? This free checklist can help you recognize what your body may already be telling you.|lead-magnet|Get the Free Guide]

*Individual results vary. This guide is for educational purposes only and does not constitute medical advice, diagnosis, or treatment. Always consult with your healthcare provider regarding your specific health needs.*
    `,
    disclaimer: `This content is for educational and informational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. It does not replace individualized medical advice, diagnosis, or treatment. Readers should consult their licensed healthcare provider regarding personal health concerns.

Any individuals depicted in images on this website or associated content are models or stock photography subjects and are not patients, clients, or recipients of services from Intention Holistic Health. Images are used for illustrative purposes only and do not represent clinical relationships, medical outcomes, or specific health conditions.

Intention Holistic Health provides educational wellness guidance and, where applicable, Kentucky-based nurse practitioner services within scope and licensure.`,
    faqs: [
      {
        question: 'Is HTMA a diagnostic test?',
        answer: 'No. HTMA is a screening and assessment tool. It provides data about mineral patterns that, when interpreted by a qualified practitioner in the context of your symptoms and health history, may help inform wellness decisions. It does not diagnose medical conditions and should not be used for self-diagnosis.'
      },
      {
        question: 'How is HTMA different from blood work?',
        answer: 'Standard blood work measures what\'s circulating in your bloodstream at a single moment and is primarily designed to screen for disease. HTMA measures minerals deposited in tissue over a 3 to 4 month period and is used in functional assessment to identify patterns. Research has shown that blood levels of certain minerals, like magnesium, may not reliably reflect what\'s actually stored in your tissues.'
      },
      {
        question: 'Do you also offer blood work?',
        answer: 'Yes. Blood work is offered based on your symptoms, health history, and individual needs as part of packages and programs. A broader panel than what you\'d see in a standard primary care visit is typically ordered, and results are interpreted using functional ranges.'
      },
      {
        question: 'Can HTMA tell me exactly what supplements to take?',
        answer: 'HTMA results help inform a personalized approach, but they don\'t generate a prescription. A qualified practitioner considers your HTMA data alongside your full health picture to make recommendations. Individual results vary.'
      },
      {
        question: 'Is HTMA safe during pregnancy?',
        answer: 'Yes \u2014 it\'s just a hair sample. Mineral patterns do shift naturally during pregnancy, so interpretation needs extra context. Most women find preconception and postpartum testing more actionable.'
      },
      {
        question: 'How long does it take to see changes on HTMA?',
        answer: 'Because HTMA reflects a 3 to 4 month window, retesting is typically recommended at 3 to 4 month intervals. Changes in mineral patterns take time. This is a process of rebuilding, not a quick fix.'
      },
      {
        question: 'What if my doctor hasn\'t heard of HTMA?',
        answer: 'HTMA is well-established in functional and integrative wellness communities but is not commonly used in conventional primary care. It\'s a complementary tool, not a replacement for your doctor\'s care.'
      },
      {
        question: 'Does hair color or texture affect results?',
        answer: 'Natural hair color and texture don\'t significantly affect results. Chemical treatments can, though \u2014 just let your practitioner know so they can account for it.'
      },
      {
        question: 'How much does HTMA testing cost?',
        answer: 'Testing costs vary by lab and practitioner. At Intention Holistic Health, HTMA testing is included as part of both the Mineral Insight Package and the Signature Program.'
      }
    ],
    schema: {
      description: 'What is HTMA testing and why does it matter for preconception and postpartum health? Learn what functional mineral testing reveals that standard blood work may miss.'
    }
  },
  {
    slug: '2026-01-28-sustainable-home-cooking',
    title: 'Things I Do to Make Home Cooking More Sustainable',
    date: '2026-01-28',
    author: 'Alicia Harrison, MSN, APRN, FNP-C',
    excerpt: 'Sustainable home cooking isn\'t about elaborate recipes or perfectly stocked fridges. It\'s about creating rhythms that support your body, protect your mental energy, and make financial sense in real life.',
    image: '/images/blog/sustainable-home-cooking.webp',
    cardAspectRatio: '83.83%',
    imageAspectRatio: '83.83%',
    categories: ['wellness', 'nutrition'],
    content: `
# Things I Do to Make Home Cooking More Sustainable
## Physically, Mentally, & Financially—Without Spending a Whole Day Meal Prepping

I've always enjoyed being in the kitchen. Cooking has never really felt like one more thing I had to do "right."

That said, there are absolutely nights when I want dinner on the table in under 30 minutes. And if I'm being honest, there are times I want takeout too. The difference now is that it's much easier to say no to eating out when cooking at home feels simpler and easier than it once did.

What changed wasn't my love of food.

It was my systems.

Sustainable home cooking isn't about elaborate recipes, perfectly stocked fridges, or making everything from scratch. It's about creating rhythms that support your body, protect your mental energy, and make financial sense in real life.

## Why Home Cooking?

Before getting into the systems themselves, it's worth naming why cooking at home matters for health in the first place.

Preparing meals at home gives you direct control over ingredients in a way restaurants simply don't. Restaurant and packaged foods commonly rely on refined vegetable and seed oils, added sugars, flavor enhancers like monosodium glutamate (MSG), and artificial flavors or preservatives to improve taste, texture, and shelf stability (Hall et al., 2019; Monteiro et al., 2019).

Frequent restaurant meals have been associated with higher sodium, refined fat, and added sugar intake, alongside lower fiber and micronutrient intake (Saksena et al., 2018).

Cooking at home doesn't require perfection, but it does offer consistency—fewer unknown additives, steadier nourishment, and meals that better support metabolic and hormonal health over time.

These are the practices I use in my own home. They're practical, flexible, and designed to support busy seasons without sacrificing nourishment.

## 1. I Keep Meals Simple (and Rotate Go-To Meal Types)

Instead of rotating dozens of recipes, I have a handful of go-tos and I rotate meal formats.

This one shift made planning easier and removed the pressure to constantly come up with something new. I'm not starting from scratch every week—I'm choosing variations of meals I already know work.

My core meal types include:

- Sheet pan protein + vegetable
- Protein pasta with a protein and pre-chopped veggies
- Bowls (whole grain + protein + veggies + sauce + something fresh)
- "Dump" soups (everything in one pot, minimal effort, high return)

Once you know the format, the ingredients become interchangeable. Chicken becomes sausage. Black beans become chickpeas or white beans. Broccoli becomes peppers or asparagus. Alfredo becomes pesto. Marinara becomes a creamy tomato sauce.

Meals stay nourishing, flexible, and efficient without relying on constant creativity.

## 2. I Keep Flexible Staples on Hand for Fast Assembly Meals

This builds directly on rotating meal formats.

Rather than planning every meal in advance, I keep a small set of staples that work across multiple meals and cook quickly.

Some of my go-to staples:

- Organic chicken sausage
- Shredded chicken
- Frozen chopped peppers or onions
- Chickpea or lentil pasta
- A few vegetables—fresh or frozen (broccoli, cauliflower, spinach, mixed veggies)
- One or two simple sauces (alfredo, pesto, marinara)

With these on hand, dinner is rarely more than 30 minutes away. When dinner feels achievable, consistency becomes much easier.

[CTA:Free Checklist: Healthy Kitchen Staples|Want a complete list of what I keep in my kitchen? I put together a printable checklist of nourishing, low-tox staples for whole foods living.|kitchen-staples|Get the Free Checklist]

## 3. I Learned to Freeze Just About Everything

The freezer is one of the most underused tools for sustainable cooking.

I freeze:

- Cooked proteins
- Chopped vegetables
- Soups
- Sauces
- Rice and quinoa
- Bone broth
- Muffins
- Egg bites
- Pre-cooked breakfast chicken sausage
- Sourdough bread
- Extra portions of meals
- Smoothies

Meal prep doesn't always mean full meals in containers. Often, it looks like frozen components that can be mixed and matched later. Stay tuned for future blogs with recipes for my favorite freezer meals.

**A note on freezer space:** We purchased a small used chest freezer from Facebook Marketplace, and it's been a game changer. To maximize space, I freeze most foods in silicone cubes, pop them out once frozen, and store them vertically in freezer bags so everything stays visible and organized.

## 4. I Buy the Whole Chicken (Every Time)

Buying whole chickens has been one of our biggest wins—financially and practically.

At the time of writing this, organic whole chickens are around $3 per pound, significantly less than pre-cut pieces, and they stretch much further than most people expect.

**How I use one whole chicken:**

The day I get home from the grocery store, I slice the chicken breasts off the carcass (YouTube it if you don't know how). I place about one cup of water in the bottom of the Instant Pot, add the remaining carcass breast-side down with a little oil, salt, and pepper, and pressure cook for about eight minutes per pound. Once cooked, I pull the remaining meat off the bones for shredded chicken.

Then I make bone broth. The bones go back into the Instant Pot with vegetable scraps, filtered water to just cover, and a splash of apple cider vinegar. I slow cook for about 16 hours.

From one chicken, I get chicken breasts for one meal, shredded chicken for several meals, and at least eight cups of bone broth.

## 5. I Wash and Batch-Prep Produce Right Away

When I get home from the grocery store, I wash most fruits and vegetables immediately using filtered water and baking soda. Research suggests this method can remove a significant portion of certain pesticide residues from produce.

Once washed, everything is dried and stored ready-to-use.

I then try to pre-chop the majority of my vegetables. When I open a bag of onions, I chop the entire bag, use what I need, and freeze the rest in silicone cubes. I do the same for peppers, celery, potatoes, and carrots. The fewer ingredients I have to chop later, the better. This gives me the convenience of being able to grab and throw onto a pan, but prevents me from buying the more expensive pre-chopped vegetables.

I also keep a freezer bag for vegetable scraps—onion ends, carrot peels, celery tops, and herb stems—which later go straight into broth.

## 6. I Always Double (or Triple) Recipes

If I'm cooking anyway, I cook extra.

Doubling recipes takes minimal additional time, reduces future cooking needs, and creates freezer meals for busy days. Half goes to the table, and the rest goes into the fridge or freezer. This single habit has kept my family from eating out hundreds of times over—or in some moms' cases, not eating at all when it's not quick.

## 7. I Keep Easy Snacks on Hand to Eat Before I'm Ravenous

This is one of the most overlooked pieces of sustainable home cooking.

When hunger gets intense, decision-making drops and eating out becomes much more appealing. I keep simple snacks available so I eat earlier in hunger, not when I'm already depleted.

Some examples:

- Greek yogurt with berries
- Protein oat balls
- Hard-boiled eggs
- Cottage cheese with vegetables
- Organic beef or turkey sticks
- Protein smoothies

Eating at the right time often leads to calmer, more intentional dinner choices and easier cooking.

## 8. I Stay Mindful of My Energy Levels

To maintain consistency in my kitchen, I started paying attention to when my energy is higher—and using that time intentionally. On days when I have more capacity, I'll prep a snack, make breakfast ahead, or assemble a few quick grab meals. It takes a small amount of planning in the moment, but it consistently pays off later.

This approach has nothing to do with productivity for productivity's sake. It's about recognizing that energy naturally fluctuates. When longer, busier days show up—or when energy is simply lower—having food already prepared removes friction. I don't have to think, decide, or start from scratch.

Over time, this has become one of the quiet ways I support myself. My past self sets my future self up well, and that makes nourishing myself feel more steady, even during off days.

## The Time to Prep is Worth It

Sustainable home cooking works because it supports the body, mind, and budget at the same time. When meals are simple and ingredients are familiar, protein intake becomes more consistent, mineral-rich foods like bone broth show up more regularly, and blood sugar stays steadier across the day. Fewer daily decisions free up mental energy, turning cooking into a supportive rhythm rather than a source of stress. Over time, these systems also reduce food waste, stretch grocery dollars further, and naturally decrease reliance on takeout.

You don't need to adopt every habit at once. Choosing one system—batch-chopping vegetables, freezing leftovers, keeping snacks on hand, or trying a whole chicken—creates ease. And ease is what makes cooking at home sustainable long-term.

[CTA:Get the Full Kitchen Staples Checklist|Ready to stock your kitchen with nourishing, low-tox staples? Download my free printable checklist with everything I keep on hand for whole foods living.|kitchen-staples|Download the Free Checklist]

## References

Hall, K. D., Ayuketah, A., Brychta, R., Cai, H., Cassimatis, T., Chen, K. Y., … Zhou, M. (2019). Ultra-processed diets cause excess calorie intake and weight gain: An inpatient randomized controlled trial of ad libitum food intake. *Cell Metabolism, 30*(1), 67–77.e3. https://doi.org/10.1016/j.cmet.2019.05.008

Monteiro, C. A., Cannon, G., Lawrence, M., Costa Louzada, M. L., & Pereira Machado, P. (2019). Ultra-processed foods, diet quality, and health using the NOVA classification system. *Public Health Nutrition, 22*(5), 936–941. https://doi.org/10.1017/S1368980018003762

Saksena, M. J., Okrent, A. M., Anekwe, T. D., Cho, C., Dicken, C., Effland, A., … Todd, J. E. (2018). *America's eating habits: Food away from home.* U.S. Department of Agriculture, Economic Research Service.
    `
  },
  {
    slug: '2026-01-21-chatgpt-health-safety',
    title: 'Is It Safe to Use ChatGPT Health? A Patient-Centered Look at Using AI for Your Health',
    date: '2026-01-21',
    author: 'Alicia Harrison, MSN, APRN, FNP-C',
    excerpt: 'ChatGPT Health allows users to connect personal health data for personalized responses. From a healthcare provider standpoint, the question of safety is not a simple yes-or-no answer.',
    image: '/images/blog/chatgpt-health-safety.webp',
    cardAspectRatio: '83.78%',
    imageAspectRatio: '83.78%',
    categories: ['wellness', 'foundations'],
    content: `
# Is It Safe to Use ChatGPT Health? A Patient-Centered Look at Using AI for Your Health

With the launch of ChatGPT Health in early January 2026, millions of people now have access to a dedicated AI experience for health and wellness questions. Unlike the general ChatGPT many people were already familiar with, this version allows users to connect personal health data—including medical records and wellness app information—so that responses can be generated in the context of an individual's health information rather than generalized internet data ([OpenAI, 2026](https://help.openai.com/en/articles/20001036-what-is-chatgpt-health)).

That capability is both promising and concerning. From a healthcare provider standpoint, the question of safety is not a simple yes-or-no answer. In medicine, safety always depends on context, boundaries, oversight, and appropriate use.

A more useful question than "Is it safe?" is:

**How do we use ChatGPT Health well—without replacing clinical care, judgment, or responsibility?**

## What Is ChatGPT Health?

ChatGPT Health is a health-focused feature within ChatGPT that allows you to ask health questions using your own information as context. Depending on what you choose to connect or upload, this may include:

- Medical records such as lab reports or visit summaries
- Wellness and wearable data (sleep, activity, nutrition, glucose tracking, etc.)
- Medication lists or health timelines you create

OpenAI states that health information used in ChatGPT Health is stored separately from standard chat data and is not used to train the general AI model ([OpenAI, 2026](https://help.openai.com/en/articles/20001036-what-is-chatgpt-health)). The goal is to help users better understand health information—not to replace medical care.

## Why So Many Patients Are Turning to AI for Health Questions

Healthcare can feel overwhelming, even when you're doing everything "right."

- Appointments are often short.
- Lab results arrive without much explanation.
- Medical language can feel confusing or intimidating.

Many patients leave visits thinking:

- "I didn't get to ask everything."
- "I don't really understand what these results mean."
- "I googled this and now I'm more anxious."

AI tools like ChatGPT Health are appealing because they are:

- Available anytime
- Written in plain language
- Able to organize information
- Non-judgmental

Wanting clarity does not mean you're trying to replace your provider. Most often, it means you want to be more informed and engaged in your care.

That intention matters—but how the tool is used matters just as much.

## Is ChatGPT Health Actually "Safe"?

There isn't a single answer that applies to everyone or every situation.

ChatGPT Health is not a licensed medical provider, and it is not approved to diagnose or treat medical conditions. OpenAI explicitly states that the tool should not be used for diagnosis or treatment decisions ([OpenAI, 2026](https://help.openai.com/en/articles/20001036-what-is-chatgpt-health)). Independent reporting has echoed concerns about people relying too heavily on AI without professional oversight ([Futurism, 2026](https://futurism.com/artificial-intelligence/chatgpt-health-medical-records-diagnosis)).

From a patient perspective, the most accurate way to think about safety is this:

**ChatGPT Health is safest when it is used as an educational and organizational tool—not as a decision-maker.**

## What ChatGPT Health Can Be Helpful For

### 1. Understanding Medical Information

Medical reports are often written for clinicians, not patients. ChatGPT Health can help explain:

- What certain lab markers generally reflect
- Why a provider might monitor a specific value
- Common medical terms found in records
- General mechanisms of medications

This can reduce confusion and help you feel more prepared for conversations with your provider.

### 2. Preparing for Appointments

One of the most responsible ways to use ChatGPT Health is before a medical visit.

Examples include:

- Summarizing symptoms into a clear timeline
- Listing medications and supplements in one place
- Generating questions you want to ask
- Clarifying what you don't understand so you can ask directly

I don't know about you, but I tend to forget just about everything I wanted to say/ask when I walk into a clinic as a patient. This helps you use your appointment time more effectively so you don't walk out thinking, "I wish I had talked to them about…"

### 3. Noticing Patterns in Your Own Data

If you choose to upload wellness data, ChatGPT Health can help you notice trends, such as:

- Changes in sleep over time
- Activity levels and fatigue patterns
- Nutrition or glucose trends

These observations are starting points, not conclusions. They are most useful when reviewed with a healthcare professional.

## Where ChatGPT Health Becomes Risky

### 1. Self-Diagnosis

AI cannot:

- Perform a physical exam
- Assess urgency
- Rule out serious conditions
- Account for nuance the way a clinician can

Using AI to decide what you have can delay appropriate care or create false reassurance.

### 2. Acting on Treatment Suggestions

Even if advice sounds reasonable, treatment decisions depend on:

- Full medical history
- Medication interactions
- Pregnancy or breastfeeding status
- Chronic conditions and risk factors

AI systems are not equipped to manage this complexity safely.

### 3. Over-Trusting Confident Answers

AI responses are written confidently. Confidence, however, does not equal accuracy or appropriateness for you. If something sounds definitive, that's a signal to pause and discuss it with your provider instead of acting on it.

## Privacy: What Patients Should Know

ChatGPT Health is not covered by HIPAA. That means the information you upload is protected by OpenAI's privacy policies, not by healthcare law. Privacy experts have raised concerns about how medical records shared with AI platforms are legally protected compared to traditional healthcare systems ([Time, 2026](https://time.com/7344997/chatgpt-health-medical-records-privacy-open-ai/)).

This doesn't mean you should never use the tool—but it does mean you should be intentional about what you share.

A helpful rule of thumb:

- Use ChatGPT Health to understand information
- Avoid using it as a long-term storage place for sensitive records

## How to Use ChatGPT Health Well: A Patient Checklist

If you choose to use ChatGPT Health, these guidelines can help keep it supportive rather than harmful:

- Use it to learn, not decide
- Bring summaries and questions to your provider
- Be selective with the data you upload
- Treat AI as a tool, not an authority
- Never rely on it for emergencies or urgent symptoms

When used this way, AI can support your care rather than compete with it.

## Real-World Examples of Responsible Use

**Helpful:**

- "Can you explain what this lab marker generally reflects so I can discuss it at my appointment?"
- "Can you help me summarize my symptoms over the last few months?"
- "What questions should I ask my provider about this result?"

**Not helpful:**

- "Do I have this condition?"
- "Should I start or stop this medication?"
- "Is this safe for me instead of seeing a doctor?"

## The Better Question

So, is ChatGPT Health safe?

It can be—when used as a supplemental educational tool rather than a substitute for care.

The more important question remains:

**How do we use ChatGPT Health well, in a way that supports informed patients while keeping clinical judgment and accountability where they belong?**

AI may change how information is accessed, but it does not replace the foundations of good medicine: individualized care, professional judgment, and ethical responsibility.

---

If you're looking for personalized support in understanding your health data, a [Functional Lab Review](/services/lab-review.html) can provide context and clarity that AI alone cannot offer—with the benefit of professional interpretation tailored to your unique situation.

## References

Futurism. (2026). OpenAI's ChatGPT Health raises concerns about medical use. [https://futurism.com/artificial-intelligence/chatgpt-health-medical-records-diagnosis](https://futurism.com/artificial-intelligence/chatgpt-health-medical-records-diagnosis)

OpenAI. (2026). What is ChatGPT Health? [https://help.openai.com/en/articles/20001036-what-is-chatgpt-health](https://help.openai.com/en/articles/20001036-what-is-chatgpt-health)

Time. (2026). ChatGPT Health and medical record privacy concerns. [https://time.com/7344997/chatgpt-health-medical-records-privacy-open-ai/](https://time.com/7344997/chatgpt-health-medical-records-privacy-open-ai/)
    `,
    disclaimer: `This content is for educational and informational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. It does not replace individualized medical advice, diagnosis, or treatment. Readers should consult their licensed healthcare provider regarding personal health concerns.

Any individuals depicted in images on this website or associated content are models or stock photography subjects and are not patients, clients, or recipients of services from Intention Holistic Health. Images are used for illustrative purposes only and do not represent clinical relationships, medical outcomes, or specific health conditions.

Intention Holistic Health provides educational wellness guidance and, where applicable, Kentucky-based nurse practitioner services within scope and licensure.`,
    faqs: [
      {
        question: "Is ChatGPT Health safe to use?",
        answer: "ChatGPT Health is safest when used as an educational and organizational tool—not as a decision-maker. It is not a licensed medical provider and should not be used for diagnosis or treatment decisions. Use it to understand medical terminology, prepare questions for appointments, and notice patterns in your data, but always discuss findings with your healthcare provider."
      },
      {
        question: "Is my health data private on ChatGPT Health?",
        answer: "ChatGPT Health is not covered by HIPAA, meaning your uploaded health information is protected by OpenAI's privacy policies rather than healthcare law. Be intentional about what you share—use it to understand information rather than as long-term storage for sensitive medical records."
      },
      {
        question: "What should I NOT use ChatGPT Health for?",
        answer: "Avoid using ChatGPT Health for self-diagnosis, making treatment decisions, or replacing emergency care. AI cannot perform physical exams, assess urgency, rule out serious conditions, or account for your full medical history, medication interactions, or individual risk factors."
      }
    ],
    schema: {
      description: "Learn how to use ChatGPT Health safely and responsibly. Understand what AI health tools can and cannot do, privacy considerations, and how to use them to support—not replace—clinical care."
    }
  },
  {
    slug: '2025-01-15-minerals-from-food',
    title: '"Can\'t I Get Enough Minerals From Food?"',
    date: '2025-01-15',
    author: 'Alicia Harrison, MSN, APRN, FNP-C',
    excerpt: 'Food should always be the foundation. But for many women today, food alone is not reliably sufficient to meet mineral needs—especially during seasons of stress, pregnancy, postpartum, or long-term depletion.',
    image: '/images/blog/minerals-from-food.webp',
    cardAspectRatio: '83.83%',
    imageAspectRatio: '83.83%',
    categories: ['wellness', 'foundations'],
    content: `
# "Can't I Get Enough Minerals From Food?"

This is one of the most reasonable—and important—questions a woman can ask when she starts learning about mineral health.

If we believe in whole foods.

If we prioritize a nourishing diet.

If we cook at home, choose organic when possible, and aim for balance…

Shouldn't food be enough?

In an ideal world, the answer would be yes.

But modern nutrition exists in a very different context than it did even a few generations ago. When we look closely—through soil quality, food supply changes, physiologic demand, and individual depletion patterns—the answer becomes more nuanced.

The truth is this:

Food should always be the foundation.

But for many women today, food alone is not reliably sufficient to meet mineral needs—especially during seasons of stress, pregnancy, postpartum, or long-term depletion.

Let's unpack why.

## The Role of Minerals in the Female Body

Minerals are not "extra." They are structural, regulatory, and foundational.

They are involved in:

- Energy production and mitochondrial function
- Blood sugar regulation
- Thyroid hormone signaling
- Stress response and adrenal hormone production
- Hormone synthesis and receptor sensitivity
- Muscle contraction and relaxation
- Nervous system function
- Bone density and connective tissue integrity
- Detoxification enzyme activity

Minerals act as cofactors for hundreds of enzymatic reactions; without adequate mineral availability, these reactions cannot proceed efficiently (Institute of Medicine, 2006; CDC, 2024).

Unlike vitamins, minerals cannot be synthesized by the body. Every atom must come from external sources—primarily food. And unlike macronutrients, mineral insufficiency does not reliably trigger hunger cues. A woman can eat adequate calories and still be mineral depleted.

## The Ideal vs. the Reality of Food-Based Nutrition

**In theory**

A well-balanced, whole-food diet can meet mineral requirements.

**In practice**

Many women eat "well" and still show signs of mineral inadequacy.

Large-scale dietary modeling studies confirm that global and national mineral inadequacy is widespread, even in food-secure populations.

A 2024 Lancet Global Health analysis estimated that:

- Over 5 billion people have inadequate intakes of calcium and iodine
- Over 4 billion have inadequate iron intake
- Women are disproportionately affected, particularly for iron, iodine, selenium, and vitamin B12 (Smith et al., 2024).

This is, unfortunately, a systems-level reality.

## 1. Modern Soil Mineral Depletion Is Real

Plants obtain minerals from soil. When soil mineral content declines, the mineral density of food declines as well.

Comparisons of U.S. Department of Agriculture food composition data show statistically significant reductions in magnesium, calcium, iron, and zinc in commonly consumed fruits and vegetables over the latter half of the 20th century (Davis et al., 2004). More recent agricultural analyses confirm that intensive farming practices continue to favor yield over mineral density (Welch & Graham, 2005).

Synthetic fertilizers replace nitrogen, phosphorus, and potassium (N-P-K), but do not restore trace minerals, including magnesium, selenium, copper, and zinc. As a result, even nutrient-dense diets may provide lower mineral content per calorie than similar diets decades ago.

This does not mean food is inadequate—but it does mean food is working harder than it used to.

## 2. Increased Physiologic Demand in Women

Women are not static systems.

Mineral requirements rise significantly during:

- Pregnancy
- Postpartum recovery
- Breastfeeding
- Chronic psychological or physiologic stress
- Heavy menstrual bleeding
- Illness or inflammation

Pregnancy alone increases blood volume by approximately 40–50%, substantially raising requirements for iron, iodine, magnesium, calcium, zinc, and sodium (AJOG, 2021; IOM, 2006).

Despite supplementation, nutrient gaps remain common. An analysis of U.S. pregnant women found that:

- 47.5% fell below the Estimated Average Requirement (EAR) for magnesium
- 46.4% for vitamin D
- 36.2% for iron
- 43.3% for vitamin E (Bailey et al., 2019).

This indicates that even with supplements, meeting mineral needs during pregnancy can be challenging—highlighting the degree of increased demand.

## 3. Absorption Matters as Much as Intake

Eating minerals does not guarantee absorption.

Bioavailability is influenced by:

- Stomach acid production
- Digestive enzyme output
- Intestinal inflammation
- Gut microbiome composition
- Presence of competing compounds

Phytates (found in grains and legumes), oxalates (found in some greens), and mineral competition (such as calcium inhibiting iron absorption) can significantly reduce absorption from food alone (Gibson et al., 2003).

Additionally, stress, medications, and gut disorders may impair mineral transport, meaning two women consuming similar diets may absorb very different amounts.

## 4. The Stress–Mineral Depletion Loop

Stress significantly alters mineral metabolism.

Physiologic stress increases:

- Urinary magnesium losses
- Demand for sodium and potassium
- Cortisol production, which depends on mineral cofactors (Lukaski, 2004).

Even non-pathologic stress—poor sleep, mental load, caregiving, postpartum transitions—has measurable effects on mineral requirements.

This explains why mineral insufficiency often appears during life transitions rather than periods of dietary neglect.

## 5. Detoxification Competes for Mineral Resources

Minerals are essential cofactors for hepatic detoxification enzymes.

As exposure to environmental chemicals increases—through food packaging, personal care products, pesticides, and water contaminants—the body reallocates mineral resources toward detoxification and basic survival processes.

When mineral availability is limited, other systems—hormonal regulation, mood stability, energy production—often experience secondary effects.

This is a prioritization issue, not a pathology.

## 6. What Does a "Mineral-Rich Diet" Actually Provide?

Mineral-dense foods include:

- Leafy greens (magnesium, calcium)
- Nuts and seeds (magnesium, zinc)
- Shellfish and red meat (iron, zinc)
- Legumes and whole grains (magnesium, potassium)
- Dairy and small fish with bones (calcium)

Despite this, U.S. dietary surveys consistently show suboptimal intakes of magnesium, calcium, iron, iodine, and potassium among women of reproductive age (JAMA Network Open, 2024; CDC, 2024).

Approximately 1 in 8 U.S. women aged 12–49 has iron deficiency, and reliance on supplements to meet iron needs has increased as dietary intake has declined (JAMA Network Open, 2024).

## 7. Why Standard Labs Often Miss Mineral Depletion

Most mineral insufficiency develops intracellularly long before serum levels fall.

Blood concentrations are tightly regulated. The body will mobilize minerals from tissue and bone to preserve serum levels, masking early depletion.

This is why many women experience fatigue, anxiety, sleep disruption, PMS, muscle tension, or hair shedding despite "normal" labs—a phenomenon well described in mineral metabolism literature (Grober et al., 2015).

[Hair Tissue Mineral Analysis (HTMA)](/htma.html) offers a different window into mineral status, assessing tissue levels rather than serum concentrations.

## 8. Should Everyone Supplement?

No.

But many women benefit from targeted supplementation, particularly for:

- Iron
- Folate
- Magnesium
- Iodine
- Vitamin D

Major medical and dietetic organizations agree that diet should be the primary source of nutrients, with supplementation used when intake is inadequate or needs are increased (Academy of Nutrition and Dietetics, 2018; USPSTF, 2022).

The key is individualization—guided by diet, labs, and life stage.

## 9. Risks and Benefits of Supplementation

**Benefits**

- Correction of deficiencies
- Improved maternal and fetal outcomes
- Support during high-demand life stages (WHO, 2020; AJOG, 2021)

**Risks**

- Excess intake, particularly of iron, calcium, and vitamin D
- Gastrointestinal effects
- Potential interactions with medications (BMJ, 2020)

This is why supplementation should be intentional, monitored, and not blanket-based.

## Bringing It All Together

So—can you get enough minerals from food?

The dreaded answer…

Sometimes.

For some women.

In certain seasons.

But modern dietary patterns, agricultural practices, and physiologic demands mean that food alone is often insufficient for women, particularly during pregnancy, postpartum, and periods of chronic stress.

Food remains the foundation.

Targeted, personalized supplementation, when appropriate, is a tool to help restore + replenish.

If you're curious about your own mineral status, a [Functional Lab Review](/services/lab-review.html) or [HTMA testing](/htma.html) can provide personalized insight into what your body actually needs.

## References

Bailey, R. L., Pac, S. G., Fulgoni, V. L., Reidy, K. C., & Catalano, P. M. (2019). Estimation of total usual dietary intakes of pregnant women in the United States. *The Journal of Nutrition*, 149(11), 1910–1919.

Centers for Disease Control and Prevention. (2024). Micronutrients.

Davis, D. R., Epp, M. D., & Riordan, H. D. (2004). Changes in USDA food composition data for 43 garden crops, 1950–1999. *Journal of the American College of Nutrition*, 23(6), 669–682.

Gibson, R. S., Perlas, L., & Hotz, C. (2003). Improving the bioavailability of nutrients in plant foods at the household level. *Proceedings of the Nutrition Society*, 62(2), 365–375.

Institute of Medicine. (2006). *Dietary reference intakes: The essential guide to nutrient requirements*. National Academies Press.

JAMA Network Open. (2024). Macronutrient and micronutrient intake among U.S. women aged 20 to 44 years. *JAMA Network Open*, 7(1), e2354768.

Lukaski, H. C. (2004). Vitamin and mineral status: Effects on physical performance. *Nutrition*, 20(7–8), 632–644.

Smith, M. R., Micha, R., Golden, C. D., Mozaffarian, D., & Myers, S. S. (2024). Global estimation of dietary micronutrient inadequacies: A modelling analysis. *The Lancet Global Health*, 12(7), e1042–e1052.

Welch, R. M., & Graham, R. D. (2005). Agriculture: The real nexus for enhancing bioavailable micronutrients in food crops. *Journal of Trace Elements in Medicine and Biology*, 18(4), 299–307.
    `,
    disclaimer: `This content is for educational and informational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. It does not replace individualized medical advice, diagnosis, or treatment. Readers should consult their licensed healthcare provider regarding personal health concerns.

Any individuals depicted in images on this website or associated content are models or stock photography subjects and are not patients, clients, or recipients of services from Intention Holistic Health. Images are used for illustrative purposes only and do not represent clinical relationships, medical outcomes, or specific health conditions.

Intention Holistic Health provides educational wellness guidance and, where applicable, Kentucky-based nurse practitioner services within scope and licensure.`,
    faqs: [
      {
        question: "Can I get enough minerals from food alone?",
        answer: "Sometimes, for some women, in certain seasons. Food should always be the foundation. But modern dietary patterns, agricultural practices, and increased physiologic demands mean that food alone is often insufficient for women—particularly during pregnancy, postpartum, and periods of chronic stress. Targeted, personalized supplementation can help fill gaps."
      },
      {
        question: "Why do my labs show normal mineral levels when I have symptoms?",
        answer: "Most mineral insufficiency develops intracellularly long before serum levels fall. Blood concentrations are tightly regulated—the body will mobilize minerals from tissue and bone to preserve serum levels, masking early depletion. This is why many women experience fatigue, anxiety, sleep disruption, or hair shedding despite 'normal' labs. HTMA testing offers a different window into tissue mineral status."
      },
      {
        question: "What minerals are women most commonly deficient in?",
        answer: "U.S. dietary surveys consistently show suboptimal intakes of magnesium, calcium, iron, iodine, and potassium among women of reproductive age. Approximately 1 in 8 U.S. women aged 12–49 has iron deficiency. Women are disproportionately affected by mineral inadequacy, particularly for iron, iodine, selenium, and vitamin B12."
      }
    ],
    schema: {
      description: "Learn why food alone may not provide enough minerals for women, especially during pregnancy, postpartum, and stress. Understand soil depletion, absorption factors, and when supplementation helps."
    }
  },
  {
    slug: '2025-01-09-labs-normal-feel-off',
    title: 'Why Your Labs Came Back "Normal" (But You Still Feel Off)',
    date: '2025-01-09',
    author: 'Alicia Harrison, MSN, APRN, FNP-C',
    excerpt: 'You got your blood work done, waited for results, and everything looks "normal." But you don\'t feel normal. Your symptoms are real—here\'s why standard labs might not tell the whole story.',
    image: '/images/blog/labs-normal-feel-off.webp',
    cardAspectRatio: '83.83%',
    imageAspectRatio: '83.83%',
    categories: ['wellness', 'foundations'],
    content: `
# Why Your Labs Came Back "Normal" (But You Still Feel Off)

It is a scenario I see constantly in my practice.

The story usually goes like this: You feel off. It's not just "tired"—it's a deep fatigue that sleep doesn't fix. Maybe you are noticing changes in your hair texture, your mood feels unstable, or you have brain fog that makes it hard to focus.

You know something isn't right. So, you do the responsible thing: you see your primary care provider. You get blood work done. You wait.

And then you get the notification: "Everything looks normal."

But you don't feel normal.

You might leave that appointment feeling confused or wondering if stress is the only culprit. I am writing this today to validate you: **Your symptoms are real.**

However, the "normal" result on your lab report might not tell the whole story of your health.

## Understanding Reference Ranges

To understand why your labs might look "fine" even when you feel unwell, it is helpful to understand how standard reference ranges are often established.

In the conventional medical model, reference ranges are generally based on a statistical bell curve of the population that utilizes that lab.

- **The Goal of Standard Ranges:** These ranges are designed primarily to identify pathology (diagnosable disease states). They are excellent for flagging acute illnesses or organ failure.
- **The Limitation:** Being "in range" simply means you do not currently meet the criteria for a specific disease diagnosis.

However, the absence of disease does not always equal the presence of vitality.

## The Approach: Normal vs. Optimal

I view health through a functional lens. This means I am not just checking to see if you are "safe" from immediate danger; I am looking at how to support your body's function so you can feel your best.

There is often a gap between "medically normal" and "functionally optimal."

### Example 1: Thyroid Health

- **The "Standard" View:** A standard TSH (Thyroid Stimulating Hormone) reference range is quite broad. If a patient falls within this wide range, they are typically considered to have normal thyroid function.
- **The "Functional" View:** In functional medicine, we often observe that women report feeling their best—with better energy and mood—when their TSH falls within a much narrower, "optimal" range. A result that is technically "normal" but on the high end of the spectrum might still correlate with symptoms of fatigue for some women.

### Example 2: Iron Stores (Ferritin)

- **The "Standard" View:** Reference ranges for Ferritin (stored iron) can go quite low before flagging as "abnormal."
- **The "Functional" View:** While a lower number might not indicate clinical anemia, it may not be sufficient to support optimal hair growth or sustained energy levels. We look at these numbers to ensure your body has the "reserves" it needs to thrive, not just survive.

## Bridging the Gap

Conventional medicine is essential for acute care and disease management. We need those standard protocols.

But for chronic wellness—for supporting fertility, postpartum recovery, and daily energy—we often need to ask different questions.

**Optimal health asks:**

- Does the body have the nutrient density it needs?
- Are we supporting the nervous system?
- Is the gut absorbing nutrients effectively?

## What To Do Next

If you have been told your labs are "normal" but you continue to experience symptoms, it is okay to ask more questions.

If you are looking for a different perspective on your health data, I offer [Functional Lab Reviews](/services/lab-review.html). This service allows us to review your existing labs through a functional lens to identify areas where your body may need more support.

With love + intention,

Alicia
    `,
    disclaimer: "The content provided in this article is for educational and informational purposes only and does not constitute medical advice, diagnosis, or treatment. It is not intended to establish a patient-provider relationship. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Do not disregard professional medical advice or delay in seeking it because of something you have read on this website. Alicia is a Family Nurse Practitioner licensed in Kentucky; services provided to clients outside of this jurisdiction are limited to wellness education.",
    faqs: [
      {
        question: "Why do my labs come back normal when I feel unwell?",
        answer: "Standard lab reference ranges are designed primarily to identify disease states, not to assess optimal function. Being 'in range' simply means you don't currently meet criteria for a specific disease diagnosis. However, the absence of disease doesn't always equal the presence of vitality—there's often a gap between 'medically normal' and 'functionally optimal.'"
      },
      {
        question: "What is the difference between normal and optimal lab values?",
        answer: "Normal ranges are broad and based on statistical averages of the population using that lab. Optimal ranges are narrower and focus on the levels where people typically feel their best. For example, a TSH that's technically 'normal' but on the high end might still correlate with fatigue symptoms for some women."
      },
      {
        question: "What should I do if my labs are normal but I still have symptoms?",
        answer: "It's okay to ask more questions. Consider seeking a functional perspective on your health data. A Functional Lab Review can help identify areas where your body may need more support, looking at whether you have optimal nutrient density, nervous system support, and effective gut absorption."
      }
    ],
    schema: {
      description: "Learn why your lab results might show 'normal' while you still feel off. Understand the difference between standard reference ranges and optimal functional ranges for thyroid, iron, and more."
    }
  },
  {
    slug: '2024-12-15-holiday-wellness',
    title: 'Holiday Wellness for Women: Staying Grounded Without Extremes',
    date: '2024-12-15',
    author: 'Alicia Harrison, MSN, APRN, FNP-C',
    excerpt: 'The holidays tend to bring a lot to the surface. Not because anyone is doing something wrong — but because life gets fuller all at once.',
    image: '/images/blog/holiday-wellness.webp',
    cardAspectRatio: '56.22%',    // 900x506 image
    imageAspectRatio: '56.22%',
    categories: ['wellness', 'foundations'],
    content: `
# Holiday Wellness for Women: Staying Grounded Without Extremes

The holidays tend to bring a lot to the surface.

Not because anyone is doing something wrong — but because life gets fuller all at once. More people. More food. More commitments. More emotion. At the same time, routines soften, schedules shift, and there's often less margin than usual.

Most women aren't sitting down and thoughtfully reassessing their wellness during these busy weeks. They're moving fast, juggling responsibilities, showing up for others, and realizing somewhere along the way that they feel more tired, more off-rhythm, or a little disconnected from themselves — without having much space to slow down and name it.

This week alone, I've had more than one patient say, "But it's the holidays." Some may use that phrase as an excuse, but, for most I find that it's more of an acknowledgment that the usual ways of taking care of themselves feel harder right now.

And that makes sense.

The environment around you has changed. When that happens, the goal isn't to force yourself to function the same way — it's to find small ways to stay supported within the season you're actually living in.

## When the Pressure to "Stay on Track" Sneaks In

Around the holidays, there's often an unspoken pressure to either hold everything together perfectly or mentally check out until January. That pressure can quietly show up as guilt, self-criticism, or the sense that you're already behind.

When those thoughts come up, one helpful step is simply noticing them without correcting yourself. Naming "this is pressure, not reality" can create a surprising amount of relief. Another supportive shift is narrowing your focus: instead of trying to maintain everything, choose one area of health to gently prioritize this week — sleep, regular meals, or movement — and let the rest be flexible.

It can also help to remind yourself that progress isn't erased by a season. Your body responds to patterns over time, not to a few days or weeks of change. Repeating that truth when guilt creeps in can help interrupt the urge to give up altogether.

## Anchors That Still Work When Life Is Full

During the holidays, it's rarely realistic to keep every routine in place. What is realistic is choosing a few simple anchors — familiar habits that help your body feel steady even when schedules are unpredictable.

An anchor might be eating a [nourishing breakfast](/blog/post.html?post=2024-10-15-probiotic-smoothie-bowl) most mornings so blood sugar doesn't swing all day. It could be drinking water consistently before noon, stepping outside for a short walk or sunlight exposure, or keeping a familiar bedtime window when possible.

These anchors work best when they're portable. Something you can do whether you're at home, traveling, or hosting. You don't need many — one or two is enough to keep your nervous system oriented.

## Food Without the Weight of Guilt

Food carries extra meaning during the holidays. It's tied to tradition, comfort, memory, and connection. Enjoying it doesn't mean you've stepped away from your health.

One practical way to support your body during this season is to eat regularly throughout the day, rather than skipping meals to "balance things out" later. This often helps energy, digestion, and mood more than restriction ever could.

Another helpful tool is slowing meals down when you can — even just taking a few deep breaths before eating or sitting down instead of eating on the go. And when holiday meals are over, returning to familiar foods the next day without compensating or "resetting" helps keep your body in rhythm.

There is no moral scorecard attached to what you eat.

## Awareness Without Rules or Extremes

Alcohol and sweets tend to show up more frequently this time of year. Awareness here doesn't need to become rigid or restrictive.

One gentle strategy is alternating alcohol with water or choosing earlier-in-the-evening drinks so sleep isn't as disrupted. Another is paying attention to how certain choices affect you the next day — not to judge yourself, but to guide future decisions.

## Protecting Rest Where You Can

Sleep is often the quiet casualty of the holiday season. Late nights, travel, and gatherings add up quickly.

Perfect sleep isn't realistic for most women right now, but small efforts still matter. Keeping wake times similar from day to day can help your body stay regulated, even if bedtime shifts. Getting morning light exposure (even a few minutes) supports your circadian rhythm.

Creating a simple wind-down cue can also help. That might look like stretching, reading, prayer, or putting your phone away ten minutes earlier than usual. These signals tell your nervous system it's safe to rest.

## Movement That Feels Supportive

Movement during the holidays doesn't need to be intense or structured to count.

Walking after meals can support digestion and blood sugar. Stretching before bed can help your body release tension. Even a few minutes of movement between commitments can help clear your head and regulate stress.

If formal workouts don't fit right now, that's okay. The goal is to keep your body moving in ways that feel supportive, not punishing.

## Letting Wellness Fit Into Real Life

One of the most overlooked parts of women's wellness is joy.

Connection, laughter, shared meals, and meaningful traditions all contribute to wellbeing. Making space for moments that feel life-giving is a form of care. That might mean saying no to one obligation, building in a quiet morning, or letting yourself be fully present instead of mentally tracking what you "should" be doing.

Wellness was never meant to pull you out of the season you're living in.

You don't need a full reset come January.

You don't need to make up for anything.

You don't need to do this perfectly.

Staying gently connected to yourself through nourishment, rest, movement, and self-compassion is more than enough. Even during the holidays.

Merry Christmas! Stay well my friends,

Alicia
    `,
    disclaimer: `This content is for educational and informational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. It does not replace individualized medical advice, diagnosis, or treatment. Readers should consult their licensed healthcare provider regarding personal health concerns.

Any individuals depicted in images on this website or associated content are models or stock photography subjects and are not patients, clients, or recipients of services from Intention Holistic Health. Images are used for illustrative purposes only and do not represent clinical relationships, medical outcomes, or specific health conditions.

Intention Holistic Health provides educational wellness guidance and, where applicable, Kentucky-based nurse practitioner services within scope and licensure.`,
    faqs: [
      {
        question: "How can I maintain my health goals during the holidays?",
        answer: "Focus on choosing a few simple anchors—familiar habits that help your body feel steady even when schedules are unpredictable. An anchor might be eating a nourishing breakfast most mornings, drinking water consistently before noon, or keeping a familiar bedtime window when possible. You don't need many—one or two is enough."
      },
      {
        question: "How do I handle food guilt during holiday gatherings?",
        answer: "There is no moral scorecard attached to what you eat. Enjoying holiday food doesn't mean you've stepped away from your health. Try to eat regularly throughout the day rather than skipping meals to 'balance things out' later, and return to familiar foods the next day without compensating or 'resetting.'"
      },
      {
        question: "What's the most important wellness habit to maintain during busy seasons?",
        answer: "Rest is one of the most impactful habits to protect. Sleep directly influences fertility, cortisol rhythms, metabolic health, and emotional wellbeing. Small efforts still matter—try keeping wake times similar from day to day, getting morning light exposure, and creating a simple wind-down cue before bed."
      }
    ],
    schema: {
      description: "Practical tips for maintaining wellness during the holidays without extremes. Learn how to stay grounded with simple anchors, food without guilt, and protected rest."
    }
  },
  {
    slug: '2024-12-01-unmedicated-birth',
    title: 'How I Prepared for an Unmedicated Birth',
    date: '2024-12-01',
    author: 'Alicia Harrison, MSN, APRN, FNP-C',
    excerpt: 'My personal story, not medical advice. Preparing for an unmedicated birth wasn\'t about perfection—it was about intention.',
    image: '/images/blog/unmedicated-birth-new.webp',
    cardAspectRatio: '56.27%',    // 949x534 image
    imageAspectRatio: '56.27%',
    categories: ['preconception'],
    content: `
# How I Prepared for an Unmedicated Birth

*My personal story, not medical advice*

There's something sacred about preparing for birth—especially when you're hoping for an unmedicated experience. For me, the preparation wasn't about proving anything or "muscling through" labor pain. It was about supporting my body, trusting my instinct, and beholding the God who designed birth with such intentional detail.

Every woman's pregnancy, preferences, and medical needs are different, and no two birth stories look the same. This isn't a checklist or a formula. It's simply what I personally chose to do to feel grounded, strong, and supported going into labor.

Below are some ways I prepped physically, emotionally, and spiritually for birth. This list is not exhaustive but they're some of the practices that made the biggest difference for me.

## 1. A Birthing Class Designed for an Unmedicated Birth

There are countless birthing classes out there, but I intentionally chose one that aligned with my goal of an unmedicated labor—[Birthing Naturally](https://www.birthingnaturallydfw.com/) (DFW).

This multi-week course was incredibly valuable for me, but also for my husband. It helped us better understand:

- What's physiologically happening during each stage of labor
- How to advocate for my preferences while remaining flexible
- The mental techniques required for an unmedicated birth
- The importance of rhythm, breath, and instinctual movement
- Natural tools to use for pain management
- Ways my partner could support me physically, mentally and emotionally throughout the stages of labor and into postpartum

More than anything, it gave me confidence. Confidence that my body knew exactly what to do—and that surrender, not control, would be the foundation of my experience. And man, for a type A, desire-for-control personality like my own, that was something I had to hear.

## 2. Staying Active: Walking, Lifting, and Moving with Intention

Movement was a huge part of my pregnancy.

I walked often, lifted weights safely, and focused on functional strength that would support labor and postpartum recovery. Resistance training helped me maintain stability and muscle tone, while walking supported circulation, mobility, and nervous system regulation.

I wasn't chasing fitness goals—I was nurturing a body that would sustain me through one of the most demanding and beautiful physical events of my life.

## 3. Pelvic Floor Therapy: Creating Space & Strength

One of the most impactful things I did throughout pregnancy was pelvic floor therapy (shoutout to [The Fit Pelvis](https://www.thefitpelvis.com/) - McKinney).

Working with a pelvic floor therapist helped me understand what true relaxation feels like (which is just as important as strength). I learned how my breathing patterns influence pelvic floor mobility, practiced positions to create more space in the pelvis, and gained tools that made the pushing stage feel more instinctive and effective. I learned how to work with my body instead of against it.

I also received valuable feedback about areas of weakness and tension in the pelvic floors, and a personalized exercise routine to optimize my muscles.

## 4. Meditation & Mental Preparation

Like I mentioned earlier, so much of labor is mental. It's fascinating the effects that our minds have on the physical processes of labor and delivery. In her book [*Hypnobirthing: Practical Ways to Make Your Birth Better*](https://www.amazon.com/Hypnobirthing-Practical-Ways-Birth-Better/dp/0349419388), Siobhan Miller walks readers through the physiological ramifications of fear on pelvic floor tension and hormone secretion during labor. Reading the details of that process further encouraged me to mentally prepare for birth. Here are a few tools that helped me do this:

### Hypnobabies Course

I completed the [Hypnobabies](https://www.hypnobabies.com/) program during pregnancy, which taught me hypnosis-based relaxation techniques and scripts that supported comfort and calm. These tools became a huge part of my mental preparation, and became part of my nightly routine that helped with my sleep the last month of pregnancy.

### Christian Hypnobirthing (Used During Labor)

During labor, I used the [Christian Hypnobirthing](https://www.christianhypnobirthing.com/) tracks, which grounded me in Scripture, truth, and peace. Hearing affirmations rooted in God's design for birth helped quiet fear and helped me lean fully into the process.

### Headspace Pregnancy & Labor Meditations

I also used [Headspace](https://www.headspace.com/) Pregnancy and Labor meditations. They helped me practice mindful breathing, body awareness, and surrender—skills that translated beautifully into labor.

These practices didn't remove intensity. But they reframed it and helped me stay anchored through each wave.

## 5. Scripture: Seeding the Word in My Mind

In the days leading up to labor, I spent time memorizing Scripture, writing it out, and reflecting on the truth that the Lord designed our bodies with wisdom and purpose.

Birth is not random. Our bodies know what to do—and even our babies have instincts in the birthing process that our Creator lovingly equipped them with.

Again, so much of birth is surrender. Meditating on Scripture helped me release fear, trust the timing, embrace uncertainty, and root myself in peace.

## 6. Nourishment

Another key part of my preparation was food and hydration.

Throughout pregnancy, I focused on nutrient-dense meals and specifically increased my intake of:

- Protein — for steady energy and blood sugar balance
- Choline-rich foods — eggs, salmon, beef
- Potassium-rich foods — bananas, potatoes, coconut water, leafy greens

I also incorporated plenty of whole foods, electrolytes, a high-quality prenatal, and simple meals that were easy to digest as I moved closer to my due date. These weren't strict rules—just intentional choices that helped me feel nourished and supported as my due date approached. [*Nine Golden Months*](https://www.amazon.com/Nine-Golden-Months-Mother-Be/dp/1419751484) was a great resource for recipes and education as it relates to diet during pregnancy too.

## Every Woman's Path is Different

I want to emphasize this clearly:

There is no one right way to prepare for birth—medicated or unmedicated.

Every body is different.

Every pregnancy is different.

Every medical situation is different.

Every version of birth—vaginal, cesarean, medicated, unmedicated—is valid and sacred.

This is simply my story, and the practices that helped me feel supported and aligned with my personal goals.

## A Note on What Helped Me Most

Preparing for an unmedicated birth wasn't about perfection—it was about intention. I focused on practices that supported my body, strengthened my mind, and grounded me spiritually. And while birth unfolded in its own way, these preparations helped me enter the experience feeling peaceful, equipped, and deeply connected to my baby and my Creator.

If you're exploring pregnancy or preparing for birth and want guidance on building a nourishing foundation, [Intention Holistic Health offers support](/services/) that meets you where you are in preconception, pregnancy, and postpartum. Learn more about [preparing your body for pregnancy](/blog/post.html?post=2024-11-15-body-first-home).

All my love,

Alicia
    `,
    disclaimer: `This blog is for informational and educational purposes only. It reflects my personal experience and is not medical advice or a substitute for individualized care. Always consult a qualified healthcare provider before making decisions about pregnancy, labor, or medical care.`,
    faqs: [
      {
        question: "Is it possible to have an unmedicated birth?",
        answer: "Yes, many women have unmedicated births. Every woman's pregnancy, preferences, and medical needs are different, and no two birth stories look the same. With proper preparation—physical, mental, and spiritual—many women find they can work with their body through labor using relaxation techniques, breathing, and support from their birth team."
      },
      {
        question: "How important is mental preparation for labor?",
        answer: "Mental preparation is crucial. So much of labor is mental—our minds have fascinating effects on the physical processes of labor and delivery. Fear can increase pelvic floor tension and affect hormone secretion during labor. Tools like hypnobirthing, meditation, and Scripture can help quiet fear and help you lean into the process."
      },
      {
        question: "Do I need a special class for unmedicated birth?",
        answer: "While not required, taking a class designed specifically for unmedicated birth can be incredibly valuable. These classes teach what's physiologically happening during labor, mental techniques, natural pain management tools, and ways your partner can support you. They also help build confidence that your body knows what to do."
      }
    ],
    schema: {
      description: "A nurse practitioner shares her personal journey preparing for unmedicated birth through classes, pelvic floor therapy, meditation, Scripture, and nourishment."
    }
  },
  {
    slug: '2024-11-15-body-first-home',
    title: 'Your Body Is the First Home: Returning to the Foundations That Support Fertility and Pregnancy Health',
    date: '2024-11-15',
    author: 'Alicia Harrison, MSN, APRN, FNP-C',
    excerpt: 'You don\'t need perfection to prepare for pregnancy — you need foundations.',
    image: '/images/blog/body-first-home-new.webp',
    cardAspectRatio: '56.22%',    // 900x506 image
    imageAspectRatio: '56.22%',
    categories: ['preconception', 'foundations'],
    content: `
# Your Body Is the First Home: Returning to the Foundations That Support Fertility and Pregnancy Health

Many women feel overwhelmed when they begin thinking about pregnancy. Some wonder whether they're behind, while others don't realize that preparation even matters until the desire for a baby becomes real.

Here's the truth your body already knows: you don't need perfection to prepare for pregnancy — you need foundations. And these foundations matter not only for fertility and conception, but for long-term hormone health, metabolic resilience, and generational wellness.

Research consistently shows that preconception nutrition, sleep quality, stress patterns, environmental exposures, and nutrient status influence hormone balance, ovulation, early fetal development, and maternal health outcomes. These are not trends — they are core physiological processes women were never taught to support.

*This article is for educational purposes only and not medical advice.*

## Foundation 1: Nourishment That Steadies Hormones and Blood Sugar

A preconception nutrition approach isn't about restriction — it's about stability. When blood sugar rises and falls gently, your hormones communicate more effectively, inflammation is reduced, and energy remains steadier throughout the day. Research shows that balanced dietary patterns support metabolic and gestational health even before pregnancy begins.

Simple shifts such as beginning the day with protein, adding fiber and color to meals, and choosing snacks that provide sustained energy help create a nourished internal environment that supports ovulation, cycle health, and mood.

## Foundation 2: Mineral Replenishment in a World That Depletes Women

Hydration is more than drinking water — it's about restoring electrolytes and minerals that influence blood volume, energy production, thyroid health, and early pregnancy physiology. Minerals are crucial during preconception because blood volume expansion and hormonal changes begin early and require adequate micronutrients.

Modern stress, heavy menstrual periods, and nutrient-depleted diets can leave women running on low reserves. [Hair Tissue Mineral Analysis (HTMA)](/htma.html) is a great tool used at Intention for providing insights into individual mineral needs. Restoring minerals through mineral-rich water, leafy greens, beans, nuts, seeds, and dried fruit provides foundational support for hormone balance and whole-body resilience.

## Foundation 3: Movement as Rhythm — Not Perfection

Movement is one of the most supportive ways to prepare the body for conception and pregnancy. Consistent physical activity improves insulin sensitivity, supports fertility, enhances circulation, and strengthens the musculoskeletal system needed for pregnancy and postpartum adaptation.

The goal is not intense workouts — it's rhythm. Gentle strength training, walking, stretching, and mobility work help build a body that is stable, adaptable, and prepared for the physical demands of motherhood.

## Foundation 4: Nervous System Regulation and Rest for Hormone Balance

Sleep and stress patterns directly influence fertility, cortisol rhythms, metabolic health, and emotional wellbeing. Poor sleep and chronic stress dysregulate the hypothalamic-pituitary-ovarian axis, affecting ovulation and hormone balance. Sleep disturbances are also associated with increased mood symptoms and complications during pregnancy.

Simple rhythms — stepping outside for morning light, winding down before bed, practicing breathwork, journaling, or prayer — help regulate the nervous system. Rest is not optional; it is foundational to hormonal regulation and women's long-term health.

## Foundation 5: Reducing Harmful Exposures Without Striving for Perfection

Environmental exposures like synthetic fragrances, plasticizers, and certain household chemicals can disrupt endocrine function and increase the body's detoxification burden. Evidence shows that prenatal and preconception exposure to endocrine-disrupting chemicals may influence fetal development and maternal health markers.

[ACOG recommends](https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2013/10/exposure-to-toxic-environmental-agents) minimizing avoidable environmental exposures during preconception and pregnancy to support fertility and healthy fetal development.

Small changes make meaningful impact:

- Avoid microwaving plastic
- Choose fragrance-free personal care products
- Improve home ventilation
- Simplify household cleaners

These shifts gently reduce physiological stress without demanding perfection.

## Foundation 6: A Prenatal Vitamin as an Act of Preparation — Not an Afterthought

One of the most impactful steps in preparing for pregnancy is beginning a prenatal vitamin before conceiving. Neural tube development occurs within the first 3–4 weeks of pregnancy — often before a woman knows she is pregnant. Adequate folate during this period is essential for reducing neural tube defect risk.

The [U.S. Preventive Services Task Force recommends](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/folic-acid-for-the-prevention-of-neural-tube-defects-preventive-medication) that all pregnant-capable women take folate to support early fetal development.

Choosing a prenatal with methylated folate (5-MTHF) supports women who may not efficiently convert synthetic folic acid — a concern affecting up to 40% of the population. High-quality formulas provide methyl-folate, choline, minerals, and omega-3 fatty acids that align with evidence-based nutrient needs.

Beginning a prenatal 3+ months before trying to conceive supports egg maturation, hormonal signaling, and nutritional stores leading into pregnancy — making it both a physiological and symbolic act of care.

## Foundations for a Lifetime of Women's Health

These six foundations are not simply "preconception tips." They are lifelong pillars that support:

- Hormone balance
- Metabolic stability
- Nervous system regulation
- Strong bones and muscle
- Emotional wellbeing
- Smoother postpartum and menopausal transitions

Women who learn these foundations before pregnancy often feel more grounded, more resilient, and more supported throughout motherhood and beyond.

## A Gentle Path Forward

Preconception care does not need to be overwhelming. It's about reconnecting with the rhythms your physiology is already built upon and nourishing your body with intention.

If you want personalized support during preconception, pregnancy, or postpartum, the [Intentional Mama Programs](/services/) and [Lab Review Services](/services/lab-review.html) at Intention Holistic Health provide individualized guidance to honor your body's physiology and your season of life.

Your body is the first home your baby will ever know. Caring for it with intention is an act of love that extends far beyond pregnancy — shaping the health of generations to come.

With love + intention,

Alicia
    `,
    disclaimer: `This article is for educational purposes only and is not medical advice. It does not establish a provider–patient relationship. Always consult your healthcare provider for guidance about your personal health. Clinical services at Intention Holistic Health PLLC are available only to Kentucky residents.`,
    faqs: [
      {
        question: "How long before trying to conceive should I start preparing?",
        answer: "Ideally, begin preconception preparation 3-6 months before trying to conceive. This gives time for egg maturation (which takes about 90 days), allows you to replenish nutrient stores, establish healthy habits, and begin a prenatal vitamin. Neural tube development occurs within the first 3-4 weeks of pregnancy—often before a woman knows she's pregnant—so early preparation is valuable."
      },
      {
        question: "Is it too late to start preconception care?",
        answer: "It's never too late to start. While 3-6 months is ideal, any amount of preparation is beneficial. The foundations discussed—nourishment, mineral replenishment, movement, nervous system regulation, reducing harmful exposures, and prenatal vitamins—support not just fertility but lifelong hormone health and generational wellness."
      },
      {
        question: "Do I need special supplements for preconception?",
        answer: "At minimum, begin a prenatal vitamin with methylated folate (5-MTHF) before conceiving. Up to 40% of the population doesn't efficiently convert synthetic folic acid. High-quality formulas include methylated folate, choline, minerals, and omega-3 fatty acids. HTMA testing can also help identify individual mineral needs."
      }
    ],
    schema: {
      description: "Learn the 6 foundations for preconception health: nourishment, minerals, movement, rest, reducing exposures, and prenatal vitamins to support fertility and pregnancy."
    }
  },
  {
    slug: '2024-05-15-mental-health-pcos',
    title: 'May is Mental Health Awareness Month',
    date: '2024-05-15',
    author: 'Alicia Harrison, MSN, APRN, FNP-C',
    excerpt: 'Women with PCOS experience anxiety and depression 3x more often than women without the condition. Let\'s talk about practical ways to support your mental health.',
    image: '/images/blog/mental-health-pcos.webp',
    cardAspectRatio: '56.27%',    // 949x534 image
    imageAspectRatio: '56.27%',
    categories: ['pcos', 'wellness'],
    content: `
# May is Mental Health Awareness Month

May is Mental Health Month—a topic that is personally meaningful to me. The statistics are concerning: women with PCOS face an 8.5x higher risk of suicide attempt than those without the condition and experience anxiety and depression 3x more often than women without PCOS. Understanding the [gut-brain connection](/blog/post.html?post=2024-10-01-gut-health-pcos) is key to understanding why.

These aren't just statistics—they represent real women who are struggling. Understanding the intersection of hormone health and mental wellness through holistic approaches that consider biological factors is essential.

## 9 Practical Tips for Mental Health Support

### 1. Hydration

Drink half your body weight in ounces daily (water, herbal tea, coconut water) to reduce agitation and anxiety. Proper hydration affects brain function and mood more than most people realize.

### 2. Sleep

Aim for eight+ hours nightly. Journal worries before bed, meditate on five positive daily occurrences, and consider magnesium supplements to support restful sleep.

### 3. Sunlight

Get 15+ minutes of direct eye exposure within 30 minutes of waking to boost energy, mood, and sleep quality. Morning light exposure is one of the most powerful regulators of your circadian rhythm.

### 4. Blood Sugar Regulation

Consume protein and healthy fats before carbs. Break fasts with protein-fat-fiber combinations and move ten minutes post-meals to support stable blood sugar and reduce mood swings. Getting a [lab review](/services/lab-review.html) can help you understand your blood sugar patterns.

### 5. Breathwork

Practice extended exhale breathing (4-in, 8-out) or square breathing (4-4-4-4 pattern) for mental clarity and stress resilience. Even a few minutes can shift your nervous system state.

### 6. Grounding Exercises

Use sensory awareness when feeling overwhelmed: name five things seen, four felt, three heard, two smelled, one tasted. This 5-4-3-2-1 technique brings you back to the present moment.

### 7. Vitamin D Optimization

Have levels checked and target 60+ ng/mL with appropriate D3+K2 supplementation to address depressive symptoms. Low vitamin D is common in women with PCOS.

### 8. Omega-3 Supplementation

Consume low-mercury fatty fish 2-3 weekly or quality omega-3 supplements for brain and inflammation support. These essential fats are crucial for mental health.

### 9. Alcohol Avoidance

Limit or eliminate alcohol consumption, which functions as a depressant and triggers rebound anxiety. Alcohol also disrupts sleep and blood sugar balance.

## You're Not Alone

If you're struggling with PCOS and mental health, please reach out—to a professional, a friend, or a support group. You don't have to carry this alone. If you're in crisis, the [988 Suicide & Crisis Lifeline](https://988lifeline.org/) is available 24/7 by calling or texting 988.

Want more tips? Download the complimentary **Holistic Habits Checklist** for additional wellness strategies focused on mood support and brain health.
    `,
    disclaimer: `The information provided in this blog is for educational and informational purposes only and is not intended to serve as medical advice, diagnosis, or treatment. Health decisions require partnership with licensed providers familiar with individual circumstances. Clinical services are available exclusively to Kentucky residents through formal provider-patient relationships.`,
    faqs: [
      {
        question: "Why is mental health more challenging with PCOS?",
        answer: "Women with PCOS face an 8.5x higher risk of suicide attempt and experience anxiety and depression 3x more often than women without PCOS. This is connected to the gut-brain axis—microbiota imbalances link to mood changes. Hormonal fluctuations, insulin resistance, and inflammation also contribute to mental health challenges."
      },
      {
        question: "What's one thing I can do today to support my mental health?",
        answer: "Start with morning sunlight—get 15+ minutes of direct eye exposure within 30 minutes of waking. This simple habit boosts energy, mood, and sleep quality. Morning light exposure is one of the most powerful regulators of your circadian rhythm and has downstream effects on mental wellbeing."
      },
      {
        question: "Should I consider supplements for mood support?",
        answer: "Vitamin D and omega-3 fatty acids are two supplements with research supporting their role in mental health. Have your vitamin D levels checked and target 60+ ng/mL with appropriate D3+K2 supplementation. Omega-3s from fatty fish or quality supplements support brain health and reduce inflammation."
      }
    ],
    schema: {
      description: "9 practical tips for mental health support: hydration, sleep, sunlight, blood sugar, breathwork, grounding, vitamin D, omega-3s, and alcohol awareness for PCOS."
    }
  },
  {
    slug: '2024-10-15-probiotic-smoothie-bowl',
    title: 'Recipe: Probiotic-Rich Smoothie Bowl',
    date: '2024-10-15',
    author: 'Alicia Harrison, MSN, APRN, FNP-C',
    excerpt: 'Looking for a delicious and nutritious way to start your day? This smoothie bowl is packed with fiber, protein, and gut-friendly ingredients.',
    image: '/images/blog/smoothie-bowl-square.webp',
    thumbnail: '/images/blog/smoothie-bowl-square-small.webp',
    cardAspectRatio: '56.25%',    // 1280x720 (16:9) image
    imageAspectRatio: '56.25%',
    categories: ['recipes', 'breakfast', 'pcos'],
    content: `
# Recipe: Probiotic-Rich Smoothie Bowl

Looking for a delicious and nutritious way to start your day? Try this refreshing Probiotic-Rich Smoothie Bowl packed with fiber, protein, and gut-friendly ingredients like coconut water, kefir, yogurt, flax seeds, and hemp hearts. This smoothie bowl is not only tasty but also supports digestive health and provides sustained energy throughout the morning. Smoothies are my favorite way to get in extra nutrients because you can "hide" so much in them! Frozen cauliflower in a smoothie?? Trust me, you can't even taste it, and if you don't like veggies, give it a try! Trying to incorporate adaptogens in your diet? Smoothies are a great way to hide powders, like ashwagandha, while still getting that adrenal support you're looking for. My favorite thing about smoothies is you get to tailor it to your preferences! Play around with it, incorporate new things, tailor the ratios as you need.

## Ingredients

- 1 cup coconut water (be sure to check the label, "coconut water" should be the only ingredient)
- 1/4 cup kefir (plain, full-fat, unsweetened) **optional**
- 3/4 cup yogurt (Organic Whole Milk Greek or dairy-free alternative—check the label, the fewer the ingredients the better!)
- 1 tablespoon flax seeds
- 1 tablespoon hemp hearts
- 1/2-1 cup frozen (preferably organic) low glycemic berries (such as blueberries, raspberries, or strawberries)
- Handful of frozen spinach or kale
- Optional: unflavored collagen, unflavored or vanilla protein powder for extra protein
- Optional: ½ cup frozen cauliflower (for extra fiber & nutrients)
- Optional: ½ tablespoon honey or maple syrup
- Toppings: sliced fruits, nuts, seeds, unsweetened coconut or granola (check out our [Hormone-Friendly Granola Recipe](/blog/post.html?post=2024-09-15-hormone-friendly-granola)!)

## Instructions

1. **Blend Ingredients:** In a blender, combine all ingredients minus toppings. Blend until smooth and creamy.
2. Pour the smoothie into a bowl.
3. **Add Toppings:** Top your smoothie bowl with sliced fruits like berries, kiwi, or banana, nuts (almonds, walnuts), seeds (chia seeds, pumpkin seeds), a sprinkle of granola, Honey Bee Pollen (rich in B vitamins), cocoa nibs (high in antioxidants & delicious), whatever floats your boat!

## Why You'll Love It

- **Probiotic Boost:** Kefir and yogurt are excellent sources of probiotics, which support [gut health](/blog/post.html?post=2024-10-01-gut-health-pcos) and digestion.
- **Fiber-Packed:** Flax seeds and hemp hearts are rich in fiber, promoting satiety, digestive regularity, and blood sugar regulation. Adding cauliflower or other veg increases fiber even more.
- **High Protein:** Greek yogurt is a great source of protein, calcium & vitamin D. Hemp hearts add plant-based protein, perfect for a satisfying breakfast or post-workout snack. Adding collagen or protein powder increases the protein content of the smoothie, supporting muscle repair and satiety.
- **Beneficial Fats:** Flax seeds are rich in alpha-linolenic acid (ALA), a type of omega-3 fatty acid that supports heart health and inflammation reduction. Hemp hearts contain a balanced ratio of omega-3 and omega-6 fatty acids, which are important for brain health and inflammation control.
- **Hydrating:** Coconut water provides electrolytes and hydration without added sugars or artificial ingredients.
- **Natural Sweetness:** Honey provides a touch of sweetness to the smoothie without refined sugars, enhancing flavor. Local honey can also be beneficial for seasonal allergies.

Enjoy this Probiotic-Rich Smoothie Bowl as a nutritious and flavorful way to fuel your day!

All my love,

Intention Holistic Health
    `,
    disclaimer: `Note: Always consult with a healthcare professional before making significant changes to your diet, especially if you have specific health concerns or conditions.`,
    faqs: [
      {
        question: "Can I make this smoothie dairy-free?",
        answer: "Yes! Use a dairy-free yogurt alternative (check the label for minimal ingredients) and skip the kefir or use a dairy-free version. Coconut yogurt or almond milk yogurt work well. The coconut water, hemp hearts, and flax seeds still provide plenty of nutrition."
      },
      {
        question: "How can I increase the protein content?",
        answer: "Add unflavored collagen or protein powder (as noted in the optional ingredients). Greek yogurt is already a great protein source, and hemp hearts add plant-based protein. Together, these can give you 20-30g of protein per bowl—perfect for a satisfying breakfast or post-workout snack."
      },
      {
        question: "Is this smoothie good for blood sugar balance?",
        answer: "Yes! This recipe is designed for blood sugar stability. The combination of protein (yogurt, hemp hearts), healthy fats (flax seeds, hemp hearts), and fiber (berries, vegetables, seeds) helps slow glucose absorption. Using low-glycemic berries like blueberries also supports steady blood sugar levels."
      }
    ],
    schema: {
      description: "A probiotic-rich smoothie bowl recipe with kefir, yogurt, flax seeds, and hemp hearts for gut health, protein, and blood sugar balance."
    }
  },
  {
    slug: '2024-10-01-gut-health-pcos',
    title: 'Gut Health and PCOS: The Missing Piece of the Puzzle',
    date: '2024-10-01',
    author: 'Alicia Harrison, MSN, APRN, FNP-C',
    excerpt: 'The trillions of microorganisms in your gut play crucial roles in hormone regulation and inflammation control. Understanding this connection is key to managing PCOS.',
    image: '/images/blog/gut-health-pcos-new.webp',
    cardAspectRatio: '56.27%',    // 949x534 image
    imageAspectRatio: '56.27%',
    categories: ['pcos', 'foundations'],
    content: `
# Gut Health and PCOS: The Missing Piece of the Puzzle

You might wonder about the connection between your digestive system and PCOS, but this relationship proves crucial for reclaiming vitality when managing this condition.

As a nurse practitioner and wellness practitioner, I've witnessed how prioritizing digestive wellness transforms PCOS symptom management and overall health. Let's explore why this matters.

## The Gut-PCOS Connection

Your digestive tract houses trillions of microorganisms called the gut microbiota. These organisms regulate digestion, nutrient absorption, immunity, and hormone equilibrium. Research indicates that microbiota imbalances may contribute to PCOS development and progression.

By nourishing your digestive system, you can positively influence PCOS symptoms and health outcomes.

## Four Key Impacts

### 1. Inflammation

Microbiota imbalances trigger chronic inflammation, contributing to insulin resistance and hormonal disruption. Inflammation is at the root of many PCOS symptoms.

### 2. Insulin Sensitivity

A healthy microbiota supports blood sugar regulation—critical for managing weight gain, acne, and menstrual irregularities. When your gut is off, your blood sugar often is too.

### 3. Hormone Balance

The microbiota aids hormone metabolism and elimination. Imbalances disrupt this process, potentially worsening symptoms like excess androgens.

### 4. Mental Health

The gut-brain axis bidirectionally influences mood and stress. Microbiota imbalances link to anxiety and depression, which are common PCOS comorbidities.

## Nurturing Your Gut for PCOS Wellness

Evidence-based strategies include:

### Dietary Modifications

**Increase Fiber Intake:** Consume fiber-rich fruits, vegetables, whole grains, and legumes. Research shows higher fiber correlates with improved insulin sensitivity and reduced inflammation.

**Probiotic and Prebiotic Foods:** Add low-sugar options like yogurt, kombucha, kefir, and fermented vegetables. Include prebiotic foods like garlic, onions, and leeks. Studies suggest these may improve insulin resistance and reduce androgen levels.

### Lifestyle Modifications

**Regular Exercise:** Physical activity positively influences microbiota composition and diversity, promoting beneficial bacteria growth and reducing inflammation.

**Stress Management:** Chronic stress disrupts microbiota balance and increases intestinal permeability. Practice mindfulness meditation, yoga, and deep breathing.

**Stay Hydrated:** Drink at least half your body weight in ounces of water daily to support digestion and nutrient absorption.

### Supplementation

**Omega-3 Fatty Acids:** Found in fatty fish, flaxseeds, and walnuts, these have anti-inflammatory properties. Supplementation may improve microbiota composition and reduce PCOS symptoms.

**Probiotic Supplements:** Lactobacillus and Bifidobacterium species show therapeutic potential, possibly improving insulin sensitivity and menstrual regularity.

## Listen to Your Body

Listen to your body's signals—bloating, constipation, diarrhea, skin changes, and mood shifts communicate digestive distress. These symptoms represent messages from your microbial community.

Your digestive system isn't isolated; it's intricately connected to overall health and PCOS management.

## Closing Thoughts

If ready to deepen your digestive wellness journey while managing PCOS, reach out for [personalized one-on-one support](/services/) at Intention Holistic Health. We'll explore strategies resonating with your unique body and goals.

With love and digestive-healing energy,

Alicia
Intention Holistic Health
    `,
    disclaimer: `This blog provides educational information only and doesn't constitute medical advice, diagnosis, or treatment. Health decisions require partnership with licensed healthcare providers familiar with your individual circumstances and medical history.

Topics discussing nutrition, supplements, and wellness practices aren't personalized clinical guidance. Don't disregard professional medical advice based on this content.

Clinical services at Intention Holistic Health PLLC serve Kentucky residents only through formal provider-patient relationships. Educational content doesn't replace medical care, prenatal/postpartum services, or emergency services.`,
    faqs: [
      {
        question: "How long does it take to improve gut health?",
        answer: "Gut health improvements can begin within days to weeks, but lasting change typically takes 3-6 months of consistent effort. The microbiome is adaptable—dietary changes can shift bacterial populations within 24 hours. However, building a diverse, resilient gut ecosystem takes sustained attention to diet, stress management, and lifestyle factors."
      },
      {
        question: "What's the first step to improving gut health?",
        answer: "Start with increasing fiber intake through fruits, vegetables, whole grains, and legumes. Research shows higher fiber correlates with improved insulin sensitivity and reduced inflammation. Probiotic-rich foods like yogurt, kefir, and fermented vegetables also support beneficial bacteria. Stay hydrated—drink at least half your body weight in ounces of water daily."
      },
      {
        question: "Are probiotics necessary for PCOS?",
        answer: "While not strictly necessary, probiotic supplements (especially Lactobacillus and Bifidobacterium species) show therapeutic potential for PCOS. Studies suggest they may improve insulin sensitivity and menstrual regularity. However, probiotic-rich foods combined with prebiotic foods (garlic, onions, leeks) may be equally effective for many women."
      }
    ],
    schema: {
      description: "Explore the gut-PCOS connection: how your microbiota affects inflammation, insulin, hormones, and mental health, plus evidence-based strategies for gut wellness."
    }
  },
  {
    slug: '2024-09-15-hormone-friendly-granola',
    title: 'Recipe: Hormone-Friendly Granola',
    date: '2024-09-15',
    author: 'Alicia Harrison, MSN, APRN, FNP-C',
    excerpt: 'An all-time-favorite snack: granola that is both delicious and packed with hormone-friendly ingredients to support health and wellbeing from the inside out.',
    image: '/images/blog/granola.webp',
    cardAspectRatio: '56.22%',    // 900x506 image
    imageAspectRatio: '56.22%',
    categories: ['recipes', 'breakfast', 'pcos'],
    content: `
# Recipe: Hormone-Friendly Granola

An all-time-favorite snack: granola that is both delicious and packed with hormone-friendly ingredients to support health and wellbeing from the inside out.

I often opt for grain-free granola for most clients because grains can sometimes exacerbate symptoms such as insulin resistance and inflammation. This is especially helpful for women managing [PCOS](/blog/post.html?post=2024-10-01-gut-health-pcos).

## Ingredients

- 1 cup organic sprouted rolled oats (exclude for grain-free granola)
- 1 cup chopped raw nuts (walnuts, almonds, cashews, etc)
- 1/2 cup raw hulled pumpkin seeds
- 1/2 cup raw sunflower seeds
- 1/2 cup unsweetened shredded coconut
- 1/4 cup coconut oil, melted
- 1/4 cup pure maple syrup or honey
- 1 teaspoon vanilla extract
- 1 teaspoon ground cinnamon
- Pinch of sea salt

## Instructions

1. Preheat oven to 300°F (150°C) and line a baking sheet with parchment paper
2. Combine chopped almonds, walnuts, pumpkin seeds, sunflower seeds, and shredded coconut
3. Whisk together melted coconut oil, maple syrup or honey, vanilla extract, cinnamon, and sea salt
4. Pour wet ingredients over dry ingredients and stir until well coated
5. Spread granola mixture evenly onto prepared baking sheet
6. Bake for 25-30 minutes, stirring halfway through, until golden brown and fragrant
7. Remove and let cool completely before stirring in optional add-ins
8. Store in airtight container at room temperature for up to two weeks, or in refrigerator for longer shelf life

## Why This Granola Supports Your Hormones

This granola provides essential vitamins, minerals, and healthy fats through nutrient-dense ingredients like almonds, walnuts, pumpkin seeds, and coconut. By avoiding refined sugars and inflammatory oils found in store-bought options, this recipe helps stabilize blood sugar and support hormone balance.

## How to Enjoy

- Top your [smoothie bowl](/blog/post.html?post=2024-10-15-probiotic-smoothie-bowl)
- Add to yogurt
- Eat as a snack with a handful of berries
- Sprinkle on baked apples or pears

Nourish your body, embrace delicious, wholesome foods, and thrive!

All my love,

Alicia
Intention Holistic Health
    `,
    disclaimer: `The information provided in this blog is for educational and informational purposes only and is not intended to serve as medical advice, diagnosis, or treatment. Health decisions require partnership with licensed providers familiar with individual circumstances. Clinical services are available exclusively to Kentucky residents through formal provider-patient relationships.`,
    faqs: [
      {
        question: "Can I make this granola grain-free?",
        answer: "Yes! Simply exclude the organic sprouted rolled oats. The recipe works well with just nuts, seeds, and coconut. Many women managing PCOS benefit from grain-free options since grains can sometimes exacerbate symptoms like insulin resistance and inflammation."
      },
      {
        question: "How long does this granola stay fresh?",
        answer: "Store in an airtight container at room temperature for up to two weeks, or in the refrigerator for longer shelf life. The coconut oil and natural ingredients mean it may soften over time in humid conditions—keeping it in the fridge helps maintain crunch."
      },
      {
        question: "Can I substitute the maple syrup?",
        answer: "Yes! Honey is a great alternative and is already listed as an option in the recipe. For a lower-sugar version, you can reduce the sweetener amount or use a sugar-free alternative like monk fruit sweetener. The granola may be slightly less clumpy with less sweetener."
      }
    ],
    schema: {
      description: "A hormone-friendly granola recipe with nuts, seeds, and coconut—grain-free option available. Supports blood sugar balance and hormone health."
    }
  }
];

// -----------------------------------------
// STANDARD DISCLAIMER (FDA, FTC, Kentucky BON Compliant)
// -----------------------------------------

const STANDARD_DISCLAIMER = `<div class="blog-disclaimer">
  <h3 class="blog-disclaimer-title">Educational & Imagery Disclaimer</h3>
  <p>This content is for educational and informational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. It does not replace individualized medical advice, diagnosis, or treatment from a licensed healthcare provider. Individual results may vary. Readers should consult their licensed healthcare provider regarding personal health concerns before making changes to diet, supplements, or lifestyle.</p>
  <p>Any individuals depicted in images on this website or associated content are models or stock photography subjects and are not patients, clients, or recipients of services from Intention Holistic Health. Images are used for illustrative purposes only and do not represent clinical relationships, medical outcomes, or specific health conditions.</p>
  <p>Intention Holistic Health, PLLC provides educational wellness guidance and, where applicable, nurse practitioner services within scope and licensure. <strong>Clinical services are available exclusively to Kentucky residents</strong> through formal provider-patient relationships.</p>
</div>`;

// -----------------------------------------
// UTILITY FUNCTIONS
// -----------------------------------------

// Simple markdown parser
function parseMarkdown(markdown) {
  let html = markdown;

  // Strip leading H1 (title is already displayed by the template)
  html = html.replace(/^\s*#\s+[^\n]+\n*/m, '');

  // Download CTA boxes with image [DOWNLOAD-CTA:image|title|description|formType|buttonText]
  html = html.replace(/\[DOWNLOAD-CTA:([^|]+)\|([^|]+)\|([^|]+)\|([^|]+)\|([^\]]+)\]/gim, function(match, image, title, description, formType, buttonText) {
    var escapedTitle = title.trim().replace(/'/g, "\\'");
    var escapedFormType = formType.trim().replace(/'/g, "\\'");
    return `<div class="blog-download-cta">
      <img src="${image.trim()}" alt="${title.trim()}" class="blog-download-cta-image" loading="lazy">
      <div class="blog-download-cta-body">
        <p class="blog-download-cta-badge">Free Download</p>
        <h4 class="blog-download-cta-title">${title.trim()}</h4>
        <p class="blog-download-cta-description">${description.trim()}</p>
        <button type="button" class="blog-cta-button" onclick="openLeadModal('${escapedTitle}', '${escapedFormType}')" data-track-cta="blog-download-cta">${buttonText.trim()}</button>
      </div>
    </div>`;
  });

  // CTA boxes [CTA:title|description|formType|buttonText]
  // formType is used to identify which lead magnet (e.g., "kitchen-staples")
  html = html.replace(/\[CTA:([^|]+)\|([^|]+)\|([^|]+)\|([^\]]+)\]/gim, function(match, title, description, formType, buttonText) {
    var escapedTitle = title.trim().replace(/'/g, "\\'");
    var escapedFormType = formType.trim().replace(/'/g, "\\'");
    return `<div class="blog-cta-box">
      <div class="blog-cta-content">
        <h4 class="blog-cta-title">${title.trim()}</h4>
        <p class="blog-cta-description">${description.trim()}</p>
      </div>
      <button type="button" class="blog-cta-button" onclick="openLeadModal('${escapedTitle}', '${escapedFormType}')" data-track-cta="blog-inline-cta">${buttonText.trim()}</button>
    </div>`;
  });

  // Blockquotes (> lines)
  html = html.replace(/^> (.*$)/gim, '<blockquote><p>$1</p></blockquote>');
  // Merge consecutive blockquote tags
  html = html.replace(/<\/blockquote>\n?<blockquote>/gim, '\n');

  // Headers (with slugified IDs for anchor linking)
  html = html.replace(/^### (.*$)/gim, function(match, heading) {
    var id = heading.replace(/<[^>]*>/g, '').toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
    return '<h3 id="' + id + '">' + heading + '</h3>';
  });
  html = html.replace(/^## (.*$)/gim, function(match, heading) {
    var id = heading.replace(/<[^>]*>/g, '').toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
    return '<h2 id="' + id + '">' + heading + '</h2>';
  });
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Links [text](url) - external links open in new tab
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, function(match, text, url) {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return '<a href="' + url + '" target="_blank" rel="noopener noreferrer">' + text + '</a>';
    }
    return '<a href="' + url + '">' + text + '</a>';
  });

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

  // Lists
  html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');

  // Wrap consecutive li elements in ul
  html = html.replace(/(<li>.*<\/li>\n?)+/gim, function(match) {
    return '<ul>' + match + '</ul>';
  });

  // Paragraphs (lines that don't start with < and aren't empty)
  html = html.split('\n').map(function(line) {
    line = line.trim();
    if (line && !line.startsWith('<') && !line.startsWith('#')) {
      return '<p>' + line + '</p>';
    }
    return line;
  }).join('\n');

  // Clean up empty paragraphs
  html = html.replace(/<p><\/p>/g, '');
  html = html.replace(/<p>\s*<\/p>/g, '');

  return html;
}

// Format date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// Inject Article JSON-LD schema into the page head
function injectArticleSchema(post) {
  // Remove any existing article schema (in case of navigation)
  const existingSchema = document.getElementById('article-schema');
  if (existingSchema) {
    existingSchema.remove();
  }

  // Build the Article schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': post.title,
    'description': (post.schema && post.schema.description) ? post.schema.description : post.excerpt,
    'image': 'https://www.intentionholistichealth.com' + post.image,
    'datePublished': post.date,
    'dateModified': post.date,
    'author': {
      '@type': 'Person',
      'name': 'Alicia Harrison',
      'jobTitle': 'Family Nurse Practitioner',
      'url': 'https://www.intentionholistichealth.com/about.html'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Intention Holistic Health',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.intentionholistichealth.com/images/logo2.webp'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.intentionholistichealth.com/blog/post.html?post=' + post.slug
    }
  };

  // Create and inject the script element
  const scriptElement = document.createElement('script');
  scriptElement.type = 'application/ld+json';
  scriptElement.id = 'article-schema';
  scriptElement.textContent = JSON.stringify(schema);
  document.head.appendChild(scriptElement);

  // Inject FAQPage schema if post has FAQs
  if (post.faqs && post.faqs.length > 0) {
    const existingFaqSchema = document.getElementById('faq-schema');
    if (existingFaqSchema) existingFaqSchema.remove();

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': post.faqs.map(function(faq) {
        return {
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        };
      })
    };

    const faqScriptElement = document.createElement('script');
    faqScriptElement.type = 'application/ld+json';
    faqScriptElement.id = 'faq-schema';
    faqScriptElement.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScriptElement);
  }
}

// -----------------------------------------
// BLOG LISTING PAGE
// -----------------------------------------

function renderBlogListing() {
  const blogPostsContainer = document.getElementById('blog-posts');
  if (!blogPostsContainer) return;

  // Sort posts by date (newest first)
  const sortedPosts = [...BLOG_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Render posts
  let html = '';
  sortedPosts.forEach(function(post, index) {
    const cardImgStyle = post.cardImageStyle ? ` style="${post.cardImageStyle}"` : '';
    // Support custom aspect ratio per post (default 16:9 = 56.25%)
    const aspectRatio = post.cardAspectRatio || '56.25%';
    const linkStyle = ` style="padding-bottom: ${aspectRatio};"`;
    // First image is LCP - use fetchpriority="high" instead of lazy loading
    const imgLoadAttr = index === 0 ? 'fetchpriority="high"' : 'loading="lazy"';
    // Use small thumbnail for cards (if available)
    const thumbImage = post.thumbnail || post.image.replace('.webp', '-small.webp');
    const thumbImageXs = thumbImage.replace('-small.webp', '-small-xs.webp');
    html += `
      <article class="blog-card">
        <a href="/blog/post.html?post=${post.slug}" class="blog-card-image-link"${linkStyle}>
          <img src="${thumbImage}"
               srcset="${thumbImageXs} 300w, ${thumbImage} 400w"
               sizes="(max-width: 767px) 300px, 400px"
               alt="${post.title}" class="blog-card-image" width="400" height="225" ${imgLoadAttr}${cardImgStyle} onerror="this.src='${post.image}'">
        </a>
        <div class="blog-card-body">
          <p class="blog-card-date">${formatDate(post.date)}</p>
          <h2 class="blog-card-title">
            <a href="/blog/post.html?post=${post.slug}">${post.title}</a>
          </h2>
          <p class="blog-card-excerpt">${post.excerpt}</p>
          <a href="/blog/post.html?post=${post.slug}" class="blog-card-link">Continue Reading &rarr;</a>
        </div>
      </article>
    `;
  });

  blogPostsContainer.innerHTML = html;

  // Set up category filtering
  setupCategoryFiltering(sortedPosts);
}

function setupCategoryFiltering(posts) {
  const categoryLinks = document.querySelectorAll('.category-link');

  categoryLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Update active state
      categoryLinks.forEach(function(l) { l.classList.remove('active'); });
      this.classList.add('active');

      const category = this.dataset.category;
      const blogPostsContainer = document.getElementById('blog-posts');

      // Filter posts
      let filteredPosts = posts;
      if (category !== 'all') {
        filteredPosts = posts.filter(function(post) {
          return post.categories.includes(category);
        });
      }

      // Re-render
      if (filteredPosts.length === 0) {
        blogPostsContainer.innerHTML = '<p class="loading-message">No posts found in this category.</p>';
      } else {
        let html = '';
        filteredPosts.forEach(function(post, index) {
          const cardImgStyle = post.cardImageStyle ? ` style="${post.cardImageStyle}"` : '';
          // Support custom aspect ratio per post (default 16:9 = 56.25%)
          const aspectRatio = post.cardAspectRatio || '56.25%';
          const linkStyle = ` style="padding-bottom: ${aspectRatio};"`;
          // First image gets priority loading
          const imgLoadAttr = index === 0 ? 'fetchpriority="high"' : 'loading="lazy"';
          // Use small thumbnail for cards
          const thumbImage = post.thumbnail || post.image.replace('.webp', '-small.webp');
          const thumbImageXs = thumbImage.replace('-small.webp', '-small-xs.webp');
          html += `
            <article class="blog-card">
              <a href="/blog/post.html?post=${post.slug}" class="blog-card-image-link"${linkStyle}>
                <img src="${thumbImage}"
                     srcset="${thumbImageXs} 300w, ${thumbImage} 400w"
                     sizes="(max-width: 767px) 300px, 400px"
                     alt="${post.title}" class="blog-card-image" width="400" height="225" ${imgLoadAttr}${cardImgStyle} onerror="this.src='${post.image}'">
              </a>
              <div class="blog-card-body">
                <p class="blog-card-date">${formatDate(post.date)}</p>
                <h2 class="blog-card-title">
                  <a href="/blog/post.html?post=${post.slug}">${post.title}</a>
                </h2>
                <p class="blog-card-excerpt">${post.excerpt}</p>
                <a href="/blog/post.html?post=${post.slug}" class="blog-card-link">Continue Reading &rarr;</a>
              </div>
            </article>
          `;
        });
        blogPostsContainer.innerHTML = html;
      }
    });
  });

  // Mobile category dropdown
  const mobileSelect = document.getElementById('mobile-category-select');
  if (mobileSelect) {
    mobileSelect.addEventListener('change', function() {
      const category = this.value;

      // Update sidebar active state too
      categoryLinks.forEach(function(l) {
        l.classList.remove('active');
        if (l.dataset.category === category) {
          l.classList.add('active');
        }
      });

      const blogPostsContainer = document.getElementById('blog-posts');

      // Filter posts
      let filteredPosts = posts;
      if (category !== 'all') {
        filteredPosts = posts.filter(function(post) {
          return post.categories.includes(category);
        });
      }

      // Re-render
      if (filteredPosts.length === 0) {
        blogPostsContainer.innerHTML = '<p class="loading-message">No posts found in this category.</p>';
      } else {
        let html = '';
        filteredPosts.forEach(function(post, index) {
          const cardImgStyle = post.cardImageStyle ? ` style="${post.cardImageStyle}"` : '';
          const aspectRatio = post.cardAspectRatio || '56.25%';
          const linkStyle = ` style="padding-bottom: ${aspectRatio};"`;
          const imgLoadAttr = index === 0 ? 'fetchpriority="high"' : 'loading="lazy"';
          const thumbImage = post.thumbnail || post.image.replace('.webp', '-small.webp');
          const thumbImageXs = thumbImage.replace('-small.webp', '-small-xs.webp');
          html += `
            <article class="blog-card">
              <a href="/blog/post.html?post=${post.slug}" class="blog-card-image-link"${linkStyle}>
                <img src="${thumbImage}"
                     srcset="${thumbImageXs} 300w, ${thumbImage} 400w"
                     sizes="(max-width: 767px) 300px, 400px"
                     alt="${post.title}" class="blog-card-image"${cardImgStyle} width="400" height="225" ${imgLoadAttr} onerror="this.src='${post.image}'">
              </a>
              <div class="blog-card-body">
                <span class="blog-card-date">${formatDate(post.date)}</span>
                <h3 class="blog-card-title">
                  <a href="/blog/post.html?post=${post.slug}" class="blog-card-link">${post.title}</a>
                </h3>
                <p class="blog-card-excerpt">${post.excerpt}</p>
              </div>
            </article>
          `;
        });
        blogPostsContainer.innerHTML = html;
      }
    });
  }
}

// Setup mobile search functionality
function setupMobileSearch() {
  const searchInput = document.getElementById('mobile-search-input');
  const searchBtn = document.getElementById('mobile-search-btn');
  const searchResults = document.getElementById('mobile-search-results');

  if (!searchInput || !searchBtn || !searchResults) return;

  function performMobileSearch(query) {
    if (!query || query.trim().length < 2) {
      searchResults.style.display = 'none';
      return;
    }

    const searchTerms = query.toLowerCase().trim().split(/\s+/);
    const results = [];

    BLOG_POSTS.forEach(function(post) {
      const searchableText = (post.title + ' ' + post.excerpt + ' ' + post.content).toLowerCase();
      const allTermsFound = searchTerms.every(function(term) {
        return searchableText.includes(term);
      });

      if (allTermsFound) {
        results.push({ post: post });
      }
    });

    if (results.length === 0) {
      searchResults.innerHTML = '<p class="search-no-results">No results found</p>';
    } else {
      let html = '<div class="search-results-list">';
      results.slice(0, 5).forEach(function(result) {
        html += `
          <a href="/blog/post.html?post=${result.post.slug}" class="search-result-item">
            <strong>${result.post.title}</strong>
            <span>${result.post.excerpt.substring(0, 80)}...</span>
          </a>
        `;
      });
      html += '</div>';
      searchResults.innerHTML = html;
    }
    searchResults.style.display = 'block';
  }

  searchBtn.addEventListener('click', function() {
    performMobileSearch(searchInput.value);
  });

  searchInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
      performMobileSearch(this.value);
    }
  });

  // Hide results when clicking outside
  document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });
}

// -----------------------------------------
// SINGLE POST PAGE
// -----------------------------------------

function renderSinglePost() {
  const postContent = document.getElementById('post-content');
  if (!postContent) return;

  // Get post slug from URL
  const urlParams = new URLSearchParams(window.location.search);
  const postSlug = urlParams.get('post');

  if (!postSlug) {
    postContent.innerHTML = '<p>Post not found. <a href="/blog/">Return to blog</a></p>';
    return;
  }

  // Find the post
  const post = BLOG_POSTS.find(function(p) { return p.slug === postSlug; });

  if (!post) {
    postContent.innerHTML = '<p>Post not found. <a href="/blog/">Return to blog</a></p>';
    return;
  }

  // Redirect to superior template if this post uses it
  if (post.template === 'superior' && !window.location.pathname.includes('post-superior')) {
    window.location.replace('/blog/post-superior.html?post=' + postSlug);
    return;
  }

  // Update page title
  document.title = post.title + ' | Intention Holistic Health';

  // Track blog post view with GA4
  if (typeof gtag === 'function') {
    gtag('event', 'blog_post_view', {
      post_title: post.title,
      post_slug: post.slug,
      post_date: post.date,
      post_categories: post.categories.join(', '),
      post_author: post.author,
      page_path: window.location.pathname + window.location.search
    });
  }

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    // Use schema description if available, otherwise use excerpt
    const description = (post.schema && post.schema.description) ? post.schema.description : post.excerpt;
    metaDescription.setAttribute('content', description);
  }

  // Inject Article JSON-LD schema for SEO
  injectArticleSchema(post);

  // Render post header
  const postTitle = document.getElementById('post-title');
  if (postTitle) {
    postTitle.textContent = post.title;
  }

  const postMeta = document.getElementById('post-meta');
  if (postMeta) {
    postMeta.innerHTML = `
      <span class="post-date">${formatDate(post.date)}</span>
      <span class="post-author">By ${post.author}</span>
    `;
  }

  // Render featured image with explicit dimensions to prevent CLS
  // Use fetchpriority="high" for LCP image (not lazy load)
  // Use srcset for responsive loading - mobile gets smaller image
  const postImage = document.getElementById('post-image');
  if (postImage) {
    const customStyle = post.imageStyle ? ` style="${post.imageStyle}"` : '';
    // Support custom aspect ratio for featured image (default 16:9 = 56.25%)
    if (post.imageAspectRatio) {
      postImage.style.setProperty('--image-aspect-ratio', post.imageAspectRatio);
    }
    // Create mobile version path (if exists, will be used; if not, fallback to full)
    const mobileImage = post.image.replace('.webp', '-mobile.webp');
    postImage.innerHTML = `<img src="${post.image}"
         srcset="${mobileImage} 500w, ${post.image} 1280w"
         sizes="(max-width: 767px) 100vw, 900px"
         alt="${post.title}" width="1280" height="720" fetchpriority="high"${customStyle} onerror="this.src='${post.image}'">`;
  }

  // Render content
  postContent.innerHTML = parseMarkdown(post.content);

  // Render tags
  const postTags = document.getElementById('post-tags');
  if (postTags && post.categories) {
    let tagsHtml = '';
    post.categories.forEach(function(category) {
      tagsHtml += `<span class="post-tag">${category}</span>`;
    });
    postTags.innerHTML = tagsHtml;
  }

  // Render FAQ section (if post has FAQs)
  renderFAQs(post);

  // Render standard disclaimer (FDA/FTC/Kentucky BON compliant)
  postContent.insertAdjacentHTML('beforeend', STANDARD_DISCLAIMER);

  // Set up share buttons
  setupShareButtons(post);

  // Render related posts
  renderRelatedPosts(post);

  // Populate promo elements (floating ad, bottom bar, modal) from post config
  initPromo(post);

  // Initialize persona toggle if configured for this post
  initPersonaToggle(post);
}

function renderRelatedPosts(currentPost) {
  const relatedPostsGrid = document.querySelector('.related-posts-grid');
  if (!relatedPostsGrid) return;

  // Find posts with matching categories, excluding current post
  let relatedPosts = BLOG_POSTS.filter(function(post) {
    if (post.slug === currentPost.slug) return false;

    // Check if any categories match
    return post.categories.some(function(category) {
      return currentPost.categories.includes(category);
    });
  });

  // If not enough related posts, add other posts
  if (relatedPosts.length < 3) {
    const otherPosts = BLOG_POSTS.filter(function(post) {
      return post.slug !== currentPost.slug && !relatedPosts.includes(post);
    });
    relatedPosts = relatedPosts.concat(otherPosts);
  }

  // Limit to 3 posts
  relatedPosts = relatedPosts.slice(0, 3);

  // Render the related posts with explicit dimensions to prevent CLS
  let html = '';
  relatedPosts.forEach(function(post) {
    const thumbImage = post.thumbnail || post.image.replace('.webp', '-small.webp');
    html += `
      <a href="/blog/post.html?post=${post.slug}" class="related-post-card">
        <img src="${thumbImage}" alt="${post.title}" width="400" height="225" loading="lazy" onerror="this.src='${post.image}'">
        <div class="related-post-card-body">
          <p class="related-post-card-title">${post.title}</p>
        </div>
      </a>
    `;
  });

  relatedPostsGrid.innerHTML = html;
}

function renderFAQs(post) {
  const postContent = document.getElementById('post-content');
  if (!postContent || !post.faqs || post.faqs.length === 0) return;

  // Create FAQ section with V3 styling
  let faqHtml = `
    <section class="blog-faq-section">
      <h2 class="blog-faq-title">Frequently Asked Questions</h2>
      <div class="blog-faq-list">
  `;

  post.faqs.forEach(function(faq, index) {
    faqHtml += `
      <div class="blog-faq-item">
        <button class="blog-faq-question" aria-expanded="false" aria-controls="blog-faq-answer-${index}">
          <span class="blog-faq-icon">+</span>
          <span>${faq.question}</span>
        </button>
        <div class="blog-faq-answer" id="blog-faq-answer-${index}">
          <p>${faq.answer}</p>
        </div>
      </div>
    `;
  });

  faqHtml += `
      </div>
    </section>
  `;

  // Insert FAQ before disclaimer or at end of content
  postContent.insertAdjacentHTML('beforeend', faqHtml);

  // Add accordion functionality
  const faqButtons = postContent.querySelectorAll('.blog-faq-question');
  faqButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      const answer = this.nextElementSibling;
      const icon = this.querySelector('.blog-faq-icon');

      // Close all other FAQs
      faqButtons.forEach(function(otherButton) {
        if (otherButton !== button) {
          otherButton.setAttribute('aria-expanded', 'false');
          otherButton.nextElementSibling.style.maxHeight = null;
          otherButton.querySelector('.blog-faq-icon').textContent = '+';
          otherButton.querySelector('.blog-faq-icon').style.transform = 'rotate(0deg)';
        }
      });

      // Toggle current FAQ
      this.setAttribute('aria-expanded', !isExpanded);
      if (!isExpanded) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.textContent = '−';
        icon.style.transform = 'rotate(180deg)';
      } else {
        answer.style.maxHeight = null;
        icon.textContent = '+';
        icon.style.transform = 'rotate(0deg)';
      }
    });
  });
}

function setupShareButtons(post) {
  const pageUrl = encodeURIComponent(window.location.href);
  const rawUrl = window.location.href;
  const pageTitle = encodeURIComponent(post.title);
  const rawTitle = post.title;

  // Copy Link button
  const copyLinkBtn = document.getElementById('copy-link');
  const copyConfirmation = document.getElementById('copy-confirmation');
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', function() {
      navigator.clipboard.writeText(rawUrl).then(function() {
        copyConfirmation.classList.add('show');
        setTimeout(function() {
          copyConfirmation.classList.remove('show');
        }, 2000);
      }).catch(function() {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = rawUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        copyConfirmation.classList.add('show');
        setTimeout(function() {
          copyConfirmation.classList.remove('show');
        }, 2000);
      });
    });
  }

  // Email share
  const emailBtn = document.getElementById('share-email');
  if (emailBtn) {
    const emailSubject = encodeURIComponent('Check out this article: ' + rawTitle);
    const emailBody = encodeURIComponent('I thought you might find this helpful:\n\n' + rawTitle + '\n\n' + rawUrl);
    emailBtn.href = `mailto:?subject=${emailSubject}&body=${emailBody}`;
  }

  const facebookBtn = document.getElementById('share-facebook');
  if (facebookBtn) {
    facebookBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
  }

  const twitterBtn = document.getElementById('share-twitter');
  if (twitterBtn) {
    twitterBtn.href = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
  }

  const pinterestBtn = document.getElementById('share-pinterest');
  if (pinterestBtn) {
    const imageUrl = encodeURIComponent(window.location.origin + post.image);
    pinterestBtn.href = `https://pinterest.com/pin/create/button/?url=${pageUrl}&media=${imageUrl}&description=${pageTitle}`;
  }

  // -----------------------------------------
  // FLOATING SHARE SIDEBAR
  // -----------------------------------------

  const floatingShare = document.getElementById('floating-share');
  const floatingToggle = document.getElementById('floating-share-toggle');
  const floatingCopyBtn = document.getElementById('floating-copy-link');
  const floatingCopyConfirm = document.getElementById('floating-copy-confirm');
  const floatingEmailBtn = document.getElementById('floating-share-email');
  const floatingFacebookBtn = document.getElementById('floating-share-facebook');

  // Mobile toggle
  if (floatingToggle && floatingShare) {
    floatingToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      floatingShare.classList.toggle('active');
    });

    // Close on click outside
    document.addEventListener('click', function(e) {
      if (!floatingShare.contains(e.target) && floatingShare.classList.contains('active')) {
        floatingToggle.setAttribute('aria-expanded', 'false');
        floatingShare.classList.remove('active');
      }
    });
  }

  // Floating copy link
  if (floatingCopyBtn) {
    floatingCopyBtn.addEventListener('click', function() {
      navigator.clipboard.writeText(rawUrl).then(function() {
        floatingCopyConfirm.classList.add('visible');
        setTimeout(function() {
          floatingCopyConfirm.classList.remove('visible');
        }, 2000);
      }).catch(function() {
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = rawUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        floatingCopyConfirm.classList.add('visible');
        setTimeout(function() {
          floatingCopyConfirm.classList.remove('visible');
        }, 2000);
      });
    });
  }

  // Floating email share
  if (floatingEmailBtn) {
    const emailSubject = encodeURIComponent('Check out this article: ' + rawTitle);
    const emailBody = encodeURIComponent('I thought you might find this helpful:\n\n' + rawTitle + '\n\n' + rawUrl);
    floatingEmailBtn.href = `mailto:?subject=${emailSubject}&body=${emailBody}`;
  }

  // Floating Facebook share
  if (floatingFacebookBtn) {
    floatingFacebookBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
  }

  // Floating Twitter share
  const floatingTwitterBtn = document.getElementById('floating-share-twitter');
  if (floatingTwitterBtn) {
    floatingTwitterBtn.href = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
  }

  // Floating Pinterest share
  const floatingPinterestBtn = document.getElementById('floating-share-pinterest');
  if (floatingPinterestBtn) {
    const imageUrl = encodeURIComponent(window.location.origin + post.image);
    floatingPinterestBtn.href = `https://pinterest.com/pin/create/button/?url=${pageUrl}&media=${imageUrl}&description=${pageTitle}`;
  }

  // -----------------------------------------
  // AUTHOR CONTACT BUTTON
  // -----------------------------------------
  const authorBtn = document.getElementById('floating-author-btn');
  const authorOverlay = document.getElementById('author-contact-overlay');
  const authorYes = document.getElementById('author-contact-yes');
  const authorNo = document.getElementById('author-contact-no');

  if (authorBtn && authorOverlay) {
    authorBtn.addEventListener('click', function() {
      authorOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (typeof gtag !== 'undefined') {
        gtag('event', 'author_contact_open', {
          'event_category': 'engagement',
          'event_label': post.author,
          'page_title': post.title
        });
      }
    });

    function closeAuthorPopup() {
      authorOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (authorNo) {
      authorNo.addEventListener('click', function() {
        closeAuthorPopup();
        if (typeof gtag !== 'undefined') {
          gtag('event', 'author_contact_declined', {
            'event_category': 'engagement',
            'event_label': post.author
          });
        }
      });
    }

    if (authorYes) {
      authorYes.addEventListener('click', function() {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'author_contact_confirmed', {
            'event_category': 'engagement',
            'event_label': post.author,
            'contact_method': 'sms'
          });
        }
        setTimeout(closeAuthorPopup, 300);
      });
    }

    // Close on overlay click
    authorOverlay.addEventListener('click', function(e) {
      if (e.target === authorOverlay) closeAuthorPopup();
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && authorOverlay.classList.contains('open')) closeAuthorPopup();
    });
  }

  // -----------------------------------------
  // FLOATING SHARE VISIBILITY ON SCROLL
  // -----------------------------------------
  const postContent = document.getElementById('post-content');

  if (floatingShare && postContent) {
    function updateFloatingShareVisibility() {
      const contentRect = postContent.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Show when post content is in view (top of content has passed top of viewport
      // and bottom of content hasn't passed top of viewport)
      const contentTopVisible = contentRect.top < viewportHeight * 0.3;
      const contentBottomVisible = contentRect.bottom > 100;

      if (contentTopVisible && contentBottomVisible) {
        floatingShare.classList.add('visible');
      } else {
        floatingShare.classList.remove('visible');
      }
    }

    // Initial check
    updateFloatingShareVisibility();

    // Update on scroll
    window.addEventListener('scroll', updateFloatingShareVisibility, { passive: true });
  }
}

// -----------------------------------------
// BLOG SEARCH
// -----------------------------------------

function setupBlogSearch() {
  const searchInput = document.getElementById('blog-search-input');
  const searchBtn = document.getElementById('blog-search-btn');
  const searchResults = document.getElementById('search-results');

  if (!searchInput || !searchBtn || !searchResults) return;

  // Search function
  function performSearch(query) {
    if (!query || query.trim().length < 2) {
      searchResults.style.display = 'none';
      return;
    }

    const searchTerms = query.toLowerCase().trim().split(/\s+/);
    const results = [];

    BLOG_POSTS.forEach(function(post) {
      // Search in title, excerpt, and content
      const searchableText = (post.title + ' ' + post.excerpt + ' ' + post.content).toLowerCase();

      // Check if all search terms are found
      const allTermsFound = searchTerms.every(function(term) {
        return searchableText.includes(term);
      });

      if (allTermsFound) {
        // Find the best matching excerpt
        const excerpt = findMatchingExcerpt(post.content, searchTerms);
        results.push({
          post: post,
          excerpt: excerpt
        });
      }
    });

    displaySearchResults(results, query);
  }

  // Find excerpt containing search terms with context
  function findMatchingExcerpt(content, terms) {
    // Strip markdown formatting
    const plainText = content
      .replace(/#{1,6}\s/g, '')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/^\-\s/gm, '')
      .replace(/\n+/g, ' ')
      .trim();

    // Find the position of the first matching term
    let firstMatchPos = plainText.length;
    terms.forEach(function(term) {
      const pos = plainText.toLowerCase().indexOf(term);
      if (pos !== -1 && pos < firstMatchPos) {
        firstMatchPos = pos;
      }
    });

    // Get excerpt around the match (about 150 chars)
    const start = Math.max(0, firstMatchPos - 50);
    const end = Math.min(plainText.length, firstMatchPos + 100);
    let excerpt = plainText.substring(start, end);

    // Add ellipsis if needed
    if (start > 0) excerpt = '...' + excerpt;
    if (end < plainText.length) excerpt = excerpt + '...';

    return excerpt;
  }

  // Display search results
  function displaySearchResults(results, query) {
    searchResults.style.display = 'block';

    if (results.length === 0) {
      searchResults.innerHTML = '<p class="search-no-results">No articles found for "' + escapeHtml(query) + '"</p>' +
        '<button class="search-clear-btn" type="button">Clear Search</button>';
    } else {
      let html = '<p class="search-results-count">' + results.length + ' article' + (results.length === 1 ? '' : 's') + ' found</p>';

      results.forEach(function(result) {
        // Highlight search terms in the excerpt
        let highlightedExcerpt = escapeHtml(result.excerpt);
        query.toLowerCase().split(/\s+/).forEach(function(term) {
          if (term.length >= 2) {
            const regex = new RegExp('(' + escapeRegExp(term) + ')', 'gi');
            highlightedExcerpt = highlightedExcerpt.replace(regex, '<mark>$1</mark>');
          }
        });

        html += '<div class="search-result-item">' +
          '<a href="/blog/post.html?post=' + result.post.slug + '" class="search-result-title">' + escapeHtml(result.post.title) + '</a>' +
          '<p class="search-result-excerpt">' + highlightedExcerpt + '</p>' +
          '</div>';
      });

      html += '<button class="search-clear-btn" type="button">Clear Search</button>';
      searchResults.innerHTML = html;
    }

    // Add clear button listener
    const clearBtn = searchResults.querySelector('.search-clear-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', function() {
        searchInput.value = '';
        searchResults.style.display = 'none';
      });
    }
  }

  // Helper functions
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Event listeners
  searchBtn.addEventListener('click', function() {
    performSearch(searchInput.value);
  });

  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      performSearch(searchInput.value);
    }
  });

  // Live search with debounce (optional - search as you type)
  let searchTimeout;
  searchInput.addEventListener('input', function() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(function() {
      if (searchInput.value.length >= 2) {
        performSearch(searchInput.value);
      } else if (searchInput.value.length === 0) {
        searchResults.style.display = 'none';
      }
    }, 300);
  });
}

// -----------------------------------------
// PROMO POPULATION (dynamic per post)
// -----------------------------------------

function initPromo(post) {
  var promo = post.promo || DEFAULT_PROMO;

  // Populate floating desktop ad
  var ad = document.getElementById('floating-download-ad');
  if (ad) {
    var adImg = ad.querySelector('.floating-download-ad-image');
    var adBadge = ad.querySelector('.floating-download-ad-badge');
    var adTitle = ad.querySelector('.floating-download-ad-title');
    var adDesc = ad.querySelector('.floating-download-ad-desc');
    var adCta = ad.querySelector('.floating-download-ad-cta');
    if (adImg) { adImg.src = promo.imageSidebar; adImg.alt = promo.title + ' preview'; }
    if (adBadge) adBadge.textContent = promo.badge;
    if (adTitle) adTitle.textContent = promo.title;
    if (adDesc) adDesc.textContent = promo.descriptionShort;
    if (adCta) adCta.textContent = promo.ctaText;
  }

  // Populate bottom bar
  var bar = document.getElementById('blog-checklist-bar');
  if (bar) {
    var barThumb = bar.querySelector('.blog-checklist-bar-thumb');
    var barTitle = bar.querySelector('.blog-checklist-bar-text strong');
    var barDesc = bar.querySelector('.blog-checklist-bar-text span');
    var barCta = bar.querySelector('.blog-checklist-bar-cta');
    if (barThumb) { barThumb.src = promo.imageThumb; }
    if (barTitle) barTitle.textContent = 'Download the ' + promo.title;
    if (barDesc) barDesc.textContent = promo.description;
    if (barCta) barCta.textContent = promo.ctaText;
  }

  // Populate modal image and default title
  var modalImg = document.querySelector('.blog-lead-modal-image');
  if (modalImg) { modalImg.src = promo.image; modalImg.alt = promo.title + ' preview'; }
  var modalTitle = document.getElementById('lead-modal-title');
  if (modalTitle) modalTitle.textContent = promo.modalTitle;

  // Store promo on window so openLeadModal and CTA clicks can use it
  window._blogPromo = promo;
}

// -----------------------------------------
// PERSONA SELECTOR TOGGLE
// -----------------------------------------

function initPersonaToggle(post) {
  if (!post.personaToggle) return;

  var config = post.personaToggle;
  var postContent = document.getElementById('post-content');
  if (!postContent) return;

  // Find the TOC - look for <strong>In This Guide</strong> then the next <ul>
  var tocAnchor = null;
  var tocList = null;
  var allStrongs = postContent.querySelectorAll('strong');

  for (var i = 0; i < allStrongs.length; i++) {
    if (allStrongs[i].textContent.trim() === 'In This Guide') {
      // The strong might be inside a <p> or a direct child of post-content
      tocAnchor = allStrongs[i].closest('p') || allStrongs[i];
      // Walk forward from the anchor to find the next <ul>
      var next = tocAnchor.nextElementSibling;
      while (next && next.tagName !== 'UL') {
        next = next.nextElementSibling;
      }
      if (next && next.tagName === 'UL') {
        tocList = next;
      }
      break;
    }
  }

  if (!tocAnchor) return;

  // Build the toggle HTML
  var toggleHTML = '<div class="persona-toggle-wrapper">';
  toggleHTML += '<div class="persona-toggle" role="group" aria-label="' + config.label + '">';
  toggleHTML += '<span class="persona-toggle-label">' + config.label + '</span>';
  toggleHTML += '<div class="persona-toggle-pills">';

  config.options.forEach(function(option) {
    toggleHTML += '<button class="persona-pill" data-persona="' + option.id + '" ';
    toggleHTML += 'aria-pressed="false" title="' + option.description + '">';
    toggleHTML += option.label;
    toggleHTML += '</button>';
  });

  toggleHTML += '</div>';
  toggleHTML += '<button class="persona-reset" aria-label="Clear selection" style="display:none;">Clear</button>';
  toggleHTML += '</div>';
  toggleHTML += '<a href="#" class="persona-skip-link" id="persona-skip-link">Skip ahead</a>';
  toggleHTML += '</div>';

  // Insert toggle ABOVE the TOC anchor
  tocAnchor.insertAdjacentHTML('beforebegin', toggleHTML);

  // Set up click handlers
  var toggleWrap = postContent.querySelector('.persona-toggle-wrapper');
  var toggleContainer = toggleWrap.querySelector('.persona-toggle');
  var pills = toggleContainer.querySelectorAll('.persona-pill');
  var resetBtn = toggleContainer.querySelector('.persona-reset');
  var skipLink = toggleWrap.querySelector('.persona-skip-link');

  pills.forEach(function(pill) {
    pill.addEventListener('click', function() {
      var persona = this.getAttribute('data-persona');
      var isAlreadyActive = this.classList.contains('active');

      if (isAlreadyActive) {
        clearPersonaSelection(config, pills, resetBtn, skipLink, tocList);
        removePersonaStorage(post.slug);
      } else {
        applyPersonaSelection(persona, config, pills, resetBtn, skipLink, tocList);
        setPersonaStorage(post.slug, persona);
      }
    });
  });

  resetBtn.addEventListener('click', function() {
    clearPersonaSelection(config, pills, resetBtn, skipLink, tocList);
    removePersonaStorage(post.slug);
  });

  // Restore selection from localStorage (with 3-month expiry)
  var stored = getPersonaStorage(post.slug);
  if (stored) {
    applyPersonaSelection(stored, config, pills, resetBtn, skipLink, tocList);
  }

  // GA4 tracking
  toggleContainer.addEventListener('click', function(e) {
    var pill = e.target.closest('.persona-pill');
    if (pill && typeof gtag === 'function') {
      gtag('event', 'persona_toggle', {
        'persona': pill.getAttribute('data-persona'),
        'action': pill.classList.contains('active') ? 'select' : 'deselect',
        'post_slug': post.slug
      });
    }
  });
}

function applyPersonaSelection(personaId, config, pills, resetBtn, skipLink, tocList) {
  var selectedOption = config.options.find(function(o) { return o.id === personaId; });
  if (!selectedOption) return;

  // Update pill states
  pills.forEach(function(pill) {
    var isSelected = pill.getAttribute('data-persona') === personaId;
    pill.classList.toggle('active', isSelected);
    pill.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
  });

  resetBtn.style.display = '';

  // Show skip link
  var targetSectionId = selectedOption.sections[0];
  skipLink.href = '#' + targetSectionId;
  skipLink.textContent = 'Skip to ' + selectedOption.skipLabel + ' \u2192';
  skipLink.style.visibility = 'visible';

  // Collect all persona section IDs
  var allPersonaSectionIds = [];
  config.options.forEach(function(opt) {
    allPersonaSectionIds = allPersonaSectionIds.concat(opt.sections);
  });

  var selectedSectionIds = selectedOption.sections;
  var postContent = document.getElementById('post-content');
  var allH2s = postContent.querySelectorAll('h2[id]');

  allH2s.forEach(function(h2) {
    var sectionId = h2.id;
    var isSelectedPersona = selectedSectionIds.indexOf(sectionId) !== -1;
    var isOtherPersona = !isSelectedPersona && allPersonaSectionIds.indexOf(sectionId) !== -1;

    // Only highlight the H2 heading itself, not every sibling
    h2.classList.remove('persona-heading-highlight', 'persona-dimmed');
    if (isSelectedPersona) {
      h2.classList.add('persona-heading-highlight');
    }

    // Dim the other persona's entire section (skip CTA boxes so they stay visible)
    var next = h2.nextElementSibling;
    while (next && next.tagName !== 'H2') {
      next.classList.remove('persona-dimmed');
      if (isOtherPersona && !next.classList.contains('blog-cta-box') && !next.classList.contains('blog-download-cta')) {
        next.classList.add('persona-dimmed');
      }
      next = next.nextElementSibling;
    }
    // Dim/undim the H2 itself for the other persona
    if (isOtherPersona) {
      h2.classList.add('persona-dimmed');
    }
  });

  // Apply TOC indicators — arrow for selected, dim for other
  if (tocList) {
    var tocLinks = tocList.querySelectorAll('a[href^="#"]');
    tocLinks.forEach(function(link) {
      var targetId = link.getAttribute('href').substring(1);
      var li = link.closest('li');
      if (!li) return;

      li.classList.remove('persona-toc-highlight', 'persona-toc-dimmed');

      if (selectedSectionIds.indexOf(targetId) !== -1) {
        li.classList.add('persona-toc-highlight');
      } else if (allPersonaSectionIds.indexOf(targetId) !== -1) {
        li.classList.add('persona-toc-dimmed');
      }
    });
  }
}

function clearPersonaSelection(config, pills, resetBtn, skipLink, tocList) {
  pills.forEach(function(pill) {
    pill.classList.remove('active');
    pill.setAttribute('aria-pressed', 'false');
  });

  resetBtn.style.display = 'none';
  skipLink.style.visibility = 'hidden';

  var postContent = document.getElementById('post-content');
  postContent.querySelectorAll('.persona-heading-highlight, .persona-dimmed').forEach(function(el) {
    el.classList.remove('persona-heading-highlight', 'persona-dimmed');
  });

  if (tocList) {
    tocList.querySelectorAll('.persona-toc-highlight, .persona-toc-dimmed').forEach(function(el) {
      el.classList.remove('persona-toc-highlight', 'persona-toc-dimmed');
    });
  }
}

// Persona storage with 3-month expiry
function setPersonaStorage(slug, persona) {
  var expiry = Date.now() + (90 * 24 * 60 * 60 * 1000); // 90 days
  localStorage.setItem('persona_' + slug, JSON.stringify({ persona: persona, expiry: expiry }));
}

function getPersonaStorage(slug) {
  try {
    var data = JSON.parse(localStorage.getItem('persona_' + slug));
    if (data && data.expiry > Date.now()) return data.persona;
    localStorage.removeItem('persona_' + slug);
  } catch (e) {}
  return null;
}

function removePersonaStorage(slug) {
  localStorage.removeItem('persona_' + slug);
}

// -----------------------------------------
// INITIALIZE
// -----------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  // Check which page we're on and initialize accordingly
  if (document.getElementById('blog-posts')) {
    renderBlogListing();
    setupBlogSearch();
    setupMobileSearch();
  } else if (document.getElementById('post-content')) {
    renderSinglePost();
  }
});
