import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from '../Loader'
import { toast } from 'react-toastify'

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

    const deleteHandler = async(id)=>{

        //alert(id)
        //delete api
        const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`);
        console.log(res) //axios obejct..
        if(res.status==204){
            //alert("user deleted !!!")
            toast.success("user deleted !!")
            getApiCall() //updated record..
        }
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
                    <th>Action</th>
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
                            <td>
                                <button onClick={()=>{deleteHandler(u._id)}} className='btn btn-danger'>DELETE</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
