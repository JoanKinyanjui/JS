import React from 'react';
import './CartItem.css';
import { Card, Icon, Image } from 'semantic-ui-react'

function CartItem() {
  return (
    <div className='CartItem'>

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
      <Icon name='user' />
        <Icon name='cart' />
      </a>
      </Card.Description>
      <Card.Description className='remove'>
      <a>Remove</a>
      </Card.Description>

    </Card.Content>
  </Card>
    </div>
  )
}

export default CartItem