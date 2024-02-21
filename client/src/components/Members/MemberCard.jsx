import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const MemberCard = ({name, team, image, instagram, twitter, github, linkedIn}) => {
  return (
    <div className="h-[300px] w-[270px] box-content bg-[#010D50] rounded-[10px] mt-10 border-none m-4 relative grid-item">
      <div className="w-full h-full absolute flex flex-col">
        <div className={`w-full bg-[#C4C4C4] rounded-t-[10px] h-[80%] hover:h-[0%]`} id="image"
        >
          <img src={image} alt={name} className="h-full w-full rounded-[10px] border-none" />
        </div>
        <div className={`w-full flex justify-center items-center rounded-[10px] mt-2`} id="description">
          <div className="w-full">
            <h1 className="text-[20px] text-center ">{name}</h1>
          </div>
        </div>
        <div className="flex-1text-white flex justify-evenly items-center mt-2">
          <a href={instagram}><FontAwesomeIcon icon={faInstagram} size="1x" className="hover:cursor-pointer"/></a>
          <a href={twitter}></a><FontAwesomeIcon icon={faXTwitter} size="1x" className="hover:cursor-pointer" />
          <a href={linkedIn}></a><FontAwesomeIcon icon={faLinkedin} size="1x" className="hover:cursor-pointer" />
          <a href={github}></a><FontAwesomeIcon icon={faGithub} size="1x" className="hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
