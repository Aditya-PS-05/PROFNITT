import React from 'react';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter,faGithub,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


const Footer = () => {
  return (
    <div className='w-screen flex justify-center items-center mt-10'>
      <div className='w-[100%] bg-[#010D50] md:px-16 md:py-7'>
        <div className='md:flex justify-center items-center w-full'>
          <div className='w-[40%] flex justify-center items-center flex-col'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/images/logo.png" alt="ProfNITT Logo" className='h-[90px]' style={{ marginTop: '-20px', marginRight: '15px' }} />
              <div>
                <br />
                <h1 className='text-[1vmax] font-DMSans font-bold' style={{ padding: 0, fontSize: '20px', fontFamily: 'Poppins, sans-serif' }}>The Finance and</h1>
                <h1 className='text-[1vmax] font-DMSans font-bold' style={{ padding: 0, fontSize: '20px', fontFamily: 'Poppins, sans-serif' }}> Investment Club</h1>
              </div>
            </div>
            <div className='font-ppSupplyMono' style={{ color: '#57E2E5', padding: 0, fontSize: '20px', fontFamily: 'Poppins, sans-serif', marginTop: '10px', marginLeft: '-250px' }}>Follow Us</div> {/* Adjusted margin-left */}
            <div className='flex gap-5 mt-5' style={{ marginLeft: '-100px', marginTop : '8px' }}>
    <div><a href="https://github.com/profnitt-club" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a></div>
    <div><a href="https://www.linkedin.com/company/profnitt/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></div>
    <div><a href="https://www.instagram.com/profnitt?igsh=bTd0ZW1oMGQyeHA3" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></div>
    <div><a href="https://www.facebook.com/profnitt?mibextid=ZbWKwL" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></div>
    <div><a href="https://x.com/profnitt?t=qddKAMdy2WCt18bAuiMT3g&s=09" target="_blank"><FontAwesomeIcon icon={faXTwitter} size="2x" /></a></div>
</div>

          </div>
          <div className='w-[50%]'>
            <div style={{ marginLeft: '280px' }}> {/* Adjusted margin-left */}
              <h1 style={{ padding: 0, fontSize: '35px', fontFamily: 'Poppins, sans-serif' }}> <b>Contact Information</b></h1>
              
              <p style={{ display: 'flex', alignItems: 'center' }}>
  <FontAwesomeIcon icon={faLocationDot} size="1x" style={{ marginRight: '5px' }} />
  <span style={{ marginLeft: '5px', fontSize: '20px' }}>  NIT Trichy </span>
</p>
<p style={{ display: 'flex', alignItems: 'center' }}>
  <FontAwesomeIcon icon={faPhone} size="1x" style={{ marginRight: '5px' }} />
  <span style={{ marginLeft: '5px', fontSize: '20px' }}> +91 8220533117 </span>
</p>
<p style={{ display: 'flex', alignItems: 'center' }}>
  <FontAwesomeIcon icon={faEnvelope} size="1x" style={{ marginRight: '5px' }} />
  <span style={{ marginLeft: '5px', fontSize: '20px' }}> profnitt.club@gmail.com </span>
</p>

            </div>
          </div>
        </div>
        <br style={{ borderTop: '2px solid #000', margin: '20px 0', display: 'block' }} />
        <hr />
        <div className='text-center mt-6'>
        <h1 className='font-DMSans' style={{ color: '#57E2E5', padding: 0, fontSize: '20px', fontFamily: 'Poppins, sans-serif' }}>
  Designed and Deployed by <a href="https://www.linkedin.com/in/riya-gupta-rg3010" target="_blank">Riya</a> & <a href="https://www.linkedin.com/in/aditya-pratap-singh-952a8820a/" target="_blank">Aditya</a>
</h1>


        </div>
      </div>
    </div>
  );
}

export default Footer;
