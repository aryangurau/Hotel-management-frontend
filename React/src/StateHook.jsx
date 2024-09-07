import { useState } from "react";

const StateHook = () => {
  const [color, setColor] = useState(`red`);
  const [userColor, setUserColor] = useState("");
  
   const handleInput=()=>{
    setColor(userColor);
    setUserColor("");
   }
  return (
    <div>
      {color}

<input placeholder="enter your choice of color name"  value={userColor} 
onChange={(e)=>setUserColor(e.target.value)}/>
<button onClick={handleInput}>change color</button>
    
    </div>
  );
};

export default StateHook;
