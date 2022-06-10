import React from 'react';
import './Topbar.css';
import {FaSearch} from 'react-icons/fa';
import {FaUser} from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa'
import {FaWeightHanging} from 'react-icons/fa'

function Topbar() {
  return (
    <div className='Topbar'>
      <div className='Topbar-center'>
 
  <h3 className='js-name'><i>J s</i></h3>
        
        <ul className='ul'>
            <li><FaUser /></li>
            <li><FaHeart /></li>
            <li><FaWeightHanging /></li>
            
        </ul>
        <form className='form-search'>
          <FaSearch style={{color:'black'}} />
            <input className='Topbar-search' name='search' placeholder='search....'/>
        </form>
        </div>
    </div>
  )
}

export default Topbar