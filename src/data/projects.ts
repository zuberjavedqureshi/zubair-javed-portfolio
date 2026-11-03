/**
 * Projects shown on the site. To add a project, append an object to `projects`.
 *
 * Rules for this file:
 * - `screenshots` must be genuine captures of the app. Leave the array empty otherwise;
 *   the UI then renders a clearly-labelled typographic placeholder instead.
 * - `status` drives the badge colour and wording. Never mark something "live" unless it is public.
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
  /** Free-form facts rendered as a mono spec list */
  specs: { label: string; value: string }[];
  features: string[];
  engineering: { title: string; body: string }[];
  stack: string[];
  screenshots: Screenshot[];
  screenshotNote?: string;
  links: ProjectLink[];
  /** Real commit messages from the project's git history */
  buildLog?: { date: string; message: string }[];
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
    kicker: "Flagship · Published app",
    summary:
      "A Flutter productivity app that bundles everyday text tools into one fast, focused experience: repeat, style, clean and analyse text, build better AI prompts and keep quick notes. Designed, built, published and maintained by me on Google Play.",
    status: "live",
    statusLabel: "Live on Google Play",
    featured: true,
    icon: "/projects/text-toolkit/icon.png",
    specs: [
      { label: "Platform", value: "Android · Google Play" },
      { label: "Package", value: "com.zedroidlabs.texttoolkit" },
      { label: "Current build", value: "v0.3.0+16" },
      { label: "Codebase", value: "9 feature modules · 38 test files" },
      { label: "Role", value: "Solo: design, build, release" },
    ],
    features: [
      "Text Repeater with repeat count, separators, export and sharing",
      "Stylish Text with 39 styles, favourites and quick copy",
      "Name Generator for expressive name styles",
      "Text Analysis for word and character counts plus reading time",
      "Text Cleaner to strip extra spaces and tidy pasted text",
      "Emoji Art to turn letters into emoji block art",
      "Prompt Builder: 25 guided workflows that compose prompts for AI tools",
      "Keep Notes, saved on the device, plus favourites and history",
    ],
    engineering: [
      {
        title: "A registry, not a router maze",
        body: "Every tool is declared once in a central ToolRegistry with its metadata, ordering and factory. Text can be handed from one tool to another through a typed handoff contract, and a tool only receives text if it explicitly implements a receiver.",
      },
      {
        title: "Monetisation that fails safely",
        body: "In-app purchases use a typed purchase-event system and restore Pro ownership automatically on startup. AdMob banners and session-aware interstitials sit behind a dedicated ads layer, so tools never talk to the SDK directly.",
      },
      {
        title: "Offline AI prompt workflows",
        body: "Prompt Builder walks people through short, guided questions across Work, Study, Career, Everyday and AI Image categories. Prompts are composed on the device with deterministic generators, and catalogue integrity is covered by tests.",
      },
      {
        title: "A design system before features",
        body: "Version 0.3 started with shared tokens for colour, motion and spacing, plus reusable input and result panels. Later tools were assembled from those parts rather than styled one by one.",
      },
    ],
    stack: [
      "Flutter",
      "Dart",
      "Riverpod",
      "SharedPreferences",
      "In-App Purchase",
      "Google Mobile Ads",
      "In-App Update",
      "Share Plus",
      "flutter_test",
    ],
    screenshots: [
      tt("home", "Home", "Text Toolkit home screen with Text Repeater and Prompt Builder as featured tools and a grid of supporting tools"),
      tt("repeater", "Text Repeater", "Text Repeater screen repeating 'Hello World' ten times on new lines, with Copy, Share and WhatsApp actions"),
      tt("stylish", "Stylish Text", "Stylish Text screen listing Gothic text styles for the phrase 'Make every word count'"),
      tt("prompt-builder", "Prompt Builder", "Prompt Builder screen with Work, Study, Career, Everyday and AI Image categories and a list of work workflows"),
      tt("prompt-result", "Generated prompt", "Generated AI image prompt for a YouTube thumbnail with Copy and Share buttons"),
      tt("emoji-art", "Emoji Art", "Emoji Art screen turning the text 'HI' into heart emoji block letters"),
    ],
    screenshotNote: "Frames taken from screen recordings of the Android app.",
    links: [
      {
        label: "Get it on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.zedroidlabs.texttoolkit",
        kind: "play-store",
      },
      { label: "Privacy policy", href: "https://zuberjavedqureshi.github.io/privacy-policy/", kind: "privacy" },
    ],
    buildLog: [
      { date: "2026-11-01", message: "feat: add persistent Keep Notes tool" },
      { date: "2026-11-01", message: "feat: add stylish name generator tool" },
      { date: "2026-10-31", message: "feat: polish UI and prepare v0.3 for release" },
      { date: "2026-10-10", message: "feat: complete AI image workflows and 25-prompt catalog" },
      { date: "2026-10-04", message: "feat: add guided prompt builder foundation" },
      { date: "2026-10-02", message: "feat: add tool registry and cross-tool handoff" },
      { date: "2026-10-01", message: "feat: add v0.3 design system foundation" },
      { date: "2026-07-01", message: "feat(billing): restore Pro purchases automatically on app startup" },
      { date: "2026-06-26", message: "feat(billing): introduce typed purchase event system" },
    ],
  },
  {
    slug: "save-karlo",
    name: "Save Karlo",
    kicker: "Local-first link manager",
    summary:
      "A searchable inbox for links. Share a link from any Android app and it lands in Save Karlo, where it can be searched, filtered, pinned and backed up. It has no account and no cloud: everything stays on the device.",
    status: "testing",
    statusLabel: "Closed testing on Google Play",
    icon: "/projects/save-karlo/icon.png",
    specs: [
      { label: "Platform", value: "Android · phone & tablet" },
      { label: "Stage", value: "Closed testing (v1.0.0)" },
      { label: "Storage", value: "SQLite, on-device only" },
      { label: "History", value: "61 commits" },
    ],
    features: [
      "Save links straight from the Android share menu",
      "Search, with filtering by domain",
      "Pin important links to the top",
      "Multi-select with bulk share, copy, pin and delete",
      "Export and import JSON backups",
      "Light and dark themes",
    ],
    engineering: [
      {
        title: "Local-first by design",
        body: "Links are stored in SQLite behind a repository and DTO layer. Schema changes go through explicit, transactional, versioned migrations, with protection against destructive downgrades.",
      },
      {
        title: "Share-intent ingestion",
        body: "A dedicated parser extracts and normalises URLs from whatever text another app shares, detects duplicates, and then fetches page metadata in the background.",
      },
      {
        title: "Graceful offline states",
        body: "Previews degrade cleanly: if metadata or a favicon cannot load offline, the card falls back to initials instead of a broken image.",
      },
    ],
    stack: ["Flutter", "Dart", "Riverpod 3", "sqflite", "http + html parsing", "Share Plus", "File Picker"],
    screenshots: [
      sk("inbox", "Inbox", "Save Karlo inbox with a search field, domain filter chips and saved link cards"),
      sk("multiselect", "Multi-select", "Save Karlo multi-select mode with two links selected and a bulk action bar for Share, Copy, Pin and Delete"),
      sk("share_intent", "Sharing a link", "Save Karlo sharing a saved link through the system share sheet"),
      sk("settings", "Settings", "Save Karlo settings screen"),
    ],
    screenshotNote: "Captured from a development build. The banner at the bottom is a test ad.",
    links: [{ label: "Privacy policy", href: "https://zuberjavedqureshi.github.io/save-karlo-privacy/", kind: "privacy" }],
  },
  {
    slug: "super-secret",
    name: "Super Secret",
    kicker: "Password manager",
    summary:
      "A Flutter password manager focused on getting mobile security fundamentals right. Vault records are encrypted with a key derived from the master password, and that key lives only in session memory.",
    status: "development",
    statusLabel: "In development · not released",
    specs: [
      { label: "Platform", value: "Android & iOS (Flutter)" },
      { label: "Storage", value: "Isar, encrypted values" },
    ],
    features: [
      "PBKDF2 key derivation and AES encryption of saved passwords",
      "Biometric unlock backed by Android Keystore and iOS Keychain",
      "Lifecycle lock and configurable inactivity auto-lock",
      "Clipboard auto-clear for copied passwords",
      "Cryptographically secure password generator",
    ],
    engineering: [],
    stack: ["Flutter", "Dart", "Isar", "Secure storage", "Biometrics"],
    screenshots: [],
    links: [],
  },
  {
    slug: "tasbeeh",
    name: "Tasbeeh",
    kicker: "Dhikr counter",
    summary:
      "An early-stage Flutter app for counting dhikr. It has a hand-drawn bead counter, a dhikr library with source references, and counting sessions saved on the device.",
    status: "development",
    statusLabel: "Early development",
    specs: [
      { label: "Platform", value: "Flutter" },
      { label: "Storage", value: "SQLite sessions" },
    ],
    features: [
      "Bead counter drawn with a CustomPainter",
      "Dhikr library with a source-reference manifest, plus custom dhikr",
      "Counter sessions saved locally, with a completion sound",
      "Light, dark and AMOLED themes",
    ],
    engineering: [],
    stack: ["Flutter", "Dart", "Riverpod 3", "go_router", "sqflite"],
    screenshots: [],
    links: [],
  },
];

export const featuredProject = projects.find((p) => p.featured)!;
export const secondaryProjects = projects.filter((p) => !p.featured && p.screenshots.length > 0);
export const labProjects = projects.filter((p) => p.screenshots.length === 0);
