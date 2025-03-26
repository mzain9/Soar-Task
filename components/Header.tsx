"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
  "/dashboard": "Overview",
  "/transactions": "Transactions",
  "/investments": "Investments",
  "/credit-cards": "Credit Cards",
  "/loan": "Loan",
  "/services": "Services",
  "/setting": "Setting",
  "/account": "Account",
  "/privileges": "Privileges",
};

const Header = () => {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "Dashboard";

  return (
    <header className=" flex relative items-center bg-white h-[100px]">
      {/* Main Header Content */}
      <div className="w-full flex items-center justify-between align-middle px-10 h-[60px] relative">
        {/* Center Section: Title */}
        <h2 className="text-primary-2 text-[28px] font-semibold">{title}</h2>

        {/* Right Section: Search + Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Box */}
          <div className="flex items-center bg-[#f5f7fa] rounded-full px-4 py-2 w-[255px]">
            <Image
              src="/icons/search-icon.svg"
              alt="Search"
              width={20}
              height={20}
            />
            <input
              type="text"
              placeholder="Search for something"
              className="ml-2 bg-transparent text-[#8ba3cb] outline-none w-full"
            />
          </div>

          {/* Setting Icon */}
          <div className="relative">
            <Link href={"/setting"} className="bg-[#f5f7fa] w-[50px] h-[50px] rounded-full flex items-center justify-center">
              <Image
                src="/icons/setting-icon.svg"
                alt="Settings"
                width={25}
                height={25}
              />
            </Link>
          </div>

          {/* Notification Icon */}
          <div className="relative">
            <div className="bg-[#f5f7fa] w-[50px] h-[50px] rounded-full flex items-center justify-center">
              <Image
                src="/icons/bell-icon.svg"
                alt="Notifications"
                width={25}
                height={25}
              />
            </div>
          </div>

          {/* Profile Icon */}
          <div className="relative">
            <div className="bg-[#f5f7fa] w-[50px] h-[50px] rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/icons/profile-icon.png"
                alt="Profile"
                width={50}
                height={50}
                className="object-fill"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
