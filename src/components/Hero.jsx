import React from 'react'
import slide1 from "./images/multi-gen-family.webp"
import slide2 from "./images/multicultural-friends.webp"
import slide3 from "./images/union-folks.webp"
import slide4 from "./images/washington-skyline.webp"
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function Hero() {
  return (
    <>
    <div className='w-[100%] max-w-[1644px] mx-auto relative'>  
        <Carousel
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showArrows={false}
            showIndicators={false}
        >
                <div>
                    <Image src={slide1} alt={"img1"}/>
                </div>
                <div>   
                    <Image src={slide2} alt={"img2"}/>
                </div>
                <div>
                    <Image src={slide3} alt={"img3"}/>
                </div>
                <div>
                    <Image src={slide4} alt={"img4"}/>
                </div>
                
        </Carousel>
    <div className="absolute inset-0  bg-[#5b0fd6e0] bg-opacity-80">
        {/* <Navbar /> */}
    </div>
    </div>

    {/* Boxex Part  */}
    <div className='absolute top-[70%] left-[15%]'>
        <div className='shadow-2xl shadow-purple-900 bg-gradient-to-t bg-pink-700 rounded-xl from-[#5b0fd6e0] w-[900px] py-12 px-6 flex justify-between'>
            <div className='text-white mx-4'>
                <h1 className='text-xl font-serif pb-2'>Contact Us</h1>
                <p className='font-serif pb-6'>Please feel free to contact us with any questions.</p>
                <button className='font-serif border-2 rounded-lg border-white hover:border-purple-600 px-6 py-2 text-center'>Contact Us</button>
            </div>
            <div className='text-white'>
                <h1 className='text-xl font-serif pb-2'>Videos</h1>
                <p className='font-serif pb-6'>We have interesting videos for you to watch on my site.</p>
                <button className='font-serif border-2 rounded-lg border-white hover:border-purple-600 px-6 py-2 text-center'>View Videos</button>
            </div>
            <div className='text-white'>
                <h1 className='text-xl font-serif pb-2'>Flipbooks</h1>
                <p className='font-serif pb-6'>You can review interesting Flipbooks on my site.</p>
                <button className='font-serif border-2 rounded-lg border-white hover:border-purple-600 px-6 py-2 text-center'>View Flipbooks</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero
