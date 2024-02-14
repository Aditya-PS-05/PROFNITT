import { useState, useEffect } from 'react';
import Navbar from '../Home page/Navbar.jsx';
import Footer from '../footer/Footer.jsx';

const EventsPage = () => {
  const [boundaryHeight, setBoundaryHeight] = useState('auto');

  useEffect(() => {
    const boundaryContent = document.getElementById('boundary-content');
    if (boundaryContent) {
      const contentHeight = boundaryContent.clientHeight;
      // Add some extra space to avoid overflow
      setBoundaryHeight(contentHeight + 100 + 'px');
    }
  }, []);

  return (
    <div className='relative z-[1000000]'>
      {/* <div className="Navbar"> */}
        <Navbar/> 
      {/* </div> */}
      <div className='h-[550px] w-[550px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 to-[#010725] absolute top-[5%] left-[20%] z-0 shadow-2xl shadow-[#010725] blur-[150px] border-2 border-red-500' />
      <div style={{ backgroundColor: '#010725', paddingTop: '105px' }} className='border-2 border-green-500'>
      <div className="centered-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 105px)', backgroundColor: '#010725' }}>
        <div className="boundary p-6 text-xl border-none md:max-w-[600px] sm:max-w-[90%] text-center rounded-[10px]" style={{ backgroundColor: '#010725', color: '#010725', marginTop: '-10px', height: boundaryHeight }}>
          <div className="heading " style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: '2.6rem', color: '#57E2E5', textAlign: 'center', marginBottom: '20px' }}>
            Workshops and Events
          </div>

          <div id="boundary-content" className="" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '1.5rem', color: '#FFFCF9', textAlign: 'center', marginTop: '25px' }} >
            Profnitt firmly believes that besides all the work we do as a team to learn finance and stock market, it is highly necessary to give back to the community.
            <br/>
            <br/>
            We organize several workshops and events every year with the vision to make newcomers feel welcome and not alien to the field of Finance. We aim at hosting events that serve as platforms for networking, skill-building and creating a supportive community of aspiring finance professionals.   
            <br />
            <br />
            Some of our most significant workshops and events include: Alphathon, InHoTTs, Guest Lectures and IPL Mania and many more. 
          </div>
        </div>
      </div>
      <div className="workshops" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: '2.6rem', color: '#57E2E5', textAlign: 'center', marginTop: '0px', }}>
        Workshops
        <div className="boxes-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '0px', flexWrap: 'wrap', paddingTop: '0px' }}>
          <div className="workshop-box" style={{ backgroundColor: '#010725', padding: '20px', paddingTop: '0px',marginTop:'0', margin: '10px', borderRadius: '10px', maxWidth: '600px', flex: '1 1 100%' }}>
            <h3 style={{ color: '#2389f0' }}>Brain Alphathon</h3>
            
            <img src="/images/Events/worldQuant.png" alt="Workshop 1" style={{ maxWidth: '80%', marginLeft:'73px',  height: '80%',padding: '20px' }} />
           
            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '1.3rem', color: '#FFFCF9', zIndex: 11, textAlign: 'center' }}>ProfNITT presented the WorldQuant BRAIN Alphathon—a dynamic journey into quantitative finance. The workshop was led by industry experts Yash Zanwar and Aditya Chaturvedi. </p>
          </div>
          <div className="workshop-box" style={{ backgroundColor: '#010725', padding: '20px', paddingTop: '0px',marginTop:'0',margin: '10px', borderRadius: '10px', maxWidth: '600px', flex: '1 1 100%' }}>
            <h3 style={{ color: '#2389f0' }}> Big Money</h3>
            
            <img src="/images/Events/money.jpg" alt="Workshop 2" style={{ maxWidth: '76%', marginLeft:'73px', height: '70%',padding: '20px' }} />
            
            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '1.3rem', color: '#FFFCF9', zIndex: 11, textAlign: 'center' }}>The workshop titled &apos;Money+Money=Big Money&apos; was conducted by club members, offering insights into the Indian Stock Market. Participants delved into technical and fundamental analysis, learning to identify ideal stocks for their portfolios. </p>
          </div>
        </div>
      </div>
      <div className="Competitions"
      style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: '2.6rem', color: '#57E2E5', textAlign: 'center', marginBottom: '20px' }} >
        Competitions
        <div className="boxes-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '25px', flexWrap: 'wrap' }} >
        <div className="competition-box" style={{ backgroundColor: '#010725', padding: '20px',paddingTop: '0px',marginTop:'0', margin: '10px', borderRadius: '10px', maxWidth: '600px', flex: '1 1 100%' }}>
            <h3 style={{ color: '#2389f0' }}>FinHunt!</h3>
            
            <img src="/images/Events/finhunt.png" alt="Competition 1" style={{ maxWidth: '100%', height: 'auto', padding: '20px' }} />
           
            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '1.3rem', color: '#FFFCF9', zIndex: 11, textAlign: 'center' }}>The event promised an adrenaline rush, requiring participants to don their suits and engage their thinking caps for an exciting and challenging experience. The hunt led participants on an enthralling journey towards a treasure chest filled with exciting prizes. FinHunt was a memorable event that combined finance knowledge with thrill and excitement. </p>
          </div>
          <div className="competition-box" style={{ backgroundColor: '#010725', padding: '20px',paddingTop: '0px',marginTop:'0', margin: '10px', borderRadius: '10px', maxWidth: '600px', flex: '1 1 100%' }}>
            <h3 style={{ color: '#2389f0' }}>BizQuiz - MingOut</h3>
            
            <img src="/images/Events/mingout.jpeg" alt="Competition 2" style={{ maxWidth: '87%',padding: '20px', marginLeft:'40px', height: 'auto' }} />
           
            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '1.3rem', color: '#FFFCF9', zIndex: 11, textAlign: 'center' }}>The Watanabe BizQuiz Fest, powered by Mingout, offered an incredible opportunity for participants to win ₹20,000 directly. Enthusiasts were encouraged to don their suits and thinking hats, immersing themselves in the captivating world of business, personal finance, trading, and the stock market through the quiz. </p>
          </div>
          <div className="competition-box" style={{ backgroundColor: '#010725', padding: '20px', paddingTop: '0px',marginTop:'0',margin: '10px', borderRadius: '10px', maxWidth: '600px', flex: '1 1 100%' }}>
            <h3 style={{ color: '#2389f0' }}>IPL-Mania</h3>
            
            <img src="/images/Events/ipl.jpg" alt="Competition 3" style={{ maxWidth: '96%',padding: '20px', height: 'auto' }} />
           
            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '1.3rem', color: '#FFFCF9', zIndex: 11, textAlign: 'center' }}>The challenge offered an opportunity to test cricket knowledge and strategy while providing a chance to win exciting prizes. Essentially, it was an In-House Dream11, allowing enthusiasts to showcase their cricket expertise in a thrilling and rewarding competition. </p>
          </div>
          <div className="competition-box" style={{ backgroundColor: '#010725', padding: '20px', margin: '10px', paddingTop: '11px',marginTop:'0',borderRadius: '10px', maxWidth: '600px', flex: '1 1 100%' }}>
            <h3 style={{ color: '#2389f0' }}>DecisionQuest </h3>
            
            <img src="/images/Events/qst.png" alt="Competition 4" style={{ maxWidth: '100%',padding: '20px', height: 'auto' }} />
           
            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '1.3rem', color: '#FFFCF9', zIndex: 11, textAlign: 'center' }}>Participants were challenged to make financial decisions mirroring the choices people face throughout their lifetime. Each decision was associated with a specific age or life stage, and participants had to weigh the benefits and consequences of their choices.</p>
          </div>
          <div className="competition-box" style={{ backgroundColor: '#010725', padding: '20px', margin: '10px',paddingTop: '0px',marginTop:'0', borderRadius: '10px', maxWidth: '600px', flex: '1 1 100%' }}>
            <h3 style={{ color: '#2389f0' }}>Trading Championship </h3>
            
            <img src="/images/Events/insights.png" alt="Competition 5" style={{ maxWidth: '90%', padding: '20px',height: 'auto', marginLeft:  '32px' }} />
           
            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '1.3rem', color: '#FFFCF9', zIndex: 11, textAlign: 'center' }}>Trading competition in collaboration with StockGro, providing students with an opportunity to trade in a real live Indian stock market simulation.</p>
          </div>
        </div>
        <div className="GuestLecture" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: '2.6rem', color: '#57E2E5', textAlign: 'center', marginBottom: '20px' }}>
        Guest Lectures
        <div className="boxes-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '25px', flexWrap: 'wrap' }}>
          <div className="gl-box" style={{ backgroundColor: '#010725', padding: '20px',paddingTop: '0px',marginTop:'0', margin: '10px', borderRadius: '10px', maxWidth: '600px', flex: '1 1 100%' }}>
            <h3 style={{ color: '#2389f0' }}>Careers in Finance</h3>
            
            <img src="/images/Events/cif.png" alt="GL 1" style={{ maxWidth: '100%', padding: '20px',height: 'auto', marginLeft:'36px' }} />
           
            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '1.3rem', color: '#FFFCF9', zIndex: 11, textAlign: 'center' }}>If you were uncertain about your career path in Finance and sought insights into opportunities, you shouldn&apos;t have missed the exclusive Guest Lecture by ProfNITT in collaboration with FinSchool. The session delved into three pivotal roles in the Finance sector : Financial Management, Equity Research, and Investment Banking. </p>
          </div>
          <div className="gl-box" style={{ backgroundColor: '#010725', padding: '20px', margin: '10px',paddingTop: '11px',marginTop:'0', borderRadius: '10px', maxWidth: '600px', flex: '1 1 100%' }}>
            <h3 style={{ color: '#2389f0' }}> ProfNITT x Toastmasters </h3>
            
            <img src="/images/Events/tif.png" alt="GL 2" style={{ maxWidth: '91%',padding: '20px', height: 'auto', marginLeft:'28px' }} />
            

            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '1.3rem', color: '#FFFCF9', zIndex: 11, textAlign: 'center' }}>ProfNITT, in collaboration with Toastmasters International, hosted a captivating guest lecture by DTM Ra. Ma. Palaniappan. The session was crafted to offer valuable insights into effective money management and making informed investment decisions. </p>
          </div>
          <div className="gl-box" style={{ backgroundColor: '#010725', padding: '20px', margin: '10px',paddingTop: '0px',marginTop:'0', borderRadius: '10px', maxWidth: '600px', flex: '1 1 100%' }}>
            <h3 style={{ color: '#2389f0' }}> ProfNITT x Wagmi </h3>
            
            <img src="/images/Events/wgi.png" alt="GL 3" style={{ maxWidth: '69%', padding: '20px',height: 'auto', marginLeft:'90px', marginTop:'0px' }} />
            

            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '1.3rem', color: '#FFFCF9', zIndex: 11, textAlign: 'center' }}>In a thought-provoking webinar hosted by ProfNITT and Wagmi, students seized the opportunity to delve into the dynamic realm of Web 3.0. Renowned guest speaker, Pankaj Gautam—an IIT Gandhinagar graduate and the current Head of Product at Mudrex—shared his expertise. </p>
          </div>
          <div className="gl-box" style={{ backgroundColor: '#010725', padding: '20px', margin: '10px', paddingTop: '0px',marginTop:'0',borderRadius: '10px', maxWidth: '600px', flex: '1 1 100%' }}>
            <h3 style={{ color: '#2389f0' }}> Insights &apos;22 </h3>
            
            <img src="/images/Events/bnpl.png" alt="GL 4" style={{ maxWidth: '90%',padding: '20px', height: 'auto', marginLeft:'25px', marginTop:'5px'}} />
            

            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '1.3rem', color: '#FFFCF9', zIndex: 11, textAlign: 'center' }}>In a panel discussion, we delved into the debate between BNPL (Buy Now, Pay Later) and SNPL (Save Now, Purchase Later). The discussion explored many individuals&apos; dilemma: whether to save money for future purchases or opt for the convenience of buying now and paying later. </p>
          </div>
        </div>
      </div>
      </div>
      <Footer />
      </div>
    
    </div>
  );
}

export default EventsPage;
