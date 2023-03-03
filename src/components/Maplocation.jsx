import React from 'react'
import Image from 'next/image'
import locationMap from "./images/map.PNG"

function Maplocation() {
  return (
    <div className='w-[100%] bg-[#efeff3] pt-40 max-w-[1644px] mx-auto'>
        <Image src={locationMap} alt="location" />        
    </div>
  )
}

export default Maplocation
