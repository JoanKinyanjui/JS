import React from 'react'
import { Link } from 'react-router-dom';
import Topbar from '../../Home/TopBar/Topbar';
import CheckoutCard from './checkoutCard';

function Checkout() {
  return (
  <>
    <Topbar />
    <h5 style={{color:'sandybrown',fontFamily:'System',marginBottom:'2rem', marginTop:'3rem'}}>CHECKOUT!!</h5>
  
  
    <CheckoutCard />
 
    <Link to="/shop"><button style={{fontFamily:'System',marginBottom:'2rem', marginTop:'4rem'}}className='back'>Back</button></Link>
  </>
    
  )
}

export default Checkout