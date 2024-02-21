import MemberCard from "./MemberCard";
import Navbar from '../Home page/Navbar.jsx';
import Footer from '../footer/Footer.jsx';
import { members } from "../../constants";

const MembersPage = () => {

  function getCore(){
    
  }

  function getAnalyst(){

  }

  function getJrAnalyst(){

  }

  return (
    <div>
      <div className="bg-[#010725] text-white h-screen ">
      <div className="Navbar">
        <Navbar/> 
      </div>
        <div className="m-6 box-content w-screen h-screen flex flex-col">
          <div><h1 className="text-4xl flex justify-center items-center h-[80px] font-clashDisplay">Our Team</h1></div>
          <div className="flex justify-center items-center gap-[2vw] h-[150px]">
              <div className="border-gray-500 border-2 h-full flex justify-center items-center font-DMSans">
                <button className="border-2 border-gray-500 h-[70%] w-[120px] flex justify-center items-center hover:cursor-pointer m-4 hover:bg-white hover:text-black" onClick={getCore}>Core</button>
                <button className="border-2 border-gray-500 h-[70%] w-[120px] flex justify-center items-center hover:cursor-pointer m-4 hover:bg-white hover:text-black" onClick={getAnalyst}>Analyst</button>
                <button className="border-2 border-gray-500 h-[70%] w-[120px] flex justify-center items-center hover:cursor-pointer m-4 hover:bg-white hover:text-black" onClick={getJrAnalyst}>Junior Analyst</button>
              </div>
          </div>
          <div className="w-full flex justify-center">
            <div className=" grid grid-cols-3 grid-flow-row">
              {members.map((member, index) => (
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
