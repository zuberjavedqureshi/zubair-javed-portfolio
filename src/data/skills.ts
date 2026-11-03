/**
 * Skills grouped by area. `evidence` links each skill to where it is actually used,
 * which is more honest (and more useful to a reviewer) than a percentage bar.
 *
 * Evidence keys: TT = Text Toolkit, SK = Save Karlo, SS = Super Secret, TB = Tasbeeh, BS = Busisoft (work)
 */
export type Evidence = "TT" | "SK" | "SS" | "TB" | "BS";

export const evidenceLabels: Record<Evidence, string> = {
  BS: "Busisoft",
  TT: "Text Toolkit",
  SK: "Save Karlo",
  SS: "Super Secret",
  TB: "Tasbeeh",
};

export type SkillGroup = {
  title: string;
  blurb: string;
  exploring?: boolean;
  skills: { name: string; evidence?: Evidence[] }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Mobile development",
    blurb: "Cross-platform apps with a native feel.",
    skills: [
      { name: "Flutter", evidence: ["BS", "TT", "SK", "SS", "TB"] },
      { name: "Dart", evidence: ["BS", "TT", "SK", "SS", "TB"] },
      { name: "Android", evidence: ["BS", "TT", "SK"] },
      { name: "iOS", evidence: ["SS"] },
      { name: "Material 3 UI", evidence: ["TT", "SK"] },
    ],
  },
  {
    title: "Architecture & state",
    blurb: "Code that stays easy to change.",
    skills: [
      { name: "Riverpod", evidence: ["TT", "SK", "TB"] },
      { name: "Feature-first structure", evidence: ["TT", "SK", "TB"] },
      { name: "Repository pattern", evidence: ["TT", "SK"] },
      { name: "Design tokens & reusable widgets", evidence: ["TT"] },
      { name: "go_router", evidence: ["TB"] },
    ],
  },
  {
    title: "Data & integration",
    blurb: "Talking to servers and storing data on the device.",
    skills: [
      { name: "REST APIs", evidence: ["BS"] },
      { name: "JSON", evidence: ["BS", "SK"] },
      { name: "Async programming", evidence: ["BS", "TT", "SK"] },
      { name: "SQLite (sqflite) & migrations", evidence: ["SK", "TB"] },
      { name: "Isar", evidence: ["SS"] },
      { name: "SharedPreferences", evidence: ["TT"] },
    ],
  },
  {
    title: "Platform & release",
    blurb: "Getting builds to real people, and keeping them healthy.",
    skills: [
      { name: "Google Play Console", evidence: ["TT", "SK"] },
      { name: "App releases & maintenance", evidence: ["BS", "TT"] },
      { name: "In-app purchases", evidence: ["TT"] },
      { name: "AdMob", evidence: ["TT", "SK"] },
      { name: "Android share intents", evidence: ["SK"] },
      { name: "Biometrics & secure storage", evidence: ["SS"] },
    ],
  },
  {
    title: "Quality & tooling",
    blurb: "Catching problems before users do.",
    skills: [
      { name: "Debugging & bug fixing", evidence: ["BS"] },
      { name: "Widget & unit tests", evidence: ["TT", "SK"] },
      { name: "Git & GitHub", evidence: ["TT", "SK", "SS"] },
      { name: "Android Studio" },
      { name: "VS Code" },
    ],
  },
  {
    title: "AI-powered apps",
    blurb: "Where I’m heading next. I’m learning this area, not claiming production experience.",
    exploring: true,
    skills: [
      { name: "Prompt design for AI tools", evidence: ["TT"] },
      { name: "AI-assisted features in mobile apps" },
      { name: "Python fundamentals" },
    ],
  },
];
