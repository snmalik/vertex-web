import { useEffect } from "react";
import gsap from "gsap";
import HeroSection from "../components/Hero-section/HeroSection";
import AboutUs from "../components/AboutSection/AboutUs";
import StatsSection from "../components/StatsSection/StatsSection";
import ServiceSection from "../components/Service-section/ServiceSecton";
import Testimonials from "../components/Testimonials/Testimonials";
import TeamSection from "../components/TeamSection/TeamSection";
import PortfolioSection from "../components/PortfolioSection/PortfolioSection";


import IndustryGrid from "../components/IndustryGrid/IndustryGrid";
import FAQ from "../components/faq/Faq";

import ContactSection from "../components/Contact-section/ContactSection";
import BlogSection from "../components/Blog-section/BlogSection";

 import imgMain from "../assets/image/about-main.png";
import line from "../assets/image/ab-shape1.svg";
 import img1 from "../assets/image/about-1.png";
import img2 from "../assets/image/about-2.png";
import img3 from "../assets/image/about-3.png";

import circle from '../assets/image/shape-10.svg'
import shape from '../assets/image/shape-9.svg'



  
 


const Home = () => {
  useEffect(() => {
    gsap.from(".page", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
   <>
   <div className="yara">
   <HeroSection />
     <AboutUs 
      subTitle="About Vertex Pro"
      title="Enterprise Technology Partner for  <span>Global <br /> Scale & Security<span/>"
      desc1="Vertex Pro is a specialized IT Infrastructure and Cybersecurity firm dedicated to stabilizing and securing complex digital environments. We move beyond basic support to provide enterprise-grade systems architecture that drives real business resilience."
      desc2="From cloud transformation to 24/7 security operations, we serve as the technical backbone for organizations that cannot afford downtime. Our mission is to bridge the gap between complex technology and seamless business execution."
      mainImg={imgMain}
      img1={img1}
      img2={img2} 
      img3={img3}
      lineShape={line}
      circleShape={circle}
      bitDotShape={shape}
    />
   <StatsSection />
   <ServiceSection />
   <Testimonials />
   <TeamSection />
   <PortfolioSection />
   <IndustryGrid />
   <FAQ />
   <BlogSection />
 <ContactSection />
 </div>
   {/* <Test /> */}
  
  

   </>
  );
};

export default Home;
