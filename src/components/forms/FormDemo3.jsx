import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {

    const refCodeList = ["fb","google","insta"]
    const {register,handleSubmit,formState:{errors}}=useForm()
    console.log(errors) //{}
    const submitHandler = (data)=>{
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
                message:"age is required *"
            },
            min:{
                value:18,
                message:"min age is 18*"
            },
            max:{
                value:60,
                message:"max age is 60*"
            }
        },
        refCodeValidator:{
            required:{
                value:true,
                message:"ref code is required*"
            },
            //params is udf variable
            validate:(params)=>{
                //console.log("params",params)
                //return params == "insta" || "ref code must be insta"
                return refCodeList.includes(params) || "invalid ref code"
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo3</h1>
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
                <label>REF CODE</label>
                <input type='text' {...register("refcode",validationSchema.refCodeValidator)}></input>
                {errors.refcode && errors.refcode.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>

  )
}
