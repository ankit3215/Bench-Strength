import React from 'react';
import './footer.css';
//import { Button } from '../Button/Button';
import { Link } from 'react-scroll';
import { MdFingerprint } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { GiThreeFriends } from 'react-icons/gi';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        <MdFingerprint className='navbar-icon' />Bench Strength
        </p>
        <p className='footer-subscription-text'>
        Make Your Own Team Of Qualified Developers
        </p>
        {/* <div className='input-areas'>
          <form>
            <input className='footer-input' name='email' type='email' placeholder='Your Email' />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div> */}
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link spy={true} smooth={true} to='why'>Why Choose Us</Link>
            <Link spy={true} smooth={true} to='testimonials'>Testimonials</Link>
            <Link spy={true} smooth={true} to='faq'>FAQs</Link>
      
          </div>
          <div className='footer-link-items'>
            <h2>Bench Strength</h2>
            <Link spy={true} smooth={true} to='hiringsection'>Hire Developers according to your Choice</Link>
            <Link spy={true} smooth={true} to='team'>Teams</Link>
           
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Services</h2>
            <Link spy={true} smooth={true} to='services'>Our Services</Link>
            <Link spy={true} smooth={true} to='hiringprocess'>Hiring Process</Link>
            
          </div>
          <div className='footer-link-items'>
            <h2>Address</h2>
            <Link to='/'>Unit No. 650, 6th Floor,</Link>
            <Link to='/'>Tower A, Spaze iTechPark,</Link>
            <Link to='/'>Sector-49, Sohna Road,</Link>
            <Link to='/'>Gurgaon.</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='banner' spy={true} smooth={true} className='social-logo'>
            <GiThreeFriends className='navbar-icon' />Bench Strength
            </Link>
          </div>
          <small className='website-rights'></small>
          <div className='social-icons'>
            <Link className='social-icon-link' to='/' target='_blank' aria-label='Facebook' >
              <FaFacebook />
            </Link>
            <Link className='social-icon-link' to='/' target='_blank' aria-label='Instagram' >
              <FaInstagram />
            </Link>
            <Link className='social-icon-link' to="/" target='_blank' aria-label='Youtube' >
              <FaYoutube />
            </Link>
            <Link className='social-icon-link' to='/' target='_blank' aria-label='Twitter' >
              <FaTwitter />
            </Link>
            <Link className='social-icon-link' to='/' target='_blank' aria-label='LinkedIn' >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;