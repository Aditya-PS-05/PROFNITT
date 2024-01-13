import React from 'react';

const BlogsCard = () => {
    return (
        <div className='w-[350px] h-[500px] box-content bg-[#010D50] rounded-[40px]'>
            <div className='h-[40%] w-full bg-[#C4C4C4] rounded-t-[40px]'>

            </div>
            <div className='rounded-[40px] flex items-center justify-center bg-[#0328EE] text-md w-[109px] p-2 absolute mt-[-20px] text-center ml-[20px] cursor-pointer'>
                Full Blog
            </div>
            <div className='bg-[#010D50] h-[35%] rounded m-2 border-b-2 border-[#0328EE]'>
                <div className='h-[80%] m-5 mt-10'>
                    <h1 className='text-[20px]'>The Basics about Cryptocurrency</h1>
                    <p className='m-5'>Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.</p>
                </div>
            </div>
            <div className='h-[15%] flex pl-3'>
                <div className='bg-[#C4C4C4] rounded-[50%] h-[70px] w-[70px]'>

                </div>
                <div className='ml-5 flex flex-col justify-center'>
                    <h1 className='text-[10px]'>ProfNITT Member</h1>
                    <p>August 2, 2021</p>
                </div>
            </div>
        </div>
    );
}

export default BlogsCard;
