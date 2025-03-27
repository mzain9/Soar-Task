import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "A professional Next.js application.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Toaster />
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex flex-col flex-1 ml-60">
            <Header />
            <main className="flex-1 p-[30px]">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
