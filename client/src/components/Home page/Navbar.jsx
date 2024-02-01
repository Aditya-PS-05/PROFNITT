<<<<<<< HEAD
// import React from 'react';
import {Link} from "react-router-dom";
=======
import React from 'react';
import ConsultancyPOP from './ConsultancyPOP'; // Adjust the path as per your project structure
>>>>>>> 2cb3e921efe062dbe5d32ef66a52a76fdef28c93

const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: '100px',
      fontFamily: 'DMSans, sans-serif',
      border: '2px solid red',
      backgroundImage: 'linear-gradient(#000424 55.25%, #2F3980 100%)',
      
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' // Shadow properties
    }}>
      <div className='flex-1 flex items-center justify-evenly h-full'>
<<<<<<< HEAD
          <div className='w-[10%]'>
            <img src="/images/logo.png" alt="Logo" className='' />
          </div>
          <div className='flex items-center justify-evenly h-full p-4 border-l-2 border-[#0328EE] w-[70%]'>
            <div>HOME</div>
            <div>EVENTS</div>
            <div className="cursor-pointer"><Link to="/members">MEMBERS</Link></div>
            <div>BLOGS</div>
            <div>ARTICLES</div>
            <div>CONTACT US</div>
          </div>
=======
       

        <div style={{ width: '12%', marginLeft: '120px', marginBottom: '10px', marginRight:'0px' }}>
          <img src="/images/logo.png" alt="Logo" className='logo' style={{ border: 'none' }} />
>>>>>>> 2cb3e921efe062dbe5d32ef66a52a76fdef28c93
        </div>

        <div className='flex-1 flex items-center justify-evenly h-full p-5 w-[100%]' style={{ fontFamily: 'Poppins, sans-serif', marginTop: '10px', marginLeft :'0px' }}>
          <div className="nav-item" style={{ borderLeft: 'none' }}>HOME</div>
          <div className="nav-item" style={{ borderLeft: 'none' }}>EVENTS</div>
          <div className="nav-item" style={{ borderLeft: 'none' }}>PROJECTS</div>
          <div className="nav-item" style={{ borderLeft: 'none' }}>MEMBERS</div>
          <div className="nav-item" style={{ borderLeft: 'none' }}>BLOGS</div>
          <div className="nav-item" style={{ borderLeft: 'none' }}><a href="https://medium.com/@profnitt.club" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>   ARTICLES  </a></div>
          <ConsultancyPOP />
        </div>
      </div>

      
    </nav>
  );
}

export default Navbar;
