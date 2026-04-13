import React,{useState,useEffect} from "react";
function Timer()
{
    const[sec,setSec]=useState(0);
    const[running,isRunning]=useState(false);
    useEffect(()=>{
        let Intervel;
        if(running)
        {
            Intervel=setInterval(()=>{setSec(sec=>sec+1)},1000);
        }
        return ()=>clearInterval(Intervel);  
    },[running]);
    return(
        <div>
            <p>Timer Program</p>
            <p>{sec} : SECONDS</p>
            <button onClick={()=>isRunning(true)}>Start</button>
            <button onClick={()=>isRunning(false)}>Stop</button>
            <button onClick={()=>{isRunning(false);setSec(0);}}>Reset</button>
        </div>
    )
}export default Timer;