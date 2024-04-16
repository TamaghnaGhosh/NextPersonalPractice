import Product from "./product";

async function findProductList() {
  let data = await fetch("https://dummyjson.com/products");
  let result = await data.json();
  return result?.products;
}
export default async function page() {
  const products = await findProductList();
  return (
    <div className="items-center text-center">
      <h1 className="font-semibold text-4xl">
        Product list for server components
      </h1>
      {products.map((productList) => (
        <div key={productList.id}>
          <h3 className="font-semibold">Name : {productList.title}</h3>
          <Product price={productList.price} />
        </div>
      ))}
    </div>
  );
}
