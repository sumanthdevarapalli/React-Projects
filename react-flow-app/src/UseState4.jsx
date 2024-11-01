import { useState } from "react"

function UseState4()
{
    const[apples,setApples] = useState(0)

    return(<>
        <h1>Number of Apples:{apples}</h1>
    {apples===0?
    (<p>No apples left</p>):
    (<p>Great!you have some apples</p>)}
            <button style={{color:"green"}} onClick={()=>setApples(apples+1)}>Add 1 apple</button>
            <button style={{color:"red"}} onClick={()=> apples>0 && setApples(apples-1)}>Remove 1 apple</button>
            <button style={{color:"orange"}} onClick={()=>setApples(0)}>Reset</button>


            </> 
    )
}
export default UseState4;