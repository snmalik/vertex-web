import React from 'react'
import ReuseCard from '../../components/ReuseCard/ReuseCard';
import Innovation from '../../components/Inovation/Inovation';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import ChallengeGrid from '../../components/Challange/ChallengeGrid';
import UseableFaqSection from '../../components/Useable-faq-section/UseableFaqSection'

import { 
  BsCloudArrowUp,  
  BsLayers,       
  BsGearWideConnected,
  BsLightningCharge,
  BsActivity,    
  BsPuzzle,
  BsGraphDownArrow, 
  BsShieldCheck,      
  BsPiggyBank,      
  BsFileEarmarkBarGraph, 
  BsRocketTakeoff, 
  BsHeadset,
  BsPersonExclamation, 
  BsDiagram3, 
  BsShieldSlash, 
  BsRecycle, 
  BsCashStack, 
  BsCloudSlash, 
  BsFileEarmarkLock, 
  BsLightbulbOff        
} from "react-icons/bs";

const infrastructureData = [
  {
    icon: <BsCloudArrowUp />,
    title: "Strategic Cloud Migration",
    desc: "With business process considerations in the forefront, strategize and implement a workable plan for the migration of business processes to the cloud."
  },
  {
    icon: <BsLayers />,
    title: "Advanced Cloud Architecture",
    desc: "Employ the latest technologies to allow the design of cloud solutions that are elastic, secure, and cost-effective to operate on."
  },
  {
    icon: <BsGearWideConnected />,
    title: "Automation Excellence",
    desc: "Introduce smart automation to enhance operational effectiveness and minimize errors by automating deployment, workflow, and infrastructure."
  },
  {
    icon: <BsLightningCharge />,
    title: "Cloud Performance Tuning",
    desc: "Cost rationalization and performance assessment of cloud provisioned resources by periodic configuration evaluation and adjustment."
  },
  {
    icon: <BsActivity />,
    title: "Continuous Cloud Monitoring",
    desc: "Put in place monitoring tools and processes to ensure issues are dealt with in good time with high continuity and security compliance."
  },
  {
    icon: <BsPuzzle />,
    title: "Seamless Cloud Integration",
    desc: "Easily bring on board relevant cloud services to existing systems to create an efficient connection across environments."
  }
];
const manageLogos1 = [
  { name: 'Apple', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg' },
  { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Meta', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { name: 'Terraform', url: 'https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg' },
  { name: 'Kubernetes', url: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg' },
];


const infrastructureBenefits = [
  {
    icon: <BsGraphDownArrow />,
    title: "40% Lowered Cloud Usage Cost",
    desc: "Cost-saving measures include cloud usage optimization, reducing excess resources, and adopting cheaper available cloud storage."
  },
  {
    icon: <BsShieldCheck />,
    title: "Compliance with Industry Standard",
    desc: "Ensuring standards like HIPAA/HITECH are met, protecting documents from violations that may be costly to the company."
  },
  {
    icon: <BsPiggyBank />,
    title: "1.5-3x Savings on Infrastructure Management",
    desc: "Infrastructure costs are reduced by fine-tuning utilization, automating activities, and providing scalable infrastructure."
  },
  {
    icon: <BsFileEarmarkBarGraph />,
    title: "Regular Transparent Reporting",
    desc: "Monthly transparent reporting including performance and cost data, allowing for data-driven business decisions."
  },
  {
    icon: <BsRocketTakeoff />,
    title: "Efficient IT Services Delivery",
    desc: "Facilitates the delivery of IT services with minimal interruptions in service provision and zero downtime."
  },
  {
    icon: <BsHeadset />,
    title: "24/7 Customer Support",
    desc: "Support is available 24 hours a day, 7 days a week so your cloud-based infrastructure stays secure and efficient."
  }
];

const manageLogos2 = [
  { name: 'Dell', url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg' },
  { name: 'HP', url: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg' },
  { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Intel', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg' },
  { name: 'Cisco', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
  { name: 'Prometheus', url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg' },
  { name: 'Grafana', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg' },
];



const cloudChallenges = [
  {
    icon: <BsPersonExclamation />,
    title: "Lack of Skilled Professionals",
    desc: "Inadequate expertise leads to poor resource allocation, making manual cloud management a costly and inefficient process."
  },
  {
    icon: <BsDiagram3 />,
    title: "Increased Infrastructure Complexity",
    desc: "Managing multi-layered services across various platforms often leads to integration gaps and operational friction."
  },
  {
    icon: <BsShieldSlash />,
    title: "Heightened Security Risks",
    desc: "Without robust encryption and protocols, cloud-stored data remains vulnerable to breaches and sophisticated cyber attacks."
  },
  {
    icon: <BsRecycle />,
    title: "Inefficient Resource Management",
    desc: "Improper deployment techniques result in resource wastage, causing shortages during critical peak performance periods."
  },
  {
    icon: <BsCashStack />,
    title: "Uncontrolled Cloud Expenditure",
    desc: "Mismanagement of idle resources and lack of granular control often lead to skyrocketing monthly cloud bills."
  },
  {
    icon: <BsCloudSlash />,
    title: "Downtime & Service Gaps",
    desc: "Frequent interruptions and lack of redundancy impede business productivity and degrade the overall customer experience."
  },
  {
    icon: <BsFileEarmarkLock />,
    title: "Complex Compliance Demands",
    desc: "Failure to align with industry laws (like HIPAA or GDPR) can result in heavy legal penalties and financial loss."
  },
  {
    icon: <BsLightbulbOff />,
    title: "Missed Performance Gains",
    desc: "A lack of real-time monitoring means organizations fail to identify key opportunities for cost and speed optimization."
  }
];
const infrastructureFaqs = [
  {
    question: "What services are included in your Cloud Infrastructure management?",
    answer: "Our services encompass 24/7 monitoring, cost optimization, security patching, auto-scaling configuration, and comprehensive network management to ensure your cloud environment remains resilient and high-performing."
  },
  {
    question: "Can you migrate our existing on-premise infrastructure to the cloud?",
    answer: "Yes, we specialize in seamless cloud migrations. We strategize and execute the transfer of your physical servers and databases to platforms like AWS, Azure, or Google Cloud with zero to minimal downtime."
  },
  {
    question: "How do managed services help in reducing our cloud expenditure?",
    answer: "We analyze your usage patterns to identify idle resources and optimize instance sizing. By implementing automation and right-sizing, we typically help clients save between 30% to 40% on their monthly cloud bills."
  },
  {
    question: "How do you ensure data security and regulatory compliance?",
    answer: "We implement industry-standard security protocols, including end-to-end encryption, advanced firewalls, and strict Identity and Access Management (IAM) policies, ensuring compliance with standards like HIPAA, GDPR, and SOC2."
  },
  {
    question: "What kind of support can we expect if a critical issue arises?",
    answer: "We provide 24/7 dedicated support. Our automated monitoring tools alert our technical team in real-time, allowing us to proactively resolve incidents before they impact your business operations."
  },
  {
    question: "Do you support multi-cloud or hybrid cloud environments?",
    answer: "Absolutely. We are experts in managing hybrid and multi-cloud strategies (e.g., combining AWS and Azure). This approach ensures you are not locked into a single vendor and provides better redundancy."
  },
  {
    question: "What is your Disaster Recovery (DR) strategy?",
    answer: "We set up automated backups and multi-region data replication. Our DR plans are designed to provide a low Recovery Time Objective (RTO), ensuring your data can be restored quickly in the event of a failure."
  },
  {
    question: "How does automation improve infrastructure reliability?",
    answer: "Through 'Infrastructure as Code' (IaC), we automate deployment and scaling. This eliminates human errors, ensures environment consistency, and allows for rapid deployment of updates."
  },
  {
    question: "Will we receive regular updates on our infrastructure performance?",
    answer: "Yes, transparency is a core value. We provide detailed monthly reports that include performance metrics, security audits, and cost analysis to help you make informed business decisions."
  },
  {
    question: "What is the pricing model for your Managed Cloud services?",
    answer: "Our pricing is flexible and depends on the scale of your infrastructure. We offer fixed monthly packages as well as customized plans tailored to your specific operational requirements."
  }
];
const CloudInfrastructure = () => {
  return (
    <div>
      <ReuseCard 
        heading="Innovation That Moves You Forward <br /> Your Business, Our Tailored Approach" 
        items={infrastructureData} 
      />
       <Innovation
        title="Elevate Your Business with Robust Cloud Infrastructure"
        description="Cloud infrastructure provides Axway Solutions secure, scalable, and high-performance cloud infrastructure solutions on AWS, Azure, Jio Azure Cloud, and GCP that are cost effective and elastic as your business grows."
        row1={manageLogos1}
        row2={manageLogos2}
        
      />

       <FeatureSection
        mainTitle="Expert Solutions, Proven Results Your Success, Our Commitment"
        features={infrastructureBenefits}
      />
      <ChallengeGrid 
        heading="Navigating the Hurdles of Modern <br />  Cloud Infrastructure" 
        challenges={cloudChallenges} 
      />
      <UseableFaqSection
  faqTitle="Frequently Asked Questions  for Cloud Infrastructure" 
  faqs={infrastructureFaqs} 
/>
    </div>
  )
}

export default CloudInfrastructure
