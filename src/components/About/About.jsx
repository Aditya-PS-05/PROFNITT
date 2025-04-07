import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../../styles";
import { experiences, abouts } from "../../constants";
import { Tilt } from "react-tilt";
import SectionWrapper from "../../hoc/SectionWrapper";

const About = () => {
  return (
    <div className="flex flex-col  w-full z-[1000] relative mt-8">
      <div className="h-[550px] w-[550px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 to-[#010725] absolute bottom-[50%] right-[60%] z-0 shadow-2xl shadow-[#010725] blur-[150px] " />
      <div className="w-[90%] z-[2000000] m-auto">
        <div className="p-4 text-left md:w-[50%] rounded-[10px]">
          <motion.div variants={textVariant()}>
            <h2 className={`${styles.sectionHeadText}`}>About Us.</h2>
            <p className="font-Poppins font-sans font-normal text-base md:text-lg lg:text-xl text-white z-1">Want to know who we are?</p>

              <br />
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="font-Poppins font-sans font-normal text-base md:text-lg lg:text-xl text-white text-left z-10 "
          >
            ProfNITT is the official Finance and Investment club of NIT Tiruchirapalli.
            We are a close-knit community of finance enthusiasts from diverse
            backgrounds who take an interest in finance, stock market, options,
            and quants to spread the elegance of finance among the student
            community of NIT Trichy.
          </motion.p>
        </div>
        <div className="mt-6">
          <div className={`p-4 md:flex gap-[30px]`}>
            {abouts.map((about, index) => (
              <AboutsCard key={index} {...about} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutsCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full mt-6 md:mt-0">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-24 h-24 object-contain" />
          <p className="text-white text-[15px] text-center">
            {title}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default About;
