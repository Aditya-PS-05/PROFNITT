import React from 'react'
import EventCard from "./EventCard";
const Events = () => {
  return (
    <div className='p-5 mt-10'>
      <div className='flex '>
        <h1 className='text-[50px] ml-[100px] font-clashDisplay ' style={{ color: '#57E2E5' }}>Our Events</h1>
      </div>
      <div className='md:flex m-5'>
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  )
}

export default Events