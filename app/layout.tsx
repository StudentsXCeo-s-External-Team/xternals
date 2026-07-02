import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroAnimation from "../components/IntroAnimation";
import { AnimatedLayout } from "../components/AnimatedLayout";

export const metadata: Metadata = {
  title: "StudentsxCEOs Jakarta",
  description: "A student community that learns directly from CEOs and industry leaders across Indonesia.",
  icons: "/brand_logo.webp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased pt-16 sm:pt-20">
        <IntroAnimation />
        <Header />
        <AnimatedLayout>{children}</AnimatedLayout>
        <Footer />
      </body>
    </html>
  );
}
