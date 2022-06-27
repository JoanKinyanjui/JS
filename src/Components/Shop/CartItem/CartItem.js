import React from 'react';
import './CartItem.css';
import { Card, Icon, Image } from 'semantic-ui-react'
import { FaAd, FaMinus, FaPlus } from 'react-icons/fa';

function CartItem({addToCart,minusFromCart,removeCart}) {
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
     <button   style={{border:'none',backgroundColor:'transparent',}}  onClick={minusFromCart}> <FaMinus name='minus' /></button>
       <button style={{border:'none',backgroundColor:'transparent',}} onClick={addToCart}> <FaPlus name='add' /></button>
      </a>
      </Card.Description>
      <Card.Description className='remove'>
     <button   style={{border:'none',backgroundColor:'transparent',}}  onClick={removeCart}> <a>Remove</a></button>
      </Card.Description>

    </Card.Content>
  </Card>
    </div>
  )
}

export default CartItem