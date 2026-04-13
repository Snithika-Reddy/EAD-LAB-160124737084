import React,{useState,useEffect} from "react";
function Timer60()
{
    const[sec,setSec]=useState(0);
    const[running,isRunning]=useState(false);
    const[msg,setMsg]=useState("");
    useEffect(()=>{
        let Intervel;
        if(running)
        {
            Intervel=setInterval(()=>{setSec(sec=>
                {
                    if(sec===60)
                    {
                        isRunning(false);
                        setMsg("TimeUP");
                        return sec;
                    }
                    return sec+1;
                }
            )},1000);
        }
        return ()=>clearInterval(Intervel);  
    },[running]);
    return(
        <div>
            <p>Timer Program</p>
            <p>{sec} : SECONDS</p>
            <button onClick={()=>isRunning(true)}>Start</button>
            <button onClick={()=>isRunning(false)}>Stop</button>
            <button onClick={()=>{isRunning(false);setSec(0);setMsg("")}}>Reset</button>
            <p>{msg}</p>
        </div>
    )
}export default Timer60;