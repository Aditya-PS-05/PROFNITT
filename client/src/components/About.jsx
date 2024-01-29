import "./About.css";
import Iphone from "./Iphone";

const About = () => {
  return (
    <div className='flex flex-col border-2 border-red-500 w-full'>
      <div className='flex items-center justify-center w-full'>
        <div className='p-6 m-10 text-xl border-2 border-slate-500 md:w-[800px] sm:w-[90%] text-center rounded-[10px]'>
         
        <h1 className="font-clashDisplay text-5xl font-bold" style={{ color: '#57E2E5' }}>Abouts</h1>

          <div className="mt-6 font-PPSupplyMono font-thin">
            <p>ProfNITT is the official Finance and Investment club of NIT Trichy. We are a close-knit community of finance enthusiasts from diverse backgrounds who take an interest in finance, stock market, options, and quants to spread the elegance of finance among the student community of NIT Trichy.</p>
            <br />
            <p>Being one of the pioneer fintech clubs of the institute, established in 2018, the melange of projects and domains that we, as Profnitt, delve into has always been ever-expanding. With the vision to inculcate healthy and fruitful discussions on markets and the economical state of the world and provides an opportunity to students to get practical experience in the markets.</p>
            <br />
            <p>We also take part in competitions, fintech hackathons and symposiums in addition to conducting workshops and events to further the spirit of learning and growth among all.</p>
            <br />
          </div>
        </div>
      </div>
      <div className='w-full h-full flex-grow flex justify-evenly items-center mt-10 border-red-500 border-2 z-[2000000]'>
        <Iphone />
        <div className='md:w-[50%] sm:w-[80%] h-full border-2 border-red-500'>
          <h1 className='text-[2.5rem] text-center font-clashDisplay ' style={{ color: '#57E2E5' }}>Companies we have worked previously: </h1>
          <div>
            <div className='m-5 flex'>
              <div className='flex justify-center items-center h-full w-[33%] m-4'>
                <img src="/images/Brain_company.png" alt="Brain Company Logo" className=' h-full' />
              </div>
              <div className='font-PPSupplyMono'>
                <span className='text-4xl text-[#2389f0] font-clashDisplay'>Brain</span>
                <p className='text-sm p-2'>
                  ~Lorem ipsum dolor sit amet consectetur adipisicing elit.  dicta iste qui debitis numquam deserunt corporis in ratione sapiente laboriosam laudantium dolorum omnis eligendi culpa.
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About