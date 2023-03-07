import "./assignment1.css";
function Table(){
    const students=[
        {sid:1220,sname:"Rahul",course:'Science',age:24,total:78},
        {sid:1221,sname:"Ramesh",course:'Maths',age:25,total:88},
        {sid:1222,sname:"Rakesh",course:'English',age:26,total:98}   
    ]
    return(
        <div className="tableDiv">
            <table>
                <tr>
                    <th>S ID</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Age</th>
                    <th>Total</th>
                </tr>
                {students.map(i=>{
                    return(
                        <tr>
                            <td>{i.sid}</td>
                            <td>{i.sname}</td>
                            <td>{i.course}</td>
                            <td>{i.age}</td>
                            <td>{i.total}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}
export default Table;