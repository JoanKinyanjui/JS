import React from 'react';
import Nav from '../../Home/Nav/Nav';
import Topbar from '../../Home/TopBar/Topbar';
import CardObject from '../CardObject/CardObject';
import {FaHeart} from 'react-icons/fa'
import './Likes.css';
import { Link } from 'react-router-dom';

function Likes() {
  return (
    <div>
      <Topbar />
      <Nav />
      <h5 style={{color:'sandybrown',fontFamily:'System'}}>Your Favourites!! <FaHeart /></h5>
      <div  className='Likes'>
      <CardObject />
      <CardObject />
      </div>

  </div>
  )
}

export default Likes