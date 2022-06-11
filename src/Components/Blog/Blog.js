import React from 'react'
import Aboutnav from '../About/Aboutnav/Aboutnav';
import TopbarAbout from '../About/Topbar-about/TopbarAbout';
import Nav from '../Home/Nav/Nav';
import Topbar from '../Home/TopBar/Topbar';
import './Blog.css';
import BlogContent from './BlogContent';



function Blog() {
  return (
    <div className='Blog'>

        <div className='first-image'>
{/* <img className='first-actual-image' src='/Images/unsplash2.jpg' /> */}
</div>

<div className='first-title'>
<TopbarAbout />
  <Nav />
 
<hr/>
</div>


    </div>

    
    
    
  )
}

export default Blog