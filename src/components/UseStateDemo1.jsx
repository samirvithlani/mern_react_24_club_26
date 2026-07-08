import React, { useState } from 'react'

export const UseStateDemo1 = () => {

    //state variable

    const[score,setScore] = useState(0)
    //score --> variable name ,, state variable
    //setScore -->function  : to make any change is score will use setScore func
    //0 --> initial value it can be any true false,[],{}

    var count =0;
    const increseCount = ()=>{
        count++;
        console.log("count = ",count)
    }
    const increseSocre = ()=>{
        //score++;
        //setScore++ : error -->it function
        setScore(score+1)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo1</h1>
        <h1>Count = {count}</h1>
        <button onClick={increseCount}>increse</button>
        <h1>Score = {score}</h1>
        <button onClick={increseSocre}>INCRESE SCORE</button>
    </div>
  )
}
