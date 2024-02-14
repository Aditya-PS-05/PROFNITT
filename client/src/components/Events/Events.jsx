import EventCard from "./EventCard";
import { Link } from "react-router-dom";
const Events = () => {
  return (
    <div className="w-[90%] p-5 mt-10 z-[1000] relative mx-auto">
      <div className="h-[550px] w-[550px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 to-[#010725] absolute bottom-[0%] right-[50%] z-0 shadow-2xl shadow-[#010725] blur-[150px]" />
      <div className="flex z-[2000000] relative">
        <h1 className="text-[50px] font-clashDisplay">
          <Link to="/events">Our Events</Link>
        </h1>
      </div>
      <div className="md:flex z-[2000000] w-full md:gap-[30px] md:m-0">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default Events;
