import QuickTransfer from "@/components/dashboard/QuickTransfer";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import React from "react";

export default function page() {
  return (
    <>
      <div>
        <RecentTransactions />
        <QuickTransfer />
      </div>
    </>
  );
}
