import React from 'react';

const Footer = () => {
  return (
    <div className='w-screen flex justify-center items-center mt-10'>
      <div className='w-[98%] bg-[#010D50] md:px-16 md:py-7'>
        <div className='md:flex justify-evenly items-center w-full'>
          <div className='w-[40%]'>
            <div className='flex gap-[10px] items-center'>
              <img src="/images/logo.png" alt="ProfNITT Logo" className='w-[30%]' />
              <h1 className='text-[2vmax] font-DMSans font-bold'>Finance and Investment Club</h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='font-ppSupplyMono'>Follow us on</h1>
              <div className='flex gap-3 mt-3'>
                <div className=''><img src="/images/instagram.svg" alt="Instagram" /></div>
                <div><img src="/images/facebook.svg" alt="Instagram" /></div>
                <div><img src="/images/linkedin.svg" alt="Instagram" /></div>
              </div>
            </div>
          </div>
          <div className='rounded-[10px] bg-[#0328EE] p-4'>
            <h1 className='font-PPSupplyMono font-bold'>Contact Us</h1>
            <h1 className='font-light'>NIT Trichy</h1>
            <h1 className='font-light'>+91 870994638</h1>
            <h1 className='font-light'>profnitt.club@gmail.com</h1>
          </div>
        </div>
        <div className='text-center mt-6'>
          <h1 className='font-DMSans'>Designed and Deployed by profNITT</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer