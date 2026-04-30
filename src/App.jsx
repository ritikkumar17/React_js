import Firstcomp, { SecondComp } from "./components/Firstcomp";
import Jsxcomp from "./components/Jsxcomp";
import Onclick from "./components/Onclick";
import Parent from "./components/pass_func_as_props/Parent";
import Useeffect from "./components/Useeffect";
import Userefhook from "./components/Userefhook";
import Usestate from "./components/Usestate";
import Checkbox from "./controlledcomponent/Checkbox";
import Dropdown from "./controlledcomponent/Dropdown";
import Onchange from "./controlledcomponent/Onchange";
import Radio from "./controlledcomponent/Radio";
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
  {/* <Onchange/> */}

{/* handle checkbox */}
  {/* <Checkbox/> */}

{/* In radio component */}
  {/* <Radio/> */}

{/* in dropdwon comp */}
  {/* <Dropdown/> */}

{/* useeffect component */}
  {/* <Useeffect/> */}

{/* userefhook component */}
  {/* <Userefhook/> */}

{/* In pass_func_as_props we pass parentfunc in childfunc */}
<Parent/>
     
    </>
  );
}

export default App;
