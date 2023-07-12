import React from 'react'
import ProductsCard from './Components/ProductsCard'
import FullInfo from './assets/ProductsFullInfo'
import { Link } from 'react-router-dom'
import { FloatingWhatsApp } from 'react-floating-whatsapp'


export const ProductsPage = () => {
  return (
    <div className='flex flex-col'>
      <nav className='bg-[#9681EB] h-[100px] grid grid-cols-2' >
        <h1 className='text-[30px] font-bold text-white flex justify-center items-center'>
          <span className='text-[40px]'>GS </span>
          Enterprises
        </h1>
        <div className='flex justify-center items-center '>
          <Link to="/" className='bg-white h-[50px] w-[110px] flex justify-center items-center rounded-3xl shadow-2xl' ><h1 className='font-bold'>
            Home </h1></Link>
        </div>

      </nav>

      <div className='flex flex-col ml-5'>
        <h1 className='font-bold lg:text-[40px] underline'>Products</h1>

        <ProductsCard Fullinfo={FullInfo} />

      </div>

      <div className='mt-16' >
        <h1 className='lg:text-[40px] font-extrabold underline ml-4'>

          About Us
        </h1>
        <p className='text-[19px] mt-6 m-2 font-medium text-gray-400 ' >
          At GS Enterprises, we are a dedicated team of experts passionate about revolutionizing the scientific equipment industry. With a deep understanding of the critical role that reliable and advanced instruments play in driving scientific exploration and discovery, we strive to provide innovative solutions that empower scientists, researchers, and professionals worldwide.

          Our mission is to push the boundaries of scientific knowledge by offering cutting-edge equipment and tools across various disciplines, including chemistry, biology, physics, environmental sciences, and more. We collaborate with renowned manufacturers who share our commitment to quality and innovation, ensuring that our customers have access to top-of-the-line products that deliver exceptional performance and accuracy.

        </p>


      </div>

      <div className='m-2 grid grid-cols-2 mt-16'>

     <div>
     <h1 className='text-center text-[50px]  font-extrabold underline'>Contacts</h1>
      
      <h1 className='text-[25px] font-semibold mt-16 flex justify-center'>
        Mr Gurpreet singh
        <br/>
        +91 8999999129
       
        <br/>
        +91 9896388796
        </h1>

        <FloatingWhatsApp accountName='Gurpreet singh' phoneNumber='+919896388796' />
        
      
     </div>
        <div className='flex justify-center flex-col'>
          <h1 className='text-[45px] font-bold underline' >Company Details</h1>
          <h1 className='mt-12 font-bold text-[20px]'>
            GS Enterprises
            <br/>
            GSTIN: 06CKBPS7206R1ZK
            <br/>
            A/c No: 41785306484
            <br/>
            IFSC:SBIN0014633
            <br/>
            State Bank of India
            <br/>
            gsenterprises876@gmail.com

          </h1>
        </div>
      </div>


    </div>
  )
}
