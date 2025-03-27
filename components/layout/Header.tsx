"use client";

import { useUser } from "@/context/UserContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClipLoader } from "react-spinners";

const pageTitles: Record<string, string> = {
  "/dashboard": "Overview",
  "/transactions": "Transactions",
  "/accounts": "Accounts",
  "/investments": "Investments",
  "/credit-cards": "Credit Cards",
  "/loans": "Loans",
  "/services": "Services",
  "/setting": "Setting",
  "/privileges": "Privileges",
};
interface HeaderProps {
  onMobileMenuClick: () => void;
}

const Header = ({ onMobileMenuClick }: HeaderProps) => {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "WELCOME";
  const { user, loading } = useUser();

  return (
    <header className="flex relative flex-wrap items-center bg-white max-h-[140px] md:h-[100px] px-8 md:px-10">
      {/* Main Header Content */}
      <div className="w-full flex items-center justify-between align-middle h-[60px] relative">
        <button onClick={onMobileMenuClick} className="md:hidden mr-4">
          {/* Simple Hamburger Icon */}
          <svg
            className="w-5 h-5 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-primary text-[20px] md:text-[28px] font-semibold">
          {title}
        </h2>

        {/* Right Section: Only show avatar on small screens */}
        <div className="flex items-center space-x-4">
          {/* Search Box, Settings, and Notifications Hidden on Small Screens */}
          <div className="hidden md:flex items-center bg-background-light rounded-full px-4 py-2 w-[255px]">
            <Image
              src="/icons/search-icon.svg"
              alt="Search"
              width={20}
              height={20}
            />
            <input
              type="text"
              placeholder="Search for something"
              className="ml-2 bg-transparent text-text-muted outline-none w-full"
            />
          </div>

          <div className="hidden md:flex relative">
            <Link
              href={"/setting"}
              className="bg-background-light w-[50px] h-[50px] rounded-full flex items-center justify-center"
            >
              <Image
                src="/icons/setting-icon.svg"
                alt="Settings"
                width={25}
                height={25}
              />
            </Link>
          </div>

          <div className="hidden md:flex relative">
            <div className="bg-background-light w-[50px] h-[50px] rounded-full flex items-center justify-center">
              <Image
                src="/icons/bell-icon.svg"
                alt="Notifications"
                width={25}
                height={25}
              />
            </div>
          </div>

          {/* Profile Icon Always Visible */}
          <div className="relative">
            <div className="bg-background-light w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center overflow-hidden">
              {loading ? (
                <ClipLoader color="var(--primary)" />
              ) : (
                <Image
                  src={user?.profilePic || "/icons/profile-icon.png"}
                  alt="Profile"
                  width={50}
                  height={50}
                  className="object-fill"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden w-full flex items-center justify-start bg-background-light rounded-full px-4 py-2 h-[50px] mb-4">
        <Image
          src="/icons/search-icon.svg"
          alt="Search"
          width={20}
          height={20}
        />
        <input
          type="text"
          placeholder="Search for something"
          className="ml-2 bg-transparent text-text-muted outline-none w-full"
        />
      </div>
    </header>
  );
};

export default Header;
