import { Transaction } from "@/types";
import RecentTransactionsItem from "./RecentTransactionsItem";

interface RecentTransactionsProps {
  recentTransactions: Transaction[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  recentTransactions,
}) => {
  return (
    <div className="flex flex-col gap-5 items-start justify-start">
      <h2 className="text-primary text-[22px] font-semibold">
        Recent Transactions
      </h2>
      <div className="bg-white rounded-[25px] w-[350px] h-[235px] p-4 overflow-x-auto scrollbar-hidden">
        {recentTransactions.map(
          ({ id, name, date, amount, type, platform }) => (
            <RecentTransactionsItem
              key={id}
              id={id}
              name={name}
              date={date}
              amount={amount}
              type={type}
              platform={platform}
            />
          )
        )}
      </div>
    </div>
  );
};

export default RecentTransactions;
