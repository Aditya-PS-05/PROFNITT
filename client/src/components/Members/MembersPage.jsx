import MemberCard from "./MemberCard";
import Navbar from '../Home page/Navbar.jsx';
import Footer from '../footer/Footer.jsx';

const MembersPage = () => {
  return (
    <div>
      <div className="bg-[#010725] text-white h-screen border-2 border-red-500">
      <div className="Navbar">
        <Navbar/> 
      </div>
        <div className="border-red-500 border-2 m-6 box-content w-screen h-screen flex flex-col" style={{ paddingTop: '80px' }}>
          <div><h1 className="text-4xl flex justify-center items-center h-[80px] font-clashDisplay">Our Team</h1></div>
          <div className="border-red-500 border-2 flex justify-center items-center gap-[2vw] h-[150px]">
              <div className="border-red-500 border-2 h-full flex justify-center items-center font-DMSans">
                <div className="border-2 border-red-500 h-[70%] w-[120px] flex justify-center items-center hover:cursor-pointer m-4 hover:bg-white hover:text-black">Core</div>
                <div className="border-2 border-red-500 h-[70%] w-[120px] flex justify-center items-center hover:cursor-pointer m-4 hover:bg-white hover:text-black">Analyst</div>
                <div className="border-2 border-red-500 h-[70%] w-[120px] flex justify-center items-center hover:cursor-pointer m-4 hover:bg-white hover:text-black">Junior Analyst</div>
              </div>
          </div>
          <div className="w-full border-2 border-green-500 flex justify-center">
            <div className="border-2 border-blue-500 grid grid-cols-3 grid-flow-row">
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
            </div>
        </div>
        <Footer />
      </div>
     </div>
    </div>
  );
};

export default MembersPage;
