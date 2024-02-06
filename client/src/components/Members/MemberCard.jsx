import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const MemberCard = () => {
  let name = "Aditya Pratap Singh";

  return (
    <div className="h-[300px] w-[270px] box-content bg-[#010D50] rounded-[10px] mt-10 border-2 border-red-500 m-4 relative grid-item">
      <div className="w-full h-full absolute flex flex-col">
        <div className="h-[70%] w-full bg-[#C4C4C4] rounded-t-[10px]00"></div>
        <div className="h-[20%] w-full flex justify-center items-center">
          <div className="w-full border-2 border-red-500">
            <h1 className="text-[20px] text-center border-2 border-red-500">{name}</h1>
          </div>
        </div>
        <div className="flex-1text-white flex justify-evenly items-center">
            <FontAwesomeIcon icon={faInstagram} size="1x" className="hover:cursor-pointer"/>
            <FontAwesomeIcon icon={faXTwitter} size="1x" className="hover:cursor-pointer" />
            <FontAwesomeIcon icon={faLinkedin} size="1x" className="hover:cursor-pointer" />
            <FontAwesomeIcon icon={faGithub} size="1x" className="hover:cursor-pointer" />
          </div>
      </div>
    </div>
  );
};

export default MemberCard;
