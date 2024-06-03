import { Product } from "../types/Types";

export type AppProps = {
  product: Product; //product property is Product type
};
export default function ProductSummary({ product }: AppProps): JSX.Element {
  //destructure that exact propery & use in our code
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={product.image} alt="product" />
      </a>
      <div className="p-5">
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
          {product.title}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.description}
        </p>
      </div>
    </div>
  );
}
