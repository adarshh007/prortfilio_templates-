// Categories follow the brief's structure, but the entries in each are
// limited to what's actually verified. Several categories the brief
// suggested (NumPy, Pandas, Scikit-learn, React, Next.js, FastAPI, RAG,
// Prompt Engineering) aren't included because they aren't yet part of
// Adarsh's demonstrated skill set — adding them here would be exactly
// the invented experience the brief itself says never to add.
export const skillCategories = [
  {
    id: "data",
    title: "Data",
    skills: ["Python", "SQL", "MySQL", "PostgreSQL"],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Python", "Django", "PHP", "Java"],
  },
  {
    id: "tools",
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "XAMPP", "Linux", "Windows"],
  },
] as const;

// What's actively being studied right now, kept visually distinct from
// the mastered skills above rather than folded in as equivalent experience.
export const currentlyLearning = {
  title: "Currently learning",
  context: "Working through the KELTRON Data Science & AI certificate course.",
  topics: [
    "Supervised & Unsupervised Learning",
    "Model Evaluation Metrics",
    "The ML Workflow",
    "Statistics for ML",
  ],
} as const;
