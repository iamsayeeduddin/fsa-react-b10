import { useState } from "react";

function Counter() {
  let count1 = 0;
  console.log("$$$$$$$");
  let [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    count1 = count1 + 1;
    console.log(count, count1);
  };
  const decrement = () => {
    setCount(count - 1);
    console.log(count);
  };
  return (
    <div>
      <button onClick={() => decrement()}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
