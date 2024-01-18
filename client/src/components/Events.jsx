import React from 'react'
import EventCard from "./EventCard";
const Events = () => {
  return (
    <div className='p-5'>
      <div className='flex '>
        <h1 className='text-[50px] ml-[100px]'>Our Events</h1>
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