import React from 'react'
import { navItems } from '../Nav/navitems';
import {Link} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
 import './nav.css';

function Nav() {
  return (
    <>
            <div className='Nav'>
      <Navbar className='navbar' fixed='top'>
         
          <ul className='nav-items'>
                    {navItems.map((item,id)=>{
                        return(
            
                  <li key={item.id} ><a className={item.cName} >{item.title}</a></li> 
             
                          
                        )
                        }
                    )}
 
         </ul>
         </Navbar>
         </div>


    </>
  )
}

export default Nav