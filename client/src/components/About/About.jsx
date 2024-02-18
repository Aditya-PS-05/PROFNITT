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
        <div className="p-4 text-center border-2 border-gray-500 md:w-[50%] mx-auto rounded-[10px]">
          <motion.div variants={textVariant()}>
            <h2 className={`${styles.sectionHeadText}`}>About Us.</h2>
            <p className="font-Poppins font-sans font-normal text-base md:text-lg lg:text-xl text-white text-center z-10 text-cyan-400">Want to know who we are?</p>

              <br />
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="font-Poppins font-sans font-normal text-base md:text-lg lg:text-xl text-white text-center z-10 "
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
      <div className="w-[90%] h-full mx-auto flex-grow flex justify-evenly items-center mt-10  z-[2000000]">
        <div className="w-full h-full ">
          <div>
            <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>
                Whom We have worked so far?
              </p>
              <h2 className={styles.sectionHeadText}>Previous Companies</h2>
            </motion.div>
            <div className="mt-20 flex flex-col">
              <VerticalTimeline>
                {experiences.map((experience, index) => (
                  <ExperienceCard key={index} experience={experience} />
                ))}
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="object-contain h-10 w-10"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {experience.company_name}
      </h3>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

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
