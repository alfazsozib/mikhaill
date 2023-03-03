import Image from 'next/image'
import logo from  "./images/logo-removebg-preview.png"
import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io"



function Navbar() {
    const [prevAboutNav, setPrevAboutNav] = useState(false)
    const [prevResNav, setPrevResNav] = useState(false)
    const [prevReqNav, setPrevReqNav] = useState(false)   
    const handleSetAboutPrev =()=>{
      setPrevAboutNav(true)
    }
    const handleSetResPrev =()=>{
      setPrevResNav(true)
    }
    const handleSetReqPrev =()=>{
      setPrevReqNav(true)
    }


  return (
    <div className='navbar w-[100%] bg-[#f5f5f8] top-0 max-w-[1644px] mx-auto '>
    <>
    <div className='nav w-[100%] max-w-[1644px]  mx-auto flex items-center justify-between px-24'>
        <Image src={logo} alt="" />   
        <div>
            <ul className='flex gap-8 text-xl text-[#5105cc] relative '>
                <li  className='py-8'>Home</li>
                <li className='py-8 flex' onMouseEnter={handleSetAboutPrev} onMouseLeave={()=>setPrevAboutNav(false)}>About Us <IoMdArrowDropdown size={30}/></li>
                <li className='py-8 flex' onMouseEnter={handleSetResPrev} onMouseLeave={()=>setPrevResNav(false)}>Resources <IoMdArrowDropdown size={30}/></li>
                <li className='py-8 flex' onMouseEnter={handleSetReqPrev} onMouseLeave={()=>setPrevReqNav(false)}>Request A Quote <IoMdArrowDropdown size={30}/></li>
                <li className='py-8'>Contact Us</li>
            </ul>
        </div>            
    </div>
 {prevAboutNav &&
    <div onMouseEnter={()=>setPrevAboutNav(true)} onMouseLeave={()=>setPrevAboutNav(false)} className='w-[100%] h-60 absolute top-22 z-10 bg-[#6610f2]'>
        <ul className='grid grid-cols-3 gap-4 text-center p-5 w-[100%]'>
          <li className='p-2 hover:bg-[#5105cc] border-b-[1px] hover:underline'><a className='text-white text-lg' href="ourmission">Our Mission Statement</a></li>
          <li className='p-2 hover:bg-[#5105cc] border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Our Associates</a></li>
          <li className='p-2 hover:bg-[#5105cc] border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Our Location</a></li>
          <li className='p-2 hover:bg-[#5105cc] border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Our Firm</a></li>
          <li className='p-2 hover:bg-[#5105cc] border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Our Services</a></li>
          <li className='p-2 hover:bg-[#5105cc] border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Our Qualifications</a></li>
          <li className='p-2 hover:bg-[#5105cc] border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Other Locations</a></li>
          <li className='p-2 hover:bg-[#5105cc] border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Featured Links</a></li>
          <li className='p-2 hover:bg-[#5105cc] border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Tell A Friend</a></li>
        </ul>
    
    </div> 
    }
    {prevResNav &&
    <div onMouseEnter={()=>setPrevResNav(true)} onMouseLeave={()=>setPrevResNav(false)} className='w-[100%] h-56 absolute top-22 z-10 bg-[#6610f2]'>
        <ul className='grid grid-cols-3 gap-4 text-center p-5 w-[100%]'>
          <li className='p-2 hover:bg-[#5105cc] border-b-[1px] hover:underline'><a className='text-white text-lg' href="/">Articles</a></li>
          <li className='p-2 hover:bg-[#5105cc] border-b-[1px] hover:underline'><a className='text-white text-lg' href="/">Flip Books</a></li>
          <li className='p-2 hover:bg-[#5105cc] border-b-[1px] hover:underline'><a className='text-white text-lg' href="/">Newsletters</a></li>
          <li className='p-2 hover:bg-[#5105cc] border-b-[1px] hover:underline'><a className='text-white text-lg' href="/">Glossary</a></li>
          <li className='p-2 hover:bg-[#5105cc] border-b-[1px] hover:underline'><a className='text-white text-lg' href="/">Tax Library</a></li>
          <li className='p-2 hover:bg-[#5105cc] border-b-[1px] hover:underline'><a className='text-white text-lg' href="/">Videos</a></li>
          
        </ul>
    </div> 
    }

    {prevReqNav &&
    <div onMouseEnter={()=>setPrevReqNav(true)} onMouseLeave={()=>setPrevReqNav(false)} className='w-[100%] h-56 absolute top-22 z-10 bg-[#6610f2]'>
        <ul className='grid grid-cols-3 gap-4 text-center p-4 w-[100%]'>
          <li className='p-2 hover:bg-[#5105cc] border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Annuity</a></li>
          <li className='p-2 hover:bg-[#5105cc] border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Life Insurance</a></li>
          <li className='p-2 hover:bg-[#5105cc] border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Individual Health</a></li>
          <li className='p-2 hover:bg-[#5105cc] border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Disability Income Insurance</a></li>
          <li className='p-2 hover:bg-[#5105cc] border-b-[1px] hover:underline'><a className='text-white text-lg' href="">401(k) Information Request</a></li>
          <li className='p-2 hover:bg-[#5105cc] border-b-[1px] hover:underline'><a className='text-white text-lg' href="">Information Request</a></li>
         
        </ul>
    </div> 
    }
    </>          
    </div>
  )
}

export default Navbar
