export type SocialLink = {
  label: "GitHub" | "LinkedIn" | "Twitter";
  href: string;
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  achievements: string[];
  highlight?: boolean;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
};

export type Course = {
  id: string;
  title: string;
  platform: string;
  instructor?: string;
  certificateUrl?: string;
  date?: string;
};

