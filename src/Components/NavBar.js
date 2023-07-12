import React from 'react';



function NavBar(props) {

  //  const[show,SetShow]=useState(false);
  // const showHandler = () =>{
  //   SetShow(!show)
  // }
  return (
    <div className="grid lg:grid-cols-4 grid-cols-3">
      <div>
        <h1 className="lg:text-2xl m-2">
          <span className="text-4xl text-[#6527BE font-extrabold">GS</span>
          <br />
          Enterprises
        </h1>
      </div>

      <div>
        <h1 className="text-gray-500 m-2 lg:text-sm text-[10px]">
          Contact us <br />
          <span>
            +91 8999999129
            <br />
            gsenterprises876@gmail.com
          </span>
        </h1>
      </div>

      <div className="lg:flex hidden mt-3">
  <ul className="flex justify-center flex-row gap-9 m-3">
    <li className="bg-[#9681EB] hover:bg-[#9681EB] h-12 flex items-center justify-center rounded-xl w-28">
      <button className="text-white font-medium focus:outline-none">
        Services
      </button>
    </li>
    <li className="bg-[#9681EB] hover:bg-[#9681EB] h-12 flex items-center justify-center rounded-xl w-28">
      <button className="text-white font-medium focus:outline-none">
        Contacts
      </button>
    </li>
    <li className="bg-[#9681EB] hover:bg-[#9681EB] h-12 flex items-center justify-center rounded-xl w-28">
      <button className="text-white font-medium focus:outline-none">
        About Us
      </button>
    </li>
  </ul>
</div>


      <div className="flex justify-center">
        <button onClick={props.setHandler} className="bg-[#6527BE] text-white  w-36 h-16 mt-3 rounded-2xl font-semibold">
          Products
        </button>

      </div>
    </div>
  );
}

export default NavBar;
