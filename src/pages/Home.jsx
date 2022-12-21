import React, { Fragment } from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import ChooseUs from '../components/ChooseUs/ChooseUs';
import CompanySection from '../components/CompanySection/CompanySection';
import Course from '../components/Courses/Course';
import Feature from '../components/Feature/Feature';
import FreeCourse from '../components/FreeCourse/FreeCourse';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import Newsletter from '../components/Newsletter/Newsletter';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
  return (
    <Fragment>
        <Header />
        <HeroSection />
        <CompanySection />
        <AboutUs />
        <Course />
        <ChooseUs />
        <Feature />
        <FreeCourse />
        <Testimonials />
        <Newsletter />
    </Fragment>
  )
};

export default Home;