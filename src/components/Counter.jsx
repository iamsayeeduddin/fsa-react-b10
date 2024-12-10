import { useCallback, useEffect, useMemo, useState } from "react";

function Counter() {
  let count1 = 0;
  let [count, setCount] = useState(0);
  const increment = useCallback((cnt) => {
    setCount(cnt + 1);
    count1 = count1 + 1;
    // console.log(count, count1);
  }, []);
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

  const bigVal = useMemo(() => {
    console.log("@@@@");
    return 2893298 * 71;
  }, []);

  // const bigVal = (() => {
  //   console.log("@@@@");
  //   return 2893298 * 71;
  // })(); // IIFE

  return (
    <div>
      <button className="py-2 px-4 bg-blue-500" onClick={() => decrement()}>
        -
      </button>
      <span>{count}</span>
      <button className="py-2 px-4 bg-blue-500" onClick={() => increment(count)}>
        +
      </button>
    </div>
  );
}

export default Counter;
