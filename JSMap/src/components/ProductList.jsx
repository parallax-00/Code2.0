import React from "react";

const ProductList = () => {
  const products = [
    { id: 1, name: "Phone", price: "$299" },
    { id: 2, name: "Laptop", price: "$1299" },
    { id: 3, name: "Headphones", price: "$199" },
  ];
  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <h3>Name:{p.name}</h3>
          <h4>Price:{p.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
