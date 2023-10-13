import React from 'react';

import BlogsSlide from '../components/LandingPages/BlogsSlide';
import JoinShop from '../components/LandingPages/JoinShop';

import SpecialOffers from '../components/LandingPages/SpecialOffers';
import NewRelease from '../components/LandingPages/NewRelease';
import StaffPicks from '../components/LandingPages/StaffPicks';

const HomePage = () => {
  return (
    <>
      <SpecialOffers />
      <NewRelease />
      <StaffPicks />
      <BlogsSlide />
      <JoinShop />
    </>
  );
};

export default HomePage;
