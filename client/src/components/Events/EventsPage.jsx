import Navbar from "../Home page/Navbar.jsx";
import Footer from "../footer/Footer.jsx";
import Card from "./Card.jsx";
import { events } from "../../constants/index.js";

const EventsPage = () => {
<<<<<<< HEAD
  const [boundaryHeight, setBoundaryHeight] = useState('auto');

  useEffect(() => {
    const boundaryContent = document.getElementById('boundary-content');
    if (boundaryContent) {
      const contentHeight = boundaryContent.clientHeight;
      // Add some extra space to avoid overflow
      setBoundaryHeight(contentHeight + 100 + 'px');
    }
  }, []);


  
=======
>>>>>>> d015c574337af0dddb11eca9be7c525c177c7c6f
  return (
    <div className="text-white">
      <Navbar />
      <div className="mx-auto py-10 w-[80%] text-white">
        <div className="">
          <h1 className="text-6xl font-bold text-center mb-12 font-clashDisplay">
            Events
          </h1>
          <div className="grid grid-flow-row grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;