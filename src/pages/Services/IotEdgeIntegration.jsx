import React from 'react'
import ReuseCard from '../../components/ReuseCard/ReuseCard';
  import { 
  BsCpu,                
  BsLightningCharge,    
  BsShieldLock,         
  BsDatabaseDown,       
  BsCloudCheck,        
  BsActivity,          
  BsShieldCheck,        
  BsCloudArrowUp,     
  BsDiagram3,              
               
  BsGearWideConnected ,
   BsClockHistory,       
          
  BsSpeedometer2,      
        
  BsHddNetwork  
} from "react-icons/bs";
import IoTArchitecture from '../../components/IoTArchitecture/IoTArchitecture';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import ChallengeGrid from '../../components/Challange/ChallengeGrid';
import UseableFaqSection from '../../components/Useable-faq-section/UseableFaqSection'
export default function IotEdgeIntegration() {
   

const iotEdgeData = [
  {
    icon: <BsCpu />,
    title: "Edge Device Management & Connectivity",
    desc: "Facilitate the distributed setup, governance, and networking of edge devices for efficient and holistic data transmission across the ecosystem."
  },
  {
    icon: <BsLightningCharge />,
    title: "Real-time Data Processing at the Edge",
    desc: "Execute data analytics directly on edge hardware to boost decision-making speed and eliminate latency for critical industrial operations."
  },
  {
    icon: <BsShieldLock />,
    title: "Edge Security & Compliance",
    desc: "Implement robust security controls at the edge to enhance device integrity and ensure data remains protected from evolving cyber threats."
  },
  {
    icon: <BsDatabaseDown />,
    title: "IoT Data Storage & Processing",
    desc: "Strategically manage data produced by IoT systems using a hybrid approach of edge and central processing to maximize performance."
  },
  {
    icon: <BsCloudCheck />,
    title: "Cloud & On-premises Integration",
    desc: "Seamlessly link edge devices with cloud or on-premise systems without quality loss, allowing for infinite system scalability."
  },
  {
    icon: <BsActivity />,
    title: "Monitoring & Analytics for Edge",
    desc: "Utilize advanced diagnostic tools to monitor, assess, and provide valuable real-time insights for all distributed edge devices."
  }
];


const iotCapabilities = [
  {
    icon: <BsLightningCharge/>,
    title: "Real-Time Data Processing",
    desc: "Employs instant processing of data in all its locations, enhancing decision-making speed without dependence on a central point."
  },
  {
    icon: <BsShieldCheck />,
    title: "Enhanced Data Security",
    desc: "Protects sensitive data with high-end security measures and encryption directly on the user edge."
  },
  {
    icon: <BsCloudArrowUp />,
    title: "Edge-to-Cloud Synchronization",
    desc: "Seamlessly integrates edge devices with cloud systems to allow efficient sharing and storage of information."
  },
  {
    icon: <BsDiagram3/>,
    title: "AI and ML Capabilities at the Edge",
    desc: "Processes advanced AI and machine learning models nearer to the devices for superior IoT system functioning."
  },
  {
    icon: <BsCpu />,
    title: "Low Latency Communication",
    desc: "Delivers immense communication speed to avoid interruptions and ensure the smooth running of IoT systems."
  },
  {
    icon: <BsGearWideConnected />,
    title: "Customizable Edge Gateways",
    desc: "Provides application-specific edge gateway variants tailored for a myriad of diverse industry verticals."
  }
];



const iotTimelineData = [
  {
    icon: <BsClockHistory />,
    title: "Reduced Latency",
    desc: "Processing data in an edge network reduces waiting time, leading to quicker and instant decision-making processes."
  },
  {
    icon: <BsCpu />,
    title: "Facilitates AI and ML at the Edge",
    desc: "Deploying Edge AI capabilities for preventive maintenance, real-time anomaly detection, and advanced automation."
  },
  {
    icon: <BsSpeedometer2 />,
    title: "Improved Device Performance",
    desc: "Performing operations at the data source increases the native capabilities and overall effectiveness of IoT devices."
  },
  {
    icon: <BsActivity />,
    title: "Faster Response Times",
    desc: "Enables smart devices to engage in near real-time, which is paramount for self-driving cars and smart healthcare systems."
  },
  {
    icon: <BsHddNetwork />,
    title: "Better Bandwidth Management",
    desc: "Local processing minimizes the volume of data transferred, optimizing network usage and reducing operational costs."
  }
];

const iotEdgeFaqs = [
  {
    question: "What is the primary difference between Cloud IoT and Edge IoT?",
    answer: "Cloud IoT sends all data to a central server for processing, while Edge IoT processes data locally near the source. This significantly reduces latency, saves bandwidth, and allows for real-time decision-making without waiting for cloud round-trips."
  },
  {
    question: "How does Edge Integration handle connectivity failures or internet outages?",
    answer: "Our Edge solutions feature 'Offline Capability,' allowing devices to continue local processing and data logging even when the internet is unstable. Once the connection is restored, the system automatically synchronizes the data with the central cloud."
  },
  {
    question: "Is data security compromised when processed at the Edge?",
    answer: "On the contrary, Edge processing can be more secure. By filtering sensitive data locally before sending it to the cloud, we reduce the attack surface. We implement multi-layered security, including hardware-level encryption and secure boot protocols."
  },
  {
    question: "Can we deploy advanced AI and Machine Learning models on Edge hardware?",
    answer: "Yes, we specialize in 'Edge AI.' We deploy optimized, lightweight ML models directly onto edge gateways to perform real-time tasks like predictive maintenance, anomaly detection, and facial recognition without needing a cloud connection."
  },
  {
    question: "Which industries benefit most from IoT Edge Integration?",
    answer: "Industries requiring immediate response times benefit most, such as Smart Manufacturing (Industry 4.0), Healthcare (Remote Patient Monitoring), Autonomous Vehicles, and Smart Grid management where even a millisecond delay can be critical."
  }
];
  return (
    <div>
<ReuseCard 
        heading="Bridge the Gap Between <br /> Hardware and Intelligence" 
        items={iotEdgeData}
        />
        <IoTArchitecture />
         <FeatureSection
        mainTitle="Expert Solutions, Proven Results Your Success, Our Commitment"
        features={iotCapabilities}
      />
      <ChallengeGrid 
        heading="The Strategic Impact <br /> of Edge Computing" 
        challenges={iotTimelineData} 
      />
      <UseableFaqSection
  faqTitle="Frequently Asked Questions" 
  faqs={iotEdgeFaqs} 
/>
      
    </div>
  )
}
