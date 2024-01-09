import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center h-132 w-screen bg-08090a text-white'>
      <div className='flex items-center w-full max-w-screen-xl px-0' style={{ paddingTop: '15px', paddingBottom: '15px' }}>
        <div className='text-2xl flex justify-center items-center border-r-2 border-white h-full'>
          {/* <div></div> */}
        </div>
        <div className='ml-20' style={{ marginBottom: '10px' }}>
          <img src="/images/logo.png" alt="Logo" className='h-16' /> {/* Adjusted the height to 16px */}
        </div>
        <div className='flex items-center space-x-40'>
          <div style={{ marginLeft: '40px' }}>HOME</div>
          <div style={{ marginLeft: '40px' }}>EVENTS</div>
          <div style={{ marginLeft: '40px' }}>MEMBERS</div>
          <div style={{ marginLeft: '40px' }}>BLOGS</div>
          <div style={{ marginLeft: '40px' }}>ARTICLES</div>
          {/* <div style={{ marginLeft: '40px' }}>RESOURCES</div> */}
          <div style={{ marginLeft: '40px' }}>CONTACT US</div>
        </div>
        <button style={{ backgroundColor: '#0328EE', borderRadius: '22px', marginLeft: '110px' }} className='cursor-pointer h-10 px-3 rounded text-white hover:bg-white hover:text-0328EE'>
          Consultancy
        </button>
      </div>
      <div className="mobile-navbar-btn">
        
      </div>
    </nav>
  );
}

export default Navbar;
