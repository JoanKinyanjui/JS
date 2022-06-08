import React from 'react'
import { Container } from 'react-bootstrap';
import './ImageAndCaption.css';

function ImageAndCaptions() {
  return (
    <div className='ImageAndCaptions'>

<Container className='ImageAndCaptions-container'>

  <img className='Actual-Image' src='/images/jewellery1.jpg'/>
  <div className='Caption'>
    dfghjkl;lkjhgfdfghjdjh,bkvm,cm ,nxbcnxncnm,xnxb<br/>
    bdgsfdkjhsgjdlskjhhjkljc
  </div>

</Container>
<Container className='ImageAndCaptions-container'>
  <div className='Caption'>
    dfghjkl;lkjhgfdfghjdjh,bkvm,cm ,nxbcnxncnm,xnxb<br/>
    bdgsfdkjhsgjdlskjhhjkljc
  </div>

  <img className='Actual-Image' src='/images/jewellery1.jpg'/>

</Container>
<Container className='ImageAndCaptions-container'>

<img className='Actual-Image' src='/images/jewellery1.jpg'/>

  <div className='Caption'>
    dfghjkl;lkjhgfdfghjdjh,bkvm,cm ,nxbcnxncnm,xnxb<br/>
    bdgsfdkjhsgjdlskjhhjkljc
  </div>

</Container>
    </div>
  )
}

export default ImageAndCaptions