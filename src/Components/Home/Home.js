import React from 'react'
import CarouselComponent from './CarouselComponent/CarouselComponent'
import EmailSubscribing from './EmailSubscribing/EmailSubscribing'
import Footer from './Footer/Footer'
import ImageAndCaptions from './ImageAndCaptions/ImageAndCaptions'
import JsInstagram from './JsInstagram/JsInstagram'
import Nav from './Nav/Nav'
import Topbar from './TopBar/Topbar'
import TrendingProduct from './TrendingProduct/TrendingProduct'


function Home() {
  return (
    <div>
      <Topbar />
      <Nav />
      <CarouselComponent />
      <ImageAndCaptions />
      <TrendingProduct />
      <JsInstagram />
      <EmailSubscribing />
      <Footer />
    </div>
  )
}

export default Home