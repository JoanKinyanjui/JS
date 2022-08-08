import React, {useState,useEffect} from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import './CardObject.css';
import {FaHeart} from 'react-icons/fa';
import axios from 'axios';

function CardObject() {
  const [products,setProducts]=useState([]);

  //FETCHING DATA
  useEffect(()=>{
    axios.get('http://localhost:3000/products')
    .then((response)=>{
        console.log(response.data)
        setProducts(response.data)})
    
    .catch(err=>console.log(err))
  },[])
return (
    <div className='CardObject'> 
{products.map((product)=>(
          <Card key={product.id} className='Card'>
        <Image  src={product.image} wrapped ui={false} />
        <Card.Content>
          <Card.Meta>
            <span className='date'>{product.name}</span>
          </Card.Meta>
          <Card.Description >
           ksh{product.price}
          </Card.Description>
          <Card.Description className='cart' >
          <a >
           <button  className='cart-sub' ><FaHeart /></button>
           <button  className='cart-sub' > <Icon  name='cart' /></button>
            
          </a>
          </Card.Description>
        </Card.Content>
       </Card>

))}
    </div>
  )
}

export default CardObject;