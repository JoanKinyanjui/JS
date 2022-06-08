import React from 'react';
import './TrendingProduct.css';

function TrendingProduct() {
  return (
    <div className='TrendingProduct-title'>
      <p>TRENDING PRODUCTS</p>
<div className='TrendingProduct'>
<div className='Trending-Image-div'>
  <img className='Trending-Image' src='/images/jewellery4.jpg'/>
  <p>Pretty necklace</p>
  <h6>Ksh 400</h6>
  </div>
<div className='Trending-Image-div'><img className='Trending-Image' src='/images/jewellery3.jpg'/>
<p>pretty earings</p>
<h6>Ksh 400</h6>
</div>
<div className='Trending-Image-div'><img className='Trending-Image' src='/images/jewelley2.jpg'/>
<p>pretty diamonds</p>
<h6>Ksh 400</h6>
</div>

</div>
    </div>
  )
}

export default TrendingProduct