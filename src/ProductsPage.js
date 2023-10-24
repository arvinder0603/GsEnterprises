import React from 'react';
import ProductsCard from './Components/ProductsCard';
import FullInfo from './assets/ProductsFullInfo';
import { Link } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export const ProductsPage = () => {
  return (
    <div className="flex flex-col ">
      <nav className="bg-[#9681EB] h-[100px] flex justify-around">
        <h1 className="text-3xl font-bold text-white flex items-center">
          <span className="text-4xl text-blue-600">GS </span>
          Enterprises
        </h1>
        <div className="flex justify-center items-center ">
          <Link to="/" className="btn outline outline-2 text-center rounded-lg w-[60px]">Home</Link>


        </div>
      </nav>

      <div className="flex flex-col items-center mt-8">
        <h1 className="text-3xl font-bold underline font-serif">Products</h1>
        <ProductsCard Fullinfo={FullInfo} />
      </div>

      <div className="mt-16 px-4 text-center">
        <h1 className="text-3xl font-extrabold underline">About Us</h1>
        <p className="text-lg mt-6 text-gray-700">
          {/* Your About Us content */}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-8 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold underline">Contacts</h1>
          <h1 className="text-xl font-semibold mt-8">
            Mr Gurpreet Singh<br />
            +91 8999999129<br />
            +91 9896388796
          </h1>
          <FloatingWhatsApp accountName='Gurpreet Singh' phoneNumber='+919896388796' />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-extrabold underline">Company Details</h1>
          <h1 className="mt-8 text-xl">
            <h1 className='  text-[16px]  '>
              GS Enterprises
              <br />
              GSTIN: 06CKBPS7206R1ZK
              <br />
              gsenterprises876@gmail.com

              <br></br>
              Shop no: 8 Nirmal Vihar near Ekta vihar
              <br />
              Ambala Cantt
              <br />
              Haryana

            </h1>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
