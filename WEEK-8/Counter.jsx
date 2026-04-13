import React,{useState} from "react";
function Counter()
{
    const[count,setCount]=useState(0);
    const[dark,setDark]=useState(false);

    return(
        <div style={{background:dark?"black":"white",color:dark?"white":"black"}}>
            <p>COUNTER PROGRAM</p>
            <p>Count : {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)} disabled={count===0}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={()=>setDark(!dark)}>Theme</button>
        </div>
    )
}export default Counter;