import type { Transaction } from "@/types";
import RecentTransactionsItem from "@/components/dashboard/RecentTransactionsItem";

interface RecentTransactionsProps {
  recentTransactions: Transaction[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  recentTransactions,
}) => {
  return (
    <div className="flex flex-col gap-5 items-start justify-start w-full lg:w-[32%] max-w-full min-w-[300px]">
      <h2 className="text-primary text-[16px] md:text-[22px] font-semibold">
        Recent Transactions
      </h2>
      <div className="bg-white rounded-[15px] md:rounded-[25px] w-full h-[235px] p-4 overflow-x-auto scrollbar-hidden">
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
