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
      subTitle="About Us"
      title="Making Your Business More Unique"
      desc1="Vertex Pro is Pakistan's leading IT services company, dedicated to transforming your business vision into a digital reality. We blend creativity with technology to deliver results that matter."
      desc2="From startups to established enterprises, we provide end-to-end digital support, ensuring your brand stays ahead in the competitive online landscape."
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
