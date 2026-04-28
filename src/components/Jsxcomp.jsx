import React from "react";

function Jsxcomp() {
  // variables
  const name = "ritik kumar";
  let x = 10;
  let y = 20;

  // function
  function fruit() {
    return "apple";
  }

  // function
  function operation(a, b, op) {
    if (op === "+") {
      return a + b;
    } else if (op === "-") {
      return a - b;
    } else if (op === "*") {
      return a * b;
    }
  }
  // function
  function sum(a, b) {
    return a + b;
  }

  // object
  let userObj = {
    name: "ritik",
    age: 24,
  };

  // array
  let userArray = ["sam", "peter", "john"];

  return (
    <div>
      {/* variables */}
      <h1>My name is {name}</h1>
      <h1>
        {x} and {y}
      </h1>

      {/* function */}
      <h1>{fruit()}</h1>

      <h1>{operation(10, 20, "+")}</h1>
      <h1>{operation(10, 20, "-")}</h1>
      <h1>{operation(10, 20, "*")}</h1>

      <h1>{sum(10, 20)}</h1>

      {/* object */}
      <h1>{userObj.name}</h1>
      <h1>{userObj.age}</h1>

      {/* object keys */}
      {Object.keys(userObj).map((key) => {
        return (
          <h1>
            {key} : {userObj[key]}
          </h1>
        );
      })}

      {Object.keys(userObj).map((key) => (
        <h1>
          {key} {userObj[key]}
        </h1>
      ))}

      {/* object values */}
      {Object.values(userObj).map((key) => (
        <h1>{key} </h1>
      ))}

      {/* object entries */}
      {Object.entries(userObj).map(([key, value]) => (
        <h1>
          {key} : {value}
        </h1>
      ))}

      {Object.entries(userObj).map((item) => (
        <h1>
          {item[0]} : {item[1]}
        </h1>
      ))}

      {/* array */}
      {userArray.map((data) => (
        <h1>{data}</h1>
      ))}
    </div>
  );
}

export default Jsxcomp;
