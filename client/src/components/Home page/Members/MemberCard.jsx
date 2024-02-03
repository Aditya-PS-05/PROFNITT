const MemberCard = () => {
  let name = "Aditya Pratap Singh";

  return (
    <div className="h-[250px] w-[270px] box-content bg-[#010D50] rounded-[40px] mt-10 border-2 border-red-500 m-4 hover:opacity-35 relative hover:cursor-pointer grid-item">
      <div className="h-[85%] w-full bg-[#C4C4C4] rounded-t-[40px] bg-contain hidden hover:block text-white absolute">
        <p>Instagram</p>
      </div>
      <div className="bg-contain hover:hidden">
        <div className="h-[85%] w-full bg-[#C4C4C4] rounded-t-[40px]"></div>
        <div className="h-[15%] flex pl-3 justify-center items-center">
          <div className="flex items-center justify-center border-2 border-red-500">
            <h1 className="font-DMSans">{name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
