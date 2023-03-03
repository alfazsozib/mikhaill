import React from 'react'

function Footer() {
const returnWindow=()=>{
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
  return (
    <div className='w-[100%] bg-[#f5f5f8] relative h-40 max-w-[1644px] mx-auto'>
        <div>
            <h1 className='text-blue-800 underline absolute bottom-28  left-4'><a href="/"> Site Map</a></h1>
        </div>    
        <button onClick={()=>returnWindow()} className='text-white absolute bottom-4 right-4 px-4 py-2 font-serif bg-[#6d2cd4]'>BACK TO TOP</button>         
    </div>
  )
}

export default Footer
