import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact US</h1>
        <p className="p__opensans">9 W 53rd St, New York, Ny 10019, USA</p>
        <p className="p__opensans">+1 234-567-8901</p>
        <p className="p__opensans">+1 345-678-9012</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer logo" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others."
        </p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop: 15}} />
        <div className="app__footer-links_icons">
          <FiFacebook/>
          <FiInstagram/>
          <FiTwitter/>
        </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday -Friday:</p>
        <p className="p__opensans">08:00 AM - 12:00 AM</p>
        <p className="p__opensans">Saturday-Sunday</p>
        <p className="p__opensans">07:00 AM - 11:00 PM</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 Gericht. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
