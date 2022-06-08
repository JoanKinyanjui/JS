import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return(
      <div className='Services-all'>
      <div className='Services'>
          <p className='test' style={{color:'black'}}>TESTIMONIALS</p>
      </div>
      <div className='Services-display'>
<div className='display' >
   
    <h4>"Amazing piece of History"</h4>
    <p>A good review includes enough detail to give others a feel for what happened. Explain which factors contributed
</p>
<img className='testimony-img' src='/images/testimony.jpg'/>
</div>

<div className='display' >
    
    <h4>"Stunning Design"</h4>
    <p>A good review includes enough detail to give others a feel for what happened. Explain which factors contributed
</p>
<img className='testimony-img' src='/images/testimony.jpg'/>
</div>


<div className='display' >

    <h4>"Best Piece"</h4>
    <p>A good review includes enough detail to give others a feel for what happened. Explain which factors contributed</p>
    <img className='testimony-img' src='/images/testimony.jpg'/>
</div>
</div>
      </div>
  )
}

export default Testimonials;
