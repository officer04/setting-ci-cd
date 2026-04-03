import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  let arr: number[] = [1,2,3]

  return (
    <div>
      <h1 data-testid="counter-value">{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};