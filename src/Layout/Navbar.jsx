import React from 'react'
import { MdLiveTv } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div>
        <nav className='flex items-center text-white bg-black justify-between p-2 py-4 lg:p-5 lg:px-20'>
            <div className='flex  text-red-600 lg:gap-3 gap-1 items-center '>
                <MdLiveTv className='lg:text-5xl text-3xl font-bold'/>
                <span className='lg:text-4xl font-semibold text-xl '>STREAM FLEX</span>
            </div>

            

            <div>
                    <ul className='hidden lg:flex gap-10'>
                        <li className='cursor-pointer'>HOME</li>
                        <li className='cursor-pointer'>GENRE</li>
                        <li className='cursor-pointer'>COUNTRY</li>
                        <li className='cursor-pointer'>MOVIES</li>
                        <li className='cursor-pointer'>TV SHOW</li>
                        <li className='cursor-pointer'>NEWS & POPULAR</li>
                    </ul>
                </div>

                <div className='hidden lg:flex gap-5'>
                   <div className='flex items-center'>
                   <IoIosSearch className='text-2xl relative left-9 text-black '/>
                   <input className='bg-white rounded-full text-black px-12 py-2' type="text" placeholder='Enter Keyword' />
                   </div>

                    <div className='hidden lg:flex items-center'>
                        <LuUser className='text-3xl'/>
                        <span className='cursor-pointer'>Login</span>
                    </div>
                </div>

                {/* Mobile */}

                <div className='lg:hidden flex items-center text-3xl gap-3'>
                    <IoIosSearch className='text-xl'/>
                    <IoNotificationsOutline className='text-xl'/>
                    <LuUser className='text-xl'/>
                <CiMenuFries/>
                </div>
        </nav>
      
    </div>
  )
}

export default Navbar