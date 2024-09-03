import Car from "./Car";
import Goal from "./Goal";

function App() {
  const name = "aryan" + "gurau"; //js file before the return and html or xhtml file within return
  const sayHi = () => {
    return "say Hello and Namaste";
  };
  return (
    <>
      <p>Hello World, {name}</p> <br />
      <Car name="aryangurau" hello={sayHi} /> <br />
      <Goal />
    </>
  );
}

export default App;
