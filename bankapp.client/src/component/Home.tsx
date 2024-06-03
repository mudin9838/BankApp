import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductSummary from "./ProductSummary";
import { Product } from "../types/Types";

function Home() {
  const [products, setProducts] = useState<Product[] | null>(null);
  useEffect(() => {
    const url = "https://fakestoreapi.com/products";

    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <>
      {products
        ? products.map((product) => {
            return <ProductSummary product={product} />;
          })
        : null}
    </>
  );
}
export default Home;
