import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './CarouselComponent.css';

function CarouselComponent() {
  return (
    <div className='CarouselComponent'>
        <Carousel style={{width:'100vw', height:'80vh',margin:'auto',textAlign:'center'}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/jewelley2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/jewelley2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='/images/jewelley2.jpg'
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default CarouselComponent