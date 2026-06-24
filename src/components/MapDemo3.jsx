import React from 'react'

export const MapDemo3 = () => {

    var employees = [
        {id:101,name:"amit",age:23,gender:"male",salary:23000},
        {id:102,name:"amita",age:26,gender:"female",salary:49000},
        {id:103,name:"neha",age:51,gender:"female",salary:51000},
        {id:104,name:"jay",age:32,gender:"male",salary:78000},
        {id:105,name:"priya",age:27,gender:"female",salary:45000},

    ]

  return (
    <div style={{textAlign:"center"}}>
        <h1>MapDemo3</h1>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>GENDER</th>
                    <th>SALARY</th>
                </tr>
            </thead>
            <tbody>
                    {
                        employees.map((emp)=>{
                            return <tr style={{backgroundColor:emp.gender=="female" && "lightpink"}}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td style={{color:emp.age>30 ?"red":"white"}}>{emp.age} {emp.age>50 && "*"} </td>
                                <td>{emp.gender}</td>
                                {/* <td style={{backgroundColor:emp.salary>50000 ?"yellow" :"grey"}}>{emp.salary}</td> */}
                                <td style={{backgroundColor:emp.salary>50000 &&"yellow" }}>{emp.salary}</td>
                            </tr>
                        })
                    }
            </tbody>
        </table>
    </div>
  )
}
