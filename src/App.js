import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);
  const [fizzBuzz, setFizzBuzz] = useState("");

  const fizzBuzzHelper = (num) => {
    setFizzBuzz("");
    if (num % 3 === 0 && num % 5 === 0) setFizzBuzz("FizzBuzz");
    if (num % 5 === 0) setFizzBuzz("Buzz");
    if (num % 3 === 0) setFizzBuzz("Fizz");
  };
  const incrementCount = () => {
    setCount(count + 1);
    // fizzBuzzHelper(count)
  };

  return (
    <div className="App">
      <h1>HEYYY</h1>
      <h1>
        {count % 15 === 0
          ? "FizzBuzz"
          : count % 3 === 0
          ? "Fizz"
          : count % 5 === 0
          ? "Buzz"
          : count}
      </h1>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}
