import React from 'react'
import Navbar from './Navbar';


function HeroSection() {
  return (
    <div className='w-full h-[100vh] relative overflow-hidden '>
               <Navbar/>
               <img className='absolute top-0 -right-[7%]' src={img} alt="not showing" />

               <div className='w-full h-[85vh] z-30 relative flex justify-between '>

                <div className='w-[50%] flex flex-col justify-center gap-5  h-[80%]  text-right'>
                    <h1 className='f4 uppercase text-[5rem] tracking-wide text-[#462626] leading-none '>tekathon 3.0</h1>
                    <p className='f3 font-bold tracking-wider text-center text-[22px] capitalize leading-none'>internal hackthon for SIH 2024</p>
                    <div className='w-[35%] capitalize  mx-auto flex justify-center text-[20px] font-sans hover:scale-110 transition-all duration-[0.4s] text-white items-center h-10 bg-[#495e57] rounded-full'>
                  <p>Register now</p>
                </div>
                </div>

                <div className='w-[55%] h-full relative '>
                  <img className='w-full h-full top-[45%] left-[50%] scale-110 -translate-x-[50%] -translate-y-[50%] absolute  object-contain' src={mainImg} alt="not showing" />
                </div>
               </div>

               <div className='absolute w-full z-40 h-[20vh]  bottom-0 left-0 '>
                  <img className='w-full h-full object-center' src={bush} alt="" />
               </div>
              
    </div>
  )
}

export default HeroSection;
