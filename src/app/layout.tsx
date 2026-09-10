import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adarsh-portfolio.vercel.app"),
  title: "Adarsh | Aspiring Data Scientist & Full-Stack Developer",
  description:
    "Portfolio of Adarsh, a BCA graduate building projects across data science, AI, and full-stack web development.",
  openGraph: {
    title: "Adarsh | Aspiring Data Scientist & Full-Stack Developer",
    description:
      "Portfolio of Adarsh, a BCA graduate building projects across data science, AI, and full-stack web development.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh | Aspiring Data Scientist & Full-Stack Developer",
    description:
      "Portfolio of Adarsh, a BCA graduate building projects across data science, AI, and full-stack web development.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
