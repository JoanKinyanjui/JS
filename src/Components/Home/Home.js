import React, { useContext } from 'react'
import CartItem from '../Shop/CartItem/CartItem'
import { UserContext } from '../UserContext'
import CarouselComponent from './CarouselComponent/CarouselComponent'
import EmailSubscribing from './EmailSubscribing/EmailSubscribing'
import Footer from './Footer/Footer'
import ImageAndCaptions from './ImageAndCaptions/ImageAndCaptions'
import Jumbotronbar from './Jumbotron/Jumbotronbar'
import Nav from './Nav/Nav'
import Shop from './Shop/Shop'
import StartedWithLove from './StartedWithLove/StartedWithLove'
import Testimonials from './Testimonials/Testimonials'
import Topbar from './TopBar/Topbar'
import TrendingProduct from './TrendingProduct/TrendingProduct'


function Home() {
  const{cartItems}=useContext(UserContext)
  return (
    <div>
      <Topbar cartItemsNo={cartItems.lenghth} />
      <Nav />
      <Jumbotronbar />
      <CarouselComponent />
      <Shop />
      <ImageAndCaptions />
      <TrendingProduct />
      <StartedWithLove />
      <Testimonials />
      <EmailSubscribing />
      <Footer />
    </div>
  )
}

export default Home