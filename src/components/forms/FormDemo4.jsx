import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {
    const [step, setstep] = useState(1)
    const{register,handleSubmit,formState:{errors},trigger}=useForm()
    const submitHandler =(data)=>{
        console.log(data)
    }
    const next = async()=>{
        var valid;
        //trigger return type boolean promise
        if(step==1){
            valid = await trigger(["name","age"])
        }
        else if(step==2){
            valid = await trigger(["email","password"])
        }
        if(valid==true){
            setstep(step+1)
        }
    }
    const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message:"name is required*"
            }
        },
        ageValidator:{
            required:{
                value:true,
                message:"age is required*"
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
            <form onSubmit={handleSubmit(submitHandler)}>
                {
                    step==1 && 
                    <div>
                        <div>
                            <label>NAME</label>
                            <input type='text' {...register("name",validationSchema.nameValidator)}></input>
                            {errors.name && errors.name.message}
                        </div>
                        <div>
                            <label>AGE</label>
                            <input type='text' {...register("age",validationSchema.ageValidator)}></input>
                            {errors.age && errors.age.message}
                        </div>
                        <div>
                            <button onClick={next}>NEXT</button>
                        </div>
                    </div>
                }
                {
                    step==2 &&
                    <div>
                        <div>
                            <label>EMAIL</label>
                            <input type='text' {...register("email")}></input>
                        </div>
                        <div>
                            <label>PASSWORD</label>
                            <input type='text' {...register("password")}></input>
                        </div>
                        <div>
                            <button onClick={()=>{setstep(step-1)}}>BACK</button>
                            <input type='submit'></input>
                        </div>
                    </div>
                }
            </form>
    </div>
  )
}
