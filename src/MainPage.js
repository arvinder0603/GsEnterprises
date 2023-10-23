import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import LandPage from './Components/LandPage';
import Info from './Components/Info';
import { Products } from './Components/Products';

import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Sidebar from './Components/Sidebar';
import FooterMain from './Components/FooterMain';
import Gallary from './Components/Gallary';

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
      <div className='flex justify-center bg-[#6527BE] h-[80px] items-center text-white font-bold text-center'>
       <h1 className='text-[20px] text-center'>
       Gs Enterprises offers the best and most accurate equipments in the ambala
        </h1>
      </div>
      <FloatingWhatsApp accountName='Gurpreet singh' phoneNumber='+919896388796' />

      <div className='flex'>
        {show && <Sidebar close={closeHandler} />}
        <div className='flex flex-col w-full'>
          <LandPage />
          <Products />
          <Gallary/>
          <Info />
          <FooterMain/>
        </div>
      </div>
    </div>
  );
};
