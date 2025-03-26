export interface Card {
    cardNumber: string;
    cardHolder: string;
    validThru: string;
    balance: string;
}

export interface Transaction {
    id: number;
    name: string;
    date: string;
    amount: number;
    type: "debit" | "credit";
    platform: "card" | "paypal" | "user";
}

export interface WeeklyActivity {
    day: string;
    deposit: number;
    withdraw: number;
}

export interface ExpenseStatistic {
    label: string;
    value: number;
}

export interface QuickTransfer {
    id: number;
    name: string;
    role: string;
    avatar: string;
}

export interface BalanceHistory {
    label: string;
    value: number;
}

export interface DashboardData {
    myCards: Card[];
    recentTransactions: Transaction[];
    weeklyActivity: WeeklyActivity[];
    expenseStatistics: ExpenseStatistic[];
    quickTransfer: QuickTransfer[];
    balanceHistory: BalanceHistory[];
}
