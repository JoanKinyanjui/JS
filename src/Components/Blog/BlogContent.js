import React from 'react'
import { Link } from 'react-router-dom';
import './BlogContent.css';
import Container2 from './Container2';
import Posts from './Posts';
import Topbar from './Topbar/Topbar';

function BlogContent() {
  return (<>
    <div className='Blog-content'>
       <a to='/Single'>  <div className='Container1'>
              <Posts />           
              <Posts />
        </div></a>
<div className='BlogContent Container2'>
<Container2 />
</div>

       

        </div>
        </>
  )
}

export default BlogContent;



