import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import BlogLayout from './Components/Blog/BlogLayout';
import Single from './Components/Blog/SinglePost/Single';
import Shop from './Components/Shop/Shop';
import Categories from './Components/Shop/Categories/Categories';
import Cart from './Components/Shop/Cart/Cart';
import Likes from './Components/Shop/Likes/Likes';
import Payment from './Components/Shop/Payment/Payment';
import Checkout from './Components/Shop/Checkout/Checkout';
import React,{useState, useEffect } from 'react';
import { UserContext } from './Components/UserContext';
import Account from './Components/Account/Account';
import SignUp from './Components/Account/SignUp';
import Login from './Components/Account/Login';
import axios from 'axios';


function App() {
  //Adding to cart State
const [cartItem,setCartItem] =useState(0);
const [style,setStyle]=useState('not-liked');
const [likedItems,setLikedItems]=useState(0);
//Cart
const addToCart=()=>{
     setCartItem(prev=>prev+1)
}
const minusFromCart=()=>{
  setCartItem(prev=>prev-1)
}
const removeCart=()=>{
  setCartItem(0)
}
//Likes
const likedItem=()=>{
  setLikedItems(prev=>prev+1)
}
const changeStyle=()=>{
  setStyle('liked')
}

const [products,setProducts] =useState([]);

//Fetching Products
useEffect(() => {
  axios.get('http://localhost:3000/products')
  .then(function (response) {
   setProducts(response.data)
    console.log(response.data);
  })
},[]);


  return (
    <>
     <Router>
<div className='App'>
<UserContext.Provider value={{cartItem,addToCart,changeStyle,style,minusFromCart,removeCart,products,likedItems}}>
  <Routes>
   

    <Route exact path='/'  element={<Home />}/>

   
    <Route exact path='/account'  element={<Account />}/>
    
    <Route exact path='/login'  element={<Login />}/>
    <Route exact path='/signup'  element={<SignUp />}/>


    <Route exact path='/about'  element={<About />}/>
    
    
    <Route exact path='/blog'  element={<BlogLayout />}/>
    <Route exact path='/Single'  element={<Single />}/>
   

         

   <Route exact path='/shop'  element={<Shop />}/> 

        
   
   <Route exact path='/cart'  element={<Cart />}/> 


   <Route exact path='/likes'  element={<Likes />}/>
   

   <Route exact path='/payment'  element={<Payment />}/>


   <Route exact path='/checkout'  element={<Checkout />}/>
   
  </Routes>
  </UserContext.Provider>
</div>
</Router>


    </>
  
  );
}

export default App;
