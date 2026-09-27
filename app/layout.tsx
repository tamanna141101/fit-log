import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FitLog",
  description: "Workout Library and Planning App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main className="min-h-[calc(100vh-160px)]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}