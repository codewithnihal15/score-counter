import React, { useState } from "react";

const Home = () => {
  //   let a = 0;

  const [a, setA] = useState(0);

  const increment = () => {
    setA(a + 1);
  };
  const decrement = () => {
    setA(a - 1);
  };

  return (
    <div className="btn">
      <p className="w">Total Win</p>
      <button onClick={increment}>Win</button>
      <p>Score is: {a}</p>
      <button onClick={decrement}>Loss</button>
    </div>
  );
};

export default Home;
