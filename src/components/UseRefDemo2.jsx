import React, { useEffect, useRef, useState } from 'react'

export const UseRefDemo2 = () => {
    const divref = useRef()
    useEffect(()=>{
        divref.current.scrollIntoView({behavior:"smooth"})
    },[])
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseRefDemo2</h1>
        <div style={{height:"400px",backgroundColor:"orange",border:"1px solid black"}}></div>
        <div style={{height:"400px",backgroundColor:"white",border:"1px solid black"}}></div>
        <div ref={divref} style={{height:"400px",backgroundColor:"green",border:"1px solid black"}}></div>
    </div>
  )
}
