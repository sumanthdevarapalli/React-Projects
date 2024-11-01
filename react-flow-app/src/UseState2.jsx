import { useState } from "react"

function UseState2()
{
const[Count,setCount] = useState(0)
const increment  = setCount(Count+1)
//setCount(Count+1)
return(
    <>
    <h1>Counter Value :{Count} </h1>
    <button style={{color:"green"}} onClick={()=>{increment}}>Increment</button>
    <button style={{color:"red"}} onClick={()=> Count>0 && setCount(Count-1)}>Deccrement</button>
    <button  style={{color:"orange"}}  onClick={()=>setCount(0)}>Reset</button>


   
    </>

)


}
export default UseState2;