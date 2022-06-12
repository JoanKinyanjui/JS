import React from 'react';
import ShopLayout from '../ShopLayout/ShopLayout';
import './Categories.css'
import CardObject from '../CardObject/CardObject';

function Categories() {
  return (<>
  <ShopLayout />
    <div className='Categories'>
<CardObject />
<CardObject />
<CardObject />
<CardObject />
<CardObject />
  </div>
  </>
  )
}

export default Categories