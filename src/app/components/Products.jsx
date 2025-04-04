import ClientComponent from "./ClientComponent";
const Products = async () => {
  const data = await fetch("https://dummyjson.com/products");
  const posts = await data.json();
  console.log(posts);
  return <ClientComponent data={posts} />;
};

export default Products;
