import React from 'react'
import { CgMenu , CgCloseR } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center h-[20%] w-screenW m-0 p-0'>
        <div className='flex justify-evenly items-center h-20 w-screen text-lg'>
          <div className='flex justify-evenly items-center w-[60%] h-full gap-[12px] hover:cursor-pointer'>
          <div className='flex justify-evenly text-2xl h-[80%] w-[25%] items-center border-r-2 border-[#0328EE]'> <img src="/images/logo.png" alt="" /> </div>
            <div>HOME</div>
            <div>EVENTS</div>
            <div>MEMBERS</div>
            <div>BLOGS</div>
            <div>ARTICLES</div>
            <div>RESOUCRES</div>
            <div className=''>CONTACT US</div>
          </div>
          <div className='w-[22%] flex justify-center items-center h-full'>
            <button className='cursor-pointer h-[60%] w-[60%] border-none rounded-[5%] bg-[#0328EE] hover:bg-white hover:text-black'>Consultancy</button>
          </div>
        </div>
        <div className="mobile-navbar-btn">
          <CgMenu />
          <CgCloseR />
        </div>
      </nav>
  )
}

<style>
  {`
    .mobile-navbar-btn {
      display: none;
    }
  `}
</style>;
export default Navbar