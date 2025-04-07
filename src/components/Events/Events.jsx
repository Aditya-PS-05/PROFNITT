import { Link } from "react-router-dom";
import { events } from "../../constants/index.js";
import Card from "./Card";

const Events = () => {
  return (
    <div className="w-screen mt-10">
      <div className="md:flex justify-between items-center">
        <h1
          className="text-[50px] md:ml-[110px] font-clashDisplay"
          style={{ color: "#57E2E5" }}
        >
          Browse our latest Events
        </h1>
        <div className="right-10 absolute text-center font-DMSans md:mt-0">
          <Link to="/events">
            <button
              className="bg-[#0328EE] border-none p-2 rounded-[35px] font-[400]"
            >
              View All Events
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-flow-row auto-rows-fr gap-4 mx-auto justify-center"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", maxWidth: "1000px" }}>
        {events.slice(0, 2).map((event, index) => (
          <Card key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
