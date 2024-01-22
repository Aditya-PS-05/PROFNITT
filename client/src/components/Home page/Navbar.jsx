import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-evenly items-center w-screen font-DMSans'>
      <div className='flex-1 flex items-center justify-evenly h-full'>
          <div className='w-[20%]'>
            <img src="/images/logo.png" alt="Logo" className='' />
          </div>
          <div className='flex items-center justify-evenly h-full p-4 border-l-2 border-[#0328EE] w-[70%]'>
            <div>HOME</div>
            <div>EVENTS</div>
            <div>MEMBERS</div>
            <div>BLOGS</div>
            <div>ARTICLES</div>
            <div>CONTACT US</div>
          </div>
        </div>
        <div className='h-full p-4 w-[20vw] flex justify-center items-center'>
          <button className='h-[70px] w-[60%] rounded-[10px] bg-[#0328EE] text-white'>COMING SOON</button>
        </div>
    </nav>
  );
}

export default Navbar;