import React, { useEffect, useState } from 'react';

function Useeffect() {

    const[name,setName]=useState("")

    

    useEffect(()=>{
        console.log("component re-render")
    },[])

  return (
    <div>
    <label htmlFor='name'>Enter Name:</label>
      <input type="text" value={name} id="name" 
      onChange={(e)=>setName(e.target.value)} />
      <button>Submit</button>
    </div>
  )
}

export default Useeffect




// cleanup code

// import React, { useEffect } from 'react';

// function Timer() {

//   useEffect(() => {
//     const interval = setInterval(() => {
//       console.log("Running...");
//     }, 1000);

//     // cleanup
//     return () => {
//       clearInterval(interval);
//       console.log("Cleanup done");
//     };

//   }, []);

//   return <h1>Timer Running</h1>;
// }

// export default Timer;
