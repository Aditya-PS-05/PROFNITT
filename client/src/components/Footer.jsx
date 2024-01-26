import React from 'react';

const Footer = () => {
  return (
    <div className='w-screen flex justify-center items-center mt-10'>
      <div className='w-[100%] bg-[#010D50] md:px-16 md:py-7'>
        <div className='md:flex justify-center items-center w-full'>
          <div className='w-[40%] flex justify-center items-center flex-col'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/images/logo.png" alt="ProfNITT Logo" className='h-[90px]' style={{ marginTop: '-20px', marginRight: '15px' }} />
              <div>
                <br />
                <h1 className='text-[1vmax] font-DMSans font-bold' style={{ padding: 0, fontSize: '20px', fontFamily: 'Poppins, sans-serif' }}>The Finance and</h1>
                <h1 className='text-[1vmax] font-DMSans font-bold' style={{ padding: 0, fontSize: '20px', fontFamily: 'Poppins, sans-serif' }}> Investment Club</h1>
              </div>
            </div>
            <div className='font-ppSupplyMono' style={{ color: '#57E2E5',padding: 0, fontSize: '20px', fontFamily: 'Poppins, sans-serif', marginTop: '10px', marginLeft: '-250px' }}>Follow Us</div> {/* Adjusted margin-left */}
            <div className='flex gap-3 mt-3' style={{ marginLeft: '-200px' }}> {/* Adjusted margin-left */}
              <div><a href="https://www.instagram.com/profnitt?igsh=bTd0ZW1oMGQyeHA3" target="_blank"><img src="/images/instagram.svg" alt="Instagram" /></a></div>
              <div><a href="https://www.facebook.com/profnitt?mibextid=ZbWKwL" target="_blank"><img src="/images/facebook.svg" alt="Facebook" /></a></div>
              <div><a href="https://www.linkedin.com/company/profnitt/" target="_blank"><img src="/images/linkedin.svg" alt="LinkedIn" /></a></div>
            </div>
          </div>
          <div className='w-[50%]'>
            <div style={{ marginLeft: '280px' }}> {/* Adjusted margin-left */}
              <h1 style={{ padding: 0, fontSize: '30px', fontFamily: 'Poppins, sans-serif' }}> <b>Contact Information</b></h1>
              
              <p style={{ display: 'flex', alignItems: 'center' }}>
      <img src="/images/location.svg" alt="Location Icon" style={{ marginRight: '5px' }} />
      <span> Scient Room, NIT Trichy </span>
    </p>
    <p style={{ display: 'flex', alignItems: 'center' }}>
      <img src="/images/phone.svg" alt="Location Icon" style={{ marginRight: '5px' }} />
      <span> +91 8709921638 </span>
    </p>
    <p style={{ display: 'flex', alignItems: 'center' }}>
      <img src="/images/phone.svg" alt="Location Icon" style={{ marginRight: '5px' }} />
      <span> riya.rg3010@gmail.com </span>
    </p>
            
            </div>
          </div>
        </div>
        <br style={{ borderTop: '2px solid #000', margin: '20px 0', display: 'block' }} />
        <hr />
        <div className='text-center mt-6'>
          <h1 className='font-DMSans' style={{ color: '#57E2E5', padding: 0, fontSize: '20px', fontFamily: 'Poppins, sans-serif' }}>Designed and Deployed by ProfNITT Webteam</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
