import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import './CardObject.css';
import {FaHeart} from 'react-icons/fa';

function CardObject({onAdd,changeStyle,style,products}) {
  return (
    <div className='CardObject'> 
    {products.map((product,index)=>(
 <Card key={product.id} className='Card'>
 <Image  src={product.thumbnail}  wrapped ui={false} />
 <Card.Content>
   <Card.Meta>
     <span className='date'>{product.name}</span>
   </Card.Meta>
   <Card.Description >
    ksh {product.price}
   </Card.Description>
   <Card.Description className='cart' >
   <a >
    <button className={style} onClick={changeStyle}><FaHeart /></button>
    <button  className='cart-sub' onClick={()=> onAdd(product)} > <Icon  name='cart' /></button>
     
   </a>
   </Card.Description>
 </Card.Content>
</Card>
    ))}
       
    </div>
  )
}

export default CardObject;