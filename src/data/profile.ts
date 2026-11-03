/**
 * Personal profile. Everything here is rendered on the site.
 * Keep it factual: only add what you can substantiate.
 */
export const profile = {
  name: "Zubair Javed Qureshi",
  shortName: "Zubair",
  initials: "ZQ",
  role: "Flutter & Mobile Application Developer",
  tagline: "Flutter Developer · Mobile Application Developer · Exploring AI-powered apps",
  location: "Mumbai, India",
  timeZone: "Asia/Kolkata",
  timeZoneLabel: "IST",

  /** Set to a mailto-able address to show email in Contact. Left null until confirmed for public use. */
  email: null as string | null,

  /** Path under /public (e.g. "/Zubair-Javed-Qureshi-Resume.pdf"). Resume button is hidden while null. */
  resumeUrl: null as string | null,

  links: {
    linkedin: "https://www.linkedin.com/in/zuber-javed-qureshi-579a55213/",
    github: "https://github.com/zuberjavedqureshi",
    githubHandle: "zuberjavedqureshi",
  },

  availability: "Open to Flutter, Mobile and Flutter + AI roles",

  targetRoles: [
    "Flutter Developer",
    "Senior Flutter Developer",
    "Mobile Application Developer",
    "Flutter + AI Engineer",
  ],

  intro:
    "Flutter developer with about four years of building for Android and iOS. By day I build and maintain courier management apps at Busisoft. Independently, I design, ship and maintain my own apps on Google Play. Now expanding into AI-powered mobile products.",
} as const;

export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://zubair-javed-portfolio.vercel.app").replace(/\/$/, ""),
  repo: "https://github.com/zuberjavedqureshi/zubair-javed-portfolio",
  title: "Zubair Javed Qureshi: Flutter & Mobile Application Developer",
  description:
    "Portfolio of Zubair Javed Qureshi, a Mumbai-based Flutter developer building and shipping Android and iOS apps, including Text Toolkit on Google Play. Expanding into AI-powered mobile applications.",
} as const;

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;
