import React, { useEffect, useRef, useState } from 'react'
import CarouselBanner from '../components/CarouselBanner'
import PopularDestinations from '../components/PopularDestinations'
import CarouselCards from '../components/CarouselCards'

const Home = () => {
    
  return (
    <>
    <CarouselBanner/>
    <PopularDestinations/>
    <CarouselCards/>
    </>
  );
}

export default Home
