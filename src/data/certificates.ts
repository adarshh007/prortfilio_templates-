import type { Certificate } from "@/types";

// Dates and credential URLs aren't included because they weren't provided —
// CertificateCard only renders those fields when present.
export const certificates: Certificate[] = [
  { name: "Python for Data Science", issuer: "" },
  { name: "Full Stack Web Development with AI Tools", issuer: "" },
  { name: "PostgreSQL", issuer: "IIT Bombay Spoken Tutorial" },
  { name: "C++", issuer: "" },
];
