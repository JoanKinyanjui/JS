import { Card } from 'react-bootstrap';
import React from 'react';
import {Button} from  '@mui/material';
import { FaLocationArrow } from 'react-icons/fa';
import {Link} from 'react-router-dom';

function CheckoutCard() {
  return (
    <div style={{margin:'auto', textAlign:'center',width:'100vw'}}>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>PickUp  location <FaLocationArrow style={{fontSize:'12px' }} /> </Card.Title>
        <Card.Text style={{fontFamily:'System' , fontSize:'12px'}}>
          Pick Up Go Shop <br />
          Along Moi Avenue <br />
          Opposite Bazzarre
        </Card.Text>
        <p>Ksh 0.00</p>
 <Link style={{textDecoration:'none'}} to='/checkoutSummary'>  
   <Button  style={{ fontSize:'15px',color:'sandybrown' ,textShadow:'1px 1px 1px navajowhite'}}>Confirm Order</Button>
</Link>
      </Card.Body>
    </Card>

    </div>
  )
}

export default CheckoutCard;



    