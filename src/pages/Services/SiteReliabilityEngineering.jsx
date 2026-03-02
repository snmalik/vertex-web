import React from 'react';
import { 
  BsSafe,              
  BsCodeSquare,       
  BsSearch,            
  BsActivity,
   BsShieldCheck,        
  BsCloudCheck,         
  BsBarChartSteps,     
  BsTerminalSplit,      
  BsLightningCharge,    
  BsDatabaseCheck            
} from "react-icons/bs";
import ReuseCard from '../../components/ReuseCard/ReuseCard';
import DevopsFlow from '../../components/DevopsFlow/DevOpsFlow'; 
import ChallengeGrid from '../../components/Challange/ChallengeGrid';
import SreTechMarquee from '../../components/SreTechMarquee/SreTechMarquee';
import UseableFaqSection from '../../components/Useable-faq-section/UseableFaqSection'

const SrePage = () => {

    

const srePrinciples = [
  {
    icon: <BsSafe />,
    title: "Embracing Risk",
    desc: "We don't aim for 100% uptime (which is unrealistic); instead, we manage risk through data-driven decisions and Error Budgets."
  },
  {
    icon: <BsSearch />,
    title: "Blameless Post-Mortems",
    desc: "Focus on system failures rather than human errors. We analyze incidents to build stronger, more resilient processes for the future."
  },
  {
    icon: <BsCodeSquare />,
    title: "Infrastructure as Code (IaC)",
    desc: "Every configuration is versioned and automated, ensuring that environment setup is repeatable, consistent, and error-free."
  },
  {
    icon: <BsActivity />,
    title: "Proactive Problem Management",
    desc: "Moving beyond 'Reactive' support to 'Proactive' engineering, identifying potential points of failure before they become outages."
  }
];


const sreServicesData = [
  {
    icon: <BsShieldCheck />,
    title: "SLI, SLO & SLA Management",
    desc: "Define and monitor Service Level Indicators (SLIs) and Objectives (SLOs) to ensure your system meets business reliability goals and customer expectations."
  },
  {
    icon: <BsCloudCheck />,
    title: "Error Budget Optimization",
    desc: "Balance the speed of innovation with system stability by managing Error Budgets, allowing for rapid releases while maintaining strict reliability."
  },
  {
    icon: <BsBarChartSteps />,
    title: "Full-Stack Observability",
    desc: "Implement advanced logging, metrics, and distributed tracing to gain deep insights into system health and pinpoint bottlenecks instantly."
  },
  {
    icon: <BsTerminalSplit />,
    title: "Automation & Toil Reduction",
    desc: "Eliminate repetitive manual tasks (Toil) by engineering automated solutions for deployment, scaling, and self-healing infrastructure."
  },
  {
    icon: <BsLightningCharge />,
    title: "Rapid Incident Response",
    desc: "Establish robust on-call rotations and automated alerting systems to detect and resolve production issues before they impact end-users."
  },
  {
    icon: <BsDatabaseCheck />,
    title: "Capacity & Performance Engineering",
    desc: "Analyze resource utilization and performance trends to proactively scale infrastructure, ensuring seamless user experience during traffic spikes."
  }
];
const sreFaqs = [
  {
    question: "What is the primary goal of SRE in my organization?",
    answer: "The primary goal of Site Reliability Engineering (SRE) is to create ultra-scalable and highly reliable software systems. Unlike traditional operations, SRE uses software engineering mindsets to manage infrastructure, ensuring that your services are available, performant, and efficient."
  },
  {
    question: "How does SRE improve system uptime compared to traditional DevOps?",
    answer: "SRE introduces strict Service Level Objectives (SLOs) and Error Budgets. Instead of reactive fixing, SRE engineers build automated self-healing systems that detect and resolve issues before they lead to downtime, ensuring proactive reliability."
  },
  {
    question: "What are SLIs, SLOs, and SLAs, and why do they matter?",
    answer: "SLIs (Indicators) are the metrics we track, like latency. SLOs (Objectives) are the goals we set for those metrics (e.g., 99.9% success). SLAs (Agreements) are the legal promises made to users. Together, they provide a data-driven framework to measure and guarantee system health."
  },
  {
    question: "What happens when an Error Budget is exhausted?",
    answer: "When an Error Budget is exhausted, the focus shifts from launching new features to improving system stability. This ensures that innovation never comes at the cost of a poor user experience, maintaining a perfect balance between speed and reliability."
  },
  {
    question: "How do you handle incidents and post-mortems?",
    answer: "We follow a 'Blameless Post-Mortem' culture. When an incident occurs, we focus on identifying the systemic root cause rather than blaming individuals. This allows us to improve the code and automation so that the same failure never repeats."
  }
];
  return (
    <div>
      <ReuseCard 
        heading="Site Reliability Engineering <br /> (SRE) Solutions" 
        items={sreServicesData} 
      />
      
      
      <DevopsFlow />
      <SreTechMarquee />

      <ChallengeGrid 
        heading="The Pillars of <br /> System Resilience" 
        challenges={srePrinciples} 
      />
      <UseableFaqSection
  faqTitle="Frequently Asked Questions" 
  faqs={sreFaqs} 
/>
    </div>
  );
};

export default SrePage;