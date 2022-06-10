import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='another1'>
      <hr />
      <div className='another'>
           
        </div>
        <div className='Footer'>
        <div className='column1'>
            
            <ul className='column2'>
                <li className='column3'>Services</li>
                <li className='column3'>Terms And Conditions</li>
                <li className='column3'>Privacy Policy</li>
                <li className='column3'>Help Centre</li>
            </ul>
        </div>
            <div className='column1'>
               
                <ul className='column2'>
                    <li className='column3'>(+254) 727 688 225</li>
                    <li className='column3'>me2ucourierservices@gmail.com</li>
                    <li className='column3'>Elica Building ,Thika </li>
                    <li className='column3'>Mon-Fri 7:00am -8:00pm</li>
                </ul>
            </div>
            <div className='column1'>
            
                <ul className='column2'>
                    <li className='column3'>Services</li>
                    <li className='column3'>Terms And Conditions</li>
                    <li className='column3'>Privacy Policy</li>
                    <li className='column3'>Help Centre</li>
                </ul>
            </div>
   
        </div>
            
        <div className='hr'>
 &copy;{new Date().getFullYear()}|Me2UCourier|All rights preserved|Terms of Service|Privacy
            </div>
        
    </div>
  )
}

export default Footer