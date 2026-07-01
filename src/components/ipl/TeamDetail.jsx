import React from 'react'
import { useParams } from 'react-router-dom'

export const TeamDetail = () => {
    const teamId = useParams().id;
  return (
    <div style={{textAlign:"center"}}>
        <h1>TEAM DETAIL - {teamId}</h1>
    </div>
  )
}
