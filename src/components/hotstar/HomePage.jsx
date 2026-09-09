import React from 'react'
import { MyTable } from '../MyTable'

export const HomePage = () => {

//const headers = ["id","name","age"]

const users = [
  {id:1,name:"amit",age:23,salary:23000},
  {id:2,name:"raj",age:22,salary:32000},
  {id:3,name:"parth",age:21,salary:45000},
]

const headers = Object.keys(users[0])


  return (
    <div style={{textAlign:"center"}}>
        <h1>HomePage</h1>
        {/* <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
            </tr>
          </thead>
        </table> */}
        <MyTable headers = {headers}></MyTable>
    </div>
  )
}
