"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import DashboardIcon from "@/public/icons/sidebar/dashboard.svg";
import TransactionsIcon from "@/public/icons/sidebar/transactions.svg";
import AccountsIcon from "@/public/icons/sidebar/accounts.svg";
import InvestmentsIcon from "@/public/icons/sidebar/investments.svg";
import CreditCardsIcon from "@/public/icons/sidebar/credit-cards.svg";
import LoansIcon from "@/public/icons/sidebar/loans.svg";
import ServicesIcon from "@/public/icons/sidebar/services.svg";
import PrivilegesIcon from "@/public/icons/sidebar/privileges.svg";
import SettingsIcon from "@/public/icons/sidebar/settings.svg";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: DashboardIcon },
  { name: "Transactions", href: "/transactions", icon: TransactionsIcon },
  { name: "Accounts", href: "/accounts", icon: AccountsIcon },
  { name: "Investments", href: "/investments", icon: InvestmentsIcon },
  { name: "Credit Cards", href: "/credit-cards", icon: CreditCardsIcon },
  { name: "Loans", href: "/loans", icon: LoansIcon },
  { name: "Services", href: "/services", icon: ServicesIcon },
  { name: "My Privileges", href: "/privileges", icon: PrivilegesIcon },
  { name: "Setting", href: "/setting", icon: SettingsIcon },
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
          const Icon = item.icon as React.FC<React.SVGProps<SVGSVGElement>>;

          return (
            <Link href={item.href} key={item.name} className="relative group">
              <div
                className={`flex items-center px-6 py-4 rounded-lg transition-colors duration-300 relative 
                              ${isActive
                    ? " text-text-primary"
                    : "group-hover:bg-light-gray group-hover:text-text-primary"
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
                <Icon className={`${isActive ? "fill-text-primary" : "fill-text-secondary"} group-hover:fill-text-primary`} />
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
