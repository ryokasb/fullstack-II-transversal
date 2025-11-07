import { useState } from "react";

export function useProductCounter(initialValue: number = 1) {
  const [quantity, setQuantity] = useState(initialValue);

  const increase = () => setQuantity(prev => prev + 1);

  const decrease = () =>
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const reset = () => setQuantity(initialValue);

  return {
    quantity,
    increase,
    decrease,
    reset,
    setQuantity,
  };
}