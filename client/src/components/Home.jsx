import Navbar from "./Home page/Navbar";
import Main from "./Home page/Main";
import About from "./About";
import Events from "./Events";
import Blogs from "./Blogs";
import Footer from "./Footer";


const Home = () => {
  return (
    <div className='bg-[#010725] text-white m-0 p-0 w-[100vw]'>
      <Navbar  />
      <Main />
      <About />
      <Events />
      <Blogs />
      <Footer />
    </div>
  )
}

export default Home