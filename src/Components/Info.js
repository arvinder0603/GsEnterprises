import React from 'react'
import im5 from '../assets/im5.jpg'
function Info() {
  return (
    <div className="flex lg:flex-row flex-col mt-12">

      <div className='flex justify-center items-center object-contain m-6'>
        <img className='rounded-2xl shadow-2xl ' src={im5} alt='/'></img>
      </div>


      <div className='flex justify-center items-center flex-col  gap-y-7 '>
     
          <span className='text-[#6527BE] lg:text-[32px] text-[20px] font-bold text-center '>
            Introducing GS Enterprises: <span className='text-[#9681EB]  text-center'>  Revolutionizing Scientific Equipment Solutions</span>
          </span> 

        <h1 className='lg:text-[18px] text-[12px]  items-center text-center'>

          <br />

          At GS Enterprises, we are committed to pushing the boundaries of scientific exploration and discovery by providing cutting-edge scientific equipment solutions. As a leader in the industry, we understand the pivotal role that reliable and innovative instruments play in advancing research, analysis, and experimentation. Our unwavering dedication to excellence and customer satisfaction sets us apart as a trusted partner for scientists, researchers, and professionals worldwide.

          
        </h1>
      </div>
    </div>
  )
}

export default Info

