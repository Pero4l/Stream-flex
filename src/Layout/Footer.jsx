import React from 'react'
import { MdLiveTv } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className='bg-black text-white p-10'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-5 lg:px-10'>
          <div className='flex  text-red-600 lg:gap-3 gap-4 items-center '>
                         <MdLiveTv className='lg:text-5xl text-5xl font-bold'/>
                         <span className='lg:text-4xl font-semibold text-3xl '>STREAM FLEX</span>
                     </div>

                     <div>
                          <ul className='flex flex-col text-center lg:flex-row gap-10'>
                              <li className='cursor-pointer'>HOME</li>
                              <li className='cursor-pointer'>GENRE</li>
                              <li className='cursor-pointer'>COUNTRY</li>
                              <li className='cursor-pointer'>MOVIES</li>
                              <li className='cursor-pointer'>TV SHOW</li>
                              <li className='cursor-pointer'>NEWS & POPULAR</li>
                          </ul>
                     </div>

              <div className='flex text-3xl gap-2'>
                <FaFacebook/>
                <FaSquareXTwitter/>
                <FaInstagramSquare/>
              </div>

          </div>

          <div className='flex flex-col lg:flex-row text-center gap-5 px-9 justify-end lg:gap-[270px] pr-10 pt-20 py-5'>
            <div>
              <p>info@pero4l on X</p>
              <p>+234937923637</p>
            </div>
            <div>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
              <p>Help</p>
              </div>

              <div><p>&copy; 2025 Stream Flex all right reserved</p></div>
          </div>

      </footer>
    </div>
  )
}

export default Footer
