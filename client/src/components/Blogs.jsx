import React from 'react';
import BlogsCard from './BlogsCard';

const Blogs = () => {
    return (
        <div className='box-content'>
            <div className='md:flex justify-between items-center h-[80px]'>
                <h1 className='text-[50px] ml-[100px]'>Browse our latest articless</h1>
                <div className='right-10 absolute text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet .
                </div>
            </div>
            <div className='flex items-center m-5 justify-evenly h-[80%]'>
                <BlogsCard />
                <BlogsCard />
                <BlogsCard />
            </div>
        </div>
    );
}

export default Blogs;