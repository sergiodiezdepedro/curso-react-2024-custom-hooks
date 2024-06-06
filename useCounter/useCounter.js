import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  //   'value' permite que desde donde se implemente este custom hook se pueda variar en cuánto se disminuye o aumenta el contador
  const increment = (value = 1) => {
    setCounter((current) => current + value);
  };
  const decrement = (value = 1) => {
    // if (counter === 0) return;
    setCounter((current) => current - value);
  };
  const reset = () => {
    setCounter(initialValue);
  };
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
