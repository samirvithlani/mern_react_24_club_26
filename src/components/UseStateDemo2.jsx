import React, { useState } from 'react'

export const UseStateDemo2 = () => {
    const[loaidng,setLoading]=useState(true)
    const stoploader = ()=>{
        //loading false
        if(loaidng==true){
        setLoading(false)
        }else{
            setLoading(true)
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo2</h1>
        {
            loaidng == true && <h1>Loading...</h1>
        }
        
        <button onClick={stoploader}>{loaidng == true ?"STOP":"START"}</button>
    </div>
  )
}
