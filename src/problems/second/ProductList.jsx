import React from "react";

const ProductList = React.memo(({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
});

export default ProductList;
