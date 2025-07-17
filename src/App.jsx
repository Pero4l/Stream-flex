import { useState } from 'react'
import Pagelayout from './Layout/Pagelayout'
import { Routes, Route } from 'react-router-dom'
import Home from './Molecules/Home'
import MovieSeries from './Pages/MovieSeries'
import TvSeries from './Pages/TvSeries'
import SeriesDetails from './Pages/SeriesDetails'
import MovieDetails from './Pages/MovieDetails'
import Trending from './Pages/Popular'


function App() {
  

  return (
    <>
    <Routes>
       <Route element ={<Pagelayout/>}>
       <Route path='/' element ={<Home/>} />
       <Route path='/movie' element={<MovieSeries />} />
       <Route path='series' element={<TvSeries />} />
       <Route  path="/tv/:id" element={<SeriesDetails />}/>
       <Route path="/movie/:id" element={<MovieDetails />} />
       <Route path='/trending' element={<Trending />} />
     

       
       </Route>
    </Routes>
    </>
  )
}

export default App
