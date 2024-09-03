
// use of props
const Conditional = ({goal}) => {   //here goal is the props which receive the value from app.jsx
    if(goal)
  return <>
  <MadeGoal/>
  </>;
  else{
    return <>
    <NoGoal/>
    </>;
  }

};

export const MadeGoal = () => {
    return   <div style={{color:"green"}}>hello Goal</div>;
};
export const NoGoal = () => {
   return <div style={{color:"red"}}>Hello NoGoal</div>;
};

export default Conditional;
