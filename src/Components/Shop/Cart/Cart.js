import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Home/Nav/Nav';
import Topbar from '../../Home/TopBar/Topbar';
import CartItem from '../CartItem/CartItem';
import Total from '../Total/Total';
import './Cart.css';


function Cart() {
  return (
   <div className='Cart-big'>
  
    <h5 style={{color:'sandybrown',fontFamily:'System'}}>YOUR CART!!</h5>
    <Total />
    <hr />
    <div className='Cart'>
   
  <CartItem />
  <CartItem />
 
    </div>
  
  

    <br/>
    <Link to="/shop"><button className='back'>Back</button></Link>
    </div>
  )
}

export default Cart