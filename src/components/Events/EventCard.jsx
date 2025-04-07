import React from 'react'

import { motion } from "framer-motion";


const EventsCard = ({  title,  description }) => {
    return (
      <div className="xs:w-[250px] w-full mt-6 md:mt-0 border-2 border-red-500">
        <motion.div
          
          className="h-[501px] md:w-[301px] sm:w-[70%] xs:w-[25%] green-pink-gradient p-[1px] rounded-[40px] shadow-card m-auto flex justify-center items-center"
        >
          <div className="h-[500px] md:w-[300px] sm:w-[70%] xs:w-[25%] box-content bg-[#010D50] rounded-[40px]">
                      
            <div className="bg-[#010D50] h-[35%] rounded m-2 border-b-2 border-[#0328EE]">
              <div className="h-[80%] mt-5 m-1">
                <h1 className="text-[20px]">{title}</h1>
                <img src="" alt="" />
                <p className="text-[13px] font-light mt-6">{description}</p>
              </div>
            </div>
            
          </div>
        </motion.div>
     </div>
    );
  };

export default EventsCard
