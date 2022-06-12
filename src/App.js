import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import BlogLayout from './Components/Blog/BlogLayout';
import Shop from './Components/Shop/Shop';
import Categories from './Components/Shop/Categories/Categories';
import Cart from './Components/Shop/Cart/Cart';
import Likes from './Components/Shop/Likes/Likes';
import Payment from './Components/Shop/Payment/Payment';
import Checkout from './Components/Shop/Checkout/Checkout';


function App() {
  return (
    <>
     <Router>
<div className='App'>
  <Routes>

   <Route exact path='/'  element={<Home />}/>
    

    <Route exact path='/shop'  element={<Shop />}/> 


    <Route exact path='/about'  element={<About />}/>
    
    
    <Route exact path='/blog'  element={<BlogLayout />}/>
   

   <Route exact path='/cart'  element={<Cart />}/> 


   <Route exact path='/likes'  element={<Likes />}/>
   

   <Route exact path='/payment'  element={<Payment />}/>


   <Route exact path='/checkout'  element={<Checkout />}/>

  </Routes>
</div>
</Router>


    </>
  
  );
}

export default App;
