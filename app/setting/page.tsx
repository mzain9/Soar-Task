"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Lazy load components
const EditProfile = dynamic(() => import("@/components/Setting/EditProfile"));
const Preferences = dynamic(() => import("@/components/Setting/Preferences"));
const Security = dynamic(() => import("@/components/Setting/Security"));

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
                activeTab === tab ? "text-text-primary" : "text-secondary"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Underline */}
        <div className="bg-light-gray w-full h-px absolute left-0 top-[29px]"></div>
        <motion.div
          className="bg-background-dark rounded-tl-[10px] rounded-tr-[10px] w-[114px] h-[3px] absolute top-[27px]"
          initial={{ left: 0 }}
          animate={{ left: tabs.indexOf(activeTab) * 160 }}
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
