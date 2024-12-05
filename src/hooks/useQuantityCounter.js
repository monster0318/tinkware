// hooks/useQuantityCounter.js
import { useState } from "react";

const MAX_QUANTITY = 10; // Define your maximum quantity here

const useQuantityCounter = (initialValue = 1) => {
  const [quantity, setQuantity] = useState(initialValue);

  const handleInputChange = (event) => {
    const inputQuantity = parseInt(event.target.value, 10);
    if (!isNaN(inputQuantity)) {
      if (inputQuantity > MAX_QUANTITY) {
        alert("Maximum quantity is 10.");
        setQuantity(MAX_QUANTITY);
      } else if (inputQuantity < 1) {
        alert("Minimum quantity is 1.");
        setQuantity(1);
      } else {
        setQuantity(inputQuantity);
      }
    }
  };

  const increment = () => {
    if (quantity < MAX_QUANTITY) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else {
      alert("Maximum quantity reached (10).");
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return {
    quantity,
    increment,
    decrement,
    handleInputChange,
  };
};

export default useQuantityCounter;
