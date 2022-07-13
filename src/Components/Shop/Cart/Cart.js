import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Home/Nav/Nav';
import Topbar from '../../Home/TopBar/Topbar';
import CartItem from '../CartItem/CartItem';
import Total from '../Total/Total';
import { Card, Icon, Image } from 'semantic-ui-react'
import { FaAd, FaMinus, FaPlus } from 'react-icons/fa';
import './Cart.css';
import {useContext} from 'react';
import { UserContext } from '../../UserContext';
import { imageListItemBarClasses } from '@mui/material';


function Cart() {
  const{cartItems,onRemove,onAdd,addToCart,cartItem,minusFromCart,removeCart}=useContext(UserContext);
  console.log(cartItems)

  if(cartItems === 0){
    return(
      <>
      <div className='stick'> <br/>
      <Link to="/shop"><button className='back'>Back</button></Link></div>
     <div className='Cart-big'>
    
      <h5 style={{color:'sandybrown',fontFamily:'System'}}>YOUR CART!!</h5>
      <hr />
      <i>The cart Is Empty!!!</i>
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
      <Total cartItems={cartItems}/>
      <hr />
      <div className='Cart'>
     {cartItems?.map((item)=>(
      <div key={item.id} className='CartItem'>
<Card>
    <Image  src={item.thumbnail} wrapped ui={false} />
    <Card.Content>
      <Card.Meta>
        <span className='date'>{item.name}</span>
      </Card.Meta>
      <Card.Description >
        {item.qty} x ksh{item.price}
      </Card.Description>
      <Card.Description className='cart' >
      <a >
     <button   style={{border:'none',backgroundColor:'transparent',}}  onClick={onAdd}>+</button>
     <button   style={{border:'none',backgroundColor:'transparent',}}  onClick={onRemove}>-</button>
      </a>
      </Card.Description>
      <Card.Description className='remove'>
  
      </Card.Description>

    </Card.Content>
  </Card>
 
      </div>
     ))}
    

   
      </div>
      </div>
      </>
    
   )
  }

  
}

export default Cart;