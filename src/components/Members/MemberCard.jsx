import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const MemberCard = ({ Name, Image, Domain, Position, "LinkedIn ID": linkedIn, Tagline }) => {
  const [hovered, setHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const generateBackgroundColor = (name) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00FFFFFF)
      .toString(16)
      .toUpperCase()
      .padStart(6, '0');
    return `#${c}`;
  };

  const backgroundColor = generateBackgroundColor(Name);
  const initials = Name.split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);

  return (
    <div
      className="h-[300px] w-[270px] bg-[#010D50] rounded-[10px] mt-10 m-4 relative overflow-hidden shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image or fallback */}
      {imageError ? (
        <div 
          style={{ backgroundColor }}
          className="h-[260px] flex items-center justify-center text-white text-5xl font-bold rounded-t-[10px]"
        >
          {initials}
        </div>
      ) : (
        <img
          src={`/members/${Image}`}
          alt={Name}
          className="h-[260px] w-full object-cover rounded-t-[10px]"
          onError={() => setImageError(true)}
        />
      )}

      {/* Bottom static info */}
      <div className="px-2 py-1 bg-[#010D50] text-center z-10">
        <h1 className="text-[16px] text-white font-semibold leading-tight">{Name}</h1>
        <p className="text-[12px] text-gray-300 leading-none">{Position} - {Domain}</p>
      </div>

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 bg-[#010D50]/90 text-white flex flex-col justify-center items-center rounded-[10px] transition-opacity duration-300 ease-in-out ${
          hovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <p className="text-white text-center mt-4 px-4 text-sm">{Tagline}</p>
        <div className="mt-4">
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="hover:cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
