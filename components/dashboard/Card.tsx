"use client";

import { Card as CardType } from "@/types";
import Image from "next/image";
import React from "react";

export interface CardProps {
  cardData: CardType;
  isDark: boolean;
}

const Card: React.FC<CardProps> = ({ cardData, isDark = true }) => {
  const { cardNumber, cardHolder, validThru, balance } = cardData;
  //mask the card number
  const maskedCardNumber = cardNumber.replace(
    /^(\d{4}) \d{4} \d{4} (\d{4})$/,
    "$1 **** **** $2"
  );

  const bgClass = isDark
    ? "bg-gradient-to-br from-gradient-dark to-black"
    : "bg-gradient-to-br from-gradient-light to-white";
  const textClass = isDark ? "text-white" : "text-primary";
  const subTextClass = isDark ? "text-transparent-white" : "text-secondary";
  const overlayBg = isDark ? "from-white/15" : "from-black/10";
  const circleBg = isDark ? "bg-semi-transparent-white" : "bg-muted";

  const chipImage = isDark
    ? "/icons/dashboard/chip-light.svg"
    : "/icons/dashboard/chip-dark.svg";

  return (
    <div
      className={`relative min-w-[350px] h-[235px] rounded-[25px] ${bgClass} flex flex-col justify-between`}
    >
      <div className="w-full h-full p-6 pb-0 flex justify-start flex-col">
        <div className="flex justify-between items-center">
          <div>
            <p className={`text-xs ${subTextClass}`}>Balance</p>
            <p className={`text-xl font-semibold ${textClass}`}>{balance}</p>
          </div>
          <Image
            src={chipImage}
            alt="Chip"
            width={35}
            height={35}
            className="object-cover"
          />
        </div>

        <div className="flex justify-between my-auto mr-20">
          <div>
            <p className={`text-xs ${subTextClass}`}>CARD HOLDER</p>
            <p className={`text-[15px] font-semibold ${textClass}`}>
              {cardHolder}
            </p>
          </div>
          <div>
            <p className={`text-xs ${subTextClass}`}>VALID THRU</p>
            <p className={`text-[15px] font-semibold ${textClass}`}>
              {validThru}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`bg-gradient-to-b ${overlayBg} to-transparent rounded-b-[25px] px-6 py-4 h-[70px] flex items-center justify-between`}
      >
        <p className={`text-[22px] font-semibold ${textClass}`}>
          {maskedCardNumber}
        </p>
        <div className="flex">
          <div
            className={`w-[30px] h-[30px] rounded-full ${circleBg} -mr-4 z-10`}
          ></div>
          <div
            className={`w-[30px] h-[30px] rounded-full ${circleBg} z-0`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
