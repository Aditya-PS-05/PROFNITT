import BlogsCard from './BlogsCard';
import Navbar from '../Home page/Navbar'
import Footer from '../footer/Footer'
import { styles } from "../../styles";
import { blogs } from '../../constants';

const BlogsPage = () => {
  return (
    <div className='text-white w-full '>
      <Navbar />
      <div className='w-[90%]  m-auto text-center'>
        <h1 className={`${styles.sectionHeadText} m-2 `}>Blogs Page</h1>
        <p className='font-extralight opacity-80 m-2 mx-auto w-[80%]'>Welcome to ProfNITT&apos;s blog page! Here, we share insightful articles, tips, and news about [your industry or niche]. Our aim is to provide valuable information and resources to our readers, helping them stay informed and inspired.</p>
      </div>
      <div className='md:grid grid-cols-3 grid-flow-row items-center m-5 justify-evenly h-[80%] text-white w-[90%] mx-auto'>
        {blogs.map((blog, index) => (
          <BlogsCard key={index} {...blog} />
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default BlogsPage