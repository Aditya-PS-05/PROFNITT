import React from 'react';

const EventCard = () => {
    return (
        <div className='w-[486px] h-[212px] box-content bg-[#010D50] rounded-[40px] flex justify-center items-center m-5'>
            <div className='p-5 flex-col flex justify-center'>
                <div>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam neque beatae omnis eius rerum, eaque quia explicabo voluptate a sunt, vero magnam aliquam quibusdam ea ex quam similique cum! Accusantium?"</div>
                <div className='ml-5'>ProfNITT Members</div>
                <div className='ml-5'>Role, Company</div>
            </div>
        </div>
    );
}

export default EventCard;