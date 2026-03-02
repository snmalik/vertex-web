import React from 'react';
// import styles from '../../style/EmailPages.module.css';
 import { 
  BsShieldLock,         // Security Posture
  BsFileEarmarkCheck,   // Compliance Gap
  BsLightningCharge,    // Performance
  BsDatabaseLock,       // Data Privacy
  BsArrowRepeat,        // Disaster Recovery
  BsDiagram3 ,
  BsExclamationCircle,  // Hidden Vulnerabilities
  BsCalendarX,          // Outdated Systems
  BsLockFill,           // Unauthorized Access
  BsFileBinary,         // Data Sprawl
  BsGearWideConnected              // Network Architecture
} from "react-icons/bs";
import ReuseCard from '../../components/ReuseCard/ReuseCard';
import ChallengeGrid from '../../components/Challange/ChallengeGrid';
import UseableFaqSection from '../../components/Useable-faq-section/UseableFaqSection'

const  RiskAssessmentGapAnalysis = () => {
 

const riskAssessmentServices = [
  {
    icon: <BsShieldLock />,
    title: "Security Posture Analysis",
    desc: "A deep dive into your current security controls to identify vulnerabilities, unauthorized access points, and weak encryption protocols."
  },
  {
    icon: <BsFileEarmarkCheck />,
    title: "Compliance Gap Analysis",
    desc: "We measure your infrastructure against global standards like SOC2, GDPR, and HIPAA to identify exactly what’s missing for certification."
  },
  {
    icon: <BsLightningCharge />,
    title: "Operational Risk Assessment",
    desc: "Identifying bottlenecks in your DevOps pipeline and manual processes that could lead to human error or system downtime."
  },
  {
    icon: <BsDatabaseLock />,
    title: "Data Privacy Audit",
    desc: "Evaluating how sensitive data is stored, handled, and transmitted to ensure maximum protection against internal and external leaks."
  },
  {
    icon: <BsArrowRepeat />,
    title: "Resilience & DR Evaluation",
    desc: "Testing your Disaster Recovery (DR) and backup strategies to ensure your business can survive and recover from a major system failure."
  },
  {
    icon: <BsDiagram3 />,
    title: "Infrastructure Architecture Review",
    desc: "A comprehensive review of your cloud setup to ensure it follows 'Well-Architected' frameworks for cost, security, and performance."
  }
];


const riskChallenges = [
  {
    icon: <BsExclamationCircle />,
    title: "Hidden Vulnerabilities",
    desc: "Small configuration drifts in the cloud can lead to massive breaches. We uncover hidden risks that traditional scanners often miss."
  },
  {
    icon: <BsCalendarX />,
    title: "Legacy System Risks",
    desc: "Aging infrastructure often lacks modern security patches. We identify legacy components that pose a threat to your modern ecosystem."
  },
  {
    icon: <BsLockFill />,
    title: "Identity & Access Gaps",
    desc: "Over-privileged accounts are the #1 cause of breaches. We analyze your IAM roles to ensure 'Least Privilege' access."
  },
  {
    icon: <BsFileBinary />,
    title: "Shadow IT & Data Sprawl",
    desc: "Unmanaged cloud resources and fragmented data storage create blind spots. We map out your entire data footprint for better control."
  },
  {
    icon: <BsGearWideConnected />,
    title: "Interdependency Risks",
    desc: "A failure in one third-party API can bring down your whole system. We map your dependencies to prevent cascading failures."
  }
];
const riskFaqs = [
  {
    question: "What is the difference between a Risk Assessment and a Gap Analysis?",
    answer: "A Risk Assessment identifies potential threats and their impact, while a Gap Analysis compares your current performance/security against a specific target or industry standard (like SOC2)."
  },
  {
    question: "How often should our organization conduct a Gap Analysis?",
    answer: "We recommend at least once a year or whenever you make significant changes to your cloud infrastructure to ensure you haven't drifted from compliance."
  },
  {
    question: "Do you provide a roadmap after the assessment?",
    answer: "Yes, we don't just find problems. We provide a prioritized 'Remediation Roadmap' that tells you exactly what to fix first based on the severity of the risk."
  },
  {
    question: "Will this assessment help us get SOC2 or ISO 27001 certified?",
    answer: "Absolutely. Our Gap Analysis is designed to mirror the requirements of these certifications, making it much easier and faster for you to pass the official audit."
  },
  {
    question: "Can you perform assessments on multi-cloud environments (AWS & Azure)?",
    answer: "Yes, we specialize in cross-cloud assessments. We analyze the specific risks associated with each provider and how they interact in a hybrid or multi-cloud setup."
  }
];
  return (
   <div>
  <ReuseCard 
        heading="Assessment Pillars (Security, Compliance, DR)" 
        items={ riskAssessmentServices} 
      />
       <ChallengeGrid 
        heading="Common Risk Challenges." 
        challenges={riskChallenges} 
      />
      <UseableFaqSection
  faqTitle="Frequently Asked Questions" 
  faqs={riskFaqs} 
/>

   </div>
  );
};

export default RiskAssessmentGapAnalysis; 