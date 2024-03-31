import Navbar from "../Home page/Navbar.jsx";
import Footer from "../footer/Footer.jsx";
import Card from "./Card.jsx";
import { events } from "../../constants/index.js";

const EventsPage = () => {
  return (
    <div className="text-white">
      <Navbar />
      <div className="mx-auto py-10 w-[80%] text-white">
        <div className="">
          <h1 className="text-6xl font-bold text-center mb-12 font-clashDisplay">
            Events
          </h1>
          <div className="grid grid-flow-cols grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;