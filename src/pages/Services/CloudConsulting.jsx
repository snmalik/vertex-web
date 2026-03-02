import React from 'react';
import CloudInnovation from "../../components/Cloud-innovation/CloudInnovation";
import ReuseCard from "../../components/ReuseCard/ReuseCard";
import FeatureSection from "../../components/FeatureSection/FeatureSection"; 
import TimeLine from "../../components/TimeLine/TimeLine"
import UseableFaqSection from '../../components/Useable-faq-section/UseableFaqSection'


// 2. BsShieldCheck ko aik hi line mein kar diya
import { 
  BsCompass,
  BsBarChartSteps,
  BsCashStack,
  BsDiagram3,
  BsShieldCheck,
  BsMap,
  BsClockHistory ,
   BsPerson,
  BsCoin, 
 
  BsAward, 
  BsLightbulb, 
  BsCalendarCheck
} from "react-icons/bs";
import ServiceContact from '../../components/Services-contact/ServicesContact';


export default function CloudConsulting() {
  
 
  const cloudConsultingData = [
    {
      icon: <BsBarChartSteps />,
      title: "Cloud Assessment & Adoption",
      desc: "Examine and transition to the most suitable cloud services for improved business resilience and efficiency."
    },
    {
      icon: <BsCompass />,
      title: "Cloud Strategy Development",
      desc: "Develop and implement a unique cloud vision strategy that best suits your business focus and perspective."
    },
    {
      icon: <BsCashStack />,
      title: "Cloud Cost Optimization",
      desc: "Control cloud spending by monitoring, managing, and employing techniques for optimization."
    },
    {
      icon: <BsDiagram3 />,
      title: "Multi-Cloud Architecture Design",
      desc: "Design a robust multi-cloud setup that allows for performance, flexibility, and independence from any single vendor."
    },
    {
      icon: <BsShieldCheck />,
      title: "Compliance and Security Assessment",
      desc: "Verify that cloud services are compliant and data security is strong enough to safeguard the data and any industry requirements."
    },
    {
      icon: <BsMap />,
      title: "Infrastructure and Application Roadmap",
      desc: "Create an achievable transitional development plan for infrastructure and applications to the cloud."
    }
  ];


 const cloudProps = [
  { 
    icon: <BsPerson />, 
    title: "Team Expertise", 
    desc: "Expert cloud handling experience across different top platforms present in our team." 
  },
  { 
    icon: < BsCoin/>, 
    title: "Cost-Effective Solutions", 
    desc: "Cost effective and efficient method of performing upkeep of the IT infrastructure." 
  },
  { 
    icon: < BsClockHistory/>, 
    title: "24/7 Support", 
    desc: "The support team resolves any issues connected with the cloud for all clients." 
  },
  { 
    icon: <BsAward />, 
    title: "Proven Track Record & Client Satisfaction", 
    desc: "This has earned us remarkable longevity and high rates of customer satisfaction. Quality of service is what we are committed to." 
  },
  { 
    icon: <BsLightbulb />, 
    title: "Innovation and Future-Readiness", 
    desc: "We are attuned to current trends and what the future demands in terms of cloud technology such as AI, ML, and IoT." 
  },
  { 
    icon: <BsCalendarCheck />, 
    title: "On Time Project Delivery", 
    desc: "The full-cycle cloud services will guarantee the deployment on time." 
  }
];

const cloudProcessSteps = [
  { id: "01", title: "Consultation & Discovery", desc: "Adopting cloud technology and optimizing it according to one's specific business and existing infrastructure." },
  { id: "02", title: "Strategy & Planning", desc: "Formulate a strategic approach to cloud computing that is specific to client business goals and the financial resources available." },
  { id: "03", title: "Cloud Architecture Design", desc: "Create an effective and efficient cloud infrastructure for new or existing systems which can be effectively used." },
  { id: "04", title: "Implementation", desc: "Implement the cloud solution, including porting applications, data and other resources to the allocated cloud." },
  { id: "05", title: "Optimization & Performance Monitoring", desc: "Optimize and monitor the functionality of the cloud on a constant basis in order to achieve operational efficiency." },
  { id: "06", title: "Continuous Support & Scaling", desc: "Carry on catering support and scaling according to your growth and further requirements." }
];

                                                       
const cloudFaqs = [
  {
    question: "01. What are Reasons for Hiring Superior Cloud Engineers at Vertex Pro?   ",
    answer: "We have a flexible and skilled team of cloud engineers who can optimize your cloud setting in every possible way."
  },
  {
    question: " 02. What is Cloud Consulting and how can it benefit my business?",
    answer: "Cloud consulting involves expert guidance on cloud strategy, migration, and optimization to improve scalability and reduce IT costs."
  },
  {
    question: " 03 .How do you ensure data security during cloud migration?",
    answer: "We perform a thorough Compliance and Security Assessment to verify that all data is encrypted and meets industry standards."
  },
  {
    question: " 04 .Do you provide support after the cloud setup is complete?",
    answer: "Yes, we provide 24/7 continuous support and scaling to ensure your cloud environment grows with your business."
  },
];

  return (
    <div>
      
      <ReuseCard 
        heading="High-Performance Cloud Solutions Driven by Innovation" 
        items={cloudConsultingData} 
      />

    
      <CloudInnovation />

      
      <FeatureSection 
        mainTitle="Why Vertex Pro Is Your Ideal Cloud Partner?" 
        features={cloudProps} 
      />
      <TimeLine  
  sectionTitle="How Can You Transform Your Business With Cloud Consulting Services?" 
  steps={cloudProcessSteps} 
/>
<UseableFaqSection
  faqTitle="Frequently Asked Questions" 
  faqs={cloudFaqs} 
/>
<ServiceContact />
    </div>
  );
}



