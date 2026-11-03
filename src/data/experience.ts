export type ExperienceItem = {
  role: string;
  org: string;
  /** Word between role and org in the heading (default "at") */
  connector?: string;
  period: string;
  start: string; // ISO yyyy-mm, used for <time>
  current?: boolean;
  summary: string;
  points: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Flutter Developer",
    org: "Busisoft",
    period: "May 2025 — Present",
    start: "2025-05",
    current: true,
    summary: "Developing and maintaining courier management mobile applications.",
    points: [
      "Build mobile UI in Flutter for courier management workflows",
      "Integrate REST APIs and handle JSON data across app features",
      "Implement new features and fix bugs found in testing and production",
      "Prepare application releases and maintain shipped versions",
    ],
    tags: ["Flutter", "Dart", "REST APIs", "JSON", "Debugging", "Releases"],
  },
  {
    role: "App Developer",
    org: "Independent",
    connector: "·",
    period: "2026 — Present",
    start: "2026-04",
    current: true,
    summary: "Designing, building, publishing and maintaining my own Flutter apps.",
    points: [
      "Published Text Toolkit on Google Play, with in-app purchases and AdMob",
      "Took Save Karlo, a local-first link manager, through to closed testing",
      "Own the full lifecycle: product scope, UI, architecture, testing, store listing and updates",
    ],
    tags: ["Product thinking", "Play Console", "Monetisation", "Testing"],
  },
];

export const education = {
  degree: "Master’s in Computer Science",
  institution: "RD National College, Bandra West",
  university: "University of Mumbai",
  completed: "September 2025",
  completedIso: "2025-09",
};
