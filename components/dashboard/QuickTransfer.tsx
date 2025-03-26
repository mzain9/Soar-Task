"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import type { QuickTransfer } from "@/types";


interface QuickTransferProps {
  quickTransfer: QuickTransfer[];
}
const QuickTransfer:React.FC<QuickTransferProps> = ({quickTransfer}) => {
  const [amount, setAmount] = useState(525.5);
  const [selectedUser, setSelectedUser] = useState<number | null>(quickTransfer[0].id);
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  const handleSendMoney = () => {
    if (!selectedUser) {
      toast.error("Please select a user to send money to");
      return;
    }
    if (amount <= 0) {
      toast.error("Please enter a valid amount to send");
      return;
    }
    toast.success(
      `Sent $${amount} to ${
        quickTransfer.find((user) => user.id === selectedUser)?.name
      }`
    );
    setAmount(0);
    setSelectedUser(null);
  };
  return (
    <div className="flex flex-col gap-5 items-start justify-start">
      <h2 className="text-primary text-[22px] font-semibold">
        Quick Transfer
      </h2>
      <div className="bg-white rounded-[25px] w-[445px] py-8 px-6">
        <div className="flex items-center w-full justify-between gap-2">
          <div
            className="flex items-center gap-4 overflow-x-auto w-[350px] scrollbar-hidden"
            ref={scrollContainer}
          >
            {quickTransfer
              .map(({ id, name, role, avatar }) => (
                <div
                  key={id}
                  className="flex flex-col items-center justify-center min-w-fit hover:bg-gray-100 cursor-pointer transition-colors p-2 rounded-lg"
                  onClick={() => setSelectedUser(id)}
                >
                  <div className="w-[70px] h-[70px] rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                    <Image src={avatar} alt={name} width={70} height={70} />
                  </div>
                  <p
                    className={`text-[#232323] text-base text-[16px] mt-2 w-fit ${
                      selectedUser === id ? "font-extrabold" : "font-medium"
                    }`}
                  >
                    {name}
                  </p>
                  <p
                    className={`text-[#718ebf] text-[15px] w-fit ${
                      selectedUser === id ? "font-extrabold" : "font-normal"
                    }`}
                  >
                    {role}
                  </p>
                </div>
              ))}
          </div>
          <button
            className="w-[50px] h-[50px] bg-white rounded-full shadow-[2px_2px_10px_rgba(0,0,0,0.3)] flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={scrollRight}
          >
            <Image
              src="/icons/dashboard/arrow-right.svg"
              alt="Next"
              width={20}
              height={20}
            />
          </button>
        </div>
        <div className="flex justify-between items-center mt-6">
          <p className="text-[#718ebf] text-base">Write Amount</p>
          <div className="bg-[#edf1f7] rounded-[50px] text-[#232323] w-[265px] h-[50px] flex items-center overflow-hidden">
            <input
              type="number"
              value={amount}
              min={0}
              onChange={(e) => setAmount(e.target.value as unknown as number || 0)}
              className="bg-[#edf1f7] px-6 py-2 text-secondary w-full h-[50px] outline-none"
            />
            <button
              className="flex items-center justify-between bg-text-color text-white text-[16px] font-medium px-6 py-4 rounded-[50px] w-[200px] h-[50px] cursor-pointer hover:bg-gray-800 transition-colors shadow-md"
              onClick={handleSendMoney}
            >
              <p>Send</p>
              <Image
                src="/icons/dashboard/send.svg"
                alt="Send"
                width={26}
                height={22.5}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
