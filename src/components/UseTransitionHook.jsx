import React, { useState, useTransition } from "react";

function UseTransitionHook() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;

    setInput(value); // ⚡ fast update

    startTransition(() => {
      // 🐢 slow update
      const newList = [];
      for (let i = 0; i < 10000; i++) {
        newList.push(value);
      }
      setList(newList);
    });
  };

  return (
    <div>
      <input value={input} onChange={handleChange} />

      {isPending && <p>Loading...</p>}

      {list.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default UseTransitionHook;