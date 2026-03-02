import React from 'react'
 import { 
  BsDatabaseFillGear,   
  BsCpuFill,            
  BsGearWideConnected, 
  BsBarChartLineFill, 
  BsGraphUpArrow,       
  BsShieldLockFill,
    BsRocketTakeoff,     
  BsPiggyBank,          
  BsLightningCharge,    
  BsEmojiSmile,         
  BsBoundingBoxCircles,
  
  BsCpu,                
  BsCheck2Circle,       
  BsEye,                
  BsBarChartSteps,      
  BsHeadset       
} from "react-icons/bs";
import ReuseCard from '../../components/ReuseCard/ReuseCard';
import ChallengeGrid from '../../components/Challange/ChallengeGrid';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import UseableFaqSection from '../../components/Useable-faq-section/UseableFaqSection'
export default function CloudIntelligenceAnalytics() {
   

const dataAnalyticsData = [
  {
    icon: <BsDatabaseFillGear />,
    title: "Data Warehousing & ETL Solutions",
    desc: "Cloud-based storage coupled with robust ETL pipelines facilitates the extraction, transformation, and loading of massive data volumes for superior analysis."
  },
  {
    icon: <BsCpuFill />,
    title: "Big Data Processing (Hadoop & Spark)",
    desc: "Leverage the power of Apache Hadoop and Spark in the cloud to store and process complex big data sets with high-speed computational efficiency."
  },
  {
    icon: <BsGearWideConnected />,
    title: "AI & Machine Learning Deployment",
    desc: "Accelerate the speed of AI/ML model deployment and implementation using scalable cloud resources tailored for advanced algorithmic training."
  },
  {
    icon: <BsBarChartLineFill />,
    title: "Real-time Data Analytics & Visualization",
    desc: "Instantly visualize cloud-processed data through dynamic dashboards, enabling immediate data-driven decision-making across the organization."
  },
  {
    icon: <BsGraphUpArrow />,
    title: "Predictive Analytics & Insights",
    desc: "Transform historical data into future trends using cloud-powered predictive modeling to optimize strategic business outcomes."
  },
  {
    icon: <BsShieldLockFill />,
    title: "Data Security & Privacy Solutions",
    desc: "Ensure enterprise-grade security and privacy for sensitive data with robust mechanisms that guarantee compliance with global regulatory standards."
  }
];


const dataOpportunities = [
  {
    icon: <BsRocketTakeoff />,
    title: "Increased Productivity & Efficiency",
    desc: "Cloud intelligence assists in re-engineering processes and replacing manual roles with automation, making operations more productive."
  },
  {
    icon: <BsPiggyBank />,
    title: "Lower Cost & Reduced Manual Effort",
    desc: "Utilizing cloud-based analytics lowers overhead expenses and decreases manual workloads, significantly enhancing operational efficiency."
  },
  {
    icon: <BsCpuFill />,
    title: "Streamline Business Processes",
    desc: "Cloud analytics are deeply integrated into business systems, processing data within operations to eliminate delays and optimize workflows."
  },
  {
    icon: <BsLightningCharge />,
    title: "Faster Time-to-Market",
    desc: "Cloud intelligence fast-tracks design and construction phases by enabling rapid, data-driven decisions that eliminate long development cycles."
  },
  {
    icon: <BsEmojiSmile />,
    title: "Elevated Customer Satisfaction",
    desc: "Businesses can deliver personalized customer experiences through cloud analytical intelligence, increasing loyalty and retention levels."
  },
  {
    icon: <BsBoundingBoxCircles />,
    title: "Enhanced Scalability & Flexibility",
    desc: "Cloud-delivered analytics allow businesses to easily scale operations and accommodate demand changes, enhancing overall adaptability."
  }
];


const dataFeatures = [
  {
    icon: <BsGraphUpArrow />,
    title: "Predictive Analytics",
    desc: "Utilize AI and ML technologies to foresee future trends, gaining operational efficiency to remain competitive in the market."
  },
  {
    icon: <BsCpu />,
    title: "Powerful Data Processing",
    desc: "Process massive volumes of data at high speeds using cloud analytics to extract meaningful and useful information instantly."
  },
  {
    icon: <BsCheck2Circle />,
    title: "Actionable Results",
    desc: "Transform raw data into strategic insights that improve reasoning and further your organization's core activities."
  },
  {
    icon: <BsEye />,
    title: "End-to-End Data Visibility",
    desc: "Monitor data movement across multiple sources and touchpoints to maintain complete control over your entire data lifecycle."
  },
  {
    icon: <BsBarChartSteps />,
    title: "Real-Time Reporting",
    desc: "Generate live reports and visualizations to monitor KPIs, analyze trends, and improve operational efficiency on the fly."
  },
  {
    icon: <BsHeadset />,
    title: "24/7 Customer Support",
    desc: "Round-the-clock support ensuring cloud service features are optimized, with prompt issue resolution and constant system surveillance."
  }
];
const dataAnalyticsFaqs = [
  {
    question: "What is the difference between a Data Warehouse and a Data Lake?",
    answer: "A Data Warehouse stores structured data that has been processed for a specific purpose, making it ideal for business reporting. A Data Lake stores raw, unstructured data in its native format, providing more flexibility for deep data science and machine learning tasks."
  },
  {
    question: "How do your ETL solutions handle real-time data streaming?",
    answer: "We utilize modern ETL/ELT frameworks like Apache Spark and cloud-native tools to process data in real-time. This ensures that your dashboards and analytics reflect live information rather than waiting for overnight batch processing."
  },
  {
    question: "Can you integrate data from multiple sources like CRM, ERP, and Social Media?",
    answer: "Yes, our cloud-native data solutions are designed for seamless integration. We build custom pipelines that pull data from various APIs, on-premise databases, and third-party platforms into a single, unified source of truth."
  },
  {
    question: "How do you ensure the security of sensitive business data?",
    answer: "Security is built into every layer. We implement data encryption at rest and in transit, multi-factor authentication (MFA), and role-based access control (RBAC) to ensure that only authorized personnel can access specific data sets, maintaining full compliance with GDPR and HIPAA."
  },
  {
    question: "Is Big Data processing cost-effective for medium-sized businesses?",
    answer: "Absolutely. With cloud computing, you only pay for the resources you use. We optimize your data architecture to scale up during heavy processing and scale down during idle times, making high-level analytics affordable for businesses of all sizes."
  }
];
  return (
    <div>
        <ReuseCard 
        heading="Unlock Actionable Insights <br /> with Cloud-Native Data Solutions" 
        items={dataAnalyticsData} 
      />
      <FeatureSection 
        heading="Harness the Power of <br /> Cloud Data Intelligence" 
        features={dataFeatures} 
      />

      <ChallengeGrid 
        heading="Transforming Data into <br /> Strategic Opportunities" 
        challenges={dataOpportunities} 
      />
          <UseableFaqSection
  faqTitle="Frequently Asked Questions" 
  faqs={ dataAnalyticsFaqs } 
/>
   
    </div>
  )
}
