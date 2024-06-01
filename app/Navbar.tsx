'use client';

import React, { useState } from 'react';
import { Social } from './Social';
import Button from './Button';

const Navbar = ({ buttoncolor, image, btn,social,textcolor , bgcolor}:any) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className={`flex max-w-screen-2xl justify-between absolute max-h-min inset-0 mx-auto px-4 border-transparent bg-transparent  bg-clip-padding  border-[20px]  w-full  z-[999]`}
    style={{ backgroundColor: bgcolor }}>
      <div className="relative">
        <img className="h-24 w-24 object-fit" alt="main" src={"./photo/navbar.webp"} key={image} />
      </div>
      <div className="flex gap-4 items-center ">
      <Button buttoncolor={buttoncolor} btn={btn} />
        <button onClick={handleMenu} className="h-10 w-10 ">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path>{" "}
              <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path>{" "}
              <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path>{" "}
            </g>
          </svg>
        </button>
        {menu && <Menu handleMenu={handleMenu} social={social} textcolor={textcolor} />}
      </div>
    </nav>
  );
};

export default Navbar;

const Menu = ({ handleMenu,social,textcolor }:any) => {
  return (
    <div className="h-[50vh] min-w-56 absolute py-6 px-4 right-0 top-0 bg-white z-[999] rounded-bl-xl border-2">
      <div className="flex flex-col justify-between h-full">
        <div className="w-full ">
          <div onClick={handleMenu} className="h-10 w-10 ml-auto cursor-pointer">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Menu / Close_MD">
                  {" "}
                  <path
                    id="Vector"
                    d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>

          <a href="#aboutus"><p className='text-xl'>Chi siamo</p></a>
          <a href="#servizi"><p className='text-xl'>Servizi</p></a>
          <a href="#footer"><p className='text-xl'>Contattaci</p></a>
        </div>
        <div className="">
          <div className="flex flex-row justify-center gap-4">
            <Social social={social} textcolor={textcolor}/>
          </div>
        </div>
      </div>
    </div>
  );
};
