import React from 'react'
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";





function App() {
  return (
    <div>
      
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      {/* <Products /> */}
      <Testimonials />
    </div>
  )
}

export default App
