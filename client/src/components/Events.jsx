import EventCard from "./EventCard";
const Events = () => {
  return (
    <div className='p-5 mt-10 z-[1000] relative'>
      <div className='h-[550px] w-[550px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 to-[#010725] absolute bottom-[0%] right-[50%] z-0 shadow-2xl shadow-[#010725] blur-[150px] border-2 border-red-500' />
      <div className='flex z-[2000000] relative'>
        <h1 className='text-[50px] ml-[100px] font-clashDisplay'>Our Events</h1>
      </div>
      <div className='md:flex m-5 z-[2000000]'>
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  )
}

export default Events