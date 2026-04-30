import React, { useState, useMemo } from 'react';

function UseMemo() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);

  function slowFunction(n) {
    console.log("Calculating...");
    // for (let i = 0; i < 1000000000; i++) {} // heavy loop
    return n * 2;
  }

  const result = useMemo(() => slowFunction(num), [num]);

  return (
    <div>
      <h1>Result: {result}</h1>

      <button onClick={() => setCount(count + 1)}>
        Re-render ({count})
      </button>

      <button onClick={() => setNum(num + 1)}>
        Change Number
      </button>
    </div>
  );
}

export default UseMemo