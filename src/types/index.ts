export type ProjectCategory =
  | "Data Science"
  | "Machine Learning"
  | "AI"
  | "Full-Stack"
  | "Web Development";

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  status?: "completed" | "in-progress";
};

export type Certificate = {
  name: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
};
