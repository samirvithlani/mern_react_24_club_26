import React from 'react'
import { Collage } from './Collage'
import { UniContext } from './UniContext'

export const Uni = () => {

    const uniName = "GUJRAT"
    const testUni = ()=>{
        alert("test unin called..")
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UNI COMPONENET </h1>
        <UniContext.Provider value={{uniName,testUni}}>
            <Collage></Collage>
        </UniContext.Provider>
    </div>
  )
}
