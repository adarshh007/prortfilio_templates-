import type { Project } from "@/types";

// Repository and live-demo links aren't included per project because
// specific URLs for them haven't been provided — the brief is explicit
// that nothing here should be invented. ProjectCard only renders those
// buttons when a URL is actually present.
export const projects: Project[] = [
  {
    slug: "ecocommute",
    title: "EcoCommute",
    description:
      "A carpooling platform built with Django, developed alongside a full Software Requirements Specification.",
    category: "Full-Stack",
    technologies: ["Python", "Django"],
    featured: true,
    status: "completed",
  },
  {
    slug: "workshop-registration-system",
    title: "Workshop Registration System",
    description: "A registration system for workshops, built with PHP and MySQL.",
    category: "Web Development",
    technologies: ["PHP", "MySQL"],
    status: "completed",
  },
  {
    slug: "face-recognition-attendance-system",
    title: "Face Recognition Attendance System",
    description: "An attendance system using face recognition, built with Python and OpenCV.",
    category: "Machine Learning",
    technologies: ["Python", "OpenCV"],
    status: "in-progress",
  },
];
