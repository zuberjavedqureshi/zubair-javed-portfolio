# Project Progress

_Last updated: 2026-11-06_

## Status: v1.1 (refinement) complete. The site is live at https://zubair-javed-portfolio.vercel.app and deploys from `main` on GitHub through Vercel.

## v1.1 — Content reduction, skills showcase and contact form (2026-11-06)

**Goal:** a calmer, more balanced personal portfolio with less text, more space, an icon-based skills showcase and a working contact form.

### Changes
- **Employer renamed** from Busisoft to **Xpresion Next** in Experience, the About copy, the hero status strip, the intro (also used in the JSON-LD description) and JSON-LD `worksFor`. Dates and responsibilities are unchanged.
- **Text Toolkit toned down.** Removed the spec block (platform, package, build, codebase, role), the "How it's built" engineering grid and the "Build log · selected commits" panel, along with their data and the `SpecList` component. The title and icon are smaller, there are 4 highlights, the stack is Flutter, Dart and Riverpod, and the Play Store button, privacy link and 5 real screenshots remain. Removed the hero device's build and test-count call-outs.
- **Save Karlo simplified.** Removed the platform, storage and history specs and the engineering notes. It now has a one-sentence local-first summary, 4 features, a Flutter, Dart, Riverpod and SQLite stack, 3 real screenshots and an accurate **Closed testing** badge.
- **Workbench projects** (Super Secret, Tasbeeh) are now compact one-line cards.
- **Skills section redesigned** as a visual technology showcase in three groups: Mobile Development, Programming & Web, and Tools & Platforms. It uses official brand icons from Simple Icons (CC0) and Devicon (VS Code, MIT), embedded as inline SVG in `src/components/brand-icons.ts` with no runtime dependency. Lucide glyphs are used for Riverpod and REST APIs, which have no official mark. Flutter and Dart get large tiles in brand colour. Other tiles are monochrome and take on their brand colour on hover. There are no percentages or proficiency claims.
- **Contact form added**, using Formspree's free tier through `NEXT_PUBLIC_FORMSPREE_ENDPOINT`. It has name, email, subject and message fields, all required, with labels, inline validation, email format checks, character limits and a message counter. It includes a loading state, success and error states, a LinkedIn fallback, a `_gotcha` honeypot and accessible error wiring (`aria-invalid`, `aria-describedby`, focus on the first invalid field). No content is logged. While the variable is unset, the form shows a notice and submission is disabled; it never fakes success.
- **Footer replaced.** It shows name, tagline ("Building useful things, one release at a time."), copyright year and back-to-top. The "Designed & built… View source" line and the repo link are removed.
- **Copy and spacing.** The About section went from 4 paragraphs to 2, the hero intro is shorter, the Projects lede is one line, and the redundant tag chips were removed from Experience. Section padding increased from 96/128px to 112/144px, with more room between project blocks.

### QA (v1.1)
| Check | Result |
|-------|--------|
| `tsc --noEmit` | ✅ 0 errors |
| `eslint` | ✅ 0 errors, 0 warnings |
| `next build` | ✅ static prerender of `/` |
| Visual QA at 390, 820, 1366 and 1680 px, dark and light | ✅ headless Chrome screenshots reviewed |
| Horizontal overflow, broken images, dead anchors, console errors, failed requests | ✅ none |
| Removed-content scan (Busisoft, Build log, package id, build number, test counts, "Designed & built", "View source") | ✅ none in rendered text |
| Contact form against a local mock endpoint: empty submit, bad email, live re-validation, loading, success, reset, server error (values kept), honeypot (nothing sent) | ✅ all pass |
| Desktop nav, mobile menu and theme toggle | ✅ |


### Phase 0: Discovery and fact verification ✅
- Inspected the local workspace: `text_toolkit`, `save_karlo`, `super_secret`, `tasbeeh`. None of these were modified.
- Confirmed the GitHub account `zuberjavedqureshi` from the git remotes in `text_toolkit` and from the public GitHub API.
- No public contact email was found in any project, and no résumé file exists. Both are optional fields in `src/data/profile.ts` and their UI stays hidden until set.
- Firebase is not used in any local project (Save Karlo's spec explicitly excludes it), so it is left out of the skills list.
- Screenshots used:
  - **Text Toolkit:** frames taken from real Android screen recordings in `text-toolkit-marketing/projects/text-toolkit-v03-promo/public/footage*`.
  - **Save Karlo:** development-build captures from `save_karlo/store_assets/0*.png`. They include a visible test-ad banner, which the site discloses. The AI-generated store graphics in `store_assets/generated/` were **not** used.
  - **Super Secret and Tasbeeh:** no screenshots exist, so they show labelled typographic placeholders.
- Every number on the site was verified against the source:
  - Text Toolkit: v0.3.0+16, 9 feature modules, 38 test files, 25 prompt workflows (asserted in the app's own tests), 39 stylish-text styles (visible in a screenshot).
  - Save Karlo: 61 commits, v1.0.0.

### Phase 1: Research ✅
14 live portfolios plus the Awwwards Portfolio list. See [RESEARCH.md](RESEARCH.md).

### Phase 2: Brand and visual direction ✅
Dark editorial with a full light theme. Instrument Serif, Geist and Geist Mono. The accent is derived from Text Toolkit's `#0F766E`. A "z/q" monogram.

### Phase 3: Build ✅
Next.js 16.4.4, React 19.3, Tailwind 4, Motion 14.9 and Lucide 1.67. All sections from the brief are implemented, and content is data-driven from `src/data/`.

### Phase 4: QA ✅
| Check | Result |
|-------|--------|
| `tsc --noEmit` | ✅ 0 errors |
| `eslint` | ✅ 0 errors, 0 warnings |
| `next build` | ✅ static prerender of `/`, plus sitemap, robots, manifest, icons and OG image |
| Visual QA at 390, 820, 1366 and 1680 px, dark and light | ✅ checked with headless Chrome screenshots |
| Horizontal overflow (scripted check, all viewports) | ✅ none |
| Console errors and failed requests | ✅ none |
| In-page anchors | ✅ none broken |
| Mobile menu: opens, focuses first link, Escape closes | ✅ |
| Theme toggle: switches and persists | ✅ |
| SEO endpoints (`robots.txt`, `sitemap.xml`, `manifest`, icons, OG) | ✅ all return 200 |
| Lighthouse, desktop | Performance 100 · Accessibility 100 · Best Practices 100 · SEO 100 |
| Lighthouse, mobile | Performance 93–94 · Accessibility 100 · Best Practices 100 · SEO 100 |

About mobile performance: Lighthouse's simulated throttling estimates LCP at about 3.1 s. The observed, unthrottled trace has FCP = LCP = 108 ms, and CLS is 0. The estimate charges the hydration JavaScript (Motion and React) to the paint.

Fixed during QA:
- The copyright year broke prerendering under Cache Components; it is now a cached helper.
- The Save Karlo gallery left an empty column on desktop; it is now sticky.
- The screenshot rails cut off phones abruptly at the edge; added an edge fade.
- Changed the awkward "Independent App Developer at Self-directed products" heading.
- Switched to curly apostrophes throughout.
- The Play Store button stretched to full width on mobile.
- Fixed a logo link label mismatch and gallery dots that were below the minimum tap-target size.
- Shortened the mobile menu's exit animation.
- Generated a valid favicon.ico.
- Hero headline and intro no longer start transparent, so they paint immediately.

### Phase 5: Repository and deployment ✅ (completed after v1.0; original notes kept below)
- Git is initialised locally with the initial commit on `main`.
- The `gh` CLI is **not installed** and there is no GitHub authentication on this machine, so the remote repository could not be created.
- The Vercel CLI is not installed or logged in, so nothing was deployed.

**To publish:**
```bash
# 1. Install and log in to the GitHub CLI
brew install gh && gh auth login
# 2. Create the public repo and push
cd ~/zubair-javed-portfolio
gh repo create zubair-javed-portfolio --public --source=. --remote=origin --push
# 3. Deploy: import the repo at vercel.com/new (free Hobby plan), or:
npx vercel && npx vercel --prod
```

### Open items for you
1. **Set up the contact form.** Create a free Formspree form, add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in Vercel, then redeploy. See the README section "Contact form setup".
2. Optional: review the Skills list in `src/data/skills.ts`. Figma, Firebase, Postman, Python and the web technologies were included as you requested; remove anything you would rather not list.
3. Optional: add a public email (`profile.email`) and a résumé PDF (`profile.resumeUrl`).
4. Optional: add real screenshots for Super Secret and Tasbeeh once they're ready.
