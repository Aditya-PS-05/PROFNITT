import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./style.css"

const MemberCard = () => {
  let name = "Aditya Pratap Singh";

  return (
    <div className="h-[250px] w-[270px] box-content bg-[#010D50] rounded-[10px] mt-10 border-2 border-red-500 m-4 relative grid-item">
      <div className="projects w-full h-full absolute z-10 hover:z-[-10000]">
        <div className="h-[80%] w-full bg-[#C4C4C4] rounded-t-[10px]"></div>
        <div className="h-[15%] flex pl-3">
          <div className="ml-5 flex flex-col justify-center">
            <h1 className="text-[20px]">{name}</h1>
          </div>
        </div>
      </div>
      <div className="projinks w-full h-full border-green-500 border-2 absolute z-0">
          <div className="text-white">
            <FontAwesomeIcon icon={faInstagram} size="1x" style={{ marginRight: '5px' }} />
            <FontAwesomeIcon icon={faXTwitter} size="1x" style={{ marginRight: '5px' }} />
            <FontAwesomeIcon icon={faLinkedin} size="1x" style={{ marginRight: '5px' }} />
            <FontAwesomeIcon icon={faGithub} size="1x" style={{ marginRight: '5px' }} />
          </div>
      </div>
    </div>
  );
};

export default MemberCard;
