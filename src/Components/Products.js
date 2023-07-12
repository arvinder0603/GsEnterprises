import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import im3 from '../assets/im3.jpg'
import im4 from '../assets/im4.jpg'

import im5 from '../assets/im5.jpg'
import { Link } from 'react-router-dom';
export const Products = () => {
  return (
    
    
    <div>
      <div className='flex justify-center items-center gap-4'>
      <h2 className='flex justify-center font-extrabold text-[60px]  text-[#157d8d] mb-6'>Our Products</h2>
      <Link to="/products"  className='bg-[#157d8d] w-[120px] h-[50px] rounded-2xl shadow-2xl font-bold'>
        <h1 className='flex justify-center mt-3 text-white'>
        Products
          </h1></Link >
      </div>
     
         <div className='flex justify-center'  >
        <Carousel className='lg:h-[700px] lg:w-[900px] w-[300px]'>
          <div>
            <img src={im3} alt='Slide 1' />
        
          </div>
          <div>
            <img src={im4} alt='Slide 2' />
            
          </div>
          <div>
            <img src={im5} alt='Slide 3' />
          
          </div>

          <div>
            <img  src={im4} alt='Slide 3' />
          
          </div>
          <div>
            <img src={im5} alt='Slide 3' />
          
          </div>
        </Carousel>
      </div>

    </div>

   
  );
};