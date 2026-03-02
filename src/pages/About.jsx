import React from 'react'
import TestimonialSection from '../components/Main-about-page/Testmonial/Testimonials'
import AboutSection from '../components/AboutSection/AboutUs'
import ContactSection from '../components/Contact-section/ContactSection'
import SliderLogo from '../components/Slider/SliderLogo'


 import imgMain from "../assets/image/about-main.png";
import line from "../assets/image/ab-shape1.svg";
 import img1 from "../assets/image/about-1.png";
import img2 from "../assets/image/about-2.png";
import img3 from "../assets/image/about-3.png";

import circle from '../assets/image/shape-10.svg'
import shape from '../assets/image/shape-9.svg'


const About = () => {
  return (
    <div>
      <AboutSection
      subTitle="About Us"
      title=" Pakistan’s Fast-Growing 
            IT Services <br />
            Company"
      desc1="  Vertex Pro is one of Pakistan’s rapidly growing digital marketing company, helping
              brands succeed in the ever-evolving online landscape."
      desc2="    We don’t just optimize, we create strategies that drive visibility, engagement, and real
              business growth. From creating compelling content to enhancing user experience,
              our approach ensures that every click counts."
        desc3="Whether you’re a startup or an established brand, we turn your digital presence into
              a competitive advantage."      
      mainImg={imgMain}
      img1={img1}
      img2={img2} 
      img3={img3}
      lineShape={line}
      circleShape={circle}
      bitDotShape={shape}
    />
      <TestimonialSection />
      <ContactSection />
      <SliderLogo />

    </div>
  )
}

export default About
