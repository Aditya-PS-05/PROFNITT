// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

// const MemberCard = ({ Name, Image, Domain, Position, "LinkedIn ID": linkedIn, Tagline }) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       className="h-[300px] w-[270px] box-content bg-[#010D50] rounded-[10px] mt-10 border-none m-4 relative grid-item"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div className="w-full h-full absolute flex flex-col">
//         <div
//           className={`w-full bg-[#C4C4C4] rounded-t-[10px] h-[${
//             hovered ? "0" : "90%"
//           }] transition-all ease-in-out duration-300 overflow-hidden`}
//           style={{ opacity: hovered ? "0.3" : "1", transition: "opacity 0.3s ease-in-out" }}
//         >
//           <img
//             src={Image}
//             alt={Name}
//             className="w-full h-full object-cover rounded-[10px] border-none"
//           />
//         </div>
//         <div
//           className={`w-full flex justify-center items-center rounded-[10px] mt-2 ${
//             hovered ? "absolute" : ""
//           }`}
//           style={{ height: hovered ? "50%" : "0", transition: "height 0.3s ease-in-out" }}
//         >
//           <div className="w-full text-center m-auto">
//             <h1 className="text-[20px] text-center text-white">{Name}</h1>
//             <p className="text-gray-300 text-center">{Position} - {Domain}</p>
//             <p className={`text-white text-center ${hovered ? "block" : "hidden"} mt-4`}>{Tagline}</p>
//             <div className={`flex justify-evenly items-center mt-4 ${hovered ? "block" : "hidden"}`}>
//               <a href={linkedIn} target="_blank" rel="noopener noreferrer">
//                 <FontAwesomeIcon icon={faLinkedin} size="2x" className="hover:cursor-pointer" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MemberCard;
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const MemberCard = ({ Name, Image, Domain, Position, "LinkedIn ID": linkedIn, Tagline }) => {
  const [hovered, setHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Generate a unique color for each member as a fallback
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
      className="h-[300px] w-[270px] box-content bg-[#010D50] rounded-[10px] mt-10 border-none m-4 relative grid-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full h-full absolute flex flex-col">
        <div
          className={`w-full rounded-t-[10px] h-[${
            hovered ? "0" : "90%"
          }] transition-all ease-in-out duration-300 overflow-hidden`}
          style={{ opacity: hovered ? "0.3" : "1", transition: "opacity 0.3s ease-in-out" }}
        >
          {imageError ? (
            <div 
              style={{ 
                backgroundColor: backgroundColor,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2.5rem',
                fontWeight: 'bold'
              }}
              className="rounded-t-[10px]"
            >
              {initials}
            </div>
          ) : (
            <img
              src={`/members/${Image}`}
              alt={Name}
              className="w-full h-full object-cover rounded-t-[10px] border-none"
              onError={() => setImageError(true)}
            />
          )}
        </div>
        <div
          className={`w-full flex justify-center items-center rounded-[10px] mt-2 ${
            hovered ? "absolute" : ""
          }`}
          style={{ height: hovered ? "50%" : "0", transition: "height 0.3s ease-in-out" }}
        >
          <div className="w-full text-center m-auto">
            <h1 className="text-[20px] text-center text-white">{Name}</h1>
            <p className="text-gray-300 text-center">{Position} - {Domain}</p>
            <p className={`text-white text-center ${hovered ? "block" : "hidden"} mt-4`}>{Tagline}</p>
            <div className={`flex justify-evenly items-center mt-4 ${hovered ? "block" : "hidden"}`}>
              <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className="hover:cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;