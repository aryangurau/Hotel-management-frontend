import ArrayHook from "./ArrayHook";
import Car from "./Car";
import Conditional from "./Conditional";
import Effect3 from "./Effect3";
import Goal from "./Goal";
import InterviewHooks from "./InterviewHooks";
import List from "./List";
import Logical from "./Logical";
import MortageCalculator from "./MortgageCalculator";
import ObjectHook from "./ObjectHook";
import StateHook from "./StateHook";
import Effect1 from "./Effect1";
import Effect2 from "./Effect2";
import EffectHomework from "./EffectHomework";
import CustomHook from "./CustomHook";
import CompA from "./CompA";
import CompC from "./CompC";
import CompB from "./CompB";
import { CartContextProvider } from "../context/Cart";
import RefComp from "./RefComp";
import RefComp2 from "./RefComp2";
import Callback from "./Callback";
import Memo from "./Memo";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";
import Home from "./Components/Home";
import UserLayout from "../layouts/UserLayout";
import Login from "./Components/Login";
import "../../loginPage/css/login.css"
function App() {
  const name = "aryan" + "gurau"; //js file before the return and html or xhtml file within return
  const sayHi = () => {
    return "say Hello and Namaste";
  };
  const cars = ["BMW", "KIA", "TATA"];
  const userList = [
    { name: "aryan" },
    { name: "Bipin" },
    { name: "Kiran" },
    { name: "Abhishake" },
  ];

  return (
    <>
      {/* <p>Hello World, {name}</p> <br />
      <Car name="aryangurau" hello={sayHi} /> <br />
      <Goal /> */}
      {/* passing Boolean value to props name =goal  it changes the conditionl component values */}
      {/* {<Conditional goal={true} />}
      <Logical cars={cars} />
      <List users={userList} />
      <StateHook />
      <ObjectHook/>
      <ArrayHook/> */}
      {/* <InterviewHooks/>
      <MortageCalculator/> */}
      {/* <Effect1/> */}
      {/* <Effect2/> */}
    
      {/* <Effect3/> */}
      {/* <CustomHook/> */}
      {/* <CompA />  */}
      {/* <br /> <br /> */}
      {/* <CartContextProvider>
      <CompB /> 
      </CartContextProvider> */}
      {/* <br /> <br /> */}
      {/* <CompC /> */}
      {/* <RefComp/> */}
      {/* <RefComp2/> */}
      {/* <Callback/> */}
      {/* <Memo/> */}
      <Routes>
      <Route path="/" element={<UserLayout/>}>
        <Route index element={  <EffectHomework/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<NotFound />} />
        </Route>
    
      </Routes>
    </>
  );
}

export default App;
