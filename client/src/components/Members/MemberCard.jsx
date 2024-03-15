import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const MemberCard = ({ name, image, description, linkedIn }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="h-[300px] w-[270px] box-content bg-[#010D50] rounded-[10px] mt-10 border-none m-4 relative grid-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full h-full absolute flex flex-col">
        <div
          className={`w-full bg-[#C4C4C4] rounded-t-[10px] h-[${
            hovered ? "0" : "90%"
          }] transition-all ease-in-out duration-300 overflow-hidden`}
          id="image"
          style={{
            opacity: hovered ? "0.3" : "1",
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          {/* <img src='/images/stockgro.jpg' alt={name} className="h-[100%] w-full rounded-[10px] border-none" /> */}
          <img
            src={image}
            alt={name}
            className="w-full rounded-[10px] border-none"
          />
        </div>
        <div
          className={`w-full flex justify-center items-center rounded-[10px] mt-2 ${
            hovered ? "absolute" : ""
          }`}
          id="description"
          style={{
            height: hovered ? "50%" : "0",
            transition: "height 0.3s ease-in-out",
          }}
        >
          <div className="w-full text-center m-auto">
            <h1 className="text-[20px] text-center">{name}</h1>
            <p
              className={`text-white text-center ${
                hovered ? "block" : "hidden"
              } mt-4`}
            >
              {description}
            </p>
            <div
              className={`flex justify-evenly items-center mt-4 ${
                hovered ? "block" : "hidden"
              }`}
            >
              <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className="hover:cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
