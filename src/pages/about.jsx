import { useEffect } from "react";
import dynamic from "next/dynamic";
import Layouts from "@layouts/Layouts";

import { getSortedTeamData } from "@library/team";
import { getSortedServicesData } from "@library/services";

import { circleText } from "@common/utilits";

import PageBanner from "@components/PageBanner";
import PartnersSection from "@components/sections/Partners"
import Services4Section from "@components/sections/Services4"

const HistorySlider = dynamic( () => import("@components/sliders/History"), { ssr: false } );
const Testimonial2Slider = dynamic( () => import("@components/sliders/Testimonial2"), { ssr: false } );

const About = (props) => {
  useEffect(() => {
    circleText();
  }, []);

  const clickedVideoButton = (e) => {
    e.preventDefault();

    e.target.parentNode.classList.add('active');
    let videoIframe = e.target.parentNode.querySelector('.js-video-iframe');
    let videoUrl = videoIframe.dataset.src;
    videoIframe.setAttribute('src', videoUrl);
  }

  return (
    <Layouts>
    	<PageBanner pageTitle={"About Us"} pageDesc={"Creative studio at the intersection of art, designand technology."} />
      
      	{/* technovita About */}
	  	<section className="onovo-section gap-top-140 gap-bottom-140">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">

						{/* Heading */}
						<div className="onovo-heading gap-bottom-60">
							<div className="onovo-subtitle-1">
								<span> Welcome to Technovita Solution </span>
							</div>
							<h2 className="onovo-title-2">
								<span>Struggling to get your products seen on Amazon or Ajio? <br/>Technovita Solution is your one-stop shop for e-commerce success."  </span>
							</h2>
							<div className="onovo-text">
								<p>Since our founding, we've empowered businesses to achieve e-commerce success through strategic marketing, product listing optimization, and expert account management.  Our team's knowledge and experience keep growing, allowing us to deliver exceptional solutions for your online store. </p>
							</div>
						</div>

					</div>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 offset-lg-1 hide-on-mobile">

						{/* Image */}
						<img src="/images/logo-main.png" alt="" />

					</div>
				</div>


				{/* Video */}
				<div className="onovo-video" data-onovo-overlay data-onovo-scroll>
					<div className="image" onClick={ (e) => clickedVideoButton(e) } style={{"backgroundImage": "url(/images/hero-digital-1.jpg)"}} />
					<iframe className="js-video-iframe" data-src="https://www.youtube.com/embed/Gu6z6kIukgg?showinfo=0&rel=0&autoplay=1"></iframe>
					<div className="play onovo-circle-text" onClick={ (e) => clickedVideoButton(e) }>
						<div className="arrow" />
						<div className="label onovo-text-black onovo-circle-text-label"> Play Video - Play Video - Play Video - </div>
					</div>
				</div>

				{/* Description */}
				<div class="row gap-top-100">
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                        <h5 class="text-uppercase">Our Mission</h5>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                    We empower businesses to thrive in the e-commerce landscape. Since our founding, we've helped countless clients achieve success through strategic marketing, optimized product listings, and expert account management.  Our team's knowledge and experience keep growing, ensuring we deliver exceptional solutions to propel your online store forward.
                    </div>
                </div>


				{/* Description */}
				<div class="row gap-top-60">
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                        <h5 class="text-uppercase">Our Goal</h5>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                        We are passionate about driving e-commerce growth through innovative marketing strategies and data-driven optimization.  Our goal is to help your online store achieve sustainable success and leave a lasting impression on your target audience.
                    </div>
                </div>



			</div>
		</section>

		<Services4Section services={props.services} />


      	<HistorySlider />


      	<Testimonial2Slider />

      	<PartnersSection />
      
    </Layouts>
  );
};
export default About;

export async function getStaticProps() {
  const allTeam = getSortedTeamData();
  const allServices = getSortedServicesData();

  return {
    props: {
      team: allTeam,
	  services: allServices
    }
  }
}