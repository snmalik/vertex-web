import React from 'react'
  import { 
  BsBarChartSteps,      // Assessment & Maturity
  BsMap,                // Strategy Development
  BsWrenchAdjustable,   // Toolchain Integration
  BsLightningCharge,    // Process Automation
  BsCloudCheck,         // Cloud Migration
  BsPeople,
    BsGem,                // Highest Quality
  BsRocketTakeoff,      // Faster Delivery
  BsHeadset,            // Supportive Communication
  BsCpu,                // Advance Technology
  BsShieldLock,         // Advanced Security
  BsAward,
    BsSearch,             // Discovery
  BsSignpostSplit,      // Roadmap
                  // Implementation
  BsFileEarmarkText,    // Documentation
  BsGraphUpArrow,       // Optimization
  BsLifePreserver                // Collaboration & Culture
} from "react-icons/bs";
import ReuseCard from '../../components/ReuseCard/ReuseCard';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import ChallengeGrid from '../../components/Challange/ChallengeGrid';
import UseableFaqSection from '../../components/Useable-faq-section/UseableFaqSection'

const DevopsConsulting = () => {


const devopsMasteryData = [
  {
    icon: <BsBarChartSteps />,
    title: "DevOps Assessment & Maturity Analysis",
    desc: "We evaluate your current DevOps processes to identify strengths, critical gaps, and high-impact opportunities for digital transformation."
  },
  {
    icon: <BsMap />,
    title: "Custom DevOps Strategy Development",
    desc: "We build a customized DevOps roadmap tailored to your specific business objectives, designed to accelerate delivery cycles and ROI."
  },
  {
    icon: <BsWrenchAdjustable />,
    title: "Toolchain Integration & Workflow Design",
    desc: "Seamlessly integrate the right tools (CI/CD, monitoring, logging) into your process to improve team efficiency and cross-functional collaboration."
  },
  {
    icon: <BsLightningCharge />,
    title: "Process Automation Recommendations",
    desc: "Our experts identify key bottlenecks for automation, reducing manual toil and ensuring consistency across your entire development pipeline."
  },
  {
    icon: <BsCloudCheck />,
    title: "Cloud Migration & Transformation",
    desc: "Get strategic guidance and end-to-end support to migrate your applications and legacy infrastructure into a scalable cloud environment."
  },
  {
    icon: <BsPeople />,
    title: "Collaboration & Culture Enablement",
    desc: "We help you foster a collaborative DevOps culture that prioritizes innovation, transparency, and continuous improvement across all teams."
  }
];
const strengthFeatures = [
  {
    icon: <BsGem />,
    title: "Highest Quality Work",
    desc: "We are committed to delivering nothing but the best, ensuring meticulous attention to detail in every cloud architecture we build.",
    link: "/quality-standards"
  },
  {
    icon: <BsRocketTakeoff />,
    title: "Faster Software Delivery",
    desc: "Accelerate your time-to-market with our optimized CI/CD pipelines and automated workflows designed for rapid, reliable releases.",
    link: "/solutions/delivery"
  },
  {
    icon: <BsHeadset />,
    title: "Supportive Communication",
    desc: "Experience personalized support and transparent communication tailored specifically to your organization's unique needs and goals.",
    link: "/contact"
  },
  {
    icon: <BsCpu />,
    title: "Advanced Technology",
    desc: "We leverage cutting-edge tools and future-proof technologies to surpass expectations and build lasting customer loyalty.",
    link: "/tech-stack"
  },
  {
    icon: <BsShieldLock />,
    title: "Advanced Security",
    desc: "Gain maximum protection through high-tech security standards and protocols integrated directly into your DevOps lifecycle.",
    link: "/services/security"
  },
  {
    icon: <BsAward />,
    title: "Proven Expertise",
    desc: "Utilizing profound DevOps expertise to streamline complex workflows while delivering rock-solid, reliable software solutions.",
    link: "/case-studies"
  }
];
const consultingProcessData = [
  {
    icon: <BsSearch />,
    title: "01. Discovery & Assessment",
    desc: "We begin by deep-diving into your existing infrastructure. Our team collaborates with you to uncover pain points and hidden opportunities for architectural improvement."
  },
  {
    icon: <BsSignpostSplit />,
    title: "02. DevOps Roadmap Development",
    desc: "Based on our findings, we craft a tailored roadmap aligned with your business goals, selecting the best-fit tools and methodologies for your specific environment."
  },
  {
    icon: <BsCpu />,
    title: "03. Implementation & Automation",
    desc: "Our engineers build and automate your CI/CD pipelines and Infrastructure as Code (IaC), enabling faster, more reliable, and hands-free deployments."
  },
  {
    icon: <BsFileEarmarkText />,
    title: "04. Comprehensive Documentation",
    desc: "We provide clear, concise documentation, including architecture diagrams and pipeline configurations, ensuring easy onboarding and consistent application."
  },
  {
    icon: <BsGraphUpArrow />,
    title: "05. Optimization & Scaling",
    desc: "We continuously monitor performance and implement rigorous testing. As your business grows, we scale your cloud solutions to meet increasing demand seamlessly."
  },
  {
    icon: <BsLifePreserver />,
    title: "06. Continuous Support",
    desc: "We don't just 'ship and forget.' Our ongoing support ensures your DevOps environment stays secure, optimized, and ready for future technological shifts."
  }
];
const processFaqs = [
  {
    question: "How long does the initial Discovery & Assessment phase take?",
    answer: "Typically, the discovery phase takes between 1 to 2 weeks, depending on the complexity of your current infrastructure. We aim to provide a comprehensive report and roadmap immediately after."
  },
  {
    question: "Will the Implementation phase cause any downtime for our current services?",
    answer: "Our goal is zero-downtime migration. We build and test the new automated environment in parallel with your existing setup, ensuring a seamless cutover once everything is validated."
  },
  {
    question: "What kind of documentation will we receive at the end of the project?",
    answer: "You will receive a complete 'Infrastructure Handbook' containing high-level architecture diagrams, detailed pipeline configurations, security protocols, and step-by-step disaster recovery guides."
  },
  {
    question: "How do you handle scaling if our traffic spikes suddenly during the process?",
    answer: "Our 'Optimization & Scaling' phase includes setting up auto-scaling groups and load balancers that respond dynamically to traffic, ensuring your application remains performant at all times."
  },
  {
    question: "What does 'Continuous Support' actually cover?",
    answer: "It covers proactive monitoring, security patching, CI/CD pipeline maintenance, and regular performance audits to ensure your DevOps ecosystem evolves with new industry standards."
  }
];
  return (
    <div>
     <ReuseCard 
            heading="Transform Your Development Pipeline <br /> with DevOps Mastery" 
            items={ devopsMasteryData}
            />

                <FeatureSection 
        mainTitle="Why Trust Vertex Pro for DevOps Consulting?" 
        features={strengthFeatures} 
      />
        <ChallengeGrid 
        heading="Transforming Data into <br /> Strategic Opportunities" 
        challenges={ consultingProcessData } 
      />

       <UseableFaqSection
  faqTitle="Frequently Asked Questions" 
  faqs={ processFaqs }
  />
      
    </div>
  )
}

export default DevopsConsulting
