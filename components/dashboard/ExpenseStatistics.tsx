"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart, Plugin } from "chart.js";

interface CustomShapePlugin extends Plugin {
    id: string;
    beforeDraw: (chart: Chart) => void;
}


// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const expenseData = {
  labels: ["Entertainment", "Bill Expense", "Others", "Investment"],
  datasets: [
    {
      data: [30, 25, 15, 30],
      backgroundColor: ["#343c6a", "#fc7900", "#232323", "#396aff"],
      borderColor: "#ffffff",
      borderWidth: 5,
    },
  ],
};

// Custom plugin to modify the radius of each segment

const customShapePlugin: CustomShapePlugin = {
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

// Chart options
interface ChartOptions {
    plugins: {
        legend: {
            display: boolean;
        };
        tooltip: {
            callbacks: {
                label: (context: { label: string; raw: number }) => string;
            };
        };
        datalabels: {
            formatter: (value: number, context: {
                chart: { data: { labels: string[] } };
                dataIndex: number;
            }) => string;
            color: string;
            font: {
                weight: string;
                size: number;
            };
            textAlign: string;
            align: string;
            anchor: string;
        };
    };
    responsive: boolean;
    maintainAspectRatio: boolean;
}

export const chartOptions: ChartOptions = {
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            callbacks: {
                label: function (tooltipItem) {
                    const label = tooltipItem.label || '';
                    const value = tooltipItem.raw as number;
                    return `${label}: ${value ?? 0}%`;
                },
            },
        },
        datalabels: {
            formatter: (value, context) => {
                const label = context.chart.data.labels[context.dataIndex];
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

function ExpenseStatistics() {
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
}

export default ExpenseStatistics;
