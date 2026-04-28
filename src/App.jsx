import Firstcomp, { SecondComp } from "./components/Firstcomp";
import assetsimage from "./assets/hero.png"

function App() {
  return (
    <>
    <img src="./public/favicon.svg" />
    <img src = {assetsimage} />
      <h1>hello word</h1>
     <Firstcomp/>
     <SecondComp/>
     
    </>
  );
}

export default App;
