import React from 'react';
import './Total.css';
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function Total() {
  return (
    <div className='Total'> 
       <Card className='CardTotal'>
    <Card.Content>
      <Card.Meta>
        <span className='date'>CART SUMMARY</span>
      </Card.Meta>
      <Card.Description >
        SubTotal: Ksh 2000<br />
         </Card.Description>
      
      
      <Link to='/checkout'>
      <Card.Description className='checkout'>
        <a>Checkout</a>
      </Card.Description>
      </Link>
     
    </Card.Content>
  </Card>


    </div>

  )
}

export default Total