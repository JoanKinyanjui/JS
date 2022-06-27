import React from 'react';
import Nav from '../Home/Nav/Nav';
import { UserContext } from '../UserContext'
import Topbar from '../Home/TopBar/Topbar';
import Categories from './Categories/Categories';
import Footer from '../Home/Footer/Footer';
import {useContext} from 'react';


function Shop() {
  const{cartItem}=useContext(UserContext)
 const {addToCart,changeStyle,style,products}= useContext(UserContext)
  return (
    
    <>
  <Topbar cartItem={cartItem}/>
  <Nav />
  <Categories products={products} addToCart={addToCart} style={style} changeStyle={changeStyle}/>
  <Footer />
 </>

  )
}

export default Shop

// addToCart={addToCart} style={style} changeStyle={changeStyle}