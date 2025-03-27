import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/global.css";
import { Toaster } from "sonner";
import AppShell from "@/components/layout/AppShell";
import UserProvider from "@/context/UserContext";

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
      <body
        className={`${inter.variable} antialiased h-screen md:w-[calc(180wh-16px)]`}
      >
        <UserProvider>
          <Toaster />
          <AppShell>{children}</AppShell>
        </UserProvider>
      </body>
    </html>
  );
}
