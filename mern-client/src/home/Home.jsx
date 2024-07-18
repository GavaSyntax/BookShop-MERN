import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellBooks'
import Favbook from './Favbook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'

const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <Favbook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
      
    </div>
  )
}

export default Home
