import { Card } from 'react-bootstrap';
import './Checkout.css';
import React from 'react';
import {Button} from  '@mui/material';
import { FaLocationArrow } from 'react-icons/fa';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { pushOrders } from '../../../app/features/cartSlice';
import { useDispatch } from 'react-redux';

function CheckoutCard() {
  const dispatch =useDispatch();
  const { total ,cartItems} = useSelector((store) => store.cart);
  const taxPrice =total *0.14;
  const totalPrice =total + taxPrice;
  const roundedTotal = totalPrice.toFixed(0)



  const handleOrder=()=>{
  dispatch(pushOrders())
  }
  return (
    <div className='checkoutCard'>
    <Card className='CheckoutCard'>
      <Card.Body>
        <Card.Title>PickUp  location <FaLocationArrow style={{fontSize:'12px' }} /> </Card.Title>
        <Card.Text style={{fontFamily:'System' , fontSize:'12px'}}>
          Pick Up Go Shop <br />
          Along Moi Avenue <br />
          Opposite Bazzarre
        </Card.Text>
        <p>Ksh {roundedTotal}</p>
 <Link style={{textDecoration:'none'}} to='/checkoutSummary'>  
   <Button  style={{ fontSize:'15px',color:'sandybrown' ,textShadow:'1px 1px 1px navajowhite'}} onClick={()=>handleOrder()}>Confirm Order</Button>
</Link>
      </Card.Body>
    </Card>

    </div>
  )
}

export default CheckoutCard;



    