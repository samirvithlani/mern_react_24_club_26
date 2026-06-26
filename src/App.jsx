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


function App() {
  
 

  return (
    <div>
        <Navbar></Navbar>
        
          <Routes>
            <Route path='/movies' element ={<Movies/>}></Route>
            <Route path='/shows' element = {<Shows/>}></Route>
          </Routes>
    </div>
  )
}

export default App
