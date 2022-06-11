import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Topbar.css';


function Topbar(props) {
  const navigate = useNavigate();


  return (
    <div className='Topbar-about'> 
  
    <div className='another-nav'>
     <ul className='another-nav-list'>
      
       <li className="socials-10 another"  ><a href="https://github.com/JoanKinyanjui"><i class="fab socials-10 fa-2x fa-github"></i></a></li> 
       <li className="socials-10 another"  ><a href=" https://www.instagram.com/wambui-j/"> <i class="fab  fa-2x fa-instagram-square "></i></a></li>
       <li className="socials-10 another" ><a href="https://www.linkedin.com/in/joankinyanjui/"><i class="fab fa-2x fa-linkedin"></i></a></li>
       <li className="socials-10 another"  ><a href="https://twitter.com/jo_kinyanjui"><i class="fab fa-2x  fa-twitter-square "></i></a></li>
       <li className="socials-10 another" ><a href="mailto:kinyanjuijoan52@gmail.com"><i class="fas fa-2x fa-envelope"></i></a></li>
     </ul>

    </div>
    <div className='goBack'>
        <button onClick={() => navigate(-1)} className='goback-button'> {props.title}</button>
    </div>
    </div>
  )
}

export default Topbar;
