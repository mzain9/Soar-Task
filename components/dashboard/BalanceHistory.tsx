"use client"

import type { ChartData } from "chart.js"
import { useEffect, useRef } from "react"
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
import type { BalanceHistory } from "@/types"
import { getComputedColor } from "@/utils/color"
import { get } from "http"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler)


// Chart options

interface BalanceHistoryProps {
    balanceHistory: BalanceHistory[];
}

const BalanceHistory: React.FC<BalanceHistoryProps> = ({ balanceHistory }) => {
    const chartRef = useRef<ChartJS<"line">>(null);

    useEffect(() => {
        if (chartRef.current) {
            const chart = chartRef.current;
            const ctx = chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);

            gradient.addColorStop(0, getComputedColor("--gradient-blue") + "80"); // Top color
            gradient.addColorStop(1, getComputedColor("--gradient-blue") + "00"); // Bottom fade

            chart.data.datasets[0].backgroundColor = gradient;
            chart.update();
        }
    }, [balanceHistory]);


    const options: ChartOptions<"line"> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    color: getComputedColor("--light-gray"),
                },
                ticks: {
                    color: getComputedColor("--secondary"),
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
                    color: getComputedColor("--secondary"),
                    font: {
                        size: 14,
                    },
                },
                grid: {
                    color: getComputedColor("--light-gray"),
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

    const chartData: ChartData<"line"> = {
        labels: balanceHistory.map((stat) => stat.label),
        datasets: [
            {
                data: balanceHistory.map((stat) => stat.value),
                borderColor: getComputedColor("--line-bar"),
                backgroundColor: "linear-gradient(90deg, #2D60FF80 0%, #2D60FF80 100%)",
                fill: true,
                pointRadius: 0, // Hide points by default
                pointHoverRadius: 6, // Show on hover
                pointBackgroundColor: getComputedColor("--line-bar"),
                pointBorderColor: "white",
                pointBorderWidth: 2,
            },
        ],
    }

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