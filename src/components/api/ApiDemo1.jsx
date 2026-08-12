import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from '../Loader'

export const ApiDemo1 = () => {

    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
    const [loading, setloading] = useState(false)


    useEffect(()=>{
        console.log("use efffect called..")
        getApiCall()
    },[])


    //()=> function
    //[] array

    const getApiCall = async()=>{

        setloading(true)
        const res = await axios.get("https://node5.onrender.com/user/user/")
        console.log("res...",res) //axios object..
        console.log("api res",res.data)
        console.log(res.data.message)
        setmessage(res.data.message)
        console.log(res.data.data)
        setusers(res.data.data)
        setloading(false)   
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 1</h1>
        {/* <button onClick={getApiCall}>GET</button> */}
        {
            loading == true && <Loader/>
        }
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>AGE</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((u)=>{
                        return <tr>
                            <td>{u._id}</td>
                            <td>{u.name}</td>
                            
                            <td>{u.email}</td>
                            <td>{u.age}</td>
                            <td>{u.isActive==true?"Active":"NOT ACTIVE"}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
