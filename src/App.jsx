import { useState } from 'react'
import Pagelayout from './Layout/Pagelayout'
import { Routes, Route } from 'react-router-dom'
import Home from './Molecules/Home'

function App() {
  

  return (
    <>
    <Routes>
       <Route element ={<Pagelayout/>}>
       <Route path='/' element ={<Home/>} />

       
       </Route>
    </Routes>
    </>
  )
}

export default App
