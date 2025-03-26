import ExpenseStatistics from "@/components/dashboard/ExpenseStatistics";
import MyCards from "@/components/dashboard/MyCards";
import QuickTransfer from "@/components/dashboard/QuickTransfer";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import React from "react";



export default function page() {
  return (
    <>
      <div>
        <ExpenseStatistics />
        <RecentTransactions />
        <QuickTransfer />
        <MyCards />
      </div>
    </>
  );
}
