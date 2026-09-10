export const profile = {
  name: "Adarsh",
  role: "Aspiring Data Scientist & Full-Stack Developer",
  tagline:
    "Building intelligent, scalable web applications with data, AI, and modern web technologies.",
  location: "Ernakulam, Kerala, India",
  bio: "I am a BCA graduate focused on building practical skills in data science, artificial intelligence, and full-stack web development. I enjoy turning ideas into useful applications, working with data, developing web experiences, and exploring how AI can be integrated into real-world products.",
  highlights: ["BCA Graduate", "Data Science", "Full-Stack Development", "AI / ML"],
  email: "272005adarshbiju@gmail.com",
  phone: "+91 8891327713",
  github: "https://github.com/adarshh007",
  linkedin: "https://linkedin.com/in/adarsh-biju-1002a1287",
  // Resume file is expected at /public/resume.pdf. Add the real file there —
  // nothing is generated or faked in its place.
  resumeUrl: "/resume.pdf",
} as const;

// All ten sections are wired up in src/app/page.tsx. Certificates, GitHub,
// and Resume aren't in the top nav by design — only Resume gets its own
// CTA button in the navbar (see Navbar.tsx).
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;
