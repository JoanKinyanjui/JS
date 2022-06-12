import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import './CardObject.css';
import {FaHeart} from 'react-icons/fa';

function CardObject() {
  return (
    <div className='CardObject'> 
        <Card>
    <Image  src='/images/jewellery21.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Meta>
        <span className='date'>Bold Hoops</span>
      </Card.Meta>
      <Card.Description >
        Ksh 500
      </Card.Description>
      <Card.Description className='cart' >
      <a >
        <Icon name='cart' />
        <FaHeart />
        
      </a>
      </Card.Description>
    </Card.Content>
  </Card>
    </div>
  )
}

export default CardObject;