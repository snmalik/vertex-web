import React from 'react'
    import { 
  BsBoxSeam,            
  BsGrid1X2,         
  BsFileEarmarkZip,     
  BsArrowRepeat,       
  BsShieldCheck,        
  BsDiagram3,  
    BsCpu,               
  BsHeadset,            
  BsAward,              
  BsGraphUpArrow,      
  BsLifePreserver,     
  BsInfinity  ,
            
  BsLightningCharge,    
      
  BsShieldPlus       
} from "react-icons/bs";
import ReuseCard from '../../components/ReuseCard/ReuseCard';
import DevOpsFlow from '../../components/DevopsFlow/DevOpsFlow';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import ChallengeGrid from '../../components/Challange/ChallengeGrid';
import UseableFaqSection from '../../components/Useable-faq-section/UseableFaqSection'
export default function ContainerizationOrchestrations() {



const containerServicesData = [
  {
    icon: <BsBoxSeam />,
    title: "Containerization of Legacy Applications",
    desc: "Modernize legacy applications through containerization to achieve high portability, seamless scalability, and significantly faster deployment cycles."
  },
  {
    icon: <BsGrid1X2 />,
    title: "Kubernetes Deployment & Management",
    desc: "Leverage Kubernetes for automated, holistic orchestration of your applications across diverse and complex infrastructure environments."
  },
  {
    icon: <BsFileEarmarkZip />,
    title: "Helm Charts for Application Packaging",
    desc: "Simplify Kubernetes deployments with Helm, ensuring consistent packaging, configuration management, and version control for all your apps."
  },
  {
    icon: <BsArrowRepeat />,
    title: "Auto-Scaling & Load Balancing",
    desc: "Optimize resource usage for high availability and peak performance through automated scaling and intelligent load balancing under varied traffic."
  },
  {
    icon: <BsShieldCheck />,
    title: "Secure Container Image Management",
    desc: "Implement rigorous security for your container registry, building integrity and safety into every phase of the image lifecycle."
  },
  {
    icon: <BsDiagram3 />,
    title: "Multi-Cluster Orchestration Strategies",
    desc: "Deploy fault-tolerant management strategies for multiple clusters to ensure optimal resource utilization and high performance in variable environments."
  }
];


const containerFeatures = [
  {
    icon: <BsCpu />,
    title: "Advanced Technologies",
    desc: "We are adept in using the industry's most advanced containerization and orchestration tools, including Docker, Kubernetes, and Docker Swarm, ensuring your applications are managed with the best-in-class tech stack."
  },
  {
    icon: <BsHeadset />,
    title: "Reliable Support & Monitoring",
    desc: "We provide 24/7 support and application monitoring for your containerized ecosystem, tackling problems before they occur and tracking performance in real-time."
  },
  {
    icon: <BsAward />,
    title: "Proven Track Record",
    desc: "With extensive experience across multiple sectors, we have a long-standing practice of developing scalable, effective, and high-speed containerized applications."
  },
  {
    icon: <BsGraphUpArrow />,
    title: "Continuous Improvement",
    desc: "Our team ensures there is no stagnation in adoption; we constantly evolve our orchestration strategies so you always benefit from the latest industry approaches."
  },
  {
    icon: <BsLifePreserver />,
    title: "End-to-End Support",
    desc: "From primary consultation and architecture design to implementation and resource optimization, we ensure your containerization journey is seamless and stress-free."
  },
  {
    icon: <BsInfinity />,
    title: "Seamless DevOps Integration",
    desc: "Our services integrate perfectly with your established DevOps pipeline, focusing on CI/CD to enhance teamwork and significantly shorten delivery cycles."
  }
];


const containerBenefits = [
  {
    icon: <BsBoxSeam />,
    title: "Skillful Resource Utilization",
    desc: "Maximize hardware efficiency by packaging all application dependencies together, leading to rapid deployment and effortless scaling."
  },
  {
    icon: <BsLightningCharge />,
    title: "Shorter Lead Time to Market",
    desc: "Streamline development cycles to release new features, updates, and patches in record time, making your business more agile."
  },
  {
    icon: <BsShieldPlus />,
    title: "Better Fault Tolerance",
    desc: "Ensure high availability with automated failover systems and self-healing processes that minimize downtime and service interruptions."
  },
  {
    icon: <BsArrowRepeat />,
    title: "Automatic Scaling",
    desc: "Implement intelligent auto-scaling strategies that adjust resources based on real-time traffic without manual intervention."
  },
  {
    icon: <BsInfinity />,
    title: "Integrated DevOps Synergy",
    desc: "Harness the power of CI/CD pipelines to support continuous updating and seamless collaboration between dev and ops teams."
  },
  {
    icon: <BsShieldCheck />,
    title: "Enterprise-Grade Security",
    desc: "Deploy with confidence using image scanning, Role-Based Access Control (RBAC), and advanced network segmentation."
  }
];
const containerFaqs = [
  {
    question: "How does containerization differ from traditional virtualization?",
    answer: "Traditional virtualization (VMs) runs a full OS on top of hardware, which is resource-heavy. Containerization (like Docker) shares the host OS kernel, making containers much more lightweight, faster to start, and highly portable across different cloud environments."
  },
  {
    question: "Why do we need Kubernetes if we are already using Docker?",
    answer: "Docker is used to create and run individual containers, while Kubernetes is an orchestration tool used to manage hundreds or thousands of containers. It handles automated scaling, self-healing (restarting failed containers), and load balancing across clusters."
  },
  {
    question: "Is it possible to containerize old legacy applications?",
    answer: "Yes, we specialize in 'Legacy Modernization.' We wrap older applications into containers to provide them with a modern environment, enabling them to run on current cloud infrastructure without needing a complete code rewrite."
  },
  {
    question: "How do you ensure security within a Kubernetes cluster?",
    answer: "We implement a multi-layered security approach: Container Image Scanning for vulnerabilities, Role-Based Access Control (RBAC) to limit permissions, Network Policies for segmentation, and secrets management to keep sensitive data encrypted."
  },
  {
    question: "What is the role of Helm Charts in the deployment process?",
    answer: "Helm acts as a package manager for Kubernetes. It allows us to define, install, and upgrade even the most complex Kubernetes applications using reusable 'charts,' ensuring consistency across development, staging, and production environments."
  }
];
  return (
    <div>
      <ReuseCard 
           heading="Future-Proof Your Business with Perfect Solutions" 
           items={containerServicesData} 
         />
         <DevOpsFlow />
         <FeatureSection 
        mainTitle="Why Partner with Us for Container Orchestration?" 
        features={containerFeatures} 
      />
      <ChallengeGrid 
        heading="Transforming Data into <br /> Strategic Opportunities" 
        challenges={ containerBenefits} 
      />
      <UseableFaqSection
  faqTitle="Frequently Asked Questions" 
  faqs={ containerFaqs }
  />
   
   
    </div>
  )
}
