import React from 'react'
import EmailSubscribing from '../Home/EmailSubscribing/EmailSubscribing';
import AboutMain from './AboutMain/AboutMain'
import Aboutnav from './Aboutnav/Aboutnav'
import TopbarAbout from './Topbar-about/TopbarAbout'
import Extra from '../About/Extra/Extra';
import Services from './Other Services/Services';
import Testimonials from '../Home/Testimonials/Testimonials';
import Footer from '../Home/Footer/Footer';
import'./About.css'
import Topjewellers from './TopJewellers/Topjewellers';
import Nav from '../Home/Nav/Nav';

function About() {
  return (
    <div>
   <div className='AboutMain-main'>
   {/* <TopbarAbout /> */}
        {/* <Aboutnav />  */}
        <Nav />
<AboutMain />
   </div>
   <Topjewellers />
   <Extra />
   <Services />
   <Testimonials />
<EmailSubscribing />
<Footer />
    </div>
  )
}

export default About