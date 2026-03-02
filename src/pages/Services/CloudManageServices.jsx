import React from 'react'
import {
  BsActivity,
  BsCpu,
  BsShieldLock,
  BsCloudArrowDown,
  BsCoin,
  BsTools,
  BsHospital,
  BsHeadset,
  BsBarChartSteps, BsCashStack, BsPatchCheck, BsGearWideConnected,
} from "react-icons/bs";
import ReuseCard from '../../components/ReuseCard/ReuseCard';
import Innovation from '../../components/Inovation/Inovation';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import Timeline from '../../components/TimeLine/TimeLine';
import  UseableFaqSection from '../../components/Useable-faq-section/UseableFaqSection'

import ServiceContact from '../../components/Services-contact/ServicesContact';


const cloudManagedData = [
  {
    icon: <BsActivity />,
    title: "Cloud Monitoring and Management",
    desc: "Monitoring performance and actively managing cloud resources in all regions on a continual basis to ensure optimal performance."
  },
  {
    icon: <BsCpu />,
    title: "Automated Infrastructure Provisioning",
    desc: "Fast, automated scaling in and out of cloud-owned resources according to workloads for new and existing systems."
  },
  {
    icon: <BsCloudArrowDown />,
    title: "Backup and Disaster Recovery",
    desc: "Solutions that incorporate backup services and quick failure recovery services to protect information from unforeseen disasters."
  },
  {
    icon: <BsShieldLock />,
    title: "Security and Compliance Implementation",
    desc: "Adoption of comprehensive security measures and compliance strategies designed to safeguard cloud environment boundaries."
  },
  {
    icon: <BsCoin />,
    title: "Cloud Cost Monitoring and Optimization",
    desc: "Cost containment measures provided with frequent assessment and suggestions for effective budget provision on any platform."
  },
  {
    icon: <BsTools />,
    title: "Incident Response and Troubleshooting",
    desc: "Proactive cloud operations ensuring prompt detection and correction of operational hitches to prevent service interruption."
  },
  {
    icon: <BsShieldLock />,
    title: "Ensuring Cloud Security Compliance",
    desc: "Implement appropriate security safeguards and procedures to be in conformity with industry best practices."
  },
  {
    icon: <BsHospital />,
    title: "Financial & Healthcare Solutions",
    desc: "Deliver devoted cloud security services to address challenges of controls specific to the financial & healthcare industries."
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

const manageLogos2 = [
  { name: 'Dell', url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg' },
  { name: 'HP', url: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg' },
  { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Intel', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg' },
  { name: 'Cisco', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
  { name: 'Prometheus', url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg' },
  { name: 'Grafana', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg' },
];

const cloudProps = [
  {
    icon: <BsPatchCheck />,
    title: "Proven Expertise",
    desc: "Group of certified cloud experts in the use of the leading cloud platforms."
  },
  {
    icon: <BsShieldLock />,
    title: "Advanced Security Protocols",
    desc: "We protect your information with the best encryption technologies and security protocols in the market."
  },
  {
    icon: <BsGearWideConnected />,
    title: "Comprehensive Cloud Management",
    desc: "Cloud management is provided in its totality inclusive of all the stages of your cloud development."
  },
  {
    icon: <BsBarChartSteps />,
    title: "Proactive Monitoring",
    desc: "It's always active in order to prevent business operations from being affected by potential issues."
  },
  {
    icon: <BsCashStack />,
    title: "Cost Transparency",
    desc: "Straightforward pricing for cloud services with no unexpected charges."
  },
  {
    icon: <BsHeadset />,
    title: "24/7 Support",
    desc: "Non-stop assistance ensures cloud operations run without a hitch by resolving issues quickly."
  }
];



const cloudProcessSteps = [
  { id: "01", title: "Assessment & Planning", desc: "Establish the business requirements and design, or improve an existing cloud infrastructure for efficiencies and elasticity." },
  { id: "02", title: "Requirements Analysis", desc: "Understand and identify the clients' requirements to develop the cloud offering that best suits them" },
  { id: "03", title: "Candidate interview and shortlisting", desc: "Identify the pool of candidates qualified for the positions of cloud managers and cloud architects and select the appropriate candidate based on projects." },
  { id: "04", title: "Planning and designing", desc: "Study the needs of the client and formulate purposeful planning and extensive cloud design that addresses the intention of the clients." },
  { id: "05", title: "Sprint management", desc: "Conduct sprints in an orderly manner without compromising the timelines and completion of intended phases of development." },
  { id: "06", title: "Peer review", desc: "Carry out stringent peer review processes to maintain the standards and quality of outputs." },
  { id: "07", title: "Documentation and Hand Over", desc: "Conclude all the documents, hand over the project and get sign off from client to mark the end of the project successfully." }
];

const managedServicesFaqs = [
  {
    question: "What is the difference between Cloud Consulting and Managed Services?",
    answer: "Cloud Consulting focuses on strategy, architecture design, and planning your cloud journey. Managed Services, on the other hand, involves the day-to-day management, 24/7 monitoring, and maintenance of your cloud environment so you can focus on your core business."
  },
  {
    question: "How do you help in reducing our monthly cloud expenditure?",
    answer: "We perform continuous cost optimization by identifying underutilized resources, implementing automated scheduling, and 'right-sizing' your instances. Our proactive management typically helps clients reduce their cloud bills by 20% to 30%."
  },
  {
    question: "How are security patches and updates handled?",
    answer: "We follow a proactive security approach. Our team ensures that all OS-level patches, security configurations, and compliance updates are applied systematically without disrupting your business operations."
  },
  {
    question: "What is your response time in case of a system failure?",
    answer: "We operate based on strict Service Level Agreements (SLAs). Our 24/7 monitoring tools often detect and resolve issues before they impact your users. For critical incidents, our response team is alerted instantly for immediate remediation."
  },
  {
    question: "Can you manage our existing cloud infrastructure?",
    answer: "Yes, we specialize in taking over existing environments. We start with a comprehensive audit of your current setup on AWS, Azure, or Google Cloud, and then transition it into our managed framework for better performance and security."
  },
  {
    question: "How do you ensure data protection and disaster recovery?",
    answer: "We implement robust Backup and Disaster Recovery (DR) strategies tailored to your needs. This includes automated backups, cross-region replication, and regular recovery drills to ensure your data is safe and restorable at any time."
  }
];
const CloudManageServices = () => {
  return (
    <div>
      <ReuseCard
        heading="Managed Cloud Services for Seamless Operations"
        items={cloudManagedData}
      />
      <Innovation
        title="Optimize Your Business with Comprehensive Cloud Management"
        description="Vertex Pro executes complete segment-wise administration of the cloud ranging from AWS, Azure, Google, Digital Ocean Cloud Platforms hence offering monitoring, security, and cost management of your cloud resources"
        row1={manageLogos1}
        row2={manageLogos2}
      />
      <FeatureSection
        mainTitle="Expert Solutions, Proven Results Your Success, Our Commitment"
        features={cloudProps}
      />
      <Timeline
        sectionTitle="Turning Ideas into Action Every Step of the Way"
        steps={cloudProcessSteps}
      />
      <UseableFaqSection 
  faqTitle=" Frequently Asked Questions" 
  faqs={managedServicesFaqs} 
/>
<ServiceContact />

    </div>


  );
}

export default CloudManageServices; 