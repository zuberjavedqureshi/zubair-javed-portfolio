/**
 * Projects shown on the site. To add a project, append an object to `projects`.
 *
 * Rules for this file:
 * - `screenshots` must be genuine captures of the app. Leave the array empty otherwise;
 *   the UI then renders a compact card without imagery.
 * - `status` drives the badge colour and wording. Never mark something "live" unless it is public.
 * - Keep copy short: one-sentence summary, a handful of features, the core stack.
 */

export type ProjectStatus = "live" | "testing" | "development";

export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type ProjectLink = {
  label: string;
  href: string;
  kind: "play-store" | "privacy" | "source" | "other";
};

export type Project = {
  slug: string;
  name: string;
  kicker: string;
  summary: string;
  status: ProjectStatus;
  statusLabel: string;
  featured?: boolean;
  icon?: string;
  features: string[];
  stack: string[];
  screenshots: Screenshot[];
  screenshotNote?: string;
  links: ProjectLink[];
};

const tt = (file: string, caption: string, alt: string): Screenshot => ({
  src: `/projects/text-toolkit/${file}.png`,
  caption,
  alt,
  width: 720,
  height: 1600,
});

const sk = (file: string, caption: string, alt: string): Screenshot => ({
  src: `/projects/save-karlo/${file}.png`,
  caption,
  alt,
  width: 664,
  height: 1434,
});

export const projects: Project[] = [
  {
    slug: "text-toolkit",
    name: "Text Toolkit",
    kicker: "Productivity app",
    summary:
      "Everyday text tools in one focused app: repeat, style, clean and analyse text, and build better prompts for AI tools.",
    status: "live",
    statusLabel: "Live on Google Play",
    featured: true,
    icon: "/projects/text-toolkit/icon.png",
    features: [
      "Text Repeater and Stylish Text",
      "Text Analysis and Text Cleaner",
      "Guided Prompt Builder for AI tools",
      "Notes, favourites and history on the device",
    ],
    stack: ["Flutter", "Dart", "Riverpod"],
    screenshots: [
      tt("home", "Home", "Text Toolkit home screen with Text Repeater and Prompt Builder as featured tools and a grid of supporting tools"),
      tt("repeater", "Text Repeater", "Text Repeater screen repeating 'Hello World' ten times on new lines, with Copy, Share and WhatsApp actions"),
      tt("stylish", "Stylish Text", "Stylish Text screen listing Gothic text styles for the phrase 'Make every word count'"),
      tt("prompt-builder", "Prompt Builder", "Prompt Builder screen with Work, Study, Career, Everyday and AI Image categories and a list of work workflows"),
      tt("emoji-art", "Emoji Art", "Emoji Art screen turning the text 'HI' into heart emoji block letters"),
    ],
    links: [
      {
        label: "Get it on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.zedroidlabs.texttoolkit",
        kind: "play-store",
      },
      { label: "Privacy policy", href: "https://zuberjavedqureshi.github.io/privacy-policy/", kind: "privacy" },
    ],
  },
  {
    slug: "save-karlo",
    name: "Save Karlo",
    kicker: "Bookmark manager",
    summary:
      "A local-first bookmark and link manager. Share a link from any app, then find it again in seconds. Everything stays on the device.",
    status: "testing",
    statusLabel: "Closed testing",
    icon: "/projects/save-karlo/icon.png",
    features: [
      "Save links from the Android share menu",
      "Search and filter by domain",
      "Pin, multi-select and bulk actions",
      "JSON backup and restore",
    ],
    stack: ["Flutter", "Dart", "Riverpod", "SQLite"],
    screenshots: [
      sk("inbox", "Inbox", "Save Karlo inbox with a search field, domain filter chips and saved link cards"),
      sk("multiselect", "Multi-select", "Save Karlo multi-select mode with two links selected and a bulk action bar for Share, Copy, Pin and Delete"),
      sk("share_intent", "Sharing a link", "Save Karlo sharing a saved link through the system share sheet"),
    ],
    screenshotNote: "Development build. The bottom banner is a test ad.",
    links: [{ label: "Privacy policy", href: "https://zuberjavedqureshi.github.io/save-karlo-privacy/", kind: "privacy" }],
  },
  {
    slug: "super-secret",
    name: "Super Secret",
    kicker: "Password manager",
    summary: "An encrypted password vault with biometric unlock and auto-lock.",
    status: "development",
    statusLabel: "In development",
    features: [],
    stack: ["Flutter", "Dart", "Isar"],
    screenshots: [],
    links: [],
  },
  {
    slug: "tasbeeh",
    name: "Tasbeeh",
    kicker: "Dhikr counter",
    summary: "A dhikr counter with a hand-drawn bead counter and saved sessions.",
    status: "development",
    statusLabel: "Early development",
    features: [],
    stack: ["Flutter", "Dart", "SQLite"],
    screenshots: [],
    links: [],
  },
];

export const featuredProject = projects.find((p) => p.featured)!;
export const secondaryProjects = projects.filter((p) => !p.featured && p.screenshots.length > 0);
export const labProjects = projects.filter((p) => p.screenshots.length === 0);
