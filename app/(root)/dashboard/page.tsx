import DashBoard from "@/components/dashboard/Dashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | My Next.js App",
  description: "View your account overview.",
};

const DashboardPage: React.FC = () => {
  return <DashBoard />;
};

export default DashboardPage;
