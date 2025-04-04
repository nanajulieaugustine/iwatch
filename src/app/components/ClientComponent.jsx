"use client";

const ClientComponent = ({ data }) => {
  return (
    <ul>
      {data.products.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default ClientComponent;
