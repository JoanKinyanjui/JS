import React from 'react';
import ShopLayout from '../ShopLayout/ShopLayout';
import './Categories.css'
import CardObject from '../CardObject/CardObject';

function Categories({changeStyle,style,products,onAdd}) {
  return (<>
  <ShopLayout />
    <div className='Categories'>
<CardObject products={products} onAdd={onAdd} changeStyle={changeStyle} style={style} />
  </div>
  </>
  )
}

export default Categories;