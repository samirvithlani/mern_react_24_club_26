import React from 'react'
import { Link } from 'react-router-dom'

export const Shows = () => {

  const showList = [
    {id:101,name:"BREAKING BAD"},
    {id:102,name:"MONEY HEIST"},
    {id:103,name:"STRANGER THINGS"},
  ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Shows</h1>
        {
          showList.map((show)=>{
              return <li> <Link to={`/watch/${show.name}`}>{show.name}</Link></li>
          })
        }
    </div>
  )
}
