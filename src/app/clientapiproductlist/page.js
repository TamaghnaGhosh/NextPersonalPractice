/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";

const page = () => {
  const [productList, setProductList] = useState(null);
  useEffect(() => {
    findProductList();
  }, []);

  async function findProductList() {
    let data = await fetch("https://dummyjson.com/products");
    let result = await data.json();
    setProductList(result?.products);
  }

  return (
    <div className="items-center text-center">
      <h1 className="font-semibold text-4xl">
        Product list for client components
      </h1>
      {productList === null && (
        <h1 className="font-semibold text-2xl">Loading.....</h1>
      )}
      {productList?.map((productList) => (
        <h3 key={productList.id} className="font-semibold">
          Name : {productList.title}
        </h3>
      ))}
    </div>
  );
};

export default page;
