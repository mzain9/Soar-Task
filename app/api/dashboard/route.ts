import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
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

    });
}
