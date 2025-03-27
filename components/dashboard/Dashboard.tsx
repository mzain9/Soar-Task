"use client";

import { useEffect, useState } from "react";
import type { DashboardData } from "@/types";
import ClipLoader from "react-spinners/ClipLoader";

import dynamic from "next/dynamic";
import { fetchDashboardData } from "@/lib/api";
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
      const data = await fetchDashboardData();
      if (data) setData(data);
      setLoading(false);
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
    <div className="flex flex-wrap gap-x-14 gap-y-8 items-center justify-between w-full">
      <div className="flex flex-col lg:flex-row justify-evenly gap-x-2 gap-y-8 w-full">
        <MyCards myCards={data.myCards} />
        <RecentTransactions recentTransactions={data.recentTransactions} />
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly gap-x-2 gap-y-8 w-full">
        <WeeklyActivity weeklyActivity={data.weeklyActivity} />
        <ExpenseStatistics expenseStatistics={data.expenseStatistics} />
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly gap-x-2 gap-y-8 w-full">
        <QuickTransfer quickTransfer={data.quickTransfer} />
        <BalanceHistory balanceHistory={data.balanceHistory} />
      </div>
    </div>
  );
}

export default Dashboard;
