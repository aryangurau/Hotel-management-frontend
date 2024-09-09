import { useEffect, useState } from "react";

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);


  useEffect(() => {
    if (isRunning) {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    }
  });
  return (
    <div>
      <h1>
        The count is {count}
        <button
          className="btn btn-primary mx-2"
          onClick={() => setIsRunning(true)}
        >
          play
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            setIsRunning(false);
          }}
        >
          pause
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setCount(0);
          }}
        >
          reset
        </button>
      </h1>
    </div>
  );
};

export default StopWatch;
