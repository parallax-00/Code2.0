import React, { use, useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;

    const newItem = {
      name,
      quantity: parseInt(quantity),
    };

    setItems([...items, newItem]);
    setName("");
    setQuantity("");
  };
  return (
    <div>
      <h2>Shopping List</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
      <h4>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity :{item.quantity}
            </li>
          ))}
        </ul>
      </h4>
    </div>
  );
};

export default ShoppingList;
