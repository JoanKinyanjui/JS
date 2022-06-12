import React from 'react';
import TopbarAbout from '../About/Topbar-about/TopbarAbout';
import Nav from '../Home/Nav/Nav';
import './Blog.css';



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