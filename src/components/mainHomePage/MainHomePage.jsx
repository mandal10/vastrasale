import React from 'react'
import Navbar from '../Navbar'
import InviteBanner from '../InviteBanner'
import HeroSlider from '../HeroSlider'
import TrendingProduct from '../TrendingProduct'
import DealsOfTheDay from '../DealsOfTheDay'
import TrendingOffers from '../TrendingOffers'
import PromoBanner from '../PromoBanner'
import ShopByCategories from '../ShopByCategories'
import Testimonial from '../Testimonial'

const MainHomePage = () => {
  return (
    <div>
        <Navbar/>
        <InviteBanner/>
        <HeroSlider/>
        <TrendingProduct/>
        <DealsOfTheDay/>
        <TrendingOffers/>
        <PromoBanner/>
        <ShopByCategories/>
        <Testimonial/>
    </div>
  )
}

export default MainHomePage