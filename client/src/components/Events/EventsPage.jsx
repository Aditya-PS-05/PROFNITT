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
    <div >
      <div className="Navbar">
        <Navbar/> 
      </div>
      <div style={{ backgroundColor: '#010725', paddingTop: '105px' }}>
      <div className="centered-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 105px)', backgroundColor: '#010725' }}>
        <div className="boundary p-6 text-xl border-none md:max-w-[600px] sm:max-w-[90%] text-center rounded-[10px]" style={{ backgroundColor: '#010725', color: '#010725', marginTop: '-10px', height: boundaryHeight }}>
          <div className="heading" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: '2.6rem', color: '#57E2E5', textAlign: 'center', marginBottom: '20px' }}>
            Workshops and Events
          </div>

          <div id="boundary-content" className="info" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '1.5rem', color: '#FFFCF9', textAlign: 'center', marginTop: '25px' }}>
            Profnitt firmly believes that besides all the work we do as a team to learn finance and stock market, it is highly necessary to give back to the community.
            <br/><br/>
            We organize several workshops and events every year with the vision to make newcomers feel welcome and not alien to the field of Finance. We aim at hosting events that serve as platforms for networking, skill-building and creating a supportive community of aspiring finance professionals.   
            <br />
            <br />
            Some of our most significant workshops and events include: Alphathon, InHoTTs, Guest Lectures and IPL Mania and many more. 
          </div>
        </div>
      </div>
      <div className="workshops" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: '2.6rem', color: '#57E2E5', textAlign: 'center', marginBottom: '20px' }}>
        Workshops
        <div className="boxes-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '25px', flexWrap: 'wrap' }}>
          <div className="workshop-box" style={{ backgroundColor: '#010725', padding: '20px', margin: '10px', borderRadius: '10px', maxWidth: '600px', flex: '1 1 100%' }}>
            <h3 style={{ color: '#2389f0' }}>Brain Alphathon</h3>
            
            <img src="/images/Events/worldQuant.png" alt="Workshop 1" style={{ maxWidth: '100%', height: 'auto' }} />
           
            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '1.3rem', color: '#FFFCF9', zIndex: 11, textAlign: 'center' }}>ProfNITT presented the WorldQuant BRAIN Alphathon—a dynamic journey into quantitative finance. The workshop was led by industry experts Yash Zanwar and Aditya Chaturvedi. </p>
          </div>
          <div className="workshop-box" style={{ backgroundColor: '#010725', padding: '20px', margin: '10px', borderRadius: '10px', maxWidth: '600px', flex: '1 1 100%' }}>
            <h3 style={{ color: '#2389f0' }}> Money+Money</h3>
            
            <img src="/images/Events/money.jpg" alt="Workshop 2" style={{ maxWidth: '100%', height: 'auto' }} />
            

            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '1.3rem', color: '#FFFCF9', zIndex: 11, textAlign: 'center' }}>The workshop titled 'Money+Money=Big Money' was conducted by club members, offering insights into the Indian Stock Market. Participants delved into technical and fundamental analysis, learning to identify ideal stocks for their portfolios. </p>
          </div>
        </div>
      </div>
      <div className="Competitions"></div>
      <Footer />
      </div>
    
    </div>
  );
}

export default EventsPage;
