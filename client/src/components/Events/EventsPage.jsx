import EventsCard from './EventCard';
import Navbar from '../Home page/Navbar'
import Footer from '../footer/Footer'
import { styles } from "../../styles";
import { events } from '../../constants';

const EventsPage = () => {
  return (
    
    <div className='text-white w-full border-2 border-red-500'>
      <Navbar />
      <br /><br /><br /><br />
      <div className='w-[90%] border-2 border-red-500 m-auto'>
        <h1 className={`${styles.sectionHeadText} m-2 `}>Events Page </h1>
        <p className='font-extralight opacity-80 m-2'>Profnitt firmly believes that besides all the work we do as a team to learn finance and stock market, it is highly necessary to give back to the community.We organize several workshops and events every year with the vision to make newcomers feel welcome and not alien to the field of Finance. We aim at hosting events that serve as platforms for networking, skill-building and creating a supportive community of aspiring finance professionals.Some of our most significant workshops and events include: Alphathon, InHoTTs, Guest Lectures and IPL Mania and many more.</p>
      </div>
      <div className='md:grid grid-cols-3 grid-flow-row items-center m-5 justify-evenly h-[80%] text-white border-2 border-red-500 w-[90%] mx-auto'>
        {events.map((events, index) => (
          <EventsCard key={index} {...events} />
        ))}
       
      </div>
      <Footer/>
    </div>
  )
}

export default EventsPage