// import "./About.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { textVariant } from "../../utils/motion";
import { styles } from "../../styles";
import { experiences } from "../../constants";
import SectionWrapper from "../../hoc/SectionWrapper";

const About = () => {
  return (
    <div className="flex flex-col border-2 border-red-500 w-full z-[1000] relative">
      <div className="h-[550px] w-[550px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 to-[#010725] absolute bottom-[50%] right-[60%] z-0 shadow-2xl shadow-[#010725] blur-[150px] border-2 border-red-500" />
      <div className="w-full flex items-center justify-center z-[2000000] border-2 border-red-500">
        <div className="p-6 text-xl border-2 border-slate-500 md:w-[900px] w-full text-center rounded-[10px]">
          <h1 className="font-clashDisplay text-5xl font-bold">Abouts</h1>
          <div className="mt-6 font-PPSupplyMono font-thin ">
            <p>
              ProfNITT is the official Finance and Investment club of NIT
              Trichy. We are a close-knit community of finance enthusiasts from
              diverse backgrounds who take an interest in finance, stock market,
              options, and quants to spread the elegance of finance among the
              student community of NIT Trichy.
            </p>
            <br />
            <p>
              Being one of the pioneer fintech clubs of the institute,
              established in 2018, the melange of projects and domains that we,
              as Profnitt, delve into has always been ever-expanding. With the
              vision to inculcate healthy and fruitful discussions on markets
              and the economical state of the world and provides an opportunity
              to students to get practical experience in the markets.
            </p>
            <br />
            <p className="hidden md:block">
              We also take part in competitions, fintech hackathons and
              symposiums in addition to conducting workshops and events to
              further the spirit of learning and growth among all.
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex-grow flex justify-evenly items-center mt-10 border-red-500 border-2 z-[2000000]">
        <div className="w-full h-full border-2 border-red-500">
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
            {/* <div className='m-5 flex'>
              <div className='flex justify-center items-center h-full w-[33%] m-4'>
                <img src="/images/Brain_company.png" alt="Brain Company Logo" className=' h-full' />
              </div>
              <div className='font-PPSupplyMono'>
                <span className='text-4xl text-[#2389f0] font-clashDisplay'>Brain</span>
                <p className='text-sm p-2'>
                  ~Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam dolores, officia sint consequuntur dicta iste qui debitis numquam deserunt corporis in ratione sapiente laboriosam laudantium dolorum omnis eligendi culpa.
                </p>
              </div>
            </div>

            <div className=' m-5 flex'>
              <div className='flex justify-center items-center h-full w-[33%] m-4'>
                <img src="/images/Brain_company.png" alt="Brain Company Logo" className=' h-full' />
              </div>
              <div className='font-PPSupplyMono'>
                <span className='text-4xl text-[#2389f0]  font-clashDisplay'>StockGro</span>
                <p className='text-sm  p-2'>
                  ~Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam dolores, officia sint consequuntur dicta iste qui debitis numquam deserunt corporis in ratione sapiente laboriosam laudantium dolorum omnis eligendi culpa.
                </p>
              </div>
            </div>

            <div className='m-5 flex'>
              <div className='flex justify-center items-center h-full w-[33%] m-4'>
                <img src="/images/Brain_company.png" alt="Brain Company Logo" className=' h-full' />
              </div>
              <div className='font-PPSupplyMono'>
                <span className='text-4xl text-[#2389f0] font-clashDisplay'>Bizthon</span>
                <p className='text-sm p-2'>
                  ~Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam dolores, officia sint consequuntur dicta iste qui debitis numquam deserunt corporis in ratione sapiente laboriosam laudantium dolorum omnis eligendi culpa.
                </p>
              </div>
            </div>

            <div className='m-5 flex'>
              <div className='flex justify-center items-center h-full w-[33%] m-4'>
                <img src="/images/Brain_company.png" alt="Brain Company Logo" className=' h-full' />
              </div>
              <div className='font-PPSupplyMono'>
                <span className='text-4xl text-[#2389f0] font-clashDisplay'>BharatX</span>
                <p className='text-sm p-2'>
                  ~Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam dolores, officia sint consequuntur dicta iste qui debitis numquam deserunt corporis in ratione sapiente laboriosam laudantium dolorum omnis eligendi culpa.
                </p>
              </div>
            </div> */}
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
      <h3 className="text-white text-[24px] font-bold">{experience.company_name}</h3>
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

export default About;
