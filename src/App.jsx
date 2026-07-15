import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {Header} from "./components/Header"
import { Footer } from './components/Footer'
import { Content } from './components/Content'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'
import { Movies } from './components/hotstar/Movies'
import { Route, Routes } from 'react-router-dom'
import { Shows } from './components/hotstar/Shows'
import { Navbar } from './components/Navbar'
import { HomePage } from './components/hotstar/HomePage'
import { Error404 } from './components/Error404'
import { Watch } from './components/hotstar/Watch'
import { Teams } from './components/ipl/Teams'
import { TeamDetail } from './components/ipl/TeamDetail'
import { FuncCalling } from './components/FuncCalling'
import { UseStateDemo1 } from './components/UseStateDemo1'
import { UseStateDemo2 } from './components/UseStateDemo2'
import { InputDemo1 } from './components/input/InputDemo1'
import { InputDemo2 } from './components/input/InputDemo2'


function App() {
  
 

  return (
    <div>
        <Navbar></Navbar>
        
          <Routes>
            <Route path='/movies' element ={<Movies/>}></Route>
            <Route path='/shows' element = {<Shows/>}></Route>
            <Route path='/' element = {<HomePage/>}></Route>
            <Route path='/*' element ={<Error404/>}></Route>
            <Route path='/watch/:name' element = {<Watch/>}></Route>
            <Route path='/teams' element = {<Teams/>}></Route>
            <Route path='/funccalling' element = {<FuncCalling/>}></Route>
            <Route path='/teamdetail/:id' element ={<TeamDetail/>}></Route>
            <Route path='/usestatedemo1' element ={<UseStateDemo1/>}></Route>
            <Route path='/usestateDemo2' element = {<UseStateDemo2/>}></Route>
            <Route path='/InputDemo1' element = {<InputDemo1/>}></Route>
            <Route path='/inputdemo2' element ={<InputDemo2/>}></Route>
          </Routes>
    </div>
  )
}

export default App
