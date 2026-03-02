import React from 'react';
import ReuseCard from '../../components/ReuseCard/ReuseCard';
import ChallengeSection from '../../components/Challange/ChallengeGrid'; // Wahi timeline wala component
import FaqSection from '../../components/Useable-faq-section/UseableFaqSection';

    import { BsTruck, BsSpeedometer2, BsGear, BsShieldLock, BsBarChart, BsCheck2Circle,
  BsRecycle, BsLayers, BsShuffle, BsArrowRepeat, BsHouseCheck, BsBoxes
} from "react-icons/bs";
import { BsCheckCircleFill, BsCpu, BsDatabaseFillLock, BsCloudCheckFill, BsSearch } from 'react-icons/bs';
import MigrationFlow from '../../components/migration-flow/MigrationFlow';
import MigrationBento from '../../components/MigrationBento/MigrationBento';
import MigrationComparison from '../../components/miration-compersio/MigrationComparison'

const CloudMigration = () => {


const steps = [
  { 
    title: "Phase 01: Audit", 
    subtitle: "Discovery & Readiness", 
    icon: <BsSearch />,
    desc: "Deep-dive into legacy dependencies, application mapping, and TCO (Total Cost of Ownership) analysis."
  },
  { 
    title: "Phase 02: Design", 
    subtitle: "Cloud Landing Zone", 
    icon: <BsCpu />, 
    desc: "Architecting VPCs, IAM roles, and network security groups to create a secure enterprise landing zone."
  },
  { 
    title: "Phase 03: Migration", 
    subtitle: "Data & App Transfer", 
    icon: <BsDatabaseFillLock />, 
   desc: "Executing the move using block-level replication or database migration services (DMS) for zero data loss."
  },
  { 
    title: "Phase 04: Validation", 
    subtitle: "Testing & UAT", 
    icon: <BsCheckCircleFill />, 
    desc: "Rigorous load testing and User Acceptance Testing (UAT) to ensure performance benchmarks are met."
  },
  { 
    title: "Phase 05: Hypercare", 
    subtitle: "Go-Live & Support", 
    icon: <BsCloudCheckFill />, 
  desc: "24/7 post-migration monitoring and continuous performance tuning for the newly migrated workload."
  }
];

// Section 1: Migration Strategies (Use with ReuseCard)
const migrationStrategies = [
  {
    icon: <BsTruck />,
    title: "Rehosting (Lift & Shift)",
    desc: "Moving your applications to the cloud as-is with minimal changes for the fastest transition."
  },
  {
    icon: <BsLayers />,
    title: "Replatforming",
    desc: "Making minor adjustments to take advantage of cloud features without changing the core architecture."
  },
  {
    icon: <BsShuffle />,
    title: "Refactoring",
    desc: "Re-architecting applications to be fully cloud-native, ensuring maximum scalability and efficiency."
  },
  {
    icon: <BsBoxes />,
    title: "Repurchasing",
    desc: "Moving from legacy internal systems to a SaaS (Software as a Service) platform."
  },
  {
    icon: <BsHouseCheck />,
    title: "Retaining",
    desc: "Keeping mission-critical data on-premise while migrating other services for a hybrid approach."
  },
  {
    icon: <BsArrowRepeat />,
    title: "Retiring",
    desc: "Identifying and decommissioning redundant or non-useful systems during the migration phase."
  }
];

// Section 2: Migration Process (Use with your new Timeline/Challenge style component)
const migrationProcess = [
  {
    icon: <BsBarChart />,
    title: "Discovery & Assessment",
    desc: "We analyze your current infrastructure, applications, and data to create a detailed migration roadmap."
  },
  {
    icon: <BsGear />,
    title: "Strategic Planning",
    desc: "Choosing the right cloud provider (AWS/Azure/GCP) and defining the migration strategy (The 6 Rs)."
  },
  {
    icon: <BsShieldLock />,
    title: "Secure Data Transfer",
    desc: "Using encrypted channels to move your databases and files to the new cloud environment with zero data loss."
  },
  {
    icon: <BsSpeedometer2 />,
    title: "Optimization & Testing",
    desc: "Rigorous testing of the migrated apps to ensure performance is better than the original setup."
  },
  {
    icon: <BsCheck2Circle />,
    title: "Final Cutover",
    desc: "Switching your operations to the live cloud environment with carefully managed downtime (Go-Live)."
  }
];

  return (
    <div >
    
      <ReuseCard 
        heading="Modernize Your Business <br /> with Strategic Cloud Migration"
        items={migrationStrategies}
      />

    
      <ChallengeSection 
        heading="Our Proven 5-Step <br /> Migration Roadmap"
        challenges={migrationProcess} 
      />
      <MigrationFlow
       heading="Our Enterprise Migration Framewor"
        challenges={steps} />
      <MigrationBento />
      <MigrationComparison />

      
      <FaqSection 
        faqTitle="Cloud Migration  Common Questions"
        faqs={[
          {
            question: "How long does the migration process take?",
            answer: "The timeline depends on the complexity of your apps and data size. A simple migration can take 2-4 weeks, while large enterprises might take several months."
          },
          {
            question: "Will our services go offline during migration?",
            answer: "We use 'Zero Downtime' techniques where we sync data in the background and only switch over once everything is verified on the cloud."
          },
          {
            question: "How do you ensure no data is lost?",
            answer: "We perform multiple backups before starting and use checksum verification to ensure every single file is moved correctly."
          }
        ]}
      />
    </div>
  );
};

export default CloudMigration;