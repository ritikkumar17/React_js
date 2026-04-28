import React from 'react'

function Childcomp(props ) {
    
  return (
    <div>
    {/* access variables  values*/}
   <h1>Course : {props.course}</h1>
   <h1>Age : {props.age}</h1>
   <h1>Email :{props.email}</h1>

   <hr/>

   {/* access object values */}
   {Object.entries(props.objdata).map((item)=>(
    <h1>{item[0] }: {item[1]}</h1>
   ))}

<hr/>
   {/* access array value */}
   {props.arraydata.map((item)=>(<h1>{item}</h1>))}

   <hr/>
   {/* access state value */}
   <h1>{props.statedata}</h1>

    </div>
  )
}

export default Childcomp
