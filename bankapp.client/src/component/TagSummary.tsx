import { Tag } from "../types/Types";

export type AppProps = {
  tag: Tag; //Tag property is tag type
};
export default function ProductSummary({ tag }: AppProps): JSX.Element {
  //destructure that exact propery & use in our code
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
          {tag.name}
        </p>
      </div>
    </div>
  );
}
