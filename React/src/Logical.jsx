// const Logical = ({ cars }) => {
//   return <div> {cars.length > 0 && <div>{cars.toString()}</div>}</div>

// };  // using logical operator

const Logical = ({ cars }) => {
  return (
    <div>
     
      {cars.length > 0 ? (
        <div>{cars.toString()}</div>
      ) : (
        <div>cars not found</div>
      )}
    </div>
  );
 };
export default Logical