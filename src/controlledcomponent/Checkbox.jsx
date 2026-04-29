import React, { useState } from "react";

function Checkbox() {

    const [hobbies, setHobbies]=useState([]);

    const handleChange = (e)=>{
       const {value , checked} = e.target;

       if(checked){
        setHobbies([...hobbies , value]);
       }else{
        setHobbies(hobbies.filter((item)=>item!==value))
       }
    };

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(hobbies);
    }

  return (
    <div>
      <h1>Enter Your Hobbies</h1>

      <form onSubmit={handleSubmit}>
        <input type="checkbox" name="hobby" value="cricket" id="cric" onClick={handleChange} />
        <label htmlFor="cric">Cricket</label>

        <br />
        <input type="checkbox" name="hobby" value="singing" id="sing"  onClick={handleChange}/>
        <label htmlFor="sing">Singing</label>

        <br />
        <input type="checkbox" name="hobby" value="gaming" id="game" onClick={handleChange}/>
        <label htmlFor="game">Gaming</label>

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Checkbox;



// Single Checkbox

// import React, { useState } from "react";

// function SingleCheckbox() {
//   const [isChecked, setIsChecked] = useState(false);

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           checked={isChecked}
//           onChange={(e) => setIsChecked(e.target.checked)}
//         />
//         I Agree
//       </label>

//       <p>{isChecked ? "Accepted" : "Not Accepted"}</p>
//     </div>
//   );
// }

// export default SingleCheckbox;
