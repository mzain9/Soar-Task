"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "/icons/sidebar/dashboard.svg",
  },
  {
    name: "Transactions",
    href: "/transactions",
    icon: "/icons/sidebar/transactions.svg",
  },
  { name: "Accounts", href: "/accounts", icon: "/icons/sidebar/accounts.svg" },

  {
    name: "Investments",
    href: "/investments",
    icon: "/icons/sidebar/investments.svg",
  },
  {
    name: "Credit Cards",
    href: "/credit-cards",
    icon: "/icons/sidebar/credit-cards.svg",
  },
  { name: "Loans", href: "/loans", icon: "/icons/sidebar/loans.svg" },
  { name: "Services", href: "/services", icon: "/icons/sidebar/services.svg" },
  {
    name: "My Privileges",
    href: "/privileges",
    icon: "/icons/sidebar/privileges.svg",
  },
  { name: "Setting", href: "/setting", icon: "/icons/sidebar/settings.svg" },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="bg-white text-text-secondary w-60 h-screen fixed left-0 shadow-md z-10">
      {/* Left Section: Logo */}
      <div className="flex items-center justify-center align-middle w-60 h-[100px]">
        <Image src="/icons/logo-icon.svg" alt="Logo" width={35} height={35} />
        <h1 className="text-primary text-[25px] font-extrabold px-2">Soar Task</h1>
      </div>

      <nav className="flex flex-col space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link href={item.href} key={item.name} className="relative group">
              <div
                className={`flex items-center px-6 py-4 rounded-lg transition-all duration-300 relative 
                              ${isActive
                    ? " text-text-primary"
                    : "hover:bg-gray-100 hover:text-black"
                  }`}
              >
                <div
                  className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1.5 h-14 rounded-tr-lg rounded-br-lg 
                              transition-all duration-300 
                              ${isActive
                      ? "bg-black"
                      : "group-hover:bg-gray-300"
                    }`}
                ></div>

                <Image src={item.icon} alt={item.name} width={25} height={25} />
                <span className="ml-4 text-lg font-medium">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
