"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip as ChartTooltip,
  Legend as ChartLegend,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import type { WeeklyActivity } from "@/types";
import { getComputedColor } from "@/utils/color";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartTooltip,
  ChartLegend
);

interface WeeklyActivityProps {
  weeklyActivity: WeeklyActivity[];
}

const WeeklyActivity: React.FC<WeeklyActivityProps> = ({ weeklyActivity }) => {

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide default legend
      },
      title: {
        display: false,
      },
      datalabels: {
        display: false,
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: getComputedColor("--secondary"),
        bodyColor: getComputedColor("--secondary"),
        borderColor: getComputedColor("--light-gray"),
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        boxPadding: 6,
        usePointStyle: true,
        mode: "index",
        intersect: false, // Ensures grouping on hover
        callbacks: {
          labelPointStyle: () => ({
            pointStyle: "circle",
            rotation: 0,
          }),
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: getComputedColor("--secondary"),
          font: {
            size: 16,
          },
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          color: getComputedColor("--light-gray"),
        },
        ticks: {
          color: getComputedColor("--secondary"),
          font: {
            size: 16,
          },
          stepSize: 100,
        },
      },
    },
  };

  // Prepare data for Chart.js format
  const getChartData = () => {
    return {
      labels: weeklyActivity.map((item) => item.day),
      datasets: [
        {
          label: "Withdraw",
          data: weeklyActivity.map((item) => item.withdraw),
          backgroundColor: getComputedColor("--background-dark"),
          borderRadius: 15,
          borderSkipped: false,
          barPercentage: 0.6,
          categoryPercentage: 0.6,
        },
        {
          label: "Deposit",
          data: weeklyActivity.map((item) => item.deposit),
          backgroundColor: getComputedColor("--accent"),
          borderRadius: 15,
          borderSkipped: false,
          barPercentage: 0.6,
          categoryPercentage: 0.6,
        },
      ],
    };
  };

  return (
    <div className="flex flex-col gap-5 items-start justify-start">
      <h2 className="text-primary text-[22px] font-semibold">
        Weekly Activity
      </h2>
      <div className="bg-white rounded-[25px] w-[730px] h-[322px] p-4 overflow-hidden">
        <div className="w-full h-full">
          {/* Custom Legend */}
          <div className="flex justify-end mb-4 gap-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-accent"></div>
              <span className="text-secondary text-lg">Deposit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-background-dark"></div>
              <span className="text-secondary text-lg">Withdraw</span>
            </div>
          </div>

          {/* Chart Container */}
          <div className="h-[85%] w-full">
            <Bar data={getChartData()} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeeklyActivity;
