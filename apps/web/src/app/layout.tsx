import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Cuong | Node.js Backend Developer",
  description:
    "Portfolio cá nhân tập trung Node.js, NestJS, REST API, database và các dự án backend/full-stack.",
  openGraph: {
    title: "Cuong | Node.js Backend Developer",
    description:
      "Portfolio Node.js Backend / Full-stack Developer với Next.js frontend và NestJS REST API.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
