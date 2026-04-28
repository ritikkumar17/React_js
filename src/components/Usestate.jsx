import  { useState } from 'react'

function Usestate() {
    const[count ,setCount]=useState(0);

    // object state
    let objdata={
        name:"ritik",
        sub:"react",
        city:"ludhiana"
    }
    const [users , setUsers] = useState(objdata)

    const updateObjData = ()=>{
        setUsers({
            ...users,
             age:25
        })
    }

    // array state
    const [arraydata , setArraydata]=useState(["one","two","three"])

    const updateArrayData =()=>{
        setArraydata((prev)=>{
            return [...prev,"four","five" ,"six"]
        })
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>

{/* updating object data via useState */}
      {Object.entries(users).map((item)=>(
        <h1>{item[0]} : {item[1]}</h1>
      ))}

      <button onClick={updateObjData}>Change obj data</button>

      {/* updating array data via useState */}
      {arraydata.map((data)=>(
        <h1>{data}</h1>
      ))}

      <button onClick={updateArrayData}>Change array data</button>
    </div>
  )
}

export default Usestate
