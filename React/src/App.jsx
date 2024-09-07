import ArrayHook from "./ArrayHook";
import Car from "./Car";
import Conditional from "./Conditional";
import Goal from "./Goal";
import InterviewHooks from "./InterviewHooks";
import List from "./List";
import Logical from "./Logical";
import MortageCalculator from "./MortgageCalculator";
import ObjectHook from "./ObjectHook";
import StateHook from "./StateHook";

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
      <p>Hello World, {name}</p> <br />
      <Car name="aryangurau" hello={sayHi} /> <br />
      <Goal />
      {/* passing Boolean value to props name =goal  it changes the conditionl component values */}
      {<Conditional goal={true} />}
      <Logical cars={cars} />
      <List users={userList} />
      <StateHook />
      <ObjectHook/>
      <ArrayHook/>
      <InterviewHooks/>
      <MortageCalculator/>
   
      
    
    </>
  );
}

export default App;
