import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import BlogLayout from './Components/Blog/BlogLayout';
import Shop from './Components/Shop/Shop';

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

  </Routes>
</div>
</Router>

    </>
  
  );
}

export default App;
