import React from 'react'
   import { 
  BsShieldCheck,      
  BsSpeedometer2,      
  BsLifePreserver,      
  BsCpu,                
  BsGraphUp,            
  BsDiagram3,
    BsExclamationTriangle, 
  BsLock,               
 BsGem,                
  BsShieldLock,        
  BsHeadset,            
  BsAward,              
  BsRocketTakeoff,
  BsFolderX,            
  BsGearWide           
} from "react-icons/bs";
import ReuseCard from '../../components/ReuseCard/ReuseCard';
import ChallengeGrid from '../../components/Challange/ChallengeGrid';
import FeatureGrid from '../../components/FeatureGrid/FeatureGrid';
import UseableFaqSection from '../../components/Useable-faq-section/UseableFaqSection'

export default function DatabaseAdministrationOptimization() {
 
const dbAdminServices = [
  {
    icon: <BsSpeedometer2 />,
    title: "Performance Tuning & Optimization",
    desc: "We eliminate database lag by optimizing slow queries, fine-tuning indexes, and reconfiguring server parameters for peak performance."
  },
  {
    icon: <BsShieldCheck />,
    title: "24/7 Proactive Monitoring",
    desc: "Real-time health checks of your database clusters to identify and resolve issues before they impact your end-users."
  },
  {
    icon: <BsLifePreserver />,
    title: "Automated Backup & Recovery",
    desc: "Implementing robust Point-In-Time Recovery (PITR) strategies ensuring your data is always backed up and restorable within minutes."
  },
  {
    icon: <BsCpu />,
    title: "Security Hardening & Patching",
    desc: "We keep your database engines updated with the latest security patches and enforce strict IAM roles to prevent unauthorized access."
  },
  {
    icon: <BsDiagram3 />,
    title: "High Availability (HA) Setup",
    desc: "Configuring master-slave replication, multi-AZ deployments, and failover clusters to ensure 99.99% database uptime."
  },
  {
    icon: <BsGraphUp />,
    title: "Capacity Planning & Scaling",
    desc: "Analyzing data growth patterns to proactively scale storage and compute resources before they hit their limits."
  }
];


const dbAdminChallenges = [
  {
    icon: <BsGearWide/>,
    title: "Unpredictable Latency",
    desc: "High query response times can frustrate users. We pinpoint long-running queries and optimize them to restore speed."
  },
  {
    icon: <BsExclamationTriangle />,
    title: "Unexpected Downtime",
    desc: "A crashed database means a halted business. Our failover strategies ensure your services stay online even during hardware failure."
  },
  {
    icon: <BsLock />,
    title: "Data Integrity & Security",
    desc: "Managing access in a growing team is hard. We implement Row-Level Security and masking to protect sensitive customer data."
  },
  {
    icon: <BsFolderX />,
    title: "Failed Backup Validations",
    desc: "A backup is useless if it doesn't restore. We perform regular recovery drills to ensure your data is actually safe."
  },
  {
    icon: <BsGearWide />,
    title: "Resource Over-Provisioning",
    desc: "Paying for cloud resources you don't use? We right-size your database instances to save costs without losing performance."
  }
];
const dbAdminFaqs = [
  {
    question: "How do you optimize a database that is already live?",
    answer: "We use non-blocking profiling tools to analyze live traffic, identify the heaviest queries, and apply optimizations like indexing or query refactoring without taking the database offline."
  },
  {
    question: "Do you support on-premise, cloud, and hybrid databases?",
    answer: "Yes. Whether your database is on a physical server, AWS RDS, Azure SQL, or a hybrid setup, our team can manage and optimize it seamlessly."
  },
  {
    question: "What is your strategy for database security?",
    answer: "We follow a multi-layer approach: network isolation (VPC), data encryption, multi-factor authentication, and regular automated vulnerability scanning."
  },
  {
    question: "How do you handle database scaling during high-traffic events?",
    answer: "We implement vertical scaling (upgrading hardware) or horizontal scaling (adding read-replicas) to distribute the load across multiple instances."
  },
  {
    question: "Can you help with database version upgrades?",
    answer: "Absolutely. We perform dry runs on staging environments to ensure compatibility before migrating your production data to a newer, more secure version."
  }
];


const dbFeatureGridData = [
  {
    icon: <BsGem />,
    title: "Highest Quality Work",
    desc: "We ensure every index, schema design, and query optimization meets enterprise-grade standards for long-term stability.",
    link: "/quality-standards"
  },
  {
    icon: <BsShieldLock />,
    title: "Advanced Security",
    desc: "Your data is protected with high-tech standards, including encryption at rest, in transit, and strict IAM-based access controls.",
    link: "/services/security"
  },
  {
    icon: <BsHeadset />,
    title: "Supportive Communication",
    desc: "Get 24/7 personalized support. Our DBAs work as an extension of your team to resolve critical issues in real-time.",
    link: "/contact"
  },
  {
    icon: <BsCpu />,
    title: "Advanced Technology",
    desc: "We leverage the latest database engines (PostgreSQL 16+, SQL Server 2022) and AI-driven tuning tools for maximum efficiency.",
    link: "/tech-stack"
  },
  {
    icon: <BsAward />,
    title: "Proven Expertise",
    desc: "With years of experience managing terabytes of production data, we streamline workflows while delivering reliable solutions.",
    link: "/case-studies"
  },
  {
    icon: <BsRocketTakeoff />,
    title: "Faster Database Delivery",
    desc: "We reduce application latency and time-to-market by ensuring your data layer is always optimized and ready for scale.",
    link: "/solutions/performance"
  }
];
  return (
    <div>
      <ReuseCard 
                 heading="Core Admin Services." 
                 items={dbAdminServices}
                 />

                    <ChallengeGrid 
        heading="Common DB Problems." 
        challenges={dbAdminChallenges  } 
      />
              <FeatureGrid 
  heading="VertexPro Core Strengths" 
  features={dbFeatureGridData}
/>
           <UseableFaqSection
  faqTitle="Frequently Asked Questions" 
  faqs={ dbAdminFaqs }
  />
    </div>
  )
}
