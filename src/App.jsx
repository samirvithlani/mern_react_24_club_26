import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  
  var name = "india"
  var year = 2026
  var isActive = true
  var user ={
    id:1,name:"raj"
  }


  return (
    <div>
      <h1>HEllO</h1>
      <h3>At a time we can onlu return 1 tag</h3>
      <h3>Every tag must have closing tag</h3>
      <h4>whatever written inside return statement will be display on browser</h4>
      {name}
      <h1>Name = {name}</h1>
      <h1>Year : {year}</h1>
      <h1>Active  = {isActive==true ? "Active" : "Not Active"}</h1>
      <h2>UserId = {user.id}</h2>
      <h3>Name - {user.name}</h3>
    </div>
  )
}

export default App
