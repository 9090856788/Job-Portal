/* eslint-disable no-unused-vars */
import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedJobs from "../components/FeaturedJobs";
import RegisterSection from "../components/RegisterSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedJobs />
      <RegisterSection />
    </>
  );
};

export default Home;
