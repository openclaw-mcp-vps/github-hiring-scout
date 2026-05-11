import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Hiring Scout – Find Developers by GitHub Activity",
  description: "Identify passive developer candidates based on commit patterns, tech stack, and contribution quality. Built for technical recruiters and startup CTOs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="796b313e-708f-4156-a386-f90bddf29993"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
