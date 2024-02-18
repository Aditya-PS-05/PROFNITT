import BlogsCard from './BlogsCard';
import { styles } from "../../styles";
import { blogs } from '../../constants';

const BlogsPage = () => {
  return (
    <div className='text-white w-full border-2 border-red-500'>
      <div className='w-[90%] border-2 border-red-500 m-auto text-center'>
        <h1 className={`${styles.sectionHeadText} m-2 `}>Blogs Page</h1>
        <p className='font-extralight opacity-80 m-2'>Welcome to ProfNITT&apos;s blog page! Here, we share insightful articles, tips, and news about [your industry or niche]. Our aim is to provide valuable information and resources to our readers, helping them stay informed and inspired.</p>
      </div>
      <div className='md:grid grid-cols-3 grid-flow-row items-center m-5 justify-evenly h-[80%] text-white border-2 border-red-500 w-[90%] mx-auto'>
        {blogs.map((blog, index) => (
          <BlogsCard key={index} {...blog} />
        ))}
      </div>
    </div>
  )
}

export default BlogsPage