import Navbar from "./Home page/Navbar";
import Main from "./Home page/Main";
import About from "./About/About";
import Events from "./Events/Events";
import Blogs from "./Blogs/Blogs";
import Footer from "./footer/Footer";
import Feedbacks from "./Events/Feedbacks";

const Home = () => {
  return (
    <div className='bg-[#010725] text-white m-0 p-0 w-[100vw]'>
      <Navbar  />
      <Main />
      <About />
      {/* <AboutSection /> */}
      <Events />
      <Blogs />
      <Footer />
    </div>
  )
}

export default Home