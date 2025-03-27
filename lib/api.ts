export const fetchUser = async () => {
    try {
        const response = await fetch("/api/user", { cache: "no-store" });
        if (!response.ok) {
            throw new Error("Failed to fetch user data");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
    }
};

export const fetchDashboardData = async () => {
    try {
        const response = await fetch("/api/dashboard", { cache: "no-store" });
        if (!response.ok) {
            throw new Error("Failed to fetch dashboard data");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching dashboard data:", error);
        return null;
    }
};