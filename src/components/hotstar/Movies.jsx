import React from 'react'
import { Link } from 'react-router-dom'

export const Movies = () => {
  return (
    <div style={{textAlign:"center"}}>
         <h1>MOVIES</h1>
         <ol>
            <li>
              <Link to="/watch/dhurandhar">Dhurandhar</Link>
            </li>
            <li>
              <Link to="/watch/omg">OMG</Link>
            </li>
            <li>
              <Link to="/watch/rrr">RRR</Link>
            </li>
         </ol>
    </div>
  )
}
