import { Link } from "react-router-dom";
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
          <Link to="/blogs">
            <button
              className="bg-[#0328EE] border-none p-2 rounded-[35px] font-[400]"
            >
              View All Blogs
            </button>
          </Link>
        </div>
      </div>
      <div className="md:flex items-center m-5 justify-evenly h-[80%]">
        {blogs.slice(0,3).map((blog, index) => (
          <BlogsCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
