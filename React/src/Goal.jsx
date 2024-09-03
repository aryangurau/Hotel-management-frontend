
const Goal = () => {
  const shoot = ({playerName="playerName"}) => {
    // const playerName = document.getElementById('playerName').value;
    if(!playerName) playerName="playerName"
    alert(`Great shot by ${playerName}`);
  };

  return (
    <>
      <input placeholder="Enter any player name" id="playerName" />
      <button onClick={()=>shoot({playerName:document.getElementById('playerName').value})}>Take the shot</button>
    </>
  );
};


//1. direct function call without any passing argument onClick={shoot}
//2.passing the argument onClick = {()=>shoot({playerName:"aryan"})}
//3. passing the user defined argument onClick= {()=>shoot({playerName:document.getElementById('playerName').value})}

export default Goal;
