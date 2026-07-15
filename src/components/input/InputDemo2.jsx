import React, { useState } from 'react'

export const InputDemo2 = () => {
    const [gender, setgender] = useState("")
    const [skills, setskills] = useState([])

    // const skillHandler = (event)=>{

    //     console.log(event.target.value)
    //     //skills -->[] 
    //     //-->html ---> html -->push -->["html"] --> setSkills(["skills"])
    //     console.log("before...",skills)
    //     setskills([...skills,event.target.value])
    //     //[...] spread operaotr..
    //     //[...] --> existing array spread
    //     console.log("after",skills)
    // }

     const skillHandler = (event)=>{
        console.log(event)
        //event.target.checkked --> true,false
        if(event.target.checked==true){
            setskills([...skills,event.target.value])
        }
        else{
            //filter...
            //skills = [html,css,js] .filter((s)=html!=html)false
            //skills = [html,css,js] .filter((s)=css!=html) true
            //skills = [html,css,js] .filter((s)=js!=html) true
            const afterDelete = skills.filter((s)=>s!=event.target.value)
            //["css","js"]
            console.log("after delete...",afterDelete)
            setskills(afterDelete) //to update on browser
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDemo2</h1>
        <div>
            <label>GENDER</label><br></br>
            MALE :<input type='radio' value="male" name='gender' onChange={(event)=>{setgender(event.target.value)}}></input><br></br>
            FEMALE :<input type='radio' value="female" name='gender' onChange={(event)=>{setgender(event.target.value)}}></input>
            <br></br>
            {gender}
        </div>
        <div>
            <label>SKILLS</label> <br></br>
            HTML :<input type='checkbox' name='skills' value="html" onChange={(event)=>{skillHandler(event)}}></input>
            <br></br>
            CSS :<input type='checkbox' name='skills' value="css" onChange={(event)=>{skillHandler(event)}}></input>
            <br></br>
            JS :<input type='checkbox' name='skills' value="js" onChange={(event)=>{skillHandler(event)}}></input>
            <br></br>
            {
                skills.map((s)=>{
                    return <li>{s}</li>
                })
            }
        </div>
    </div>
  )
}
