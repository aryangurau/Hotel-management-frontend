// React performance optimization hook
//parent component re-render > prevents child component re-render
//when to use it
//1. passing callbacks as prop to child component
//2. callbacks are expensive
//(mathematical problem solve; data fetching (time consuming))

import { memo, useCallback, useState } from "react";

const Callback = () => {
  console.log("parent");
  const [count, setCount] = useState(0);
  const [sample, setSample] = useState([]);

  const handleClick = () => {
    setCount(count + 1);
  };

  const addSample = useCallback(() => {
    setSample((prev) => [...prev, "new Sample"]);
  }, [sample]);

  return (
    <div>
      <h1>parent:{count}</h1>
      <button onClick={handleClick}>Increment</button>
      <ChildComp sample={sample} addSample={addSample} />
    </div>
  );
};

const ChildComp = memo(({ sample, addSample}) => {
  console.log("child comp");
  return (
    <>
      {sample.toString()}
      <button onClick={addSample}>increase sample</button>
    </>
  );
});

export default Callback;
