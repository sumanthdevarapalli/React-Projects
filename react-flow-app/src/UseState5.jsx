import { useState } from "react";

function UseState5() {
  const originalPrice = 5000;
  const [price, setPrice] = useState(originalPrice);
  const [discount, setDiscount] = useState(0);

  const applyDiscount = (discountValue) => {
    if (discountValue === 10) {
      setDiscount(10);
      setPrice(originalPrice * 0.1); // Apply a 10% discount
    } else if (discountValue === 20) {
      setDiscount(20);
      setPrice(originalPrice * 0.2); // Apply a 20% discount
    } else if (discountValue === 30) {
      setDiscount(30);
      setPrice(originalPrice * 0.3); // Apply a 30% discount
    } else {
      setDiscount(0);
      setPrice(originalPrice); // Reset to original price
    }
  };

  return (
    <div>
      <h1>Original Price: ${originalPrice}</h1>
      <h2>Discount: {discount}%</h2>
      <h2>Price After Discount: ${price.toFixed(2)}</h2>
      <button style={{color:"green"}}onClick={() => applyDiscount(10)}>Apply 10% Discount</button>
      <button style={{color:"green"}}onClick={() => applyDiscount(20)}>Apply 20% Discount</button>
      <button style={{color:"green"}}onClick={() => applyDiscount(30)}>Apply 30% Discount</button>
      <button style={{color:"red"}} onClick={() => applyDiscount(0)}>Remove Discount</button>
    </div>
  );
}

export default UseState5;