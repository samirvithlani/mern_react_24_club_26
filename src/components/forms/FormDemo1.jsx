import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
    const {register,handleSubmit} =useForm()
    const [output, setoutput] = useState({})
    const [isSubbmited, setisSubbmited] = useState(false)
    //register -->object : input register..
    //handleSubmit function : submit event handle..
    const submitHandler = (data)=>{
        console.log("data..",data)
        setoutput(data)
        setisSubbmited(true)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name")}></input>
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
        {
            isSubbmited == true && 
            <div>
            <h1>OUTPUT</h1>
            <h1>Name = {output.name}</h1>
            <h2>Gender  = {output.gender}</h2>
            {
                output.skills.map((s)=>{
                    return <li>{s}</li>
                })
            }
        </div>
}
    </div>
  )
}
