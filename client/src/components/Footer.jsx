import React from 'react'
const Footer = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-[98%] bg-[#010D50] md:px-16 md:py-7'>
        <div className='lg:flex md:flex justify-between items-center'>
          <div className=''>
            <img src="/images/logo.png" alt="ProfNITT Logo" className='w-[70px]' />
          </div>
          <div className='flex justify-end items-center gap-2'>
            <div><img src="/images/instagram.svg" alt="Instagram" /></div>
            <div><img src="/images/facebook.svg" alt="Instagram" /></div>
            <div><img src="/images/linkedin.svg" alt="Instagram" /></div>
          </div>
        </div>
        <div className='mt-10 lg:flex md:flex justify-between md:px-20 font-DMSans font-thin'>
            <div className='w-[300px] h-[200px]'>
              <h1 className='h-[20%] border-b-2'>MENU</h1>
              <div className='h-[60%] mt-4'>
                <div className='flex justify-between h-[33%]'>
                  <button className='font-bold'>HOME</button>
                  <button>EVENTS</button>
                </div>
                <div className='flex justify-between h-[33%]'>
                  <button>ABOUT</button>
                  <button>BLOGS</button>
                </div>
                <div className='flex justify-between h-[33%]'>
                  <button>MEMBERS</button>
                  <button>CONTACT US</button>
                </div>
              </div>
            </div>
            <div className='rounded-[30px] w-[300px] p-5 bg-[#002a6c]'>
              <h1 className='text-4xl font-bold'>FOLLOW US ON</h1>
              <p className='mt-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas quam itaque illum consequatur officia cum eius cupiditate</p>
              <div className='text-sm mt-5 font-bold'>
                <button className='bg-[#0328EE] rounded-[30px] p-3 w-[100px] mr-4 tracking-widest'>Instagram</button>
                <button className='bg-[#0328EE] rounded-[30px] p-3 w-[100px] tracking-widest'>Twitter</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer