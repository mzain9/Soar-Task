import Image from "next/image";

type Transaction = {
  id: number;
  name: string;
  date: string;
  amount: number;
  type: "credit" | "debit";
  platform: "paypal" | "card" | "user";
};

type PlatformIcons = {
  [key in Transaction["platform"]]: { icon: string; fill: string };
};

const transactions: Transaction[] = [
  {
    id: 1,
    name: "Deposit from my Card",
    date: "2021-01-28",
    amount: 850,
    type: "debit",
    platform: "card",
  },
  {
    id: 2,
    name: "Deposit Paypal",
    date: "2021-01-25",
    amount: 2500,
    type: "credit",
    platform: "paypal",
  },
  {
    id: 3,
    name: "Jemi Wilson",
    date: "2021-01-21",
    amount: 5400,
    type: "credit",
    platform: "user",
  },
];

const platformIcons: PlatformIcons = {
  paypal: { icon: "/icons/dashboard/paypal.svg", fill: "#E7EDFF" },
  card: { icon: "/icons/dashboard/card.svg", fill: "#FFF5D9" },
  user: { icon: "/icons/dashboard/money.svg", fill: "#DCFAF8" },
};

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-GB", options);
};

const RecentTransactions: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 items-start justify-start">
      <h2 className="text-[#343c6a] text-[22px] font-semibold">
        Recent Transactions
      </h2>
      <div className="bg-white rounded-[25px] w-[350px] p-4">
        {transactions.map(({ id, name, date, amount, type, platform }) => (
          <div key={id} className="flex items-center gap-4 py-2">
            <div
              className="w-[55px] h-[55px] rounded-full flex items-center justify-center"
              style={{ backgroundColor: platformIcons[platform].fill }}
            >
              <Image
                src={platformIcons[platform].icon}
                alt={name}
                width={28}
                height={28}
              />
            </div>
            <div className="flex-1">
              <p className="text-text-color text-base font-medium">{name}</p>
              <p className="text-secondary text-[15px] font-normal">
                {formatDate(date)}
              </p>
            </div>
            <p
              className={`text-base font-medium ${
                type === "credit" ? "text-[#41d4a8]" : "text-[#ff4b4a]"
              }`}
            >
              {type === "credit" ? "+" : "-"}${amount.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
