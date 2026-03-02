import React from 'react'
  import { 
  BsCloudLightning,     
  BsCpu,                
  BsLink45Deg,          
  BsDatabaseUp,         
  BsShieldLock,         
  BsCashCoin,
     BsConeStriped,        
  BsShieldX,            
  BsLayerForward,       
  BsBug,                
  BsClockHistory ,         
    BsGraphUpArrow, 
  BsCodeSquare,       
  BsShieldCheck,        
  BsTools             
} from "react-icons/bs";
import ReuseCard from '../../components/ReuseCard/ReuseCard';
import FeatureGrid from '../../components/FeatureGrid/FeatureGrid';
import ChallengeGrid from '../../components/Challange/ChallengeGrid';
import UseableFaqSection from '../../components/Useable-faq-section/UseableFaqSection'

export default function ServerlessApplicationDeployment() {
  

const serverlessServicesData = [
  {
    icon: <BsCloudLightning />,
    title: "Event-Driven Compute",
    desc: "Deploy code that triggers automatically in response to events—such as HTTP requests, file uploads, or database changes—without managing any infrastructure."
  },
  {
    icon: <BsCpu />,
    title: "AWS Lambda & Azure Functions",
    desc: "Expertise in deploying highly scalable functions across major cloud providers, ensuring seamless execution and sub-second startup times (Cold Start Optimization)."
  },
  {
    icon: <BsLink45Deg />,
    title: "API Gateway Orchestration",
    desc: "Build robust backend architectures using API Gateways to manage, secure, and scale your serverless endpoints with ease."
  },
  {
    icon: <BsDatabaseUp />,
    title: "Serverless Database Integration",
    desc: "Leverage NoSQL and SQL serverless databases like DynamoDB or Aurora Serverless that scale automatically based on your application's demand."
  },
  {
    icon: <BsShieldLock />,
    title: "Fine-Grained Security (IAM)",
    desc: "Implement the principle of least privilege with function-level IAM roles, ensuring that each part of your application has only the access it needs."
  },
  {
    icon: <BsCashCoin />,
    title: "Cost-Optimization (Pay-as-you-go)",
    desc: "Architecting your deployment to take full advantage of the serverless pricing model, eliminating costs for idle server time."
  }
];


const serverlessFeatures = [
  {
    icon: <BsCashCoin />,
    title: "Cost Effectiveness",
    desc: "You only pay for the consumption of resources during the execution of the function, thereby saving idle infrastructure costs.",
     // Read More ke liye
  },
  {
    icon: <BsGraphUpArrow />,
    title: "Scalability",
    desc: "Automatic scaling to adapt to peak workloads without human interference to ensure high performance during traffic surges.",
   
  },
  {
    icon: <BsCodeSquare />,
    title: "Flexibility in Development",
    desc: "Enables developers to code in a variety of programming languages and frameworks supported by the serverless platform.",
   
  },
  {
    icon: <BsShieldCheck />,
    title: "Security",
    desc: "The serverless model minimizes vulnerabilities by having security features and by executing within an isolated environment.",
    
  },
  {
    icon: <BsTools />,
    title: "Simplified Maintenance",
    desc: "Automatically managed infrastructure avoids hassle in updates while minimizing efforts toward server maintenance.",
   
  }
];


const serverlessChallenges = [
  {
    icon: <BsConeStriped />,
    title: "Resource Constraints",
    desc: "Serverless platforms have strict memory and payload limits. We optimize your code and architecture to ensure maximum performance within these provider-specific constraints."
  },
  {
    icon: <BsShieldX />,
    title: "Security & Multi-tenancy",
    desc: "Shared infrastructure can introduce unique risks. We implement robust IAM policies, VPC isolation, and code-level security to protect your data in a serverless environment."
  },
  {
    icon: <BsLayerForward />,
    title: "Legacy Interoperability",
    desc: "Integrating modern serverless functions with aging legacy systems can be complex. We build secure bridge APIs and middleware to ensure seamless data flow between old and new."
  },
  {
    icon: <BsBug />,
    title: "Local Debugging & Testing",
    desc: "Simulating cloud events locally is a challenge. We use tools like Serverless Offline and LocalStack to create a mirror of the production environment for reliable testing."
  },
  {
    icon: <BsClockHistory />,
    title: "Limited Execution Time",
    desc: "Functions have a 'timeout' (e.g., AWS Lambda's 15 min limit). For long-running tasks, we architect asynchronous patterns or step functions to bypass these execution limits."
  }
];
const serverlessFaqs = [
  {
    question: "Does 'Serverless' mean there are no servers involved?",
    answer: "Technically, servers still exist, but they are managed entirely by the cloud provider. You don't have to provision, patch, or scale them. You simply upload your code, and the infrastructure handles the execution and scaling automatically."
  },
  {
    question: "How does the 'Pay-as-you-go' model actually save money?",
    answer: "In traditional hosting, you pay for a server 24/7 even if no one is using it. In Serverless, you are only billed for the milliseconds your code is running. If there’s no traffic, your cost drops to zero, making it extremely cost-effective for variable workloads."
  },
  {
    question: "What is a 'Cold Start' and how do you mitigate it?",
    answer: "A cold start happens when a function is triggered after being idle, causing a slight delay in execution. We minimize this using techniques like 'Provisioned Concurrency', keeping functions warm, and optimizing the code package size for faster initialization."
  },
  {
    question: "Is Serverless suitable for long-running processes?",
    answer: "Most serverless functions (like AWS Lambda) have a timeout limit (e.g., 15 minutes). For tasks that take longer, we architect solutions using 'Step Functions' or 'Durable Functions' to break the process into smaller, manageable steps."
  },
  {
    question: "Are there any risks of Vendor Lock-in with Serverless?",
    answer: "While each provider has its own tools, we use the 'Serverless Framework' and 'OpenTelemetry' to write provider-agnostic code. This makes it much easier to migrate your application between AWS, Azure, or Google Cloud if needed."
  }
];
  return (
    <div>
      <ReuseCard heading="Turning Ambitions into Achievements<br /> with Smart Solutions"
      items={serverlessServicesData }
       />
       <FeatureGrid 
  heading="Advanced Serverless <br /> Deployment" 
  subheading="Scale your applications without managing any infrastructure."
  features={serverlessFeatures}
/>
  <ChallengeGrid 
        heading="The Strategic Impact <br /> of Edge Computing" 
        challenges={ serverlessChallenges} 
      />
          <UseableFaqSection
  faqTitle="Frequently Asked Questions" 
  faqs={serverlessFaqs} 
/>
    </div>
  )
}
