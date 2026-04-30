import React, { useState, useCallback } from 'react';
import Childcallback from './Childcallback';

function Parentcallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <h1>Parent</h1>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Childcallback onClick={handleClick} />
    </div>
  );
}

export default Parentcallback;