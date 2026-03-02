import React from 'react';
 import { 
  BsEnvelopeCheck,      // Email Authentication
  BsShieldLock,         // Phishing Protection
  BsEye,                // Threat Detection
  BsFileEarmarkLock,    // Data Leak Prevention
  BsLock,               // Encryption
  BsBuildingCheck,
    BsExclamationTriangle, // Evolving Threats
  BsPersonX,            // Human Error
  BsGearWide,           // Complex Config
  BsLightningCharge,    // Fast-Acting Attacks
  BsSearch         // Compliance
} from "react-icons/bs";
import ReuseCard from '../../components/ReuseCard/ReuseCard';
import ChallengeGrid from '../../components/Challange/ChallengeGrid';
import UseableFaqSection from '../../components/Useable-faq-section/UseableFaqSection'

const EmailSecurityPhishingProtection = () => {


const emailSecurityServices = [
  {
    icon: <BsEnvelopeCheck />,
    title: "Email Authentication (SPF, DKIM, DMARC)",
    desc: "Stop domain spoofing. We implement and manage SPF, DKIM, and DMARC records to ensure only authorized servers can send emails on your behalf."
  },
  {
    icon: <BsShieldLock />,
    title: "AI-Powered Phishing Protection",
    desc: "Detect and block sophisticated phishing attempts, business email compromise (BEC), and zero-day attacks using AI-driven behavioral analysis."
  },
  {
    icon: <BsEye />,
    title: "Advanced Threat Protection (ATP)",
    desc: "Real-time scanning of attachments and URLs to identify malware, ransomware, and malicious links before they reach the user's inbox."
  },
  {
    icon: <BsFileEarmarkLock />,
    title: "Data Loss Prevention (DLP)",
    desc: "Prevent sensitive information like credit card numbers or PII from leaving your organization via email through automated policy enforcement."
  },
  {
    icon: <BsLock />,
    title: "End-to-End Email Encryption",
    desc: "Secure your confidential communications with automated encryption, ensuring that sensitive data remains private from sender to recipient."
  },
  {
    icon: <BsBuildingCheck />,
    title: "Security Awareness Training",
    desc: "Empower your employees with phishing simulations and security training to turn your 'human layer' into a strong line of defense."
  }
];


const emailChallenges = [
  {
    icon: <BsExclamationTriangle />,
    title: "Evolving Social Engineering",
    desc: "Attackers use highly personalized 'Spear Phishing' that bypasses traditional filters. We use identity-based detection to stop these targeted attacks."
  },
  {
    icon: <BsPersonX />,
    title: "The Human Element",
    desc: "Even with the best tech, one wrong click can cause a breach. Our simulations identify high-risk users and provide targeted training."
  },
  {
    icon: <BsGearWide />,
    title: "Configuration Complexity",
    desc: "Incorrect DMARC or SPF settings can block legitimate emails. We provide expert management to ensure high deliverability with maximum security."
  },
  {
    icon: <BsSearch />,
    title: "Obfuscated Malicious Links",
    desc: "Modern malware uses 'URL rewriting' to hide. Our systems use sandboxing to test every link in a secure environment before allowing a click."
  },
  {
    icon: <BsLightningCharge />,
    title: "Business Email Compromise (BEC)",
    desc: "CEO fraud and invoice redirection attacks are fast and costly. We implement AI that flags unusual patterns in executive communication."
  }
];
const emailSecurityFaqs = [
  {
    question: "What is the difference between Spam filters and Phishing protection?",
    answer: "Spam filters block junk mail based on keywords or sender reputation. Phishing protection is far more advanced—it uses AI to detect deceptive intent, fraudulent identities, and malicious hidden code, even if the email looks perfectly normal."
  },
  {
    question: "How does DMARC help in protecting my brand's reputation?",
    answer: "DMARC allows you to tell receiving mail servers to reject any email that claims to be from you but fails authentication. This prevents hackers from using your domain to scam your customers or partners."
  },
  {
    question: "Can you protect our organization from internal 'Insider' threats?",
    answer: "Yes. Our Data Loss Prevention (DLP) tools monitor internal emails for unauthorized sharing of sensitive data, ensuring that proprietary information doesn't leave your secure network, whether intentionally or accidentally."
  },
  {
    question: "Is your solution compatible with Microsoft 365 and Google Workspace?",
    answer: "Absolutely. We specialize in adding an extra layer of 'Defense-in-Depth' to M365 and Google Workspace, filling the gaps that their built-in security sometimes misses."
  },
  {
    question: "What happens if a malicious email is detected?",
    answer: "Depending on the policy, the email is either quarantined, stripped of its malicious link/attachment, or blocked entirely. The security team and the user are notified according to your organization's protocol."
  }
];

  return (
   <div>
    <ReuseCard 
            heading="Bridge the Gap Between <br /> Hardware and Intelligence" 
            items={ emailSecurityServices}
            />
               <ChallengeGrid 
        heading="The Strategic Impact <br /> of Edge Computing" 
        challenges={emailChallenges} 
      />
      <UseableFaqSection
  faqTitle="Frequently Asked Questions" 
  faqs={emailSecurityFaqs } 
/>

   </div>
  );
};

export default EmailSecurityPhishingProtection;