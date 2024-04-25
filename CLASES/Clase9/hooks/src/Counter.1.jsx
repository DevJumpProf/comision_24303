import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>Numero:{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
};
