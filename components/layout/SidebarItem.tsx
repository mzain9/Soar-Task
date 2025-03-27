import Link from "next/link";
import React from "react";

const SidebarItem = ({
  item,
  pathname,
}: {
  item: { name: string; href: string; icon: React.ElementType };
  pathname: string;
}) => {
  const isActive = pathname === item.href;
  const Icon = item.icon as React.FC<React.SVGProps<SVGSVGElement>>;

  return (
    <Link href={item.href} className="relative group">
      <div
        className={`flex items-center px-6 py-4 rounded-lg transition-colors duration-300 relative 
                        ${
                          isActive
                            ? " text-text-primary"
                            : "group-hover:bg-light-gray group-hover:text-text-primary"
                        }`}
      >
        <div
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1.5 h-14 rounded-tr-lg rounded-br-lg 
                        transition-all duration-300 
                        ${isActive ? "bg-black" : "group-hover:bg-gray-300"}`}
        ></div>
        <Icon
          className={`${
            isActive ? "fill-text-primary" : "fill-text-secondary"
          } group-hover:fill-text-primary`}
        />
        <span className="ml-4 text-lg font-medium">{item.name}</span>
      </div>
    </Link>
  );
};

export default SidebarItem;
