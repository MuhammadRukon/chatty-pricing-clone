import React, { useCallback, useState } from "react";

const AddProductForm = React.memo(({ addProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addProduct({ name, price: parseFloat(price) });
      setName("");
      setPrice("");
    },
    [addProduct, name, price]
  );
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
});
export default AddProductForm;
