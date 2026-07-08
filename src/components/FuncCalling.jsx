import React from 'react'

export const FuncCalling = () => {

    const test = ()=>{
        alert("test function call !!")
    }   
    const add = (a,b)=>{
        alert(a+b)
    } 

  return (
    <div style={{textAlign:"center"}}>
        <h1>FUNCTION CALLING..</h1>
        <button onClick={test}>CLICK</button>
        <button onClick={()=>{add(10,20)}}>ADD</button>
    </div>
  )
}
