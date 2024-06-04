import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductSummary from "./ProductSummary";
import { Product } from "../types/Types";
import { Button } from "@material-tailwind/react";

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
    <Button>Hello</Button>
     </>
  );
}
export default Home;
