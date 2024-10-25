import { useEffect, useState } from "react";

function Counter() {
  let count1 = 0;
  let [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    count1 = count1 + 1;
    // console.log(count, count1);
  };
  const decrement = () => {
    setCount(count - 1);
    // console.log(count);
  };

  useEffect(() => {
    console.log("$$$$$$$$$$TestuseEffect");

    return () => {
      console.log("Component Unmounted");
    };
  }, [count]);

  return (
    <div>
      <button className="py-2 px-4 bg-blue-500" onClick={() => decrement()}>
        -
      </button>
      <span>{count}</span>
      <button className="py-2 px-4 bg-blue-500" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Counter;
