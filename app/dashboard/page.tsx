"use client";

import { useEffect, useState } from "react";
import { DashboardData } from "@/types";
import MyCards from "@/components/dashboard/MyCards";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import WeeklyActivity from "@/components/dashboard/WeeklyActivity";
import ExpenseStatistics from "@/components/dashboard/ExpenseStatistics";
import QuickTransfer from "@/components/dashboard/QuickTransfer";
import BalanceHistory from "@/components/dashboard/BalanceHistory";

export default function DashboardPage() {
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

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data available</p>;

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center w-full">
      <MyCards myCards={data.myCards} />
      <RecentTransactions recentTransactions={data.recentTransactions} />
      <WeeklyActivity weeklyActivity={data.weeklyActivity} />
      <ExpenseStatistics expenseStatistics={data.expenseStatistics} />
      <QuickTransfer quickTransfer={data.quickTransfer} />
      <BalanceHistory balanceHistory={data.balanceHistory} />
    </div>
  );
}
