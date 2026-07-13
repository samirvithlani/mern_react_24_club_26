import React, { useState } from 'react'

export const InputDemo1 = () => {
    const[name,setName]=useState()
    const[age,setAge]=useState()
    const [color, setcolor] = useState("black")
    const [clicked, setclicked] = useState(false)
    //name -->cahnges ---> setName
    const nameHandler = (event)=>{

        console.log(event.target.value)
        setName(event.target.value)
    }
    const ageHandler = (event)=>{
        console.log(event.target.value)
        setAge(event.target.value)
    }
    const clickHandler = ()=>{
        setclicked(true)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDemo1</h1>
        <div>
            <label>NAME</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            {/* {name} */}
        </div>
        <div>
            <label>AGE</label>
            <input type='text' onChange={(event)=>{ageHandler(event)}} ></input>
            {/* {age} */}
        </div>
        <div>
            <input type='color' onChange={(event)=>{setcolor(event.target.value)}}></input>
            
        </div>
        <div>
            <button onClick={clickHandler}>CLICK</button>
        </div>

{
    clicked == true && 

        <div style={{color:color}}>
            <h1>OUTPUT</h1>
            <h2>NAme = {name}</h2>
            <h3>Age = {age}</h3>
            <h4>Color = {color}</h4>
        </div>
}

    </div>
  )
}

