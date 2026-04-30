import React from 'react';

function Childcallback({ onClick }) {
  console.log("Child Rendered");

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default React.memo(Childcallback);