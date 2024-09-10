import { useEffect, useState } from "react";

const Effect1 = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    
    if (isRunning) {
      const timer = setTimeout(() => {
     
        setCount((count) => count + 1);
        
      }, 1000);
      
      return () => {
        clearTimeout(timer); // Clear the timeout if component unmounts or `isRunning` changes
        controller.abort();   // Also abort the controller to prevent memory leaks
      };
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

export default Effect1;
