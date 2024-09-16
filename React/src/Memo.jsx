import { useState, useMemo } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);  // Initialize todo as an empty array

  const expensiveCalculation = (num) => {
    console.log("counting....");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  const increase = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodo((t) => [...t, "new todo"]);  // Append new todos correctly
  };

  const calculatedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h1>Todos</h1>
      {todo.toString()}
      <br />
      <button onClick={addTodo}>Add new Todo</button>
      <br />
      <h1>Count</h1>
      {count}
      <br />
      <button onClick={increase}>Increase</button>
      <br />
      <h1>Calculated Value</h1>
      {calculatedValue}
    </div>
  );
};

export default Memo;
