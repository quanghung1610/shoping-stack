import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import Product from '../components/Product';
import Newsletter from '../components/Newsletter';


export default function Home() {
  return (
      <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        {/* <Product /> */}
        <Newsletter />
        <Footer />
      </div>
  )
}
