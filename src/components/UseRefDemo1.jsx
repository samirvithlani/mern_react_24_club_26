import React, { useEffect, useRef } from 'react'

export const UseRefDemo1 = () => {
    const myref = useRef()

    useEffect(()=>{
        myref.current.focus()
    })

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseRefDemo1</h1>
        <div>
            <label>NAME</label>
            <input ref={myref} type='text'></input>
        </div>
        <div>
            <label>NAME</label>
            <input ref={myref} type='text'></input>
        </div>

    </div>
  )
}
