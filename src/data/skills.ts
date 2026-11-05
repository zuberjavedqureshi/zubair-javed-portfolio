import type { BrandIconName } from "@/components/brand-icons";

/**
 * Technologies shown in the Skills showcase.
 * Every item gets the same visual treatment: no percentages, no proficiency levels.
 * `primary` marks the core professional stack, which is shown larger.
 * `icon` is either a brand mark from brand-icons.ts or a generic Lucide glyph.
 */
export type TechIcon = { brand: BrandIconName } | { lucide: "riverpod" | "api" };

export type Tech = {
  name: string;
  icon: TechIcon;
  primary?: boolean;
};

export type TechGroup = {
  title: string;
  items: Tech[];
};

export const techGroups: TechGroup[] = [
  {
    title: "Mobile Development",
    items: [
      { name: "Flutter", icon: { brand: "flutter" }, primary: true },
      { name: "Dart", icon: { brand: "dart" }, primary: true },
      { name: "Android", icon: { brand: "android" } },
      { name: "Riverpod", icon: { lucide: "riverpod" } },
      { name: "SQLite", icon: { brand: "sqlite" } },
      { name: "Firebase", icon: { brand: "firebase" } },
    ],
  },
  {
    title: "Programming & Web",
    items: [
      { name: "Python", icon: { brand: "python" } },
      { name: "JavaScript", icon: { brand: "javascript" } },
      { name: "HTML", icon: { brand: "html" } },
      { name: "CSS", icon: { brand: "css" } },
      { name: "REST APIs", icon: { lucide: "api" } },
      { name: "JSON", icon: { brand: "json" } },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", icon: { brand: "git" } },
      { name: "GitHub", icon: { brand: "github" } },
      { name: "VS Code", icon: { brand: "vscode" } },
      { name: "Android Studio", icon: { brand: "androidStudio" } },
      { name: "Postman", icon: { brand: "postman" } },
      { name: "Figma", icon: { brand: "figma" } },
    ],
  },
];
