
import React from 'react';
 import { 
  BsShieldShaded,       // Real-time Monitoring
  BsSearch,             // Threat Hunting
  BsLightningCharge,    // Rapid Response
  BsCpu,                // Behavioral Analysis
  BsDeviceSsd,          // Endpoint Visibility
  BsBug,
   BsExclamationOctagon, // Advanced Threats
  BsEyeSlash,           // Blind Spots
  BsAlarm,              // Alert Fatigue
  BsLaptop,             // Remote Work Risks
  BsShieldX                   // Malware Analysis
} from "react-icons/bs";
import ReuseCard from '../../components/ReuseCard/ReuseCard';
import ChallengeGrid from '../../components/Challange/ChallengeGrid';
import UseableFaqSection from '../../components/Useable-faq-section/UseableFaqSection'

const EndpointDetectionAndResponse = () => {
 

const edrServiceData = [
  {
    icon: <BsShieldShaded />,
    title: "Continuous Real-Time Monitoring",
    desc: "We provide 24/7 visibility into all endpoint activities, capturing system-level events to detect suspicious behavior as it happens."
  },
  {
    icon: <BsCpu />,
    title: "AI-Driven Behavioral Analysis",
    desc: "Going beyond simple signatures, our EDR uses machine learning to identify 'fileless' malware and zero-day attacks based on unusual patterns."
  },
  {
    icon: <BsSearch />,
    title: "Proactive Threat Hunting",
    desc: "Our security experts don't just wait for alerts. We proactively hunt for hidden indicators of compromise (IoCs) within your network."
  },
  {
    icon: <BsLightningCharge />,
    title: "Automated Incident Response",
    desc: "Instantly isolate infected endpoints from the network to prevent lateral movement, while automatically terminating malicious processes."
  },
  {
    icon: <BsDeviceSsd />,
    title: "Deep Endpoint Visibility",
    desc: "Get a complete forensic history of every process, file change, and network connection on every laptop, server, and workstation."
  },
  {
    icon: <BsBug />,
    title: "Root Cause Analysis",
    desc: "We don't just delete the threat; we trace it back to the entry point to understand 'how' it got in and 'what' it tried to touch."
  }
];


const edrChallenges = [
  {
    icon: <BsExclamationOctagon />,
    title: "Sophisticated Fileless Attacks",
    desc: "Modern hackers use built-in system tools (PowerShell, WMI) to stay hidden. Traditional antivirus can't see them, but our EDR can."
  },
  {
    icon: <BsEyeSlash />,
    title: "Visibility Blind Spots",
    desc: "Unmanaged devices or remote endpoints often go unnoticed. We ensure every device, no matter where it is, is under our radar."
  },
  {
    icon: <BsShieldX />,
    title: "Ransomware & Data Wiper Risks",
    desc: "Ransomware moves fast. Our EDR identifies the encryption behavior early and halts the process before your data is lost."
  },
  {
    icon: <BsAlarm />,
    title: "Overwhelming Alert Fatigue",
    desc: "IT teams often ignore alerts due to high volume. We filter the noise and only escalate high-fidelity, actionable threats."
  },
  {
    icon: <BsLaptop />,
    title: "The Remote Workforce Gap",
    desc: "With employees working from home, the perimeter is gone. We protect endpoints directly, ensuring security follows the user everywhere."
  }
];
const edrFaqs = [
  {
    question: "Is EDR the same as an Antivirus (AV)?",
    answer: "No. Traditional AV looks for known signatures of malware. EDR is much more advanced—it monitors behavior and can detect new, unknown threats (Zero-day attacks) that haven't been seen before."
  },
  {
    question: "Will EDR slow down my employees' computers?",
    answer: "Our EDR agents are lightweight and designed to consume minimal CPU and RAM. They perform most of the heavy analysis in the cloud, ensuring no impact on user productivity."
  },
  {
    question: "How does EDR handle a detected threat automatically?",
    answer: "Once a high-risk threat is detected, the EDR can automatically isolate the device from the network, kill the malicious process, and even roll back changed files to their original state."
  },
  {
    question: "Can EDR protect servers as well as laptops?",
    answer: "Yes. Our EDR solutions are cross-platform and provide the same level of deep protection for Windows, macOS, Linux, and cloud-based virtual servers."
  },
  {
    question: "Do you provide managed EDR services?",
    answer: "Absolutely. We don't just sell the tool; our SOC (Security Operations Center) team can monitor the alerts for you and respond to incidents 24/7."
  }
];
  return (
  <div>
    <ReuseCard 
            heading="Transform Your Development Pipeline <br /> with DevOps Mastery" 
            items={ edrServiceData}
            />

       
        <ChallengeGrid 
        heading="Transforming Data into <br /> Strategic Opportunities" 
        challenges={  edrChallenges } 
      />

       <UseableFaqSection
  faqTitle="Frequently Asked Questions" 
  faqs={ edrFaqs  }
  />
  </div>
  );
};

export default EndpointDetectionAndResponse;