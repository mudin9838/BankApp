import { Transaction } from "../types/Types";

export type AppProps = {
  transaction: Transaction; //Tag property is tag type
};
export default function TrnsactionSummary({ transaction }: AppProps): JSX.Element {
  //destructure that exact propery & use in our code
  return (
    <div>
      <div className="p-5">
        <p className="font-bold text-gray-700 dark:text-gray-400">
         ${transaction.amount}
        </p>
      </div>
    </div>
  );
}
