// The brief suggested a generic progression (BCA -> Web Dev -> Frontend ->
// Backend -> Full-Stack -> Python -> Data Analysis -> ML -> AI/RAG). That's
// not Adarsh's actual history, so this follows what's really stated instead:
// a BCA, then web development work demonstrated through real projects, then
// the data science & AI course he's currently partway through.
export const journeyStages = [
  {
    id: "bca",
    title: "BCA",
    period: "Completed 2026",
    description: "Bachelor of Computer Applications, MG University.",
    status: "complete",
  },
  {
    id: "web-dev",
    title: "Web Development",
    period: "",
    description:
      "Built projects with Django, PHP, and JavaScript, including a carpooling platform and a workshop registration system.",
    status: "complete",
  },
  {
    id: "full-stack",
    title: "Full-Stack",
    period: "",
    description:
      "Combined frontend and backend across those projects — from database design through to the interfaces people use.",
    status: "complete",
  },
  {
    id: "data-ai",
    title: "Data Science & AI",
    period: "In progress",
    description:
      "Currently working through the KELTRON Data Science & AI certificate course — supervised/unsupervised learning, model evaluation, and the statistics behind it.",
    status: "in-progress",
  },
] as const;
