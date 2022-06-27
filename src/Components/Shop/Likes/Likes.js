import React from 'react';
import Nav from '../../Home/Nav/Nav';
import {FaHeart} from 'react-icons/fa';
import { Card, Icon, Image } from 'semantic-ui-react'
import './Likes.css';
import Topbar from '../../Home/TopBar/Topbar';
import {useContext} from 'react';
import { UserContext } from '../../UserContext';

function Likes() {
  const{cartItem,likedItems}=useContext(UserContext);
  if(likedItems <1){
    return(
      <>
      <Topbar cartItem={cartItem} />
      <Nav />
      <h5 style={{color:'sandybrown',fontFamily:'System'}}>Your have 0 Favourites!! <FaHeart /></h5>
      <div  className='Likes'></div></>
    )
  }else{
    return (
      <div>
        <Topbar cartItem={cartItem} />
        <Nav />
        <h5 style={{color:'sandybrown',fontFamily:'System'}}>Your Favourites!! <FaHeart /></h5>
        <div  className='Likes'>
        <Card className='Card'>
      <Image  src='/images/jewellery21.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Meta>
          <span className='date'>Bold Hoops</span>
        </Card.Meta>
        <Card.Description >
          Ksh 500
        </Card.Description>
      </Card.Content>
    </Card>
    
        </div>
  
    </div>
    )
  }
  
}

export default Likes