"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Lazy load components
const EditProfile = dynamic(() => import("@/components/Setting/EditProfile"));
const Preferences = dynamic(() => import("@/components/Setting/Preferences"));
const Security = dynamic(() => import("@/components/Setting/Security"));

const tabs = ["Edit Profile", "Preferences", "Security"];

function Setting() {
  const [activeTab, setActiveTab] = useState("Edit Profile");
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [underlineProps, setUnderlineProps] = useState({ width: 0, left: 0 });

  useEffect(() => {
    const activeIndex = tabs.indexOf(activeTab);
    if (tabRefs.current[activeIndex]) {
      setUnderlineProps({
        width: tabRefs.current[activeIndex].offsetWidth,
        left: tabRefs.current[activeIndex].offsetLeft,
      });
    }
  }, [activeTab]);

  return (
    <div className="bg-white rounded-3xl p-4 md:p-8 flex flex-col gap-10 items-end justify-start relative">
      <div className="shrink-0 h-[30px] relative w-full">
        {/* Tabs */}
        <div className="flex w-full flex-row gap-6 md:gap-[74px] items-center justify-between md:justify-start absolute px-4 top-0">
          {tabs.map((tab, index) => (
            <div
              key={tab}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              className={`relative text-[13px] md:text-base font-medium cursor-pointer transition-colors duration-300 ${
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
          className="bg-background-dark rounded-tl-[10px] rounded-tr-[10px] h-[3px] absolute top-[27px]"
          animate={{ width: underlineProps.width, left: underlineProps.left }}
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

export default Setting;
