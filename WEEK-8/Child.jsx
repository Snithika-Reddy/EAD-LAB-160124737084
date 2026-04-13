import React from "react";
function Studentdetails(Props)
{
    return(
        <div style={{textAlign:"center"}}>
            <img src={Props.image} width="75" />
            <h2>Name : {Props.name}</h2>
            <p>RollNo : {Props.rollno}</p>
            <p>Branch : {Props.branch}</p>
            <br></br>
        </div>
    );
}export default Studentdetails;