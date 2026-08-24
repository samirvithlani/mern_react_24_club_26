import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export const UpdateUser = () => {
    const id = useParams().id
    const navigate = useNavigate()

    //const {register,handleSubmit}=useForm({defaultValues:{name:"test",email:"test",age:0}})
    const {register,handleSubmit}=useForm({defaultValues:async()=>{
        const res = await axios.get(`https://node5.onrender.com/user/user/${id}`)
        //return res.data.data //{}
        return {
            name:res.data.data.name,
            email:res.data.data.email,
            age:res.data.data.age

        }
    }})
    
    const submitHandler = async(data)=>{
        console.log("data",data)
        //update api
        const res = await axios.put(`https://node5.onrender.com/user/user/${id}`,data)
        if(res.status==200){
            toast.success("user updated!!!")
            navigate("/apidemo1")
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UPDATING USER... {id}</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>EMAIL</label>
                <input type='text' {...register("email")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                
                <input type='submit' value={"update"}></input>
            </div>
        </form>
    </div>
  )
}
