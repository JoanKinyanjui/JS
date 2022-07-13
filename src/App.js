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
  //Fetching Products
const [products,setProducts] =useState([]);
useEffect(() => {
  axios.get('http://localhost:3000/products')
  .then(function (response) {
   setProducts(response.data)
    // console.log(response.data);
  })
},[]);
  //Adding to cart State
const [cartItems,setCartItems]=useState([]);
const [style,setStyle]=useState('not-liked');
const [likedItems,setLikedItems]=useState(0);

//Add CartItem
const onAdd=(product)=>{
    const exist = cartItems.find(x => x.id === product.id);
    if (exist){
      setCartItems(
        cartItems?.map((x) =>
        x.id === product.id ? {...exist, qty: exist.qty +1}:x
        )
      );
    }else{
      setCartItems([...cartItems,{...product, qty:1}])
    }
}
//Remove CrtItem
const onRemove=(product)=>{
  const exist = cartItems.find((x)=> x.id ===product.id);
  if (exist.qty ===1){
    setCartItems(
    cartItems.filter((x)=> x.id !== product.id)
    );
  }else{
    setCartItems(
      cartItems.map((x)=>
      x.id === product.id ? {...exist, qty: exist.qty - 1}:x
      )
      
    );
  }
}

//Likes
const likedItem=()=>{
  setLikedItems(prev=>prev+1)
}
const changeStyle=()=>{
  setStyle('liked')
}




  return (
    <>
     <Router>
<div className='App'>
<UserContext.Provider value={{onRemove,cartItems,onAdd,changeStyle,style,products,likedItems}}>
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
