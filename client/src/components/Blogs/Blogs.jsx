import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../../styles";
import { blogs } from "../../constants";
import ConsultancyPOP from "../Home page/ConsultancyPOP";
import BlogsCard from "./BlogsCard";

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
        <div className="right-10 absolute text-center font-DMSans md:mt-0">
          <ConsultancyPOP  />
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

export default Blogs;
