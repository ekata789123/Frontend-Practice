import "./CartUIComponent.css";
import { useEffect, useState } from "react";

export const CartUIComponent = () => {
  const [result, setResult] = useState([]);
  const [cartValue, setCartValue] = useState(0);

  const handleDecreaseCartValue = (index) => {
    setResult((prev) =>
      prev.map((item, i) =>
        i === index && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    setCartValue((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleIncreaseCartValue = (index) => {
    setResult((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    setCartValue((prev) => prev + 1);
  };

  useEffect(() => {
    fetchResponse();
  }, []);

  async function fetchResponse() {
    let data = await fetch("https://dummyjson.com/products");
    let res = await data.json();
    const productsWithQty = res.products.map((item) => ({
      ...item,
      quantity: 0,
    }));

    setResult(productsWithQty);
  }

  return (
    <div className="cart-ui-component">
      <div className="heading-todo">
        <h1>Machine Coding Question</h1>
        <h2>CartUI Component</h2>
      </div>

      <div className="cart-navbar">
        <div className="cart-icon">🛒
            <span>{cartValue}</span>
        </div>
      </div>

      <div className="cart-list-container">
        {result.map((item, index) => (
          <div className="cart-container" key={item.id}>
            <div className="image-title-container">
              <img src={item.images[0]} alt={item.slug} />
              <span>{item.title}</span>
            </div>

            <div className="cart-button-container">
              <button onClick={() => handleDecreaseCartValue(index)}>-</button>
              {item.quantity}
              <button onClick={() => handleIncreaseCartValue(index)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
