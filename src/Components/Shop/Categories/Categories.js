import React from 'react';
import ShopLayout from '../ShopLayout/ShopLayout';
import './Categories.css'
import CardObject from '../CardObject/CardObject';

function Categories({addToCart,changeStyle,style,products}) {
  return (<>
  <ShopLayout />
    <div className='Categories'>
<CardObject products={products} addToCart={addToCart} changeStyle={changeStyle} style={style} />
  </div>
  </>
  )
}

export default Categories;