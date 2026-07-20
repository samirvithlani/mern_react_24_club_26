import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
    const {register,handleSubmit} =useForm()
    //register -->object : input register..
    //handleSubmit function : submit event handle..
    const submitHandler = (data)=>{
        console.log("data..",data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("fname")}></input>
            </div>
            <div>
                <label>GENDER</label>
                <br></br>
                Male :<input type='radio' value="male" {...register("gender")}></input>
                FeMale :<input type='radio' value="female" {...register("gender")}></input>
            </div>
            <div>
                <label>SKILLS</label><br/>
                HTML:<input type='checkbox' {...register("skills")} value="html"></input>
                CS:<input type='checkbox' {...register("skills")} value="css"></input>
                JAVA:<input type='checkbox' {...register("skills")} value="java"></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
