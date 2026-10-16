# LVG Wildlife Solutions website (lvgwildlife.com)

Public marketing site for LVG Wildlife Solutions (Land Value Group Wildlife Solutions). This repo is the website only. The client dashboard is a separate repo (`sws-assessment`, on Vercel); never mix the two.

## How it's built and published
- Astro, static output. Pages are in `src/pages/`; the shared head, header, footer and mobile bar are in `src/layouts/Base.astro` and `src/components/`.
- Static files (styles, logos, images, `_redirects`, `robots.txt`) are in `public/`. Styles live in one file: `public/styles.css`.
- `sitemap.xml` is generated from the pages (`src/pages/sitemap.xml.js`); list non-public pages in its EXCLUDE.
- Netlify builds from `main` (`netlify.toml`). **Anything pushed to `main` goes live.** Run `npm run build` and check the pages before pushing.
- Netlify project: southern-wildlife-solutions. The forms use Netlify Forms (`data-netlify`); keep the form name `property-inquiry`.

## Brand rules
- Name: "LVG Wildlife Solutions" / "Land Value Group Wildlife Solutions". Never mention Southern Wildlife Solutions.
- No phone number and no email address on the site until the team confirms them. The inquiry form is the contact path.
- Colors and type come from the dashboard tokens in `public/styles.css`. Orange (#F47A18) is the one accent; dark grounds take light text; orange, sage and tan take dark text. Headings in Archivo, body in Spectral. The topographic contour texture sits behind sections at 12% opacity or less.
- Logos: stacked logo at the top of the header, horizontal logo once scrolled, badge only on phones. Stacked logo in the footer.

## Copy rules
- Lead with wildlife management and property assessments. The Texas wildlife tax exemption is a benefit mentioned throughout, not the whole site. No dollar savings figures in page copy.
- Say "we prepare your plan and help you file it." Never say we represent owners before an appraisal district, and never promise an approval.
- The wildlife tax exemption is Texas only. Plans are filed with the county appraisal district, not "the state."
- Plain, direct voice for rural landowners. No "AI-powered" language, no chatbot, no generic stock or gradient art.
- The team (Caleb, Cole) have full-time jobs: first names only, small photos, About section only, no employer details.
- Prices are never published on the site.

## Planning docs
The site plan, decisions and blog calendar live in the claude.ai project "SWS Reports & Plans": `business/2026-10-16-website-plan.md` and `business/2026-10-16-plateau-wildlife-competitor-review.md`.
