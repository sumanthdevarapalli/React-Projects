import { useState } from "react";
//add reset button
function UseState3(){
const[score,setScore] = useState(0)

return(
    <>
    <h1>Cricket Score: {score} </h1>
    <button style={{color:'green'}} onClick={()=>setScore(score+1)}>+1</button>
    <button style={{color:'green'}} onClick={()=>setScore(score+2)}>+2</button>
    <button style={{color:'green'}} onClick={()=>setScore(score+3)}>+3</button>
    <button style={{color:'green'}} onClick={()=>setScore(score+4)}>+4</button>
    <button style={{color:'green'}} onClick={()=>setScore(score+6)}>+6</button>

    
    </>
)

}
export default UseState3;