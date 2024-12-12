import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <nav className=" flex mt-2 justify-between px-5 h-10 items-center ">
        <div>
          <p className="text-xl underline font-bold italic text-color_primary_500 cursor-pointer"
          onClick={()=> navigate('/')}>
            Note IT
          </p>
        </div>
      
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
