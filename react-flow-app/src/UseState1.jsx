
import { useState } from "react"

function UseState1()
{
const[Count,setCount] = useState(0)


return(
    <>
    <h1>Counter Value :{Count} </h1>
    <button style={{color:"green"}} onClick={()=>setCount(Count+1)}>Increment</button>
    <button style={{color:"orange"}}  onClick={()=>setCount(0)}>Reset</button>


   
    </>

)


}
export default UseState1;