import React from 'react';
import './Topbar.css';
import {FaSearch} from 'react-icons/fa';
import {FaUser} from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa'
import {FaWeightHanging} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {Badge} from '@mui/material'

function Topbar({cartItem}) {
  return (
    <div className='Topbar'>
      <div className='Topbar-center'>
 
  <h3 className='js-name'><i>Js</i></h3>
        
        <ul className='ul'>
        {/* <li><Link to='/account' className='specific'><FaUser /></Link></li> */}
            <li><Link to='/likes' className='specific'><FaHeart /></Link></li>
            <li><Link to='/cart' className='specific'><Badge badgeContent={cartItem} color='primary' ><FaWeightHanging /></Badge></Link></li>
        </ul>
        <form className='form-search'>
          <FaSearch style={{color:'sandybrown'}} />
            <input className='Topbar-search' name='search' placeholder='search....'/>
        </form>
        </div>
    </div>
  )
}

export default Topbar