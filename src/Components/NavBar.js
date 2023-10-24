import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg'


function NavBar(props) {

  //  const[show,SetShow]=useState(false);
  // const showHandler = () =>{
  //   SetShow(!show)
  // }
  return (
    <div className="flex justify-between">
      <div>
        {/* <h1 className="lg:text-2xl m-2">
          <span className="text-4xl text-[#6527BE font-extrabold">GS</span>
          <br />
          Enterprises
        </h1> */}
        <img src={logo} className='h-[70px]' alt='/'></img>
      </div>

      <div className='flex justify-center text-center'>
        <h1 className="text-gray-500 m-2 lg:text-sm text-[10px]">
          Contact us <br />
          <span>
            +91 9896388796
            <br />
            gsenterprises876@gmail.com
          </span>
        </h1>
      </div>



      <div className="flex justify-center">
        <button onClick={props.setHandler} className="bg-[#6527BE] text-white  w-36 h-16 mt-3 m-4 rounded-2xl font-semibold">
          Products
        </button>

      </div>
    </div>
  );
}

export default NavBar;
