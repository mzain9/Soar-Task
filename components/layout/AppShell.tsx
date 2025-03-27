"use client";

import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { usePathname } from "next/navigation";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const pathname = usePathname();

  const handleMobileMenuClick = () => setMobileSidebarOpen(true);
  const handleMobileSidebarClose = () => setMobileSidebarOpen(false);

  useEffect(() => {
    handleMobileSidebarClose();
  }, [pathname]);

  return (
    <div className="flex min-h-screen w-full">
      {/* Desktop Sidebar (Always Visible) */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar (Sliding Animation with Tailwind) */}
      <div
        className={`fixed top-0 left-0 w-60 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>

      {/* Overlay for Click Outside */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={handleMobileSidebarClose}
        />
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-1 md:pl-60 w-full bg-white md:bg-transparent">
        <Header onMobileMenuClick={handleMobileMenuClick} />
        <main className="flex-1 p-[20px] md:p-[30px] w-full">{children}</main>
      </div>
    </div>
  );
}
