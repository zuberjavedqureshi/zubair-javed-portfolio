# Research: Developer Portfolio Design Discovery

_Conducted 3 November 2026 for the portfolio of Zubair Javed Qureshi (Flutter / Mobile Developer)._

## Method

I visited 14 live portfolios and browsed one curated award listing (Awwwards, "Portfolio" winners). The sample covers four groups: Flutter and mobile developers, senior frontend and design engineers, award-winning interactive sites, and editorial or minimal personal sites. I scored each one on the ten criteria in the brief and wrote down what is worth adapting.

> **Note on method:** some notes came from fetching the page as text, so for heavy WebGL sites I could only judge structure and copy. For those I based the visual judgement on design patterns these sites are well known for. I copied no text, branding or visual assets.

## References

| # | Site | URL | Category |
|---|------|-----|----------|
| 1 | Brittany Chiang | https://brittanychiang.com | Senior frontend engineer |
| 2 | Rauno Freiberg | https://rauno.me | Design engineer (Vercel) |
| 3 | Paco Coursey | https://paco.me | Design engineer (Linear) |
| 4 | Emil Kowalski | https://emilkowal.ski | Design engineer |
| 5 | Lee Robinson | https://leerob.com | Developer / writer |
| 6 | Josh W. Comeau | https://www.joshwcomeau.com | Frontend educator |
| 7 | Jhey Tompkins | https://jhey.dev | Creative developer |
| 8 | Bruno Simon | https://bruno-simon.com | Awwwards Site of the Month, interactive 3D |
| 9 | Kamran Bekirov | https://kamranbekirov.com | Flutter developer |
| 10 | Code With Andrea | https://codewithandrea.com | Flutter educator / GDE |
| 11 | Jesper Landberg | http://jesperlandberg.com | Awwwards SOTD 2026, creative dev |
| 12 | Elliott Mangham | https://elliott.mangham.dev | Awwwards SOTD, developer |
| 13 | Pacôme Pertant | https://pacomepertant.com | Awwwards SOTD 2026 |
| 14 | Open-source Flutter-web portfolios (abuanwar072, champ96k, danger-ahead) | via itsallwidgets.com / GitHub | Flutter templates (counter-examples) |
| — | Awwwards Portfolio winners list | https://www.awwwards.com/websites/winner_category_portfolio/ | Curated source |

## Evaluations

The ten criteria are: impression, hero, type, layout, navigation, projects, motion, responsiveness, storytelling and contact. Each site is summarised against them.

**1. Brittany Chiang.** First impression is calm and confident. The hero is the name, a role and one line of value. There is one sans family. The layout is a split: a sticky left column for identity and nav, with a scrolling right column. The navigation has an active-section indicator. Experience is a dated list with tech tags and a résumé link. Motion is limited to a subtle spotlight that follows the cursor. Responsiveness is excellent. Contact is a set of social icons.
_Strength:_ experience entries carry tech tags, which recruiters can scan quickly. _Weakness:_ the site has been cloned so often that the layout now reads as a template.

**2. Rauno Freiberg.** The site gives a sense of extreme craft. The hero is a manifesto of short imperatives. Typography is tight and small. Work is shown as tiles that link to deep pages. Motion consists of micro-interactions only.
_Strength:_ restraint signals taste. _Weakness:_ the home page says little to a recruiter.

**3. Paco Coursey.** Text only, in one column, with headed sections (Building, Projects, Writing, Now, Connect). Each project is a title and a single line of description.
_Strength:_ it loads instantly and is honest. _Weakness:_ there is no visual proof of the work. Product work needs that proof, a library author can do without it.

**4. Emil Kowalski.** A one-line role ("Design Engineer") followed by a list of projects with one-liners. Motion craft shows up only in the details.
_Takeaway:_ the hierarchy of name, then role, then evidence.

**5. Lee Robinson.** Minimal editorial: a bio paragraph, then topics, then dated posts.
_Takeaway:_ dates and plain lists build credibility without decoration.

**6. Josh W. Comeau.** Warm, playful, and light/dark aware. Sound toggles and springy hovers give it personality.
_Takeaway:_ interaction feedback can carry a brand. _Weakness:_ it is a content site rather than a hiring page.

**7. Jhey Tompkins.** A large name and a tagline triad. A live status list (local time, weather, now playing) makes the person feel present.
_Takeaway:_ a small, true live detail such as local time adds humanity.

**8. Bruno Simon.** The whole site is a drivable 3D world. It is unforgettable, but projects are hard to find and contact sits behind exploration.
_Takeaway:_ memorability is good, but not at the cost of the recruiter path. Not adapted.

**9. Kamran Bekirov (Flutter).** The hero leads with a headline about the work rather than a role, and has an "open to work" badge. Apps appear as poster cards with App Store and Play buttons. Packages and contact are clear, and a résumé link sits next to them.
_Strength:_ store buttons are first-class, which suits mobile developers. _Weakness:_ the identical card grid flattens the importance of individual projects.

**10. Code With Andrea (Flutter).** A strong educational brand with a light/dark toggle and tag-based content cards.
_Takeaway:_ Flutter audiences respond to specifics such as package names, architecture and testing.

**11. Jesper Landberg (Awwwards SOTD, Sep 2026).** A large "name — design engineer" heading, then a short bio. Work has two views, Featured and Full: eight featured projects, each a linked name with a one-line description, and a full index. An award count is broken down by award body.
_Takeaway:_ a two-tier project structure, with a few featured spreads and an index for the rest.

**12. Elliott Mangham (Awwwards SOTD).** A percentage preloader, a headshot, a "Credentials [+]" expander and a live UK time readout. Booking CTAs repeat throughout. Projects appear as a thumbnail grid or marquee.
_Strength:_ the conversion path is unusually strong. _Weakness:_ the preloader delays content, and the stat-heavy credentials don't suit someone earlier in their career.

**13. Pacôme Pertant (Awwwards SOTD, Jun 2026).** A showreel-led hero, a "enter with or without sound" gate, a looping ticker and an overlay menu.
_Takeaway:_ the overlay menu choreography is worth adapting for mobile. _Weakness:_ the entry gate is friction a recruiter does not need.

Common to 11–13: large display typography and choreographed motion. These sites can also be heavy on JavaScript, and some hide content behind animation or gates, which hurts accessibility and Core Web Vitals.

**14. Flutter-web portfolio templates.** Typical features are a centred avatar, a typing effect, skill percentage bars and identical cards. Their slow first paint and lack of SEO are the result of rendering through Flutter web.
_Counter-example:_ this is exactly what the brief asks us to avoid.

## Patterns that make the best examples memorable

1. **One strong typographic idea.** Each memorable site has a single signature, such as a display serif, a manifesto or a live status line.
2. **Evidence over adjectives.** Store links, dates, package names, tech tags and real screenshots do the persuading.
3. **Clear recruiter path.** It takes about five seconds to know who the person is, what they build and how to contact them.
4. **Restraint in motion.** Micro-interactions and entrance choreography work better than constant ambient animation.
5. **Variable rhythm.** The best sites give their main project a full spread instead of a uniform grid.
6. **Small human details.** Local time, current status and a personal voice.

## Ideas adapted (not copied)

- **Display serif with a mono "spec" layer.** This comes from the editorial award sites, plus the metadata style of engineering tools.
- **Real store button and release status as first-class UI.** From Kamran Bekirov. Here it extends to honest status badges: _Live on Google Play_, _Closed testing_, _In development_.
- **Tech tags on experience and projects.** From Brittany Chiang.
- **Local-time and availability strip.** From Jhey Tompkins.
- **Editorial spreads instead of uniform cards.** From the Awwwards sites. The featured project gets the largest canvas.
- **Light/dark toggle.** From Code With Andrea and Josh Comeau. It is useful because recruiters read in very different environments.

## Rejected ideas

These were rejected: skill percentage bars, typing-effect headlines, 3D worlds, custom cursors, testimonial carousels, client-logo walls, glowing gradient blobs, and any statistic that cannot be verified.

## Final design direction

**Direction A, premium dark editorial, with a full light theme.**

Reasoning: a mobile developer's proof lives in screenshots, and screenshots read best on a dark, neutral stage. An editorial serif signals product taste. A mono metadata layer signals engineering precision. Light mode is a complete theme rather than an afterthought, for daytime readers and for printing.

- **Palette:** warm ink `#0B0D0C` / paper `#F3F1EB`. The accent is Text Toolkit's own brand teal `#0F766E`, brightened to `#5FC8B8` for contrast on dark. The portfolio and the flagship product share one colour language.
- **Type:** _Instrument Serif_ for display, _Geist_ for UI and body, _Geist Mono_ for metadata.
- **Signature element:** an annotated device in the hero. A real Text Toolkit screen sits in a phone frame, with mono call-outs that state facts taken from the actual codebase.
- **Structure:** a numbered editorial section system (01 to 06), a full spread for the featured project, compact entries for work in progress, skills linked to the projects that use them, and a timeline for experience.
- **Motion:** entrance reveals, a screenshot crossfade, link and button micro-feedback, a scroll-progress hairline and the mobile menu choreography. Everything respects `prefers-reduced-motion`.
