import BalanceHistory from "@/components/dashboard/BalanceHistory";
import ExpenseStatistics from "@/components/dashboard/ExpenseStatistics";
import MyCards from "@/components/dashboard/MyCards";
import QuickTransfer from "@/components/dashboard/QuickTransfer";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import WeeklyActivity from "@/components/dashboard/WeeklyActivity";
import { DashboardData } from "@/types";
import React from "react";

const dashboardData: DashboardData = {
  myCards: [
    {
      cardNumber: "3778 1234 1234 1234",
      cardHolder: "Eddy Cusuma",
      validThru: "12/22",
      balance: "$5,756",
    },
    {
      cardNumber: "3778 1234 1234 1234",
      cardHolder: "Eddy Cusuma",
      validThru: "12/22",
      balance: "$5,756",
    },
    {
      cardNumber: "3778 1234 1234 1234",
      cardHolder: "Eddy Cusuma",
      validThru: "12/22",
      balance: "$5,756",
    },
  ],
  recentTransactions: [
    {
      id: 1,
      name: "Deposit from my Card",
      date: "2021-01-28",
      amount: 850,
      type: "debit",
      platform: "card",
    },
    {
      id: 2,
      name: "Deposit Paypal",
      date: "2021-01-25",
      amount: 2500,
      type: "credit",
      platform: "paypal",
    },
    {
      id: 3,
      name: "Jemi Wilson",
      date: "2021-01-21",
      amount: 5400,
      type: "credit",
      platform: "user",
    },
    {
      id: 4,
      name: "Jemi Wilson",
      date: "2021-01-21",
      amount: 5400,
      type: "credit",
      platform: "user",
    },
  ],
  weeklyActivity: [
    { day: "Sat", deposit: 240, withdraw: 470 },
    { day: "Sun", deposit: 120, withdraw: 340 },
    { day: "Mon", deposit: 260, withdraw: 320 },
    { day: "Tue", deposit: 370, withdraw: 480 },
    { day: "Wed", deposit: 240, withdraw: 150 },
    { day: "Thu", deposit: 240, withdraw: 380 },
    { day: "Fri", deposit: 330, withdraw: 390 },
  ],
  expenseStatistics: [
    {
      label: "Entertainment",
      value: 30,
    },
    {
      label: "Bill Expense",
      value: 25,
    },
    {
      label: "Others",
      value: 15,
    },
    {
      label: "Investment",
      value: 30,
    },
  ],
  quickTransfer: [
    {
      id: 1,
      name: "Livia Bator",
      role: "CEO",
      avatar: "/icons/user/user1.png"
    },
    {
      id: 2,
      name: "Randy Press",
      role: "Director",
      avatar: "/icons/user/user2.png",
    },
    {
      id: 3,
      name: "Workman",
      role: "Designer",
      avatar: "/icons/user/user3.png"
    },
    {
      id: 4,
      name: "Alex Morgan",
      role: "Manager",
      avatar: "/icons/user/user3.png",
    },
  ],
  balanceHistory: [
    { label: "Jul", value: 120 },
    { label: "Aug", value: 330 },
    { label: "Sep", value: 200 },
    { label: "Oct", value: 780 },
    { label: "Nov", value: 220 },
    { label: "Dec", value: 570 },
    { label: "Jan", value: 200 },
  ],

};

async function getDashboardData() {
  // const response = await fetch("https://api.example.com/dashboard", {
  //   cache: "no-store", // Ensures fresh data on every request
  // });

  // if (!response.ok) {
  //   throw new Error("Failed to fetch dashboard data");
  // }

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return dashboardData as DashboardData;
}

export default async function page() {
  const data = await getDashboardData();

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
