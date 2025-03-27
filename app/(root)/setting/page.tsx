import Setting from "@/components/setting/Setting";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setting | My Next.js App",
  description: "View your setting.",
};

const SettingPage: React.FC = () => {
  return <Setting />;
};

export default SettingPage;
