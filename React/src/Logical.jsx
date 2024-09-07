// const Logical = ({ cars }) => {
//   return <div> {cars.length > 0 && <div>{cars.toString()}</div>}</div>

// };  // using logical operator

const Logical = ({ cars }) => {

  let bmw = cars.filter((a)=>a.startsWith("K"))
  return (
   <>
<h1> {cars}</h1>
   
    <div>
     
      {cars.length > 0 ? (
    
        <div>filtered:{bmw}</div>
       
      ) : (
        <div>cars not found</div>
      )}
    </div>
    </>
  );
 };
export default Logical