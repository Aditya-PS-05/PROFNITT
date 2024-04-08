import React from "react";
import { useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectCard({ name, description, image, github }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="h-[400px] w-[400px] box-content bg-[#010D50] rounded-[10px] border-none m-4 relative grid-item overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "#0328EE" : "white",
        border: hovered ? "none" : "1px solid white",
      }}
    >
      <div className="w-full h-full absolute flex flex-col">
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
            <h1
              className="text-[20px] text-2xl text-center w-[90%] m-auto"
              style={{
                color: hovered ? "white" : "#010725",
              }}
            >
              {name}
            </h1>
            <p
              className={`text-white text-center w-[90%] m-auto ${
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
              {github && ( // Only render if github is not an empty string
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="2x"
                    className="hover:cursor-pointer"
                  />
                </a>
              )}
            </div>
            <div
              className={`w-full bg-[#C4C4C4] absolute bottom-0 mt-3 h-[${
                hovered ? "0" : "80%"
              }] transition-all ease-in-out duration-300 overflow-hidden`}
              id="image"
              style={{
                opacity: hovered ? "0.3" : "1",
                display: hovered ? "none" : "block",
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <img
                src={image}
                alt={name}
                className="w-full h-full rounded-b-[10px] border-none h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
