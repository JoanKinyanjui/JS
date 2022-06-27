import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Home/Nav/Nav';
import Topbar from '../../Home/TopBar/Topbar';
import CartItem from '../CartItem/CartItem';
import Total from '../Total/Total';
import './Cart.css';
import {useContext} from 'react';
import { UserContext } from '../../UserContext';


function Cart() {
  const{addToCart,cartItem,minusFromCart,removeCart}=useContext(UserContext)
  console.log(cartItem)
  if(cartItem<1){
    return(
      <>
      <div className='stick'> <br/>
      <Link to="/shop"><button className='back'>Back</button></Link></div>
     <div className='Cart-big'>
    
      <h5 style={{color:'sandybrown',fontFamily:'System'}}>YOUR CART!!</h5>
      <Total amount='0.00'/>
      <hr />
      <i>The cart Is Empty</i>
      </div>
      </>
    )
  }else{
   
    return (
      <>
      <div className='stick'> <br/>
      <Link to="/shop"><button className='back'>Back</button></Link></div>
     <div className='Cart-big'>
    
      <h5 style={{color:'sandybrown',fontFamily:'System'}}>YOUR CART!!</h5>
      <Total />
      <hr />
      <div className='Cart'>
     
    <CartItem addToCart={addToCart} minusFromCart={minusFromCart} removeCart={removeCart}/>
    <CartItem addToCart={addToCart} minusFromCart={minusFromCart} removeCart={removeCart}/>
   
      </div>
      </div>
      </>
    
   )
  }

  
}

export default Cart;