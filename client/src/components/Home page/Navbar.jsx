import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-evenly items-center w-screen font-DMSans border-2 border-red-500'>
      <div className='flex-1 flex items-center justify-evenly h-full'>
        <div className='w-[10%] ml-4'>
          <img src="/images/logo.png" alt="Logo" className='logo' style={{ border: 'none' }} />
        </div>

        <div className='flex items-center justify-evenly h-full p-5 w-[70%]' style={{ fontFamily: 'Poppins, sans-serif' }}>
          <div className="nav-item" style={{ borderLeft: 'none' }}>HOME</div>
          <div className="nav-item" style={{ borderLeft: 'none' }}>EVENTS</div>
          <div className="nav-item" style={{ borderLeft: 'none' }}>MEMBERS</div>
          <div className="nav-item" style={{ borderLeft: 'none' }}>BLOGS</div>
          <div className="nav-item" style={{ borderLeft: 'none' }}>ARTICLES</div>
          <div className="nav-item" style={{ borderLeft: 'none' }}>CONTACT US</div>
        </div>
      </div>
      <div className='h-full p-4 w-[20vw]  justify-center items-center'>
        <button className='h-[40px] w-[40%] rounded-[35px] bg-[#0328EE] text-white hover:bg-white hover:text-black hover:font-bold' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '0.9rem' }}>
          Consultancy
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
