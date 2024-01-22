import React from 'react';
import BlogsCard from './BlogsCard';

const Blogs = () => {
    return (
        <div className='w-screen border-2 border-red-500 mt-10'>
            <div className='md:flex justify-between items-center'>
                <h1 className='text-[50px] md:ml-[100px] font-clashDisplay'>Browse our latest articles</h1>
                <div className='right-10 absolute text-center font-DMSans'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet .
                </div>
            </div>
            <div className='md:flex items-center m-5 justify-evenly h-[80%] border-2 border-red-500'>
                <BlogsCard />
                <BlogsCard />
                <BlogsCard />
            </div>
        </div>
    );
}

export default Blogs;