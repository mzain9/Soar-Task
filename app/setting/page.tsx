"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import EditProfile from "@/components/Setting/EditProfile";
import Preferences from "@/components/Setting/Preferences";
import Security from "@/components/Setting/Security";

const tabs = ["Edit Profile", "Preferences", "Security"];

export default function TabSection() {
  const [activeTab, setActiveTab] = useState("Edit Profile");

  return (
    <div className="bg-white rounded-3xl p-8 flex flex-col gap-10 items-end justify-start relative">
      <div className="shrink-0 h-[30px] relative w-full">
        {/* Tabs */}
        <div className="flex flex-row gap-[74px] items-center justify-start absolute left-4 top-0">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`relative text-base font-medium cursor-pointer transition-colors duration-300 ${
                activeTab === tab ? "text-[#232323]" : "text-[#718ebf]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Underline */}
        <div className="bg-[#f4f5f7] w-full h-px absolute left-0 top-[29px]"></div>
        <motion.div
          className="bg-[#232323] rounded-tl-[10px] rounded-tr-[10px] w-[114px] h-[3px] absolute top-[27px]"
          initial={{ left: 0 }}
          animate={{ left: tabs.indexOf(activeTab) * 148 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </div>

      {/* Tab Content */}
      <div className="w-full h-full flex items-center justify-center">
        {activeTab === "Edit Profile" && <EditProfile />}
        {activeTab === "Preferences" && <Preferences />}
        {activeTab === "Security" && <Security />}
      </div>
    </div>
  );
}
