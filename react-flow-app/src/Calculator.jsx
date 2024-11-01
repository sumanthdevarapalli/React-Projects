import { useRef } from "react";
function Calculator(){
const num1Ref = useRef(null);
const num2Ref = useRef(null);
const resultRef = useRef(null);

const handleCalculate = (operation)=>
{

const num1 = parseFloat(num1Ref.current.value);
const num2 = parseFloat(num2Ref.current.value);

 const operation = resultRef.current.value ;

let result;
switch(operation)
{

  case "add" :
    result=num1+num2;
    break;  
  case "sub" :
    result=num1-num2;
    break;
  case "mul" :
    result=num1*num2;
    break;
  case "div" :
    result=num1/num2;
 
}
resultRef.current.value = result;

};


  return(
   

<div>
<h1>Calculator</h1>
<label>Enter a First Number:</label>
<input type="number" ref={num1Ref} placeholder="Enter First Num"/>
<input type="number" ref={num2Ref} placeholder="Enter Second Num"/>
<input ref={resultRef}   type="text"
placeholder="Result" readOnly/>
<button onClick={handleCalculate()}  >Add</button>
<button onClick={()=>handleCalculate(sub)} >Sub</button>
<button onClick={()=>handleCalculate(mul)} >Mul</button>
<button onClick={()=>handleCalculate(div)} >Div</button>

</div>

    

  );

}
export default Calculator;












{/* <input ref={num1Ref} type="number" placeholder="Enter First Number:" />

<input ref={num2Ref} type="number" placeholder="Enter Second Number"/>
<br></br>
<input ref={resultRef}   type="text"
placeholder="Result" readOnly/>
<br></br>
<button onClick={handleAddition} >Add</button> */}