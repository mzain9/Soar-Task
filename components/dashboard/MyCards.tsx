import React from "react";
import Card from "./Card";

const cardData = {
  cardNumber: "3778 1234 1234 1234",
  cardHolder: "Eddy Cusuma",
  validThru: "12/22",
  balance: "$5,756",
  chipImage: "/images/chip.png",
};

function MyCards() {
  return (
    <div className="flex flex-col gap-5 items-start justify-start w-[730px]">
      <div className="flex justify-between w-full">
        <h2 className="text-primary text-[22px] font-semibold">My Cards</h2>
        <p className="text-primary text-[17px] font-semibold cursor-pointer hover:underline">See All</p>
      </div>
      <div className="flex gap-5 overflow-x-auto scrollbar-hidden w-full">
        <Card cardData={cardData} isDark={true} />
        <Card cardData={cardData} isDark={false} />
        <Card cardData={cardData} isDark={false} />
      </div>
    </div>
  );
}

export default MyCards;
