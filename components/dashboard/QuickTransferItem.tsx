import Image from "next/image";
import React from "react";

interface QuickTransferItemProps {
  id: number;
  name: string;
  role: string;
  avatar: string;
  selectedUser: number | null;
  setSelectedUser: (id: number) => void;
}

const QuickTransferItem: React.FC<QuickTransferItemProps> = ({
  id,
  name,
  role,
  avatar,
  selectedUser,
  setSelectedUser,
}) => {
  return (
    <div
      key={id}
      className="flex flex-col items-center justify-center min-w-fit hover:bg-light-gray cursor-pointer transition-colors p-2 rounded-lg"
      onClick={() => setSelectedUser(id)}
    >
      <div className="w-[70px] h-[70px] rounded-full bg-light-gray flex items-center justify-center overflow-hidden">
        <Image src={avatar} alt={name} width={70} height={70} />
      </div>
      <p
        className={`text-text-primary text-base text-[16px] mt-2 w-fit ${
          selectedUser === id ? "font-extrabold" : "font-medium"
        }`}
      >
        {name}
      </p>
      <p
        className={`text-secondary text-[15px] w-fit ${
          selectedUser === id ? "font-extrabold" : "font-normal"
        }`}
      >
        {role}
      </p>
    </div>
  );
};

export default QuickTransferItem;
