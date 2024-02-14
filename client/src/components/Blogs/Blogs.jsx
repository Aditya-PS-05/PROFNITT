import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../../styles";
import SectionWrapper from "../../hoc/SectionWrapper";
import { Link } from "react-router-dom";
import { blogs } from "../../constants";

const Blogs = () => {
  return (
    <div className="w-screen mt-10">
      <div className="md:flex justify-between items-center">
        <h1
          className="text-[50px] md:ml-[100px] font-clashDisplay"
          style={{ color: "#57E2E5" }}
        >
          Browse our latest articles
        </h1>
        <div className="right-10 absolute text-center font-DMSans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque
          orci amet, amet .
        </div>
      </div>
      <div className="md:flex items-center m-5 justify-evenly h-[80%]">
        {blogs.map((blog, index) => (
          <BlogsCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

const BlogsCard = ({ index, title, icon, link, description, member, date }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="h-[501px] md:w-[301px] sm:w-[70%] xs:w-[25%] green-pink-gradient p-[1px] rounded-[40px] shadow-card m-auto flex justify-center items-center"
      >
        <div className="h-[500px] md:w-[300px] sm:w-[70%] xs:w-[25%] box-content bg-[#010D50] rounded-[40px]">
          <a href={link}>
            <div className="h-[40%] w-full bg-[#C4C4C4] rounded-t-[40px]"></div>
          </a>

          <div className="rounded-[40px] flex items-center justify-center bg-[#0328EE] text-md w-[109px] p-2 absolute mt-[-20px] text-center ml-[20px] cursor-pointer">
            Full Blog
          </div>
          <div className="bg-[#010D50] h-[35%] rounded m-2 border-b-2 border-[#0328EE]">
            <div className="h-[80%] mt-5 m-1">
              <h1 className="text-[20px]">{title}</h1>
              <p className="text-[13px] font-light mt-6">{description}</p>
            </div>
          </div>
          <div className="h-[15%] flex pl-3">
            <div className="bg-[#C4C4C4] rounded-[50%] h-[70px] w-[70px]"></div>
            <div className="ml-5 flex flex-col justify-center">
              <h1 className="text-[14px]">{member}</h1>
              <p>{date}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default Blogs;
