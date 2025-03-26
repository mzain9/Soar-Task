"use client"

import type { ChartData } from "chart.js"
import { useRef } from "react"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
    type ChartOptions,
} from "chart.js"
import { Line } from "react-chartjs-2"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler)

const labels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"]
const values = [120, 330, 200, 780, 220, 570, 200]

// Chart data configuration
export const chartData: ChartData<"line"> = {
    labels,
    datasets: [
        {
            data: values,
            borderColor: "#1814F3",
            backgroundColor: "rgba(24, 20, 243, 0.1)",
            fill: true,
            pointRadius: 0, // Hide points by default
            pointHoverRadius: 6, // Show on hover
            pointBackgroundColor: "#1814F3",
            pointBorderColor: "white",
            pointBorderWidth: 2,
        },
    ],
}

// Chart options
const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                color: "#DFE5EE",
            },
            ticks: {
                color: "#718EBF",
                font: {
                    size: 14,
                },
            },
            border: {
                display: false,
                dash: [5, 5],
            },
        },
        y: {
            min: 0,
            max: 800,
            ticks: {
                stepSize: 200,
                color: "#718EBF",
                font: {
                    size: 14,
                },
            },
            grid: {
                color: "#DFE5EE",
            },
            border: {
                display: false,
                dash: [5, 5],
            },
        },
    },
    plugins: {
        tooltip: {
            backgroundColor: "white",
            titleColor: "#4F4F4F",
            bodyColor: "#4F4F4F",
            borderColor: "#DFE5EE",
            borderWidth: 1,
            padding: 10,
            displayColors: false,
            callbacks: {
                label: (context) => `${context.parsed.y}`,
            },
        },
        legend: {
            display: false,
        },
        datalabels: {
            display: false,
        },
    },
    elements: {
        line: {
            tension: 0.4, // Smooth curve
            borderWidth: 3,
        },
        point: {
            radius: 0, // Hide points by default
            hoverRadius: 6, // Show on hover
        },
    },
}

function BalanceHistory() {
    const chartRef = useRef<ChartJS<"line">>(null)

    return (
        <div className="flex flex-col gap-5 items-start justify-start">
            <h2 className="text-primary text-[22px] font-semibold">
                Balance History
            </h2>
            <div className="bg-white rounded-[25px] w-[635px] h-[276px] p-4">
                <Line ref={chartRef} options={options} data={chartData} />
            </div>
        </div>
    );
}

export default BalanceHistory;