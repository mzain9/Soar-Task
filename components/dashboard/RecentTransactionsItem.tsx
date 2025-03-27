import type { Transaction } from "@/types";
import Image from "next/image";
import React from "react";

type PlatformIcons = {
  [key in Transaction["platform"]]: { icon: string; fill: string };
};

const platformIcons: PlatformIcons = {
  paypal: { icon: "/icons/dashboard/paypal.svg", fill: "var(--light-blue)" },
  card: { icon: "/icons/dashboard/card.svg", fill: "var(--soft-yellow)" },
  user: { icon: "/icons/dashboard/money.svg", fill: "var(--pastel-blue)" },
};

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-GB", options);
};

const RecentTransactionsItem: React.FC<Transaction> = ({
  id,
  name,
  date,
  platform,
  amount,
  type,
}) => {
  return (
    <div key={id} className="flex items-center justify-between gap-4 py-2">
      <div
        className="w-[55px] h-[55px] rounded-full flex items-center justify-center"
        style={{ backgroundColor: platformIcons[platform].fill }}
      >
        <Image
          src={platformIcons[platform].icon}
          alt={name}
          width={28}
          height={28}
        />
      </div>
      <div className="w-[200px]">
        <p className="text-text-primary text-[14px] md:text-base font-medium">{name}</p>
        <p className="text-secondary text-[12px] md:text-[15px] font-normal">
          {formatDate(date)}
        </p>
      </div>
      <p
        className={`text-[11px] md:text-base font-medium w-[80px] ${
          type === "credit" ? "text-success" : "text-danger"
        }`}
      >
        {type === "credit" ? "+" : "-"}${amount.toLocaleString()}
      </p>
    </div>
  );
};

export default RecentTransactionsItem;
