"use client";

import { useEffect, useState } from "react";
import { DashboardData } from "@/types";
import ClipLoader from "react-spinners/ClipLoader";

import dynamic from "next/dynamic";
const MyCards = dynamic(() => import("@/components/dashboard/MyCards"));
const RecentTransactions = dynamic(
  () => import("@/components/dashboard/RecentTransactions")
);
const WeeklyActivity = dynamic(
  () => import("@/components/dashboard/WeeklyActivity")
);
const ExpenseStatistics = dynamic(
  () => import("@/components/dashboard/ExpenseStatistics")
);
const QuickTransfer = dynamic(
  () => import("@/components/dashboard/QuickTransfer")
);
const BalanceHistory = dynamic(
  () => import("@/components/dashboard/BalanceHistory")
);

function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/dashboard", { cache: "no-store" });
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-300px)] flex-col items-center justify-center text-center">
        <ClipLoader color="var(--primary)" />
      </div>
    );
  }
  if (!data) {
    return (
      <div className="flex h-[calc(100vh-300px)] flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold">Data Not Found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-x-14 gap-y-8 items-center justify-center w-full">
      <MyCards myCards={data.myCards} />
      <RecentTransactions recentTransactions={data.recentTransactions} />
      <WeeklyActivity weeklyActivity={data.weeklyActivity} />
      <ExpenseStatistics expenseStatistics={data.expenseStatistics} />
      <QuickTransfer quickTransfer={data.quickTransfer} />
      <BalanceHistory balanceHistory={data.balanceHistory} />
    </div>
  );
}

export default Dashboard;
