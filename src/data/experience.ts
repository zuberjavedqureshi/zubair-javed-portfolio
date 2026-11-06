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
};

export const experience: ExperienceItem[] = [
  {
    role: "Flutter Developer",
    org: "Xpresion Next",
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
  },
  {
    role: "Flutter App Developer",
    org: "Self-employed",
    connector: "·",
    period: "2022 — Present",
    start: "2022",
    current: true,
    summary: "Building Flutter apps independently since 2022, from learning projects to published apps.",
    points: [
      "Published Text Toolkit on Google Play in 2026, with in-app purchases and AdMob",
      "Took Save Karlo, a local-first link manager, through to closed testing",
      "Own the full lifecycle: scope, UI, architecture, testing and store releases",
    ],
  },
];

export const education = {
  degree: "M.Sc. Computer Science",
  institution: "RD National College, Bandra West",
  university: "University of Mumbai",
  completed: "September 2025",
  completedIso: "2025-09",
};
