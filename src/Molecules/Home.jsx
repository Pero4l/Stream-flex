import React from 'react'
import { Link } from 'react-router-dom'




export default function Home() {

 
  
  return (
    <div
    className="relative bg-cover min-h-screen"
    style={{
      backgroundImage: `url('./AAAA.jpg')`,
    }}
  >
    <div className="absolute bg-black/70 inset-0 flex items-center justify-center">
      <div className="text-center text-gray-100 px-6">
        <h2 className="text-3xl font-semibold">Welcome to <span>Stream Flex</span></h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Unlimited <span className="text-red-600">Movies, Tv shows</span><br /> Anytime.
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
          Discover epic stories, thrilling adventures, and heart-stopping dramas, all streaming in stunning HD.
        </p>
       <Link  className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-lg transition" to="/movie">
       Start Watching Now
       </Link>
      </div>
    </div>
  </div>
  )
}
