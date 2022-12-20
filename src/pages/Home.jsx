import React, { Fragment } from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import CompanySection from '../components/CompanySection/CompanySection';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';

const Home = () => {
  return (
    <Fragment>
        <Header />
        <HeroSection />
        <CompanySection />
        <AboutUs />
    </Fragment>
  )
};

export default Home;