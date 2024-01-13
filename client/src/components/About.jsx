import "./About.css";

const About = () => {
  return (
    <div className='flex flex-col overflow-'>
      <div className='flex items-center justify-center'>
      <div className='p-6 m-10 text-xl border-2 border-slate-500 text-center w-[800px] rounded-[10px]'>
    <h1 id="abouts">Abouts</h1>
    <div id="about-data">
        <p>ProfNITT is the official Finance and Investment club of NIT Trichy. We are a close-knit community of finance enthusiasts from diverse backgrounds who take an interest in finance, stock market, options, and quants to spread the elegance of finance among the student community of NIT Trichy.</p>
        <br />
        <br />
        <p>Being one of the pioneer fintech clubs of the institute, established in 2018, the melange of projects and domains that we, as Profnitt, delve into has always been ever-expanding. With the vision to inculcate healthy and fruitful discussions on markets and the economical state of the world and provides an opportunity to students to get practical experience in the markets.</p>
        <br />
        <br />
        <p>We also take part in competitions, fintech hackathons and symposiums in addition to conducting workshops and events to further the spirit of learning and growth among all.</p>
        <br />
    </div>
</div>

      </div>
      <div className='w-full h-full flex-grow flex justify-center items-center mt-10'>
        <div className='w-[30%] h-full flex justify-center items-center relative'>
          <div className='border-none w-[262.841px] h-[545.354px] bg-[#1C1B2D] box-content flex justify-center items-center rounded-[41.16px]'>
            <div className='p-4 bg-[#23213B] border-none w-[255.846px] h-[538.349px] content-normal rounded-[41.16px]'>
              <img src="/images/Iphone_screen.png" alt="Iphone screen" className='absolute rotate-[4.4deg] mt-[-20px] ml-[-30px]'/>
            </div>
          </div>
        </div>
        <div className='w-[50%] h-full'>
          <h1 className='text-[2.5rem]'>Companies we have worked previously: </h1>
          <div>
            <div className='m-5 flex'>
              <div className='flex justify-center items-center h-full w-[33%]  m-4'>
                <img src="/images/Brain_company.png" alt="Brain Company Logo" className=' h-full'/>
                </div>
                <div className=''>
                  <span className='text-4xl text-[#2389f0]'>Brain</span>
                  <p className='text-sm p-2'>
                    ~Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam dolores, officia sint consequuntur dicta iste qui debitis numquam deserunt corporis in ratione sapiente laboriosam laudantium dolorum omnis eligendi culpa.
                  </p>
                </div>
            </div>

            <div className=' m-5 flex'>
              <div className='flex justify-center items-center h-full w-[33%] m-4'>
                <img src="/images/Brain_company.png" alt="Brain Company Logo" className=' h-full'/>
                </div>
                <div className=''>
                  <span className='text-4xl text-[#2389f0]'>StockGro</span>
                  <p className='text-sm  p-2'>
                    ~Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam dolores, officia sint consequuntur dicta iste qui debitis numquam deserunt corporis in ratione sapiente laboriosam laudantium dolorum omnis eligendi culpa.
                  </p>
                </div>
            </div>

            <div className=' m-5 flex'>
              <div className='flex justify-center items-center h-full w-[33%] m-4'>
                <img src="/images/Brain_company.png" alt="Brain Company Logo" className=' h-full'/>
                </div>
                <div className=''>
                  <span className='text-4xl text-[#2389f0]'>Bizthon</span>
                  <p className='text-sm p-2'>
                    ~Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam dolores, officia sint consequuntur dicta iste qui debitis numquam deserunt corporis in ratione sapiente laboriosam laudantium dolorum omnis eligendi culpa.
                  </p>
                </div>
            </div>

            <div className='m-5 flex'>
              <div className='flex justify-center items-center h-full w-[33%] m-4'>
                <img src="/images/Brain_company.png" alt="Brain Company Logo" className=' h-full'/>
                </div>
                <div className=''>
                  <span className='text-4xl text-[#2389f0]'>BharatX</span>
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