import React, { useContext } from 'react'
import { UniContext } from './UniContext'

export const Collage = () => {
    const {uniName,testUni} = useContext(UniContext)
  return (
    <div>
        <h1>COLLAGE COMPONENT LOADED.</h1>
        <h1>Uni name = {uniName}</h1>
        <button onClick={testUni}>TEST UNI</button>
    </div>
  )
}
