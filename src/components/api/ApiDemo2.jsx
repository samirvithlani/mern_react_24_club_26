import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const ApiDemo2 = () => {

    const navigate = useNavigate()

    const addUser = async()=>{
        const userObj = {
            name:"ram",
            email:"ram3@gmail.com",
            age:23,
            password:"ram123",
            isActive:true
        }
        const res = await axios.post("https://node5.onrender.com/user/user/",userObj)
        console.log(res)
        if(res.status==200){
            toast.success("user added !!")
            navigate("/apidemo1")
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo2</h1>
        <button onClick={addUser}>ADD USER</button>
    </div>
  )
}
