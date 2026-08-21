export type Locale = "th" | "en";
export type LocalizedText = Record<Locale, string>;
export type SkillLevel = "Basic" | "Familiar" | "Basic / Familiar" | "Intermediate" | "Advanced";
export type ProjectCategory =
  | "Web Application"
  | "Mobile Application"
  | "Artificial Intelligence"
  | "Machine Learning"
  | "IoT"
  | "Operating Systems"
  | "UI/UX";

export interface SocialLink {
  platform: "GitHub" | "LinkedIn" | "Email" | "Phone";
  label: string;
  href?: string;
}

export interface EducationEntry {
  institution: LocalizedText;
  period: LocalizedText;
  details: Record<Locale, string[]>;
}

export interface ProfileDetail {
  label: LocalizedText;
  value: LocalizedText;
}

export interface Profile {
  name: string;
  displayName: Record<Locale, { first: string; last: string }>;
  greeting: LocalizedText;
  roles: Record<Locale, string[]>;
  introduction: LocalizedText;
  profileImage: string;
  education: LocalizedText;
  educationHistory: EducationEntry[];
  personalDetails: ProfileDetail[];
  location: LocalizedText;
  mainInterest: LocalizedText;
  careerGoal: LocalizedText;
  about: LocalizedText[];
  interests: LocalizedText[];
  socials: SocialLink[];
}

export interface Project {
  id: string;
  title: string;
  year: number;
  category: ProjectCategory;
  role?: LocalizedText;
  description: LocalizedText;
  highlights?: Record<Locale, string[]>;
  image: string;
  images?: string[];
  video?: string;
  technologies: string[];
  github?: string;
  figma?: string;
  demo?: string;
}

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  title: LocalizedText;
  skills: Skill[];
}

export interface Activity {
  title: LocalizedText;
  date?: LocalizedText;
  role?: LocalizedText;
  description: LocalizedText;
  highlights?: Record<Locale, string[]>;
  skills: string[];
  image?: string;
  images?: string[];
}

export interface Certification {
  name: LocalizedText;
  issuer: string;
  date: LocalizedText;
  category: string;
  credentialId?: string;
  certificateUrl?: string;
}

export interface PortfolioData {
  profile: Profile;
  projects: Project[];
  skillGroups: SkillGroup[];
  activities: Activity[];
  certifications: Certification[];
}
