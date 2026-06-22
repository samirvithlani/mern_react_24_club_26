import React from 'react'

export const MapDemo1 = () => {

    var users = ["amit","sumit","raj","parth","jay"]

  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 1</h1>
        {
            users.map((u)=>{
                return <li>{u}</li>
            })
        }
    </div>
  )
}
