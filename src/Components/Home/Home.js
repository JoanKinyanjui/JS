import React from 'react'
import CarouselComponent from './CarouselComponent/CarouselComponent'
import EmailSubscribing from './EmailSubscribing/EmailSubscribing'
import Footer from './Footer/Footer'
import ImageAndCaptions from './ImageAndCaptions/ImageAndCaptions'
import Jumbotronbar from './Jumbotron/Jumbotronbar'
import Nav from './Nav/Nav'
import Testimonials from './Testimonials/Testimonials'
import Topbar from './TopBar/Topbar'
import TrendingProduct from './TrendingProduct/TrendingProduct'


function Home() {
  return (
    <div>
      <Topbar />
      <Nav />
      <Jumbotronbar />
      <CarouselComponent />
      <ImageAndCaptions />
      <TrendingProduct />
      <Testimonials />
      <EmailSubscribing />
      <Footer />
    </div>
  )
}

export default Home