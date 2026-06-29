import React from 'react'
import { useParams } from 'react-router-dom'

export const Watch = () => {

    //<Route path='/watch/:id' element = {<Watch/>}></Route>
    //const movieName = useParams().id;

    //<Route path='/watch/:name' element = {<Watch/>}></Route>
    const movieName = useParams().name;

    

  return (
    <div style={{textAlign:"center"}}>
        <h1>Watching !!!! {movieName}</h1>
    </div>
  )
}
