import React from "react";
import { useEffect } from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import BlogWidget from "@components/BlogWidget";

import { getSortedProjectsData } from "@library/projects";

import { circleText } from "@common/utilits";

//import HeroSection from "@components/sections/Hero";
import ServicesSection from "@components/sections/Services";
import AboutSection from "@components/sections/About";
import VideoSection from "@components/sections/Video";
import CountersSection from "@components/sections/Counters";
import CallToActionSection from "@components/sections/CallToAction";
import PartnersSection from "@components/sections/Partners"
import TechnovitaStudio from "@components/sections/TechnovitaStudio";

const HeroSection = dynamic( () => import("@components/sections/Hero"), { ssr: false } );
const TickerSlider = dynamic( () => import("@components/sliders/Ticker"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

const Home1 = (props) => {
  useEffect(() => {
    circleText();
  }, []);

  return (
    <Layouts>
      <>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TechnovitaStudio />
        <TickerSlider />
        <TestimonialSlider />
        <VideoSection />
        <BlogWidget />
        <CountersSection />
        {/* <CallToActionSection /> */}
        <PartnersSection />
      </>
    </Layouts>
  );
};

export default Home1;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects,
    }
  }
}