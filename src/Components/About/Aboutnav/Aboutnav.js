import React from 'react'
import { aboutNavItems } from './Aboutnavitems';
import {Navbar} from 'react-bootstrap';
import {FaAngleDown} from 'react-icons/fa';
 import './Aboutnav.css';
 import {Link} from 'react-router-dom';

 function Aboutnav() {
    return (
        <div className='total-area-about'>
        <div className='Nav-about'>
  <Navbar className='navbar-about fixed' >
     
      <ul className='nav-items'>
                {aboutNavItems.map((item,id)=>{
                    return(
        
             <Link  key={item.id} to={item.path}><li ><a className={item.cName} >{item.title}</a></li> </Link> 
         
                      
                    )
                    }
                )}

     </ul>
     </Navbar>
     </div>


</div>
)
}

export default Aboutnav