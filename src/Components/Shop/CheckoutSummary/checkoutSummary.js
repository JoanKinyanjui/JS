import React from 'react';
import {Button} from  '@mui/material';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

function CheckoutSummary() {
    const { total } = useSelector((store) => store.cart);
    const taxPrice =total *0.14;
    const totalPrice =total + taxPrice;
  return (
    <div>
        <h4  style={{ fontSize:'18px',color:'sandybrown' , marginTop:'3rem',marginBottom:'2rem'}}>CHECKOUT SUMMARY</h4> 
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>TOTAL : {totalPrice}</Card.Title>
        <Card.Text style={{fontFamily:'System' , fontSize:'12px'}}>
          PAY VIA MPESA <br />
          <form>
            <input placeholder='Phone no...' />
            <input  placeholder='amount...'/>
          </form>
        </Card.Text>
        <Button  style={{ fontSize:'15px',color:'sandybrown' ,textShadow:'1px 1px 1px navajowhite'}}>PAY Amount</Button>
      </Card.Body>
    </Card>

    <Link to="/checkout"><button style={{fontFamily:'System',marginBottom:'2rem', marginTop:'4rem'}}className='back'>Back</button></Link>
    </div>
  )
}

export default CheckoutSummary;