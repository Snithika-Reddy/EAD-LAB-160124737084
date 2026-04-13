import React from "react";
import Studentdetails from "./Child";
function Parent()
{
    return(
        <div>
            <Studentdetails 
            image="https://tse4.mm.bing.net/th/id/OIP._HrY0iYrbByrzC0ejUHR2AHaHa?pid=Api&P=0&h=180"
            name="Snithika" 
            rollno="84" 
            branch="IT" />
            <Studentdetails 
            image="https://tse1.mm.bing.net/th/id/OIP.YyI5h4U1RS8jKIAKVrNMMAHaHa?pid=Api&P=0&h=180"
            name="Koushik" 
            rollno="134" 
            branch="CSE" />
            <Studentdetails
            image="https://tse4.mm.bing.net/th/id/OIP.2UKprpudkcFOK7TkJyOIYgHaDP?pid=Api&P=0&h=180" 
            name="Sunny" 
            rollno="111" 
            branch="IT" />
        </div>
    );
}export default Parent;