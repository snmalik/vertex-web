import React from 'react'
    import { 
  BsBoxSeam,            
  BsCloudArrowUp,       
  BsGearWideConnected,  
  BsShieldLock,         
  BsDiagram3,           
  BsCodeSlash,
    BsSliders,         
  BsGraphUp,          
  BsGit,               
  BsCloudCheck,        
         
  BsCashStack,         
  BsRocketTakeoff,
   BsPeople,             
  BsPersonBadge,        
  BsInfinity,           
  BsCheck2Circle,       
  BsShieldCheck,       
  BsChatLeftDots 
                    
} from "react-icons/bs";
import ReuseCard from '../../components/ReuseCard/ReuseCard';
import FeatureGrid from '../../components/FeatureGrid/FeatureGrid';

import MigrationFlow from '../../components/migration-flow/MigrationFlow';
import UseableFaqSection from '../../components/Useable-faq-section/UseableFaqSection'
export default function InfrastructureAsCode() {


const iacServicesData = [
  {
    icon: <BsCloudArrowUp />,
    title: "Cloud Agnostic IaC Solutions",
    desc: "Deploy infrastructure seamlessly across AWS, Azure, and GCP using industry-leading tools like Terraform and Pulumi. We ensure your setup is portable and free from vendor lock-in."
  },
  {
    icon: <BsBoxSeam />,
    title: "Modular & Scalable Infrastructure",
    desc: "We design reusable IaC modules that grow with your business. From networking to compute, our blueprints ensure consistency across development and production environments."
  },
  {
    icon: <BsGearWideConnected />,
    title: "IaC Integration with CI/CD",
    desc: "Automate infrastructure provisioning within your Jenkins, GitHub Actions, or GitLab CI pipelines. Every change is tested and validated before being applied to production."
  },
  {
    icon: <BsShieldLock />,
    title: "Compliance-Ready Setup",
    desc: "Automate your infrastructure to meet strict industry standards like SOC2, GDPR, and HIPAA. We bake security into the code to guarantee compliant deployments from day one."
  },
  {
    icon: <BsDiagram3 />,
    title: "Multi-Cloud & Hybrid Strategies",
    desc: "Expert management of public and private clouds. We use Bicep, ARM, and CloudFormation to create unified cross-platform strategies for complex hybrid environments."
  },
  {
    icon: <BsCodeSlash />,
    title: "Advanced Tooling Mastery",
    desc: "Proficiency in Terraform CDK, AWS CDK, and Ansible to handle everything from low-level resource provisioning to high-level configuration management."
  }
];





const iacImpactFeatures = [
  {
    icon: <BsSliders />,
    title: "Configuration Management",
    desc: "Manage and version your entire infrastructure efficiently using declarative configuration files, ensuring zero manual errors.",

  },
  {
    icon: <BsGraphUp />,
    title: "Scalability",
    desc: "Enable rapid and flexible scaling of cloud resources based on real-time business needs without manual intervention.",
  
  },
  {
    icon: <BsGit />,
    title: "GitOps Integration",
    desc: "Implement GitOps principles for a single source of truth, allowing for streamlined and centralized infrastructure management via Git.",

  },
  {
    icon: <BsCloudCheck />,
    title: "Cloud-Native Integration",
    desc: "Seamlessly integrate with modern cloud-native systems using declarative tools like Terraform and Pulumi for a unified architecture.",
  
  },
  {
    icon: <BsShieldLock />,
    title: "Security Compliance",
    desc: "Automate security guardrails to ensure constant compliance with global standards through automated policy-as-code checks.",
   
  },
  {
    icon: <BsCashStack />,
    title: "Cost Efficiency",
    desc: "Significantly reduce cloud spend by automatically identifying and removing underutilized or orphaned resources.",
   
  },
  {
    icon: <BsRocketTakeoff />,
    title: "Future-Proofing",
    desc: "Build a robust, modular system designed to handle future tech challenges and massive growth with expert architectural guidance.",
  
  }
];


const executionFeatures = [
  {
    icon: <BsPeople />,
    title: "People-First Approach",
    desc: "We invest in expert teams dedicated to transforming your infrastructure, fostering a culture of continuous learning to leverage the latest IaC capabilities.",
    
  },
  {
    icon: <BsPersonBadge />,
    title: "Hands-On Leadership",
    desc: "Our skilled leadership drives engagements, taking full accountability and fostering long-term, success-driven partnerships.",
  
  },
  {
    icon: <BsInfinity />,
    title: "Agile Development",
    desc: "Using agile delivery, we keep stakeholders engaged and adapt to evolving infrastructure needs through iterative cycles.",
   
  },
  {
    icon: <BsCheck2Circle />,
    title: "Automated Testing",
    desc: "Test automation drives QA in all our projects, ensuring stability, performance, security, and resilience through comprehensive test suites.",
  
  },
  {
    icon: <BsShieldCheck />,
    title: "DevSecOps Integration",
    desc: "We embed security throughout the DevOps lifecycle with policy-as-code and proactive threat modeling to ensure compliance.",
   
  },
  {
    icon: <BsChatLeftDots />,
    title: "Open Communication",
    desc: "We foster open communication with iterative reviews, transparent tracking, and always-available teams, ensuring quality and trust.",
    
  }
];
const executionFaqs = [
  {
    question: "How do you ensure that the infrastructure vision aligns with my business goals?",
    answer: "We start with a 'Vision-to-Execution' workshop where our leadership and expert teams analyze your business requirements. This ensures that every line of code we write directly contributes to your scalability and ROI."
  },
  {
    question: "What does a 'People-First' approach mean for my project?",
    answer: "It means we don't just provide tools; we provide dedicated experts. Our team stays updated with the latest cloud trends to ensure your project benefits from the most modern and efficient engineering practices available."
  },
  {
    question: "How do you handle changes in requirements during the project?",
    answer: "We follow an Agile Development methodology. Through iterative cycles and regular stakeholder reviews, we can adapt to evolving needs quickly without disrupting the overall project timeline or stability."
  },
  {
    question: "How do you guarantee the security and stability of the deployment?",
    answer: "We integrate DevSecOps and Automated Testing from day one. Every infrastructure change undergoes rigorous security scans (Policy-as-Code) and automated QA suites to ensure 100% resilience and compliance."
  },
  {
    question: "How transparent is the communication during the engagement?",
    answer: "Transparency is our priority. We provide real-time tracking of progress, scheduled iterative reviews, and maintain an always-available communication channel to ensure there are no surprises and full trust is maintained."
  }
];

  return (
    <div>
     <ReuseCard 
             heading="The Right Solution for Every Challenge" 
             items={iacServicesData }
             />
             <FeatureGrid 
  heading="Turning Ideas into <br /> Impactful Infrastructure" 
  subheading="We leverage Infrastructure as Code to bridge the gap between complex software requirements and reliable cloud execution."
  features={iacImpactFeatures}
/>
<MigrationFlow 
  heading="Turning Ideas into Impactful Realities <br /> Where Vision Meets Seamless Execution" 
  subheading="Our philosophy is simple: we combine top-tier talent with robust processes to deliver infrastructure that truly scales."
  challenges={executionFeatures}
/>

   <UseableFaqSection
  faqTitle="Frequently Asked Questions" 
  faqs={ executionFaqs  }
  />

    </div>
  )
}
