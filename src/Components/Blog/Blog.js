import React from 'react'
import Aboutnav from '../About/Aboutnav/Aboutnav';
import Nav from '../Home/Nav/Nav';
import './Blog.css';
import BlogContent from './BlogContent';


function Blog() {
  return (
    <div className='Blog'>
      
      <div className='second-title'>

<ul>
                <li>Life</li>
                <li>Style</li>
                <li>Travel</li>
            </ul>
</div>

        <div className='first-image'>
{/* <img className='first-actual-image' src='/Images/unsplash2.jpg' /> */}
</div>

<div className='first-title'>
  <Aboutnav />
 
<hr/>
</div>


    </div>

    
    
    
  )
}

export default Blog