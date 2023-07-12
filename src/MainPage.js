import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import LandPage from './Components/LandPage';
import Info from './Components/Info';
import { Products } from './Components/Products';
import Footer from './Components/Footer';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Sidebar from './Components/Sidebar';

export const MainPage = () => {
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow(!show);
  };

  const closeHandler = () => {
    setShow(false);
  };

  return (
    <div>
      <NavBar setHandler={showHandler} />
      <div className='flex justify-center bg-[#6527BE] h-[80px] items-center text-white font-bold'>
       <h1 className='text-[20px]'>
       Gs Enterprises offers the best and most accurate equipments in the ambala
        </h1>
      </div>
      <FloatingWhatsApp accountName='Gurpreet singh' phoneNumber='+919896388796' />

      <div className='flex'>
        {show && <Sidebar close={closeHandler} />}
        <div className='flex flex-col w-full'>
          <LandPage />
          <Products />
          <Info />
          <Footer />
        </div>
      </div>
    </div>
  );
};
