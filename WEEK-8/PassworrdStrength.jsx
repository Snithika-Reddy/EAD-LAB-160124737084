import React,{useState} from "react";
function PassworrdStrength()
{
    const[password,setPassword]=useState("");
    const[strength,setStrength]=useState("");
    const checkStrength=(value)=>
    {
        setPassword(value);
        let StrongRegex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%&*?!]).{8,}$/;
        let mediumRegex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/;
        if(StrongRegex.test(value))
        {
            setStrength("Strong");
        }
        else if(mediumRegex.test(value))
        {
            setStrength("Medium");
        }
        else
        {
            setStrength("Weak");
        }
    }

    return(
        <div style={{textAlign:"center"}}>
            <h3>Password Strength Checker</h3>
            <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>checkStrength(e.target.value)} />
            <p>Password Strength : {strength}</p>
        </div>
    )

}export default PassworrdStrength;