import Car from "./Car";
import Conditional from "./Conditional";
import Goal from "./Goal";
import List from "./List";
import Logical from "./Logical";

function App() {
  const name = "aryan" + "gurau"; //js file before the return and html or xhtml file within return
  const sayHi = () => {
    return "say Hello and Namaste";
  };
  const cars =["BMW", "KIA", "TATA"]
const userList =[{name:"aryan"}, {name:"Bipin"}, {name:"Kiran"}, {name:"Abhishake"}]

  return (
    <>
      <p>Hello World, {name}</p> <br />
      <Car name="aryangurau" hello={sayHi} /> <br />
      <Goal />
      {/* passing Boolean value to props name =goal  it changes the conditionl component values */}
      {<Conditional goal={true} />}
      <Logical cars={cars}/>
      <List users ={userList}/>
     
    </>
  );
}

export default App;
