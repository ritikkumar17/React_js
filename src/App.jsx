import Firstcomp, { SecondComp } from "./components/Firstcomp";
import Jsxcomp from "./components/Jsxcomp";
import Onclick from "./components/Onclick";
import Usestate from "./components/Usestate";
import Onchange from "./controlledcomponent/Onchange";
import Parentcomp from "./propcomponent18/Parentcomp";
// import assetsimage from "./assets/hero.png"
// import { assetsimage } from '/';

function App() {
  return (
    <>
    {/* <img src="./public/favicon.svg" />
    <img src = {assetsimage} /> */}
      <h1>App component</h1>

     {/* <Firstcomp/>
     <SecondComp/> */}

     {/* jsx component */}
     {/* <Jsxcomp/> */}

    {/* onclick component */}
     {/* <Onclick/> */}

{/* usestate component */}
     {/* <Usestate/> */}

{/* parentcomp for prop sharing data */}
     {/* <Parentcomp/> */}

{/* controlledcomponent 1st onchange */}
  <Onchange/>
     
    </>
  );
}

export default App;
