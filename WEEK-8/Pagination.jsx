import React,{useState}from "react";
function Pagination()
{
    const studentsData = [ 
        { id: 1, name: "Abhilash", branch: "CSE" }, 
        { id: 2, name: "Rahul", branch: "ECE" }, 
        { id: 3, name: "Sneha", branch: "IT" }, 
        { id: 4, name: "Kiran", branch: "CSE" }, 
        { id: 5, name: "Divya", branch: "EEE" }, 
        { id: 6, name: "Vamsi", branch: "MECH" }, 
        { id: 7, name: "Anjali", branch: "CIVIL" }, 
        { id: 8, name: "Ravi", branch: "IT" }, 
        { id: 9, name: "Pooja", branch: "CSE" }, 
        { id: 10, name: "Arjun", branch: "ECE" }, 
        { id: 11, name: "Teja", branch: "EEE" }, 
        { id: 12, name: "Suresh", branch: "MECH" }
    ];
    const[searchQuery,setSearchQuery]=useState("");
    const[currentPage,setCurrentPage]=useState(1);
    const recordsPerPage=5;
    const filteredStudents=studentsData.filter((student)=>student.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const lastIndex=currentPage*recordsPerPage;
    const firstIndex=lastIndex-recordsPerPage;
    const currentStudents=filteredStudents.slice(firstIndex,lastIndex);
    const totalPages=Math.ceil(filteredStudents.length/recordsPerPage);
    return(
        <div style={{textAlign:"center"}}>
            <h2>StudentTable</h2>
            <input type="text" placeholder="Enter search Query...." value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value);setCurrentPage(1)}} />
            <table border="5" cellPadding="7" cellSpacing="10">
                <thead>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>BRANCH</th>
                </thead>
                <tbody>
                    {currentStudents.length>0?(currentStudents.map((student)=>(
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.branch}</td>
                        </tr>
                    ))):(<tr>
                        <td colSpan="3">
                            No Results Found
                        </td>
                    </tr>)}
                </tbody>
            </table>
            <div>
                <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage===1}>Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage===totalPages}>Next</button>
            </div>
        </div>
    )
}export default Pagination;