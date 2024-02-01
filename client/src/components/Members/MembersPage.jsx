import MemberCard from "./MemberCard";

const MembersPage = () => {
  return (
    <div className="bg-[#010725] text-white h-screen border-2 border-red-500">
      <div className="border-red-500 border-2 m-6 box-content w-screen h-screen flex flex-col">
        <div><h1 className="text-4xl flex justify-center items-center h-[80px] font-clashDisplay">Our Team</h1></div>
        <div className="border-red-500 border-2 flex justify-center items-center gap-[2vw] h-[150px]">
            <div className="border-red-500 border-2 h-full flex justify-center items-center font-DMSans">
              <div className="border-2 border-red-500 h-[70%] w-[120px] flex justify-center items-center hover:cursor-pointer m-4">Core</div>
              <div className="border-2 border-red-500 h-[70%] w-[120px] flex justify-center items-center hover:cursor-pointer m-4">Analyst</div>
              <div className="border-2 border-red-500 h-[70%] w-[120px] flex justify-center items-center hover:cursor-pointer m-4">Junior Analyst</div>
            </div>
        </div>
        <div className="w-full border-2 border-green-500 flex justify-center">
          <div className="border-2 border-blue-500 md:flex sm:block">
            <MemberCard />
            <MemberCard />
            <MemberCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MembersPage