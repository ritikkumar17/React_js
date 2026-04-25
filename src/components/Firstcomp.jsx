import React from 'react'

function Firstcomp() {
  return (
    <div>
      <h1>1st component</h1>
    </div>
  )
}

function SecondComp(){
    return(
        <>
            <h1>this is 2nd component</h1>
            <Thirdcomp/>
        </>
    )
}

function Thirdcomp(){
    return(
        <>
            <h1>this is 3rd component</h1>
        </>
    )
}

export default Firstcomp
export {SecondComp}
