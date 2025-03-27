import React from "react";
import Card from "@/components/dashboard/Card";
import type { Card as CardType } from "@/types";
import { toast } from "sonner";

interface MyCardsProps {
  myCards: CardType[];
}

const MyCards: React.FC<MyCardsProps> = ({ myCards }) => {
  return (
    <div className="flex flex-col gap-5 items-start justify-start w-full lg:w-[63%] max-w-full min-w-[300px]">
      <div className="flex justify-between w-full">
        <h2 className="text-primary text-[16px] md:text-[22px] font-semibold">My Cards</h2>
        <p
          className="text-primary text-[14px] md:text-[17px] font-semibold cursor-pointer hover:underline"
          onClick={() => toast.info("See All")}
        >
          See All
        </p>
      </div>
      <div className="flex gap-5 overflow-x-auto scrollbar-hidden w-full">
        {myCards.map((cardData, index) => (
          <Card key={index} cardData={cardData} isDark={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

export default MyCards;
