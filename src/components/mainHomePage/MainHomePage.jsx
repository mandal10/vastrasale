import React from 'react'
import Navbar from '../Navbar'
import InviteBanner from '../InviteBanner'
import HeroSlider from '../HeroSlider'
import TrendingProduct from '../trendingnow/TrendingProduct'
import DealsOfTheDay from '../dealsoftheday/DealsOfTheDay'
import TrendingOffers from '../TrendingOffers/TrendingOffers'
import PromoBanner from '../PromoBanner'
import ShopByCategories from '../ShopByCategories'
import TestimonialSlider from '../testimonial/TestimonialSlider'

const MainHomePage = () => {
  return (
    <div>
        <Navbar/>
        {/* <InviteBanner/> */}
        <HeroSlider/>
        <TrendingProduct/>
        <DealsOfTheDay/>
        <TrendingOffers/>
        <PromoBanner/>
        <ShopByCategories/>
        <TestimonialSlider/>
    </div>
  )
}

export default MainHomePage