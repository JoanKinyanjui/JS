import React from 'react';
import Nav from '../Home/Nav/Nav';
import { UserContext } from '../UserContext'
import Topbar from '../Home/TopBar/Topbar';
import Categories from './Categories/Categories';
import Footer from '../Home/Footer/Footer';
import {useContext} from 'react';


function Shop() {
 const {changeStyle,style,products,cartItems,onAdd}= useContext(UserContext)
  return (
    
    <>
  <Topbar cartItemsNo={cartItems.length}/>
  <Nav />
  <Categories products={products} onAdd={onAdd} style={style} changeStyle={changeStyle}/>
  <Footer />
 </>

  )
}

export default Shop

// addToCart={addToCart} style={style} changeStyle={changeStyle}