import MemberCard from "./MemberCard";
import Navbar from '../Home/Navbar.jsx';
import Footer from '../footer/Footer.jsx';
import { members } from "../../constants";
import { useState } from "react";

const MembersPage = () => {
  const [selectedPosition, setSelectedPosition] = useState('Core');

  function getCore(){
    setSelectedPosition('Core');
  }

  function getManagers(){
    setSelectedPosition('Manager');  // Changed to 'Manager' instead of 'Managers'
  }

  function getCoordinators(){
    setSelectedPosition('Coordinator');  // Changed to 'Coordinator' instead of 'Coordinators'
  }

  // Simple filter based solely on the Position field
  const filteredMembers = members.filter(member => member.Position === selectedPosition);

  return (
    <div>
      <div className="bg-[#010725] text-white h-screen ">
        <Navbar/> 
        <div className="m-6 box-content w-screen h-screen flex flex-col">
          <div><h1 className="text-4xl flex justify-center items-center h-[80px] font-clashDisplay">Our Team</h1></div>
          <div className="flex justify-center items-center gap-[2vw] h-[150px]">
              <div className="h-full flex justify-center items-center font-DMSans">
                <button 
                  className={`border-2 border-gray-500 h-14 w-32 flex justify-center items-center hover:cursor-pointer m-4 hover:bg-white hover:text-black transition-colors duration-200 ${selectedPosition === 'Core' ? 'bg-white text-black' : ''}`} 
                  onClick={getCore}
                >
                  Core
                </button>
                <button 
                  className={`border-2 border-gray-500 h-14 w-32 flex justify-center items-center hover:cursor-pointer m-4 hover:bg-white hover:text-black transition-colors duration-200 ${selectedPosition === 'Manager' ? 'bg-white text-black' : ''}`} 
                  onClick={getManagers}
                >
                  Managers
                </button>
                <button 
                  className={`border-2 border-gray-500 h-14 w-32 flex justify-center items-center hover:cursor-pointer m-4 hover:bg-white hover:text-black transition-colors duration-200 ${selectedPosition === 'Coordinator' ? 'bg-white text-black' : ''}`} 
                  onClick={getCoordinators}
                >
                  Coordinators
                </button>
              </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="grid grid-flow-row auto-rows-fr gap-4 mx-auto justify-center"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", maxWidth: "1000px" }}>

              {filteredMembers.map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
            </div>
          </div>
        <Footer />
      </div>
     </div>
    </div>
  );
};

export default MembersPage;