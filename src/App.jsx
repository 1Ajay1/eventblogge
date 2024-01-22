import { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import FeaturedBlogPost from './Components/blog';
import BlogCarousel from './Components/nextpost';
import MainBlog from './Components/MainBlog';
function App() {
  return (
    <>
      
      
      <Header/>
      <FeaturedBlogPost/>
      <BlogCarousel/>
      <MainBlog/>
      <Footer/>
      
     </>
  )
}

export default App;
