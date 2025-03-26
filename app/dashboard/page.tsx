import BalanceHistory from "@/components/dashboard/BalanceHistory";
import ExpenseStatistics from "@/components/dashboard/ExpenseStatistics";
import MyCards from "@/components/dashboard/MyCards";
import QuickTransfer from "@/components/dashboard/QuickTransfer";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import WeeklyActivity from "@/components/dashboard/WeeklyActivity";
import React from "react";

export default function page() {
  return (
    <>
      <div>
        <BalanceHistory />
        <WeeklyActivity />
        <ExpenseStatistics />
        <RecentTransactions />
        <QuickTransfer />
        <MyCards />
      </div>
    </>
  );
}
