import React from 'react'
import Explore from './Explore';
import Service from './Service';

import Slider from './Slider';
import Sponsers from './Sponsers';
import Topdesti from './Topdesti';
import Card from './Card';
import Footer from './Footer';
import Gotop from './Gotop';






const Home = () => {
  return (
    <>

      <Slider />
      <Card/>

      <Topdesti />
      <Explore />
      <Service />
      <Sponsers />
      <Gotop/>
      <Footer/>
      
      
    </>
  )
}

export default Home