import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm()
    console.log("errors...",errors)
    const submitHandler = (data)=>{
        alert("form subbmited..")
        console.log(data)
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
            },
            min:{
                value:18,
                message:"min 18 age is required*"
            },
            max:{
                value:60,
                message:"max 60 age is required*"
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
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
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
