"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart } from "chart.js";
import { ExpenseStatistic } from "@/types";
import { getComputedColor } from "@/utils/color";

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// Custom plugin to modify the radius of each segment
const customShapePlugin = {
  id: "customRadius",
  beforeDraw: (chart: Chart) => {
    if (!chart || !chart.ctx) return;

    const { chartArea } = chart;
    if (!chartArea) return;

    const baseRadius = Math.min(chartArea.width, chartArea.height) / 2;

    const shapeModifiers: number[] = [0.9, 1, 0.9, 0.8];

    chart.getDatasetMeta(0).data.forEach((arc, index) => {
      (arc as ArcElement).outerRadius = baseRadius * shapeModifiers[index];
    });
  },
};

const chartOptions: ChartOptions = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          const label = tooltipItem.label || "";
          const value = tooltipItem.raw as number;
          return `${label}: ${value ?? 0}%`;
        },
      },
    },
    datalabels: {
      formatter: (value, context) => {
        const label = context.chart.data.labels?.[context.dataIndex] ?? "";
        return `${value}%\n${label}`;
      },
      color: "#ffffff",
      font: {
        weight: "bold",
        size: 14,
      },
      textAlign: "center",
      align: "center",
      anchor: "center",
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

interface ExpenseStatisticsProps {
  expenseStatistics: ExpenseStatistic[];
}

const ExpenseStatistics: React.FC<ExpenseStatisticsProps> = ({
  expenseStatistics,
}) => {
  const backgroundColor: string[] = [
    "--primary",
    "--warning",
    "--background-dark",
    "--accent",
  ];

  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;

  const expenseData = {
    labels: expenseStatistics.map((stat) => stat.label),
    datasets: [
      {
        data: expenseStatistics.map((stat) => stat.value),
        backgroundColor: expenseStatistics.map(
          (_, index) =>
            getComputedColor(backgroundColor[index]) || getRandomColor()
        ),
        borderColor: "#ffffff",
        borderWidth: 5,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-5 items-start justify-start">
      <h2 className="text-primary text-[22px] font-semibold">
        Expense Statistics
      </h2>
      <div className="bg-white rounded-[25px] w-[350px] h-[322px] p-4">
        <Pie
          data={expenseData}
          options={chartOptions}
          plugins={[customShapePlugin]}
        />
      </div>
    </div>
  );
};

export default ExpenseStatistics;
