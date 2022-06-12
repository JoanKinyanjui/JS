import React from 'react'
import { Link } from 'react-router-dom'

function Checkout() {
  return (
  <>
       <h5 style={{color:'sandybrown',fontFamily:'System'}}>CHECKOUT!!</h5>
  
    <Link to='/cart'>
    <button>back</button>
    </Link>
  </>
    
  )
}

export default Checkout