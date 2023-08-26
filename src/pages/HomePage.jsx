import React from 'react';
import PopularFonts from '../components/LandingPages/PopularFonts';
import PopularGraphics from '../components/LandingPages/PopularGraphics';
import StaffPicks from '../components/LandingPages/StaffPicks';
import BlogsSlide from '../components/LandingPages/BlogsSlide';
import JoinShop from '../components/LandingPages/JoinShop';
import Fonts from '../components/LandingPages/Fonts';

const HomePage = () => {
  return (
    <>
      <PopularFonts />
      <Fonts />
      <BlogsSlide />
      <JoinShop />
    </>
  );
};

export default HomePage;