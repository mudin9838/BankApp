import { Account } from "../types/Types";

export type AppProps = {
  account: Account; //Tag property is tag type
};
export default function AccountSummary({ account }: AppProps): JSX.Element {
  //destructure that exact propery & use in our code
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
          {account.name}
        </p>
      </div>
    </div>
  );
}
