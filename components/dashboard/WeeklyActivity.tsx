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

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartTooltip,
  ChartLegend
);

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
      titleColor: "#718ebf",
      bodyColor: "#718ebf",
      borderColor: "#f3f3f5",
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
        color: "#718ebf",
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
        color: "#f3f3f5",
      },
      ticks: {
        color: "#718ebf",
        font: {
          size: 16,
        },
        stepSize: 100,
      },
    },
  },
};


interface WeeklyActivityProps {
  weeklyActivity: WeeklyActivity[];
}

const WeeklyActivity: React.FC<WeeklyActivityProps> = ({ weeklyActivity }) => {

  // Prepare data for Chart.js format
  const getChartData = () => {
    return {
      labels: weeklyActivity.map((item) => item.day),
      datasets: [
        {
          label: "Withdraw",
          data: weeklyActivity.map((item) => item.withdraw),
          backgroundColor: "#232323",
          borderRadius: 15,
          borderSkipped: false,
          barPercentage: 0.6,
          categoryPercentage: 0.6,
        },
        {
          label: "Deposit",
          data: weeklyActivity.map((item) => item.deposit),
          backgroundColor: "#396aff",
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
              <div className="w-4 h-4 rounded-full bg-[#396aff]"></div>
              <span className="text-[#718ebf] text-lg">Deposit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#232323]"></div>
              <span className="text-[#718ebf] text-lg">Withdraw</span>
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
