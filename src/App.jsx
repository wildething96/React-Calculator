import React, { useState } from "react";
import Calculator from "./components/Calculator";
import Carousel from "./components/Carousel";

const App = () => {
  const [count, setCount] = useState(() => {
    return 0;
  });

  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const minus = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <Calculator />
      {/* <Carousel />
      <h1>Hello World</h1>
      <button
        onClick={() => {
          minus();
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          add();
        }}
      >
        +
      </button> */}
    </div>
  );
};

export default App;
