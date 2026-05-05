export const databaseAdminData = {
  db_admin_reuse_1: {
    type: "ReuseCard",
    content: {
      heading: "Core Admin Services.",
      items: [
        {
          icon: "BsSpeedometer2",
          title: "Performance Tuning & Optimization",
          desc: "We eliminate database lag by optimizing slow queries, fine-tuning indexes, and reconfiguring server parameters for peak performance.",
        },
        {
          icon: "BsShieldCheck",
          title: "24/7 Proactive Monitoring",
          desc: "Real-time health checks of your database clusters to identify and resolve issues before they impact your end-users.",
        },
        {
          icon: "BsLifePreserver",
          title: "Automated Backup & Recovery",
          desc: "Implementing robust Point-In-Time Recovery (PITR) strategies ensuring your data is always backed up and restorable within minutes.",
        },
        {
          icon: "BsCpu",
          title: "Security Hardening & Patching",
          desc: "We keep your database engines updated with the latest security patches and enforce strict IAM roles to prevent unauthorized access.",
        },
        {
          icon: "BsDiagram3",
          title: "High Availability (HA) Setup",
          desc: "Configuring master-slave replication, multi-AZ deployments, and failover clusters to ensure 99.99% database uptime.",
        },
        {
          icon: "BsGraphUp",
          title: "Capacity Planning & Scaling",
          desc: "Analyzing data growth patterns to proactively scale storage and compute resources before they hit their limits.",
        },
      ],
    },
  },
  db_admin_challenge_1: {
    type: "ChallengeGrid",
    content: {
      heading: "Common DB Problems.",
      challenges: [
        {
          icon: "BsGearWide",
          title: "Unpredictable Latency",
          desc: "High query response times can frustrate users. We pinpoint long-running queries and optimize them to restore speed.",
        },
        {
          icon: "BsExclamationTriangle",
          title: "Unexpected Downtime",
          desc: "A crashed database means a halted business. Our failover strategies ensure your services stay online even during hardware failure.",
        },
        {
          icon: "BsLock",
          title: "Data Integrity & Security",
          desc: "Managing access in a growing team is hard. We implement Row-Level Security and masking to protect sensitive customer data.",
        },
        {
          icon: "BsFolderX",
          title: "Failed Backup Validations",
          desc: "A backup is useless if it doesn't restore. We perform regular recovery drills to ensure your data is actually safe.",
        },
        {
          icon: "BsGearWide",
          title: "Resource Over-Provisioning",
          desc: "Paying for cloud resources you don't use? We right-size your database instances to save costs without losing performance.",
        },
      ],
    },
  },
  db_admin_feature_1: {
    type: "FeatureGrid",
    content: {
      heading: "VertexPro Core Strengths",
      features: [
        {
          icon: "BsGem",
          title: "Highest Quality Work",
          desc: "We ensure every index, schema design, and query optimization meets enterprise-grade standards for long-term stability.",
          link: "/quality-standards",
        },
        {
          icon: "BsShieldLock",
          title: "Advanced Security",
          desc: "Your data is protected with high-tech standards, including encryption at rest, in transit, and strict IAM-based access controls.",
          link: "/services/security",
        },
        {
          icon: "BsHeadset",
          title: "Supportive Communication",
          desc: "Get 24/7 personalized support. Our DBAs work as an extension of your team to resolve critical issues in real-time.",
          link: "/contact",
        },
        {
          icon: "BsCpu",
          title: "Advanced Technology",
          desc: "We leverage the latest database engines (PostgreSQL 16+, SQL Server 2022) and AI-driven tuning tools for maximum efficiency.",
          link: "/tech-stack",
        },
        {
          icon: "BsAward",
          title: "Proven Expertise",
          desc: "With years of experience managing terabytes of production data, we streamline workflows while delivering reliable solutions.",
          link: "/case-studies",
        },
        {
          icon: "BsRocketTakeoff",
          title: "Faster Database Delivery",
          desc: "We reduce application latency and time-to-market by ensuring your data layer is always optimized and ready for scale.",
          link: "/solutions/performance",
        },
      ],
    },
  },
  db_admin_faq_1: {
    type: "UseableFaqSection",
    content: {
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "How do you optimize a database that is already live?",
          answer:
            "We use non-blocking profiling tools to analyze live traffic, identify the heaviest queries, and apply optimizations like indexing or query refactoring without taking the database offline.",
        },
        {
          question: "Do you support on-premise, cloud, and hybrid databases?",
          answer:
            "Yes. Whether your database is on a physical server, AWS RDS, Azure SQL, or a hybrid setup, our team can manage and optimize it seamlessly.",
        },
        {
          question: "What is your strategy for database security?",
          answer:
            "We follow a multi-layer approach: network isolation (VPC), data encryption, multi-factor authentication, and regular automated vulnerability scanning.",
        },
        {
          question:
            "How do you handle database scaling during high-traffic events?",
          answer:
            "We implement vertical scaling (upgrading hardware) or horizontal scaling (adding read-replicas) to distribute the load across multiple instances.",
        },
        {
          question: "Can you help with database version upgrades?",
          answer:
            "Absolutely. We perform dry runs on staging environments to ensure compatibility before migrating your production data to a newer, more secure version.",
        },
      ],
    },
  },
};

export const databaseMigrationData = {
  db_mig_reuse_1: {
    type: "ReuseCard",
    content: {
      heading: "Seamless Database Migration & Modernization",
      items: [
        {
          icon: "BsCloudArrowUp",
          title: "Legacy to Cloud Migration",
          desc: "Seamlessly moving your on-premise SQL Server, Oracle, or MySQL databases to managed cloud services like AWS RDS, Aurora, or Azure SQL.",
        },
        {
          icon: "BsDiagram3",
          title: "Database Refactoring",
          desc: "Restructuring old schemas into modern, scalable architectures that support microservices and high-concurrency applications.",
        },
        {
          icon: "BsArrowRepeat",
          title: "Zero-Downtime Migration",
          desc: "Using CDC (Change Data Capture) and replication tools to sync data in real-time, ensuring your business stays online during the cutover.",
        },
        {
          icon: "BsLightningCharge",
          title: "SQL to NoSQL Modernization",
          desc: "Offloading heavy read/write workloads to NoSQL databases like MongoDB or DynamoDB for massive horizontal scaling.",
        },
        {
          icon: "BsShieldCheck",
          title: "Data Integrity & Validation",
          desc: "Rigorous pre- and post-migration testing to ensure every single record is transferred accurately with zero data loss.",
        },
        {
          icon: "BsHddStack",
          title: "Database Consolidation",
          desc: "Merging multiple fragmented databases into a single, unified system to reduce licensing costs and management overhead.",
        },
      ],
    },
  },
  db_mig_challenge_1: {
    type: "ChallengeGrid",
    content: {
      heading: "Overcoming the Risks of Data Transition",
      challenges: [
        {
          icon: "BsDatabaseX",
          title: "Fear of Data Loss",
          desc: "Migrating millions of records is risky. We use automated verification scripts to ensure 100% data consistency throughout the process.",
        },
        {
          icon: "BsClockHistory",
          title: "Extended Business Downtime",
          desc: "Manual migrations can take hours or days. Our automated sync approach reduces downtime to just a few minutes of cutover.",
        },
        {
          icon: "BsExclamationCircle",
          title: "Schema Incompatibility",
          desc: "Older database versions often don't match modern cloud engines. We provide expert schema conversion and code refactoring.",
        },
        {
          icon: "BsShieldSlash",
          title: "Security During Transit",
          desc: "Data is most vulnerable when moving. We use encrypted tunnels (VPN/Direct Connect) to protect your data during migration.",
        },
        {
          icon: "BsCurrencyDollar",
          title: "Hidden Cloud Costs",
          desc: "Poorly planned migrations lead to high bills. We right-size your cloud instances to ensure you only pay for what you actually need.",
        },
      ],
    },
  },
  db_mig_feature_1: {
    type: "FeatureGrid",
    content: {
      heading: "Why VertexPro for Database Modernization?",
      subheading:
        "Expertise, automation, and security combined to make your transition to the cloud effortlessly.",
      features: [
        {
          icon: "BsShieldCheck",
          title: "Zero Data Loss Guarantee",
          desc: "We use multi-layer validation and checksum verification to ensure every single record is moved with 100% integrity.",
          link: "/quality-standards",
        },
        {
          icon: "BsLightningCharge",
          title: "Near-Zero Downtime",
          desc: "Our continuous data replication (CDC) technology allows your business to stay online while the migration happens in the background.",
          link: "/solutions/performance",
        },
        {
          icon: "BsCloudCheck",
          title: "Cloud-Native Optimization",
          desc: "We don't just move your data; we modernize it to take full advantage of cloud-native features like auto-scaling and serverless.",
          link: "/services/cloud",
        },
        {
          icon: "BsGearWideConnected",
          title: "Automated Conversion",
          desc: "Using advanced SCT (Schema Conversion Tools), we automate the translation of legacy code to modern SQL dialects accurately.",
          link: "/tech-stack",
        },
        {
          icon: "BsShieldLock",
          title: "End-to-End Encryption",
          desc: "Your data is encrypted during the entire transition process, using secure VPN tunnels and private network peering.",
          link: "/services/security",
        },
        {
          icon: "BsInboxes",
          title: "Proven Migration Framework",
          desc: "With a track record of migrating terabytes of production data, our 5-step strategic roadmap ensures a predictable outcome.",
          link: "/case-studies",
        },
      ],
    },
  },
  db_mig_flow_1: {
    type: "MigrationFlow",
    content: {
      heading: "Our Strategic Migration Roadmap",
      challenges: [
        {
          step: "01",
          icon: "BsSearch",
          title: "Discovery & Assessment",
          desc: "Hum aapke maujooda database structure, dependencies aur sizing ka audit karte hain taake sahi cloud resources select kiye ja saken.",
        },
        {
          step: "02",
          icon: "BsCodeSlash",
          title: "Schema & Code Conversion",
          desc: "Legacy database code aur schemas ko cloud-native format (jaise Oracle se PostgreSQL) mein convert kiya jata hai automated tools ke zariye.",
        },
        {
          step: "03",
          icon: "BsArrowRepeat",
          title: "Real-Time Data Sync",
          desc: "CDC (Change Data Capture) technology ka use karte hue hum live data ko sync karte hain, taake migration ke dauran aapka business online rahe.",
        },
        {
          step: "04",
          icon: "BsPatchCheck",
          title: "Testing & Validation",
          desc: "Final switch se pehle hum data integrity, performance aur connection strings ko thoroughly test karte hain taake zero-error ki tasdeeq ho sake.",
        },
        {
          step: "05",
          icon: "BsRocketTakeoff",
          title: "Final Cutover",
          desc: "Sab kuch test hone ke baad, hum application ko naye modern database par switch kar dete hain—minimal ya zero downtime ke sath.",
        },
      ],
    },
  },
  db_mig_faq_1: {
    type: "UseableFaqSection",
    content: {
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question:
            "Will my business experience downtime during the migration process?",
          answer:
            "No. We utilize 'Change Data Capture' (CDC) technology and continuous data replication. This ensures your source database remains live and accessible while we sync data in the background, reducing the final cutover window to just a few minutes.",
        },
        {
          question:
            "How do you guarantee that no data will be lost during transition?",
          answer:
            "VertexPro guarantees 100% Data Integrity. We perform rigorous pre- and post-migration validations, including 'Checksum Verification' and 'Row-count Audits' to ensure every single record is identical in the target database.",
        },
        {
          question:
            "What happens if my legacy schema is incompatible with the cloud target?",
          answer:
            "We provide comprehensive 'Schema Conversion' services. Whether moving from Oracle to PostgreSQL or SQL Server to Aurora, we use automated tools and manual code refactoring to ensure your stored procedures and tables work perfectly in the new environment.",
        },
        {
          question:
            "Do you support cross-cloud migrations, such as from Azure to AWS?",
          answer:
            "Yes, we specialize in multi-cloud and cross-cloud transitions. We handle all the networking, security protocol adjustments, and API translations required to move your data seamlessly between different cloud providers.",
        },
        {
          question: "How is database security handled after modernization?",
          answer:
            "Post-modernization, we implement a 'Zero Trust' architecture. Your data is isolated within a Private VPC, protected by end-to-end encryption and fine-grained IAM (Identity and Access Management) roles, significantly enhancing your security posture.",
        },
        {
          question: "What kind of post-migration support do you offer?",
          answer:
            "After the migration is complete, we provide a stabilization period where we monitor query performance and system health. We ensure that the new cloud-native environment is fully optimized for speed and reliability before handing it over.",
        },
      ],
    },
  },
};

export const managedITData = {
  managed_it_hero_1: {
    type: "ServiceHero",
    content: {
      tag: "Expert IT Management",
      title:
        "Transforming Your Challenges Into <br /> <span>Competitive Advantages</span>",
      description:
        "Proactive monitoring, disaster recovery, and 24/7 support tailored for your business growth.",
      buttonText: "Get Started Now",
    },
  },
  managed_it_reuse_1: {
    type: "ReuseCard",
    content: {
      heading: "Comprehensive Data Protection",
      items: [
        {
          icon: "BsLaptop",
          title: "PC Backup",
          desc: "Secure backup for desktops with 24/7 recovery assist.",
        },
        {
          icon: "BsShieldCheck",
          title: "Server Backup",
          desc: "Interval backups to guarantee data delivery and minimize loss.",
        },
        {
          icon: "BsCloudArrowUp",
          title: "Cloud Backup",
          desc: "Risk-free cloud storage accessible from anywhere.",
        },
      ],
    },
  },
  managed_it_flow_1: {
    type: "MigrationFlow",
    content: {
      heading: "Our Execution Roadmap",
      challenges: [
        {
          step: "01",
          icon: "BsSearch",
          title: "Assessment & Planning",
          desc: "Identify recovery goals and evaluate threats.",
        },
        {
          step: "02",
          icon: "BsGearWideConnected",
          title: "Backup Strategy",
          desc: "Designing actual strategies to fit your infrastructure.",
        },
        {
          step: "03",
          icon: "BsRocket",
          title: "Implementation",
          desc: "Setting up daily/weekly backups with encryption.",
        },
      ],
    },
  },
};

export const coManagedITData = {
  co_managed_it_reuse_1: {
    type: "ReuseCard",
    content: {
      heading: "Focused On Your Business Powered By Our Technology",
      items: [
        {
          icon: "BsCloudArrowUp",
          title: "Cloud-Based Backup Solutions",
          desc: "Mobility is essential for growth in any organization. This is why cloud prevents economies of scale and offers effective and efficient data backup and management solutions.",
        },
        {
          icon: "BsHddNetwork",
          title: "On-Premises Backup Solutions",
          desc: "Secure on-site backup systems for essential information with adjustable storage and encryption options for businesses desiring more management power.",
        },
        {
          icon: "BsDatabaseCheck",
          title: "Backup & Recovery for Databases",
          desc: "Services ensure minimum piece of service downtime and data loss designed for different kinds of database backup and recovery including scheduled online backups and transaction logging.",
        },
        {
          icon: "BsShieldLock",
          title: "Endpoint Protection & Backup",
          desc: "A good and comprehensive backup service solution extends to the endpoints, which are the workstations, laptops and even mobile phones of its users no matter where the users are.",
        },
        {
          icon: "BsPatchCheck",
          title: "Backup Testing & Validation",
          desc: "Backup data protection strategies also include substantial backup check and assurance services to protect the reliable backup data in case such a situation arises.",
        },
        {
          icon: "BsGraphUpArrow",
          title: "Business Continuity Solutions",
          desc: "Solutions for ensuring business continuity that include all stages from recovery management to disaster communications without taking operations offline.",
        },
      ],
    },
  },
  co_managed_it_flow_1: {
    type: "MigrationFlow",
    content: {
      heading: "Reliable Backup, Seamless Recovery",
      challenges: [
        {
          step: "01",
          icon: "BsLaptop",
          title: "PC Backup",
          desc: "Exercise measures to safeguard important info residing on desktops with an automatic secure backup system.",
        },
        {
          step: "02",
          icon: "BsHddStack",
          title: "Server Backup",
          desc: "Provide consistent interval backup to server data so as to reduce any potential losses.",
        },
        {
          step: "03",
          icon: "BsCloudCheck",
          title: "Cloud Backup",
          desc: "Use the internet to back up all the data as one of the solutions for storing information that is flexible.",
        },
        {
          step: "04",
          icon: "BsDatabaseCheck",
          title: "Database Backup",
          desc: "Ensure your SQL and NoSQL databases are backed up with point-in-time recovery options.",
        },
        {
          step: "05",
          icon: "BsHeadset",
          title: "Continuity Consulting",
          desc: "Providing expert consulting services on the formulation of mechanisms that facilitate uninterrupted operations.",
        },
      ],
    },
  },
  co_managed_it_feature_1: {
    type: "FeatureGrid",
    content: {
      heading: "Transforming Your Challenges Into Competitive Advantages",
      features: [
        {
          icon: "BsShieldQuarter",
          title: "Comprehensive Protection",
          desc: "Complete disaster recovery services ensuring that your information is secured, stored and can be retrieved.",
        },
        {
          icon: "BsLightningCharge",
          title: "Fast Recovery Time",
          desc: "Experience little or no downtime and business operations will resume almost immediately after a disaster.",
        },
        {
          icon: "BsHeadset",
          title: "24/7 Support",
          desc: "Qualified support staff works twenty four hours all days including holidays in providing recovery help.",
        },
        {
          icon: "BsCloudCheck",
          title: "Automated Backups",
          desc: "Automated backups which lessens the possibility of making mistakes and makes sure that data is up to date.",
        },
        {
          icon: "BsPatchCheck",
          title: "End-to-End Testing",
          desc: "Emphasis is on testing activities related to the DR plan regularly, making sure operations work as intended.",
        },
        {
          icon: "BsGraphUpArrow",
          title: "Continuous Monitoring",
          desc: "Surveillance of your backup systems in order to see that all is well and also gives warning signals.",
        },
      ],
    },
  },
  co_managed_it_flow_2: {
    type: "MigrationFlow",
    content: {
      heading: "Where Strategy Meets Execution",
      challenges: [
        {
          step: "01",
          icon: "BsSearch",
          title: "Assessment & Planning",
          desc: "We evaluate critical information regarding your data and infrastructure, identify your recovery goals (RTO, RPO).",
        },
        {
          step: "02",
          icon: "BsGear",
          title: "Backup Strategy Design",
          desc: "We design the actual backup strategies to fit your needs, determining the types and frequency of backups.",
        },
        {
          step: "03",
          icon: "BsRocket",
          title: "Backup Implementation",
          desc: "Our experts incorporate the necessary backup systems into the company’s networks, setting up data encryption.",
        },
        {
          step: "04",
          icon: "BsDisplay",
          title: "Monitoring & Management",
          desc: "The backup systems operate under our supervision, and any corrective measures are taken before the occurrence of a problem.",
        },
        {
          step: "05",
          icon: "BsPatchCheck",
          title: "Disaster Recovery Testing",
          desc: "Disaster recovery plan drills are carried out periodically, and the exercises include destruction of data testing.",
        },
        {
          step: "06",
          icon: "BsLifePreserver",
          title: "Recovery & Support",
          desc: "Disaster hits and we are in recovery mode at once, restoring all processes, databases, and systems.",
        },
      ],
    },
  },
  co_managed_it_faq_1: {
    type: "UseableFaqSection",
    content: {
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "What is Co-Managed IT?",
          answer:
            "Co-managed IT is a partnership between your internal IT team and an external provider like Vertex Pro. We supplement your existing staff with specialized tools, 24/7 monitoring, and high-level expertise.",
        },
        {
          question: "Can we choose which services to outsource?",
          answer:
            "Yes, our co-managed model is flexible. You can handle day-to-day desk support while we handle complex infrastructure, cybersecurity, and cloud management.",
        },
      ],
    },
  },
};

export const emailSecurityData = {
  email_sec_reuse_1: {
    type: "ReuseCard",
    content: {
      heading: "Bridge the Gap Between <br /> Hardware and Intelligence",
      items: [
        {
          icon: "BsEnvelopeCheck",
          title: "Email Authentication (SPF, DKIM, DMARC)",
          desc: "Stop domain spoofing. We implement and manage SPF, DKIM, and DMARC records to ensure only authorized servers can send emails on your behalf.",
        },
        {
          icon: "BsShieldLock",
          title: "AI-Powered Phishing Protection",
          desc: "Detect and block sophisticated phishing attempts, business email compromise (BEC), and zero-day attacks using AI-driven behavioral analysis.",
        },
        {
          icon: "BsEye",
          title: "Advanced Threat Protection (ATP)",
          desc: "Real-time scanning of attachments and URLs to identify malware, ransomware, and malicious links before they reach the user's inbox.",
        },
        {
          icon: "BsFileEarmarkLock",
          title: "Data Loss Prevention (DLP)",
          desc: "Prevent sensitive information like credit card numbers or PII from leaving your organization via email through automated policy enforcement.",
        },
        {
          icon: "BsLock",
          title: "End-to-End Email Encryption",
          desc: "Secure your confidential communications with automated encryption, ensuring that sensitive data remains private from sender to recipient.",
        },
        {
          icon: "BsBuildingCheck",
          title: "Security Awareness Training",
          desc: "Empower your employees with phishing simulations and security training to turn your 'human layer' into a strong line of defense.",
        },
      ],
    },
  },
  email_sec_challenge_1: {
    type: "ChallengeGrid",
    content: {
      heading: "The Strategic Impact <br /> of Edge Computing",
      challenges: [
        {
          icon: "BsExclamationTriangle",
          title: "Evolving Social Engineering",
          desc: "Attackers use highly personalized 'Spear Phishing' that bypasses traditional filters. We use identity-based detection to stop these targeted attacks.",
        },
        {
          icon: "BsPersonX",
          title: "The Human Element",
          desc: "Even with the best tech, one wrong click can cause a breach. Our simulations identify high-risk users and provide targeted training.",
        },
        {
          icon: "BsGearWide",
          title: "Configuration Complexity",
          desc: "Incorrect DMARC or SPF settings can block legitimate emails. We provide expert management to ensure high deliverability with maximum security.",
        },
        {
          icon: "BsSearch",
          title: "Obfuscated Malicious Links",
          desc: "Modern malware uses 'URL rewriting' to hide. Our systems use sandboxing to test every link in a secure environment before allowing a click.",
        },
        {
          icon: "BsLightningCharge",
          title: "Business Email Compromise (BEC)",
          desc: "CEO fraud and invoice redirection attacks are fast and costly. We implement AI that flags unusual patterns in executive communication.",
        },
      ],
    },
  },
  email_sec_faq_1: {
    type: "UseableFaqSection",
    content: {
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question:
            "What is the difference between Spam filters and Phishing protection?",
          answer:
            "Spam filters block junk mail based on keywords or sender reputation. Phishing protection is far more advanced—it uses AI to detect deceptive intent, fraudulent identities, and malicious hidden code.",
        },
        {
          question: "How does DMARC help in protecting my brand's reputation?",
          answer:
            "DMARC allows you to tell receiving mail servers to reject any email that claims to be from you but fails authentication. This prevents hackers from using your domain.",
        },
        {
          question:
            "Can you protect our organization from internal 'Insider' threats?",
          answer:
            "Yes. Our Data Loss Prevention (DLP) tools monitor internal emails for unauthorized sharing of sensitive data, ensuring proprietary information doesn't leave your network.",
        },
        {
          question:
            "Is your solution compatible with Microsoft 365 and Google Workspace?",
          answer:
            "Absolutely. We specialize in adding an extra layer of 'Defense-in-Depth' to M365 and Google Workspace, filling the gaps that their built-in security sometimes misses.",
        },
        {
          question: "What happens if a malicious email is detected?",
          answer:
            "Depending on the policy, the email is either quarantined, stripped of its malicious link/attachment, or blocked entirely.",
        },
      ],
    },
  },
};

export const endpointDetectionData = {
  endpoint_reuse_1: {
    type: "ReuseCard",
    content: {
      heading: "Transform Your Development Pipeline <br /> with DevOps Mastery",
      items: [
        {
          icon: "BsShieldShaded",
          title: "Continuous Real-Time Monitoring",
          desc: "We provide 24/7 visibility into all endpoint activities, capturing system-level events to detect suspicious behavior as it happens.",
        },
        {
          icon: "BsCpu",
          title: "AI-Driven Behavioral Analysis",
          desc: "Going beyond simple signatures, our EDR uses machine learning to identify 'fileless' malware and zero-day attacks based on unusual patterns.",
        },
        {
          icon: "BsSearch",
          title: "Proactive Threat Hunting",
          desc: "Our security experts don't just wait for alerts. We proactively hunt for hidden indicators of compromise (IoCs) within your network.",
        },
        {
          icon: "BsLightningCharge",
          title: "Automated Incident Response",
          desc: "Instantly isolate infected endpoints from the network to prevent lateral movement, while automatically terminating malicious processes.",
        },
        {
          icon: "BsDeviceSsd",
          title: "Deep Endpoint Visibility",
          desc: "Get a complete forensic history of every process, file change, and network connection on every laptop, server, and workstation.",
        },
        {
          icon: "BsBug",
          title: "Root Cause Analysis",
          desc: "We don't just delete the threat; we trace it back to the entry point to understand 'how' it got in and 'what' it tried to touch.",
        },
      ],
    },
  },
  endpoint_challenge_1: {
    type: "ChallengeGrid",
    content: {
      heading: "Transforming Data into <br /> Strategic Opportunities",
      challenges: [
        {
          icon: "BsExclamationOctagon",
          title: "Sophisticated Fileless Attacks",
          desc: "Modern hackers use built-in system tools (PowerShell, WMI) to stay hidden. Traditional antivirus can't see them, but our EDR can.",
        },
        {
          icon: "BsEyeSlash",
          title: "Visibility Blind Spots",
          desc: "Unmanaged devices or remote endpoints often go unnoticed. We ensure every device, no matter where it is, is under our radar.",
        },
        {
          icon: "BsShieldX",
          title: "Ransomware & Data Wiper Risks",
          desc: "Ransomware moves fast. Our EDR identifies the encryption behavior early and halts the process before your data is lost.",
        },
        {
          icon: "BsAlarm",
          title: "Overwhelming Alert Fatigue",
          desc: "IT teams often ignore alerts due to high volume. We filter the noise and only escalate high-fidelity, actionable threats.",
        },
        {
          icon: "BsLaptop",
          title: "The Remote Workforce Gap",
          desc: "With employees working from home, the perimeter is gone. We protect endpoints directly, ensuring security follows the user everywhere.",
        },
      ],
    },
  },
  endpoint_faq_1: {
    type: "UseableFaqSection",
    content: {
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "Is EDR the same as an Antivirus (AV)?",
          answer:
            "No. Traditional AV looks for known signatures of malware. EDR is much more advanced—it monitors behavior and can detect new, unknown threats (Zero-day attacks) that haven't been seen before.",
        },
        {
          question: "Will EDR slow down my employees' computers?",
          answer:
            "Our EDR agents are lightweight and designed to consume minimal CPU and RAM. They perform most of the heavy analysis in the cloud, ensuring no impact on user productivity.",
        },
        {
          question: "How does EDR handle a detected threat automatically?",
          answer:
            "Once a high-risk threat is detected, the EDR can automatically isolate the device from the network, kill the malicious process, and even roll back changed files to their original state.",
        },
        {
          question: "Can EDR protect servers as well as laptops?",
          answer:
            "Yes. Our EDR solutions are cross-platform and provide the same level of deep protection for Windows, macOS, Linux, and cloud-based virtual servers.",
        },
        {
          question: "Do you provide managed EDR services?",
          answer:
            "Absolutely. We don't just sell the tool; our SOC (Security Operations Center) team can monitor the alerts for you and respond to incidents 24/7.",
        },
      ],
    },
  },
};

export const riskAssessmentData = {
  risk_reuse_1: {
    type: "ReuseCard",
    content: {
      heading: "Assessment Pillars (Security, Compliance, DR)",
      items: [
        {
          icon: "BsShieldLock",
          title: "Security Posture Analysis",
          desc: "A deep dive into your current security controls to identify vulnerabilities, unauthorized access points, and weak encryption protocols.",
        },
        {
          icon: "BsFileEarmarkCheck",
          title: "Compliance Gap Analysis",
          desc: "We measure your infrastructure against global standards like SOC2, GDPR, and HIPAA to identify exactly what’s missing for certification.",
        },
        {
          icon: "BsLightningCharge",
          title: "Operational Risk Assessment",
          desc: "Identifying bottlenecks in your DevOps pipeline and manual processes that could lead to human error or system downtime.",
        },
        {
          icon: "BsDatabaseLock",
          title: "Data Privacy Audit",
          desc: "Evaluating how sensitive data is stored, handled, and transmitted to ensure maximum protection against internal and external leaks.",
        },
        {
          icon: "BsArrowRepeat",
          title: "Resilience & DR Evaluation",
          desc: "Testing your Disaster Recovery (DR) and backup strategies to ensure your business can survive and recover from a major system failure.",
        },
        {
          icon: "BsDiagram3",
          title: "Infrastructure Architecture Review",
          desc: "A comprehensive review of your cloud setup to ensure it follows 'Well-Architected' frameworks for cost, security, and performance.",
        },
      ],
    },
  },
  risk_challenge_1: {
    type: "ChallengeGrid",
    content: {
      heading: "Common Risk Challenges.",
      challenges: [
        {
          icon: "BsExclamationCircle",
          title: "Hidden Vulnerabilities",
          desc: "Small configuration drifts in the cloud can lead to massive breaches. We uncover hidden risks that traditional scanners often miss.",
        },
        {
          icon: "BsCalendarX",
          title: "Legacy System Risks",
          desc: "Aging infrastructure often lacks modern security patches. We identify legacy components that pose a threat to your modern ecosystem.",
        },
        {
          icon: "BsLockFill",
          title: "Identity & Access Gaps",
          desc: "Over-privileged accounts are the #1 cause of breaches. We analyze your IAM roles to ensure 'Least Privilege' access.",
        },
        {
          icon: "BsFileBinary",
          title: "Shadow IT & Data Sprawl",
          desc: "Unmanaged cloud resources and fragmented data storage create blind spots. We map out your entire data footprint for better control.",
        },
        {
          icon: "BsGearWideConnected",
          title: "Interdependency Risks",
          desc: "A failure in one third-party API can bring down your whole system. We map your dependencies to prevent cascading failures.",
        },
      ],
    },
  },
  risk_faq_1: {
    type: "UseableFaqSection",
    content: {
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question:
            "What is the difference between a Risk Assessment and a Gap Analysis?",
          answer:
            "A Risk Assessment identifies potential threats and their impact, while a Gap Analysis compares your current performance/security against a specific target or industry standard (like SOC2).",
        },
        {
          question: "How often should our organization conduct a Gap Analysis?",
          answer:
            "We recommend at least once a year or whenever you make significant changes to your cloud infrastructure to ensure you haven't drifted from compliance.",
        },
        {
          question: "Do you provide a roadmap after the assessment?",
          answer:
            "Yes, we don't just find problems. We provide a prioritized 'Remediation Roadmap' that tells you exactly what to fix first based on the severity of the risk.",
        },
        {
          question:
            "Will this assessment help us get SOC2 or ISO 27001 certified?",
          answer:
            "Absolutely. Our Gap Analysis is designed to mirror the requirements of these certifications, making it much easier and faster for you to pass the official audit.",
        },
        {
          question:
            "Can you perform assessments on multi-cloud environments (AWS & Azure)?",
          answer:
            "Yes, we specialize in cross-cloud assessments. We analyze the specific risks associated with each provider and how they interact in a hybrid or multi-cloud setup.",
        },
      ],
    },
  },
};

export const containerizationData = {
  container_devops_1: {
    type: "DevOpsFlow",
    content: {
      subtitle: "Our Process",
      title: "The 8-Step DevOps Pipeline",
      steps: [
        {
          icon: "BsTerminal",
          title: "Plan",
          desc: "Strategy & Requirement Analysis",
        },
        {
          icon: "BsCodeSlash",
          title: "Code",
          desc: "Version Control & Development",
        },
        {
          icon: "BsBoxSeam",
          title: "Build",
          desc: "Automated Compiling & Packaging",
        },
        {
          icon: "BsShieldCheck",
          title: "Security",
          desc: "DevSecOps & Vulnerability Scans",
        },
        {
          icon: "BsRocketTakeoff",
          title: "Deploy",
          desc: "Zero-Downtime Orchestration",
        },
        {
          icon: "BsGear",
          title: "Operate",
          desc: "Infrastructure as Code (IaC)",
        },
        {
          icon: "BsEye",
          title: "Monitor",
          desc: "Performance & Health Tracking",
        },
        {
          icon: "BsCloudCheck",
          title: "Optimize",
          desc: "Feedback & Resource Scaling",
        },
      ],
    },
  },
  container_reuse_1: {
    type: "ReuseCard",
    content: {
      heading: "Future-Proof Your Business with Perfect Solutions",
      items: [
        {
          icon: "BsBoxSeam",
          title: "Containerization of Legacy Applications",
          desc: "Modernize legacy applications through containerization to achieve high portability, seamless scalability, and significantly faster deployment cycles.",
        },
        {
          icon: "BsGrid1X2",
          title: "Kubernetes Deployment & Management",
          desc: "Leverage Kubernetes for automated, holistic orchestration of your applications across diverse and complex infrastructure environments.",
        },
        {
          icon: "BsFileEarmarkZip",
          title: "Helm Charts for Application Packaging",
          desc: "Simplify Kubernetes deployments with Helm, ensuring consistent packaging, configuration management, and version control for all your apps.",
        },
        {
          icon: "BsArrowRepeat",
          title: "Auto-Scaling & Load Balancing",
          desc: "Optimize resource usage for high availability and peak performance through automated scaling and intelligent load balancing under varied traffic.",
        },
        {
          icon: "BsShieldCheck",
          title: "Secure Container Image Management",
          desc: "Implement rigorous security for your container registry, building integrity and safety into every phase of the image lifecycle.",
        },
        {
          icon: "BsDiagram3",
          title: "Multi-Cluster Orchestration Strategies",
          desc: "Deploy fault-tolerant management strategies for multiple clusters to ensure optimal resource utilization and high performance in variable environments.",
        },
      ],
    },
  },
  container_challenge_1: {
    type: "ChallengeGrid",
    content: {
      heading: "Transforming Data into <br /> Strategic Opportunities",
      challenges: [
        {
          icon: "BsBoxSeam",
          title: "Skillful Resource Utilization",
          desc: "Maximize hardware efficiency by packaging all application dependencies together, leading to rapid deployment and effortless scaling.",
        },
        {
          icon: "BsLightningCharge",
          title: "Shorter Lead Time to Market",
          desc: "Streamline development cycles to release new features, updates, and patches in record time, making your business more agile.",
        },
        {
          icon: "BsShieldPlus",
          title: "Better Fault Tolerance",
          desc: "Ensure high availability with automated failover systems and self-healing processes that minimize downtime and service interruptions.",
        },
        {
          icon: "BsArrowRepeat",
          title: "Automatic Scaling",
          desc: "Implement intelligent auto-scaling strategies that adjust resources based on real-time traffic without manual intervention.",
        },
        {
          icon: "BsInfinity",
          title: "Integrated DevOps Synergy",
          desc: "Harness the power of CI/CD pipelines to support continuous updating and seamless collaboration between dev and ops teams.",
        },
        {
          icon: "BsShieldCheck",
          title: "Enterprise-Grade Security",
          desc: "Deploy with confidence using image scanning, Role-Based Access Control (RBAC), and advanced network segmentation.",
        },
      ],
    },
  },
  container_faq_1: {
    type: "UseableFaqSection",
    content: {
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question:
            "How does containerization differ from traditional virtualization?",
          answer:
            "Traditional virtualization (VMs) runs a full OS on top of hardware, which is resource-heavy. Containerization (like Docker) shares the host OS kernel, making containers much more lightweight, faster to start, and highly portable across different cloud environments.",
        },
        {
          question: "Why do we need Kubernetes if we are already using Docker?",
          answer:
            "Docker is used to create and run individual containers, while Kubernetes is an orchestration tool used to manage hundreds or thousands of containers. It handles automated scaling, self-healing (restarting failed containers), and load balancing across clusters.",
        },
        {
          question: "Is it possible to containerize old legacy applications?",
          answer:
            "Yes, we specialize in 'Legacy Modernization.' We wrap older applications into containers to provide them with a modern environment, enabling them to run on current cloud infrastructure without needing a complete code rewrite.",
        },
        {
          question: "How do you ensure security within a Kubernetes cluster?",
          answer:
            "We implement a multi-layered security approach: Container Image Scanning for vulnerabilities, Role-Based Access Control (RBAC) to limit permissions, Network Policies for segmentation, and secrets management to keep sensitive data encrypted.",
        },
        {
          question:
            "What is the role of Helm Charts in the deployment process?",
          answer:
            "Helm acts as a package manager for Kubernetes. It allows us to define, install, and upgrade even the most complex Kubernetes applications using reusable 'charts,' ensuring consistency across development, staging, and production environments.",
        },
      ],
    },
  },
  container_feature_1: {
    type: "FeatureSection",
    content: {
      mainTitle: "Why Partner with Us for Container Orchestration?",
      features: [
        {
          icon: "BsCpu",
          title: "Advanced Technologies",
          desc: "We are adept in using the industry's most advanced containerization and orchestration tools, including Docker, Kubernetes, and Docker Swarm, ensuring your applications are managed with the best-in-class tech stack.",
        },
        {
          icon: "BsHeadset",
          title: "Reliable Support & Monitoring",
          desc: "We provide 24/7 support and application monitoring for your containerized ecosystem, tackling problems before they occur and tracking performance in real-time.",
        },
        {
          icon: "BsAward",
          title: "Proven Track Record",
          desc: "With extensive experience across multiple sectors, we have a long-standing practice of developing scalable, effective, and high-speed containerized applications.",
        },
        {
          icon: "BsGraphUpArrow",
          title: "Continuous Improvement",
          desc: "Our team ensures there is no stagnation in adoption; we constantly evolve our orchestration strategies so you always benefit from the latest industry approaches.",
        },
        {
          icon: "BsLifePreserver",
          title: "End-to-End Support",
          desc: "From primary consultation and architecture design to implementation and resource optimization, we ensure your containerization journey is seamless and stress-free.",
        },
        {
          icon: "BsInfinity",
          title: "Seamless DevOps Integration",
          desc: "Our services integrate perfectly with your established DevOps pipeline, focusing on CI/CD to enhance teamwork and significantly shorten delivery cycles.",
        },
      ],
    },
  },
};

export const sreData = {
  sre_reuse_1: {
    type: "ReuseCard",
    content: {
      heading: "Site Reliability Engineering <br /> (SRE) Solutions",
      items: [
        {
          icon: "BsShieldCheck",
          title: "SLI, SLO & SLA Management",
          desc: "Define and monitor Service Level Indicators (SLIs) and Objectives (SLOs) to ensure your system meets business reliability goals and customer expectations.",
        },
        {
          icon: "BsCloudCheck",
          title: "Error Budget Optimization",
          desc: "Balance the speed of innovation with system stability by managing Error Budgets, allowing for rapid releases while maintaining strict reliability.",
        },
        {
          icon: "BsBarChartSteps",
          title: "Full-Stack Observability",
          desc: "Implement advanced logging, metrics, and distributed tracing to gain deep insights into system health and pinpoint bottlenecks instantly.",
        },
        {
          icon: "BsTerminalSplit",
          title: "Automation & Toil Reduction",
          desc: "Eliminate repetitive manual tasks (Toil) by engineering automated solutions for deployment, scaling, and self-healing infrastructure.",
        },
        {
          icon: "BsLightningCharge",
          title: "Rapid Incident Response",
          desc: "Establish robust on-call rotations and automated alerting systems to detect and resolve production issues before they impact end-users.",
        },
        {
          icon: "BsDatabaseCheck",
          title: "Capacity & Performance Engineering",
          desc: "Analyze resource utilization and performance trends to proactively scale infrastructure, ensuring seamless user experience during traffic spikes.",
        },
      ],
    },
  },
  sre_devops_1: {
    type: "DevOpsFlow",
    content: {
      subtitle: "Our SRE Process",
      title: "The SRE Reliability Lifecycle",
      steps: [
        {
          icon: "BsClipboardData",
          title: "Define SLOs",
          desc: "Establish Service Level Objectives & Error Budgets",
        },
        {
          icon: "BsCodeSquare",
          title: "Code & Automate",
          desc: "Infrastructure as Code & Toil Elimination",
        },
        {
          icon: "BsGearWide",
          title: "Build & Test",
          desc: "Automated CI/CD & Chaos Engineering",
        },
        {
          icon: "BsShieldCheck",
          title: "Harden Security",
          desc: "DevSecOps & Vulnerability Management",
        },
        {
          icon: "BsRocketTakeoff",
          title: "Deploy Safely",
          desc: "Canary Releases & Zero-Downtime Deployments",
        },
        {
          icon: "BsActivity",
          title: "Observe",
          desc: "Full-Stack Monitoring, Logging & Tracing",
        },
        {
          icon: "BsBellFill",
          title: "Respond",
          desc: "On-Call Rotations & Automated Incident Response",
        },
        {
          icon: "BsArrowRepeat",
          title: "Post-Mortem",
          desc: "Blameless Reviews & Continuous Improvement",
        },
      ],
    },
  },
  sre_challenge_1: {
    type: "ChallengeGrid",
    content: {
      heading: "The Pillars of <br /> System Resilience",
      challenges: [
        {
          icon: "BsSafe",
          title: "Embracing Risk",
          desc: "We don't aim for 100% uptime (which is unrealistic); instead, we manage risk through data-driven decisions and Error Budgets.",
        },
        {
          icon: "BsSearch",
          title: "Blameless Post-Mortems",
          desc: "Focus on system failures rather than human errors. We analyze incidents to build stronger, more resilient processes for the future.",
        },
        {
          icon: "BsCodeSquare",
          title: "Infrastructure as Code (IaC)",
          desc: "Every configuration is versioned and automated, ensuring that environment setup is repeatable, consistent, and error-free.",
        },
        {
          icon: "BsActivity",
          title: "Proactive Problem Management",
          desc: "Moving beyond 'Reactive' support to 'Proactive' engineering, identifying potential points of failure before they become outages.",
        },
      ],
    },
  },
  sre_faq_1: {
    type: "UseableFaqSection",
    content: {
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "What is the primary goal of SRE in my organization?",
          answer:
            "The primary goal of Site Reliability Engineering (SRE) is to create ultra-scalable and highly reliable software systems. Unlike traditional operations, SRE uses software engineering mindsets to manage infrastructure, ensuring that your services are available, performant, and efficient.",
        },
        {
          question:
            "How does SRE improve system uptime compared to traditional DevOps?",
          answer:
            "SRE introduces strict Service Level Objectives (SLOs) and Error Budgets. Instead of reactive fixing, SRE engineers build automated self-healing systems that detect and resolve issues before they lead to downtime, ensuring proactive reliability.",
        },
        {
          question: "What are SLIs, SLOs, and SLAs, and why do they matter?",
          answer:
            "SLIs (Indicators) are the metrics we track, like latency. SLOs (Objectives) are the goals we set for those metrics (e.g., 99.9% success). SLAs (Agreements) are the legal promises made to users. Together, they provide a data-driven framework to measure and guarantee system health.",
        },
        {
          question: "What happens when an Error Budget is exhausted?",
          answer:
            "When an Error Budget is exhausted, the focus shifts from launching new features to improving system stability. This ensures that innovation never comes at the cost of a poor user experience, maintaining a perfect balance between speed and reliability.",
        },
        {
          question: "How do you handle incidents and post-mortems?",
          answer:
            "We follow a 'Blameless Post-Mortem' culture. When an incident occurs, we focus on identifying the systemic root cause rather than blaming individuals. This allows us to improve the code and automation so that the same failure never repeats.",
        },
      ],
    },
  },
  sre_marquee_1: {
    type: "SreTechMarquee",
    content: {
      heading: "The SRE Tech Stack We Master",
      items: [
        {
          icon: "BsReception4",
          title: "Prometheus",
          desc: "Metrics Collection",
        },
        { icon: "BsBarChart", title: "Grafana", desc: "Visualization" },
        { icon: "BsSearch", title: "ELK Stack", desc: "Log Analytics" },
        { icon: "BsCloudCheck", title: "Datadog", desc: "Cloud Monitoring" },
        { icon: "BsCheckAll", title: "Jaeger", desc: "Distributed Tracing" },
        { icon: "BsActivity", title: "New Relic", desc: "APM Insights" },
      ],
    },
  },
};

export const serverlessData = {
  serverless_reuse_1: {
    type: "ReuseCard",
    content: {
      heading: "Turning Ambitions into Achievements<br /> with Smart Solutions",
      items: [
        {
          icon: "BsCloudLightning",
          title: "Event-Driven Compute",
          desc: "Deploy code that triggers automatically in response to events—such as HTTP requests, file uploads, or database changes—without managing any infrastructure.",
        },
        {
          icon: "BsCpu",
          title: "AWS Lambda & Azure Functions",
          desc: "Expertise in deploying highly scalable functions across major cloud providers, ensuring seamless execution and sub-second startup times (Cold Start Optimization).",
        },
        {
          icon: "BsLink45Deg",
          title: "API Gateway Orchestration",
          desc: "Build robust backend architectures using API Gateways to manage, secure, and scale your serverless endpoints with ease.",
        },
        {
          icon: "BsDatabaseUp",
          title: "Serverless Database Integration",
          desc: "Leverage NoSQL and SQL serverless databases like DynamoDB or Aurora Serverless that scale automatically based on your application's demand.",
        },
        {
          icon: "BsShieldLock",
          title: "Fine-Grained Security (IAM)",
          desc: "Implement the principle of least privilege with function-level IAM roles, ensuring that each part of your application has only the access it needs.",
        },
        {
          icon: "BsCashCoin",
          title: "Cost-Optimization (Pay-as-you-go)",
          desc: "Architecting your deployment to take full advantage of the serverless pricing model, eliminating costs for idle server time.",
        },
      ],
    },
  },
  serverless_feature_1: {
    type: "FeatureGrid",
    content: {
      heading: "Advanced Serverless <br /> Deployment",
      subheading:
        "Scale your applications without managing any infrastructure.",
      features: [
        {
          icon: "BsCashCoin",
          title: "Cost Effectiveness",
          desc: "You only pay for the consumption of resources during the execution of the function, thereby saving idle infrastructure costs.",
        },
        {
          icon: "BsGraphUpArrow",
          title: "Scalability",
          desc: "Automatic scaling to adapt to peak workloads without human interference to ensure high performance during traffic surges.",
        },
        {
          icon: "BsCodeSquare",
          title: "Flexibility in Development",
          desc: "Enables developers to code in a variety of programming languages and frameworks supported by the serverless platform.",
        },
        {
          icon: "BsShieldCheck",
          title: "Security",
          desc: "The serverless model minimizes vulnerabilities by having security features and by executing within an isolated environment.",
        },
        {
          icon: "BsTools",
          title: "Simplified Maintenance",
          desc: "Automatically managed infrastructure avoids hassle in updates while minimizing efforts toward server maintenance.",
        },
      ],
    },
  },
  serverless_challenge_1: {
    type: "ChallengeGrid",
    content: {
      heading: "The Strategic Impact <br /> of Edge Computing",
      challenges: [
        {
          icon: "BsConeStriped",
          title: "Resource Constraints",
          desc: "Serverless platforms have strict memory and payload limits. We optimize your code and architecture to ensure maximum performance within these provider-specific constraints.",
        },
        {
          icon: "BsShieldX",
          title: "Security & Multi-tenancy",
          desc: "Shared infrastructure can introduce unique risks. We implement robust IAM policies, VPC isolation, and code-level security to protect your data in a serverless environment.",
        },
        {
          icon: "BsLayerForward",
          title: "Legacy Interoperability",
          desc: "Integrating modern serverless functions with aging legacy systems can be complex. We build secure bridge APIs and middleware to ensure seamless data flow between old and new.",
        },
        {
          icon: "BsBug",
          title: "Local Debugging & Testing",
          desc: "Simulating cloud events locally is a challenge. We use tools like Serverless Offline and LocalStack to create a mirror of the production environment for reliable testing.",
        },
        {
          icon: "BsClockHistory",
          title: "Limited Execution Time",
          desc: "Functions have a 'timeout' (e.g., AWS Lambda's 15 min limit). For long-running tasks, we architect asynchronous patterns or step functions to bypass these execution limits.",
        },
      ],
    },
  },
  serverless_faq_1: {
    type: "UseableFaqSection",
    content: {
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "Does 'Serverless' mean there are no servers involved?",
          answer:
            "Technically, servers still exist, but they are managed entirely by the cloud provider. You don't have to provision, patch, or scale them. You simply upload your code, and the infrastructure handles the execution and scaling automatically.",
        },
        {
          question: "How does the 'Pay-as-you-go' model actually save money?",
          answer:
            "In traditional hosting, you pay for a server 24/7 even if no one is using it. In Serverless, you are only billed for the milliseconds your code is running. If there’s no traffic, your cost drops to zero, making it extremely cost-effective for variable workloads.",
        },
        {
          question: "What is a 'Cold Start' and how do you mitigate it?",
          answer:
            "A cold start happens when a function is triggered after being idle, causing a slight delay in execution. We minimize this using techniques like 'Provisioned Concurrency', keeping functions warm, and optimizing the code package size for faster initialization.",
        },
        {
          question: "Is Serverless suitable for long-running processes?",
          answer:
            "Most serverless functions (like AWS Lambda) have a timeout limit (e.g., 15 minutes). For tasks that take longer, we architect solutions using 'Step Functions' or 'Durable Functions' to break the process into smaller, manageable steps.",
        },
        {
          question: "Are there any risks of Vendor Lock-in with Serverless?",
          answer:
            "While each provider has its own tools, we use the 'Serverless Framework' and 'OpenTelemetry' to write provider-agnostic code. This makes it much easier to migrate your application between AWS, Azure, or Google Cloud if needed.",
        },
      ],
    },
  },
};

export const iacData = {
  iac_reuse_1: {
    type: "ReuseCard",
    content: {
      heading: "The Right Solution for Every Challenge",
      items: [
        {
          icon: "BsCloudArrowUp",
          title: "Cloud Agnostic IaC Solutions",
          desc: "Deploy infrastructure seamlessly across AWS, Azure, and GCP using industry-leading tools like Terraform and Pulumi. We ensure your setup is portable and free from vendor lock-in.",
        },
        {
          icon: "BsBoxSeam",
          title: "Modular & Scalable Infrastructure",
          desc: "We design reusable IaC modules that grow with your business. From networking to compute, our blueprints ensure consistency across development and production environments.",
        },
        {
          icon: "BsGearWideConnected",
          title: "IaC Integration with CI/CD",
          desc: "Automate infrastructure provisioning within your Jenkins, GitHub Actions, or GitLab CI pipelines. Every change is tested and validated before being applied to production.",
        },
        {
          icon: "BsShieldLock",
          title: "Compliance-Ready Setup",
          desc: "Automate your infrastructure to meet strict industry standards like SOC2, GDPR, and HIPAA. We bake security into the code to guarantee compliant deployments from day one.",
        },
        {
          icon: "BsDiagram3",
          title: "Multi-Cloud & Hybrid Strategies",
          desc: "Expert management of public and private clouds. We use Bicep, ARM, and CloudFormation to create unified cross-platform strategies for complex hybrid environments.",
        },
        {
          icon: "BsCodeSlash",
          title: "Advanced Tooling Mastery",
          desc: "Proficiency in Terraform CDK, AWS CDK, and Ansible to handle everything from low-level resource provisioning to high-level configuration management.",
        },
      ],
    },
  },
  iac_feature_1: {
    type: "FeatureGrid",
    content: {
      heading: "Turning Ideas into <br /> Impactful Infrastructure",
      subheading:
        "We leverage Infrastructure as Code to bridge the gap between complex software requirements and reliable cloud execution.",
      features: [
        {
          icon: "BsSliders",
          title: "Configuration Management",
          desc: "Manage and version your entire infrastructure efficiently using declarative configuration files, ensuring zero manual errors.",
        },
        {
          icon: "BsGraphUp",
          title: "Scalability",
          desc: "Enable rapid and flexible scaling of cloud resources based on real-time business needs without manual intervention.",
        },
        {
          icon: "BsGit",
          title: "GitOps Integration",
          desc: "Implement GitOps principles for a single source of truth, allowing for streamlined and centralized infrastructure management via Git.",
        },
        {
          icon: "BsCloudCheck",
          title: "Cloud-Native Integration",
          desc: "Seamlessly integrate with modern cloud-native systems using declarative tools like Terraform and Pulumi for a unified architecture.",
        },
        {
          icon: "BsShieldLock",
          title: "Security Compliance",
          desc: "Automate security guardrails to ensure constant compliance with global standards through automated policy-as-code checks.",
        },
        {
          icon: "BsCashStack",
          title: "Cost Efficiency",
          desc: "Significantly reduce cloud spend by automatically identifying and removing underutilized or orphaned resources.",
        },
        {
          icon: "BsRocketTakeoff",
          title: "Future-Proofing",
          desc: "Build a robust, modular system designed to handle future tech challenges and massive growth with expert architectural guidance.",
        },
      ],
    },
  },
  iac_flow_1: {
    type: "MigrationFlow",
    content: {
      heading:
        "Turning Ideas into Impactful Realities <br /> Where Vision Meets Seamless Execution",
      subheading:
        "Our philosophy is simple: we combine top-tier talent with robust processes to deliver infrastructure that truly scales.",
      challenges: [
        {
          icon: "BsPeople",
          title: "People-First Approach",
          desc: "We invest in expert teams dedicated to transforming your infrastructure, fostering a culture of continuous learning to leverage the latest IaC capabilities.",
        },
        {
          icon: "BsPersonBadge",
          title: "Hands-On Leadership",
          desc: "Our skilled leadership drives engagements, taking full accountability and fostering long-term, success-driven partnerships.",
        },
        {
          icon: "BsInfinity",
          title: "Agile Development",
          desc: "Using agile delivery, we keep stakeholders engaged and adapt to evolving infrastructure needs through iterative cycles.",
        },
        {
          icon: "BsCheck2Circle",
          title: "Automated Testing",
          desc: "Test automation drives QA in all our projects, ensuring stability, performance, security, and resilience through comprehensive test suites.",
        },
        {
          icon: "BsShieldCheck",
          title: "DevSecOps Integration",
          desc: "We embed security throughout the DevOps lifecycle with policy-as-code and proactive threat modeling to ensure compliance.",
        },
        {
          icon: "BsChatLeftDots",
          title: "Open Communication",
          desc: "We foster open communication with iterative reviews, transparent tracking, and always-available teams, ensuring quality and trust.",
        },
      ],
    },
  },
  iac_faq_1: {
    type: "UseableFaqSection",
    content: {
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question:
            "How do you ensure that the infrastructure vision aligns with my business goals?",
          answer:
            "We start with a 'Vision-to-Execution' workshop where our leadership and expert teams analyze your business requirements. This ensures that every line of code we write directly contributes to your scalability and ROI.",
        },
        {
          question: "What does a 'People-First' approach mean for my project?",
          answer:
            "It means we don't just provide tools; we provide dedicated experts. Our team stays updated with the latest cloud trends to ensure your project benefits from the most modern and efficient engineering practices available.",
        },
        {
          question:
            "How do you handle changes in requirements during the project?",
          answer:
            "We follow an Agile Development methodology. Through iterative cycles and regular stakeholder reviews, we can adapt to evolving needs quickly without disrupting the overall project timeline or stability.",
        },
        {
          question:
            "How do you guarantee the security and stability of the deployment?",
          answer:
            "We integrate DevSecOps and Automated Testing from day one. Every infrastructure change undergoes rigorous security scans (Policy-as-Code) and automated QA suites to ensure 100% resilience and compliance.",
        },
        {
          question:
            "How transparent is the communication during the engagement?",
          answer:
            "Transparency is our priority. We provide real-time tracking of progress, scheduled iterative reviews, and maintain an always-available communication channel to ensure there are no surprises and full trust is maintained.",
        },
      ],
    },
  },
};

export const devopsConsultingData = {
  dcons_reuse_1: {
    type: "ReuseCard",
    content: {
      heading: "Transform Your Development Pipeline <br /> with DevOps Mastery",
      items: [
        {
          icon: "BsBarChartSteps",
          title: "DevOps Assessment & Maturity Analysis",
          desc: "We evaluate your current DevOps processes to identify strengths, critical gaps, and high-impact opportunities for digital transformation.",
        },
        {
          icon: "BsMap",
          title: "Custom DevOps Strategy Development",
          desc: "We build a customized DevOps roadmap tailored to your specific business objectives, designed to accelerate delivery cycles and ROI.",
        },
        {
          icon: "BsWrenchAdjustable",
          title: "Toolchain Integration & Workflow Design",
          desc: "Seamlessly integrate the right tools (CI/CD, monitoring, logging) into your process to improve team efficiency and cross-functional collaboration.",
        },
        {
          icon: "BsLightningCharge",
          title: "Process Automation Recommendations",
          desc: "Our experts identify key bottlenecks for automation, reducing manual toil and ensuring consistency across your entire development pipeline.",
        },
        {
          icon: "BsCloudCheck",
          title: "Cloud Migration & Transformation",
          desc: "Get strategic guidance and end-to-end support to migrate your applications and legacy infrastructure into a scalable cloud environment.",
        },
        {
          icon: "BsPeople",
          title: "Collaboration & Culture Enablement",
          desc: "We help you foster a collaborative DevOps culture that prioritizes innovation, transparency, and continuous improvement across all teams.",
        },
      ],
    },
  },
  dcons_feature_1: {
    type: "FeatureSection",
    content: {
      mainTitle: "Why Trust Vertex Pro for DevOps Consulting?",
      features: [
        {
          icon: "BsGem",
          title: "Highest Quality Work",
          desc: "We are committed to delivering nothing but the best, ensuring meticulous attention to detail in every cloud architecture we build.",
          link: "/quality-standards",
        },
        {
          icon: "BsRocketTakeoff",
          title: "Faster Software Delivery",
          desc: "Accelerate your time-to-market with our optimized CI/CD pipelines and automated workflows designed for rapid, reliable releases.",
          link: "/solutions/delivery",
        },
        {
          icon: "BsHeadset",
          title: "Supportive Communication",
          desc: "Experience personalized support and transparent communication tailored specifically to your organization's unique needs and goals.",
          link: "/contact",
        },
        {
          icon: "BsCpu",
          title: "Advanced Technology",
          desc: "We leverage cutting-edge tools and future-proof technologies to surpass expectations and build lasting customer loyalty.",
          link: "/tech-stack",
        },
        {
          icon: "BsShieldLock",
          title: "Advanced Security",
          desc: "Gain maximum protection through high-tech security standards and protocols integrated directly into your DevOps lifecycle.",
          link: "/services/security",
        },
        {
          icon: "BsAward",
          title: "Proven Expertise",
          desc: "Utilizing profound DevOps expertise to streamline complex workflows while delivering rock-solid, reliable software solutions.",
          link: "/case-studies",
        },
      ],
    },
  },
  dcons_challenge_1: {
    type: "ChallengeGrid",
    content: {
      heading: "Transforming Data into <br /> Strategic Opportunities",
      challenges: [
        {
          icon: "BsSearch",
          title: "01. Discovery & Assessment",
          desc: "We begin by deep-diving into your existing infrastructure. Our team collaborates with you to uncover pain points and hidden opportunities for architectural improvement.",
        },
        {
          icon: "BsSignpostSplit",
          title: "02. DevOps Roadmap Development",
          desc: "Based on our findings, we craft a tailored roadmap aligned with your business goals, selecting the best-fit tools and methodologies for your specific environment.",
        },
        {
          icon: "BsCpu",
          title: "03. Implementation & Automation",
          desc: "Our engineers build and automate your CI/CD pipelines and Infrastructure as Code (IaC), enabling faster, more reliable, and hands-free deployments.",
        },
        {
          icon: "BsFileEarmarkText",
          title: "04. Comprehensive Documentation",
          desc: "We provide clear, concise documentation, including architecture diagrams and pipeline configurations, ensuring easy onboarding and consistent application.",
        },
        {
          icon: "BsGraphUpArrow",
          title: "05. Optimization & Scaling",
          desc: "We continuously monitor performance and implement rigorous testing. As your business grows, we scale your cloud solutions to meet increasing demand seamlessly.",
        },
        {
          icon: "BsLifePreserver",
          title: "06. Continuous Support",
          desc: "We don't just 'ship and forget.' Our ongoing support ensures your DevOps environment stays secure, optimized, and ready for future technological shifts.",
        },
      ],
    },
  },
  dcons_faq_1: {
    type: "UseableFaqSection",
    content: {
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question:
            "How long does the initial Discovery & Assessment phase take?",
          answer:
            "Typically, the discovery phase takes between 1 to 2 weeks, depending on the complexity of your current infrastructure. We aim to provide a comprehensive report and roadmap immediately after.",
        },
        {
          question:
            "Will the Implementation phase cause any downtime for our current services?",
          answer:
            "Our goal is zero-downtime migration. We build and test the new automated environment in parallel with your existing setup, ensuring a seamless cutover once everything is validated.",
        },
        {
          question:
            "What kind of documentation will we receive at the end of the project?",
          answer:
            "You will receive a complete 'Infrastructure Handbook' containing high-level architecture diagrams, detailed pipeline configurations, security protocols, and step-by-step disaster recovery guides.",
        },
        {
          question:
            "How do you handle scaling if our traffic spikes suddenly during the process?",
          answer:
            "Our 'Optimization & Scaling' phase includes setting up auto-scaling groups and load balancers that respond dynamically to traffic, ensuring your application remains performant at all times.",
        },
        {
          question: "What does 'Continuous Support' actually cover?",
          answer:
            "It covers proactive monitoring, security patching, CI/CD pipeline maintenance, and regular performance audits to ensure your DevOps ecosystem evolves with new industry standards.",
        },
      ],
    },
  },
};

export const cloudIntelligenceData = {
  cia_reuse_1: {
    type: "ReuseCard",
    content: {
      heading:
        "Unlock Actionable Insights <br /> with Cloud-Native Data Solutions",
      items: [
        {
          icon: "BsDatabaseFillGear",
          title: "Data Warehousing & ETL Solutions",
          desc: "Cloud-based storage coupled with robust ETL pipelines facilitates the extraction, transformation, and loading of massive data volumes for superior analysis.",
        },
        {
          icon: "BsCpuFill",
          title: "Big Data Processing (Hadoop & Spark)",
          desc: "Leverage the power of Apache Hadoop and Spark in the cloud to store and process complex big data sets with high-speed computational efficiency.",
        },
        {
          icon: "BsGearWideConnected",
          title: "AI & Machine Learning Deployment",
          desc: "Accelerate the speed of AI/ML model deployment and implementation using scalable cloud resources tailored for advanced algorithmic training.",
        },
        {
          icon: "BsBarChartLineFill",
          title: "Real-time Data Analytics & Visualization",
          desc: "Instantly visualize cloud-processed data through dynamic dashboards, enabling immediate data-driven decision-making across the organization.",
        },
        {
          icon: "BsGraphUpArrow",
          title: "Predictive Analytics & Insights",
          desc: "Transform historical data into future trends using cloud-powered predictive modeling to optimize strategic business outcomes.",
        },
        {
          icon: "BsShieldLockFill",
          title: "Data Security & Privacy Solutions",
          desc: "Ensure enterprise-grade security and privacy for sensitive data with robust mechanisms that guarantee compliance with global regulatory standards.",
        },
      ],
    },
  },
  cia_feature_1: {
    type: "FeatureSection",
    content: {
      mainTitle: "Harness the Power of <br /> Cloud Data Intelligence",
      features: [
        {
          icon: "BsGraphUpArrow",
          title: "Predictive Analytics",
          desc: "Utilize AI and ML technologies to foresee future trends, gaining operational efficiency to remain competitive in the market.",
        },
        {
          icon: "BsCpu",
          title: "Powerful Data Processing",
          desc: "Process massive volumes of data at high speeds using cloud analytics to extract meaningful and useful information instantly.",
        },
        {
          icon: "BsCheck2Circle",
          title: "Actionable Results",
          desc: "Transform raw data into strategic insights that improve reasoning and further your organization's core activities.",
        },
        {
          icon: "BsEye",
          title: "End-to-End Data Visibility",
          desc: "Monitor data movement across multiple sources and touchpoints to maintain complete control over your entire data lifecycle.",
        },
        {
          icon: "BsBarChartSteps",
          title: "Real-Time Reporting",
          desc: "Generate live reports and visualizations to monitor KPIs, analyze trends, and improve operational efficiency on the fly.",
        },
        {
          icon: "BsHeadset",
          title: "24/7 Customer Support",
          desc: "Round-the-clock support ensuring cloud service features are optimized, with prompt issue resolution and constant system surveillance.",
        },
      ],
    },
  },
  cia_challenge_1: {
    type: "ChallengeGrid",
    content: {
      heading: "Transforming Data into <br /> Strategic Opportunities",
      challenges: [
        {
          icon: "BsRocketTakeoff",
          title: "Increased Productivity & Efficiency",
          desc: "Cloud intelligence assists in re-engineering processes and replacing manual roles with automation, making operations more productive.",
        },
        {
          icon: "BsPiggyBank",
          title: "Lower Cost & Reduced Manual Effort",
          desc: "Utilizing cloud-based analytics lowers overhead expenses and decreases manual workloads, significantly enhancing operational efficiency.",
        },
        {
          icon: "BsCpuFill",
          title: "Streamline Business Processes",
          desc: "Cloud analytics are deeply integrated into business systems, processing data within operations to eliminate delays and optimize workflows.",
        },
        {
          icon: "BsLightningCharge",
          title: "Faster Time-to-Market",
          desc: "Cloud intelligence fast-tracks design and construction phases by enabling rapid, data-driven decisions that eliminate long development cycles.",
        },
        {
          icon: "BsEmojiSmile",
          title: "Elevated Customer Satisfaction",
          desc: "Businesses can deliver personalized customer experiences through cloud analytical intelligence, increasing loyalty and retention levels.",
        },
        {
          icon: "BsBoundingBoxCircles",
          title: "Enhanced Scalability & Flexibility",
          desc: "Cloud-delivered analytics allow businesses to easily scale operations and accommodate demand changes, enhancing overall adaptability.",
        },
      ],
    },
  },
  cia_faq_1: {
    type: "UseableFaqSection",
    content: {
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question:
            "What is the difference between a Data Warehouse and a Data Lake?",
          answer:
            "A Data Warehouse stores structured data that has been processed for a specific purpose, making it ideal for business reporting. A Data Lake stores raw, unstructured data in its native format, providing more flexibility for deep data science and machine learning tasks.",
        },
        {
          question:
            "How do your ETL solutions handle real-time data streaming?",
          answer:
            "We utilize modern ETL/ELT frameworks like Apache Spark and cloud-native tools to process data in real-time. This ensures that your dashboards and analytics reflect live information rather than waiting for overnight batch processing.",
        },
        {
          question:
            "Can you integrate data from multiple sources like CRM, ERP, and Social Media?",
          answer:
            "Yes, our cloud-native data solutions are designed for seamless integration. We build custom pipelines that pull data from various APIs, on-premise databases, and third-party platforms into a single, unified source of truth.",
        },
        {
          question:
            "How do you ensure the security of sensitive business data?",
          answer:
            "Security is built into every layer. We implement data encryption at rest and in transit, multi-factor authentication (MFA), and role-based access control (RBAC) to ensure that only authorized personnel can access specific data sets, maintaining full compliance with GDPR and HIPAA.",
        },
        {
          question:
            "Is Big Data processing cost-effective for medium-sized businesses?",
          answer:
            "Absolutely. With cloud computing, you only pay for the resources you use. We optimize your data architecture to scale up during heavy processing and scale down during idle times, making high-level analytics affordable for businesses of all sizes.",
        },
      ],
    },
  },
};

export const cloudInfrastructureData = {
  cinf_reuse_1: {
    type: "ReuseCard",
    content: {
      heading:
        "Innovation That Moves You Forward <br /> Your Business, Our Tailored Approach",
      items: [
        {
          icon: "BsCloudArrowUp",
          title: "Strategic Cloud Migration",
          desc: "With business process considerations in the forefront, strategize and implement a workable plan for the migration of business processes to the cloud.",
        },
        {
          icon: "BsLayers",
          title: "Advanced Cloud Architecture",
          desc: "Employ the latest technologies to allow the design of cloud solutions that are elastic, secure, and cost-effective to operate on.",
        },
        {
          icon: "BsGearWideConnected",
          title: "Automation Excellence",
          desc: "Introduce smart automation to enhance operational effectiveness and minimize errors by automating deployment, workflow, and infrastructure.",
        },
        {
          icon: "BsLightningCharge",
          title: "Cloud Performance Tuning",
          desc: "Cost rationalization and performance assessment of cloud provisioned resources by periodic configuration evaluation and adjustment.",
        },
        {
          icon: "BsActivity",
          title: "Continuous Cloud Monitoring",
          desc: "Put in place monitoring tools and processes to ensure issues are dealt with in good time with high continuity and security compliance.",
        },
        {
          icon: "BsPuzzle",
          title: "Seamless Cloud Integration",
          desc: "Easily bring on board relevant cloud services to existing systems to create an efficient connection across environments.",
        },
      ],
    },
  },
  cinf_feature_1: {
    type: "FeatureSection",
    content: {
      mainTitle:
        "Expert Solutions, Proven Results Your Success, Our Commitment",
      features: [
        {
          icon: "BsGraphDownArrow",
          title: "40% Lowered Cloud Usage Cost",
          desc: "Cost-saving measures include cloud usage optimization, reducing excess resources, and adopting cheaper available cloud storage.",
        },
        {
          icon: "BsShieldCheck",
          title: "Compliance with Industry Standard",
          desc: "Ensuring standards like HIPAA/HITECH are met, protecting documents from violations that may be costly to the company.",
        },
        {
          icon: "BsPiggyBank",
          title: "1.5-3x Savings on Infrastructure Management",
          desc: "Infrastructure costs are reduced by fine-tuning utilization, automating activities, and providing scalable infrastructure.",
        },
        {
          icon: "BsFileEarmarkBarGraph",
          title: "Regular Transparent Reporting",
          desc: "Monthly transparent reporting including performance and cost data, allowing for data-driven business decisions.",
        },
        {
          icon: "BsRocketTakeoff",
          title: "Efficient IT Services Delivery",
          desc: "Facilitates the delivery of IT services with minimal interruptions in service provision and zero downtime.",
        },
        {
          icon: "BsHeadset",
          title: "24/7 Customer Support",
          desc: "Support is available 24 hours a day, 7 days a week so your cloud-based infrastructure stays secure and efficient.",
        },
      ],
    },
  },
  cinf_challenge_1: {
    type: "ChallengeGrid",
    content: {
      heading: "Navigating the Hurdles of Modern <br />  Cloud Infrastructure",
      challenges: [
        {
          icon: "BsPersonExclamation",
          title: "Lack of Skilled Professionals",
          desc: "Inadequate expertise leads to poor resource allocation, making manual cloud management a costly and inefficient process.",
        },
        {
          icon: "BsDiagram3",
          title: "Increased Infrastructure Complexity",
          desc: "Managing multi-layered services across various platforms often leads to integration gaps and operational friction.",
        },
        {
          icon: "BsShieldSlash",
          title: "Heightened Security Risks",
          desc: "Without robust encryption and protocols, cloud-stored data remains vulnerable to breaches and sophisticated cyber attacks.",
        },
        {
          icon: "BsRecycle",
          title: "Inefficient Resource Management",
          desc: "Improper deployment techniques result in resource wastage, causing shortages during critical peak performance periods.",
        },
        {
          icon: "BsCashStack",
          title: "Uncontrolled Cloud Expenditure",
          desc: "Mismanagement of idle resources and lack of granular control often lead to skyrocketing monthly cloud bills.",
        },
        {
          icon: "BsCloudSlash",
          title: "Downtime & Service Gaps",
          desc: "Frequent interruptions and lack of redundancy impede business productivity and degrade the overall customer experience.",
        },
        {
          icon: "BsFileEarmarkLock",
          title: "Complex Compliance Demands",
          desc: "Failure to align with industry laws (like HIPAA or GDPR) can result in heavy legal penalties and financial loss.",
        },
        {
          icon: "BsLightbulbOff",
          title: "Missed Performance Gains",
          desc: "A lack of real-time monitoring means organizations fail to identify key opportunities for cost and speed optimization.",
        },
      ],
    },
  },
  cinf_faq_1: {
    type: "UseableFaqSection",
    content: {
      faqTitle: "Frequently Asked Questions for Cloud Infrastructure",
      faqs: [
        {
          question:
            "What services are included in your Cloud Infrastructure management?",
          answer:
            "Our services encompass 24/7 monitoring, cost optimization, security patching, auto-scaling configuration, and comprehensive network management to ensure your cloud environment remains resilient and high-performing.",
        },
        {
          question:
            "Can you migrate our existing on-premise infrastructure to the cloud?",
          answer:
            "Yes, we specialize in seamless cloud migrations. We strategize and execute the transfer of your physical servers and databases to platforms like AWS, Azure, or Google Cloud with zero to minimal downtime.",
        },
        {
          question:
            "How do managed services help in reducing our cloud expenditure?",
          answer:
            "We analyze your usage patterns to identify idle resources and optimize instance sizing. By implementing automation and right-sizing, we typically help clients save between 30% to 40% on their monthly cloud bills.",
        },
        {
          question:
            "How do you ensure data security and regulatory compliance?",
          answer:
            "We implement industry-standard security protocols, including end-to-end encryption, advanced firewalls, and strict Identity and Access Management (IAM) policies, ensuring compliance with standards like HIPAA, GDPR, and SOC2.",
        },
        {
          question:
            "What kind of support can we expect if a critical issue arises?",
          answer:
            "We provide 24/7 dedicated support. Our automated monitoring tools alert our technical team in real-time, allowing us to proactively resolve incidents before they impact your business operations.",
        },
        {
          question: "Do you support multi-cloud or hybrid cloud environments?",
          answer:
            "Absolutely. We are experts in managing hybrid and multi-cloud strategies (e.g., combining AWS and Azure). This approach ensures you are not locked into a single vendor and provides better redundancy.",
        },
        {
          question: "What is your Disaster Recovery (DR) strategy?",
          answer:
            "We set up automated backups and multi-region data replication. Our DR plans are designed to provide a low Recovery Time Objective (RTO), ensuring your data can be restored quickly in the event of a failure.",
        },
        {
          question: "How does automation improve infrastructure reliability?",
          answer:
            "Through 'Infrastructure as Code' (IaC), we automate deployment and scaling. This eliminates human errors, ensures environment consistency, and allows for rapid deployment of updates.",
        },
        {
          question:
            "Will we receive regular updates on our infrastructure performance?",
          answer:
            "Yes, transparency is a core value. We provide detailed monthly reports that include performance metrics, security audits, and cost analysis to help you make informed business decisions.",
        },
        {
          question:
            "What is the pricing model for your Managed Cloud services?",
          answer:
            "Our pricing is flexible and depends on the scale of your infrastructure. We offer fixed monthly packages as well as customized plans tailored to your specific operational requirements.",
        },
      ],
    },
  },
  cinf_innovation_1: {
    type: "Innovation",
    content: {
      title: "Optimize Your Business with Comprehensive Cloud Management",
      description:
        "Vertex Pro executes complete segment-wise administration of the cloud ranging from AWS, Azure, Google, Digital Ocean Cloud Platforms hence offering monitoring, security, and cost management of your cloud resources",
      row1: [
        {
          name: "Apple",
          url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        },
        {
          name: "Microsoft",
          url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        },
        {
          name: "Google",
          url: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg",
        },
        {
          name: "Amazon",
          url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        },
        {
          name: "Meta",
          url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
        },
        {
          name: "Terraform",
          url: "https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg",
        },
        {
          name: "Kubernetes",
          url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
        },
      ],
      row2: [
        {
          name: "Dell",
          url: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
        },
        {
          name: "HP",
          url: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
        },
        {
          name: "IBM",
          url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        },
        {
          name: "Intel",
          url: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
        },
        {
          name: "Cisco",
          url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
        },
        {
          name: "Prometheus",
          url: "https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg",
        },
        {
          name: "Grafana",
          url: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg",
        },
      ],
    },
  },
};

export const iotEdgeData = {
  iot_architecture_1: {
    type: "IoTArchitecture",
    content: {
      title: "The IoT Edge Ecosystem",
      nodeLeft: { icon: "BsDeviceSsd", label: "Smart Sensors" },
      nodeCenter: {
        icon: "BsHddNetwork",
        label: "Edge Gateway",
        subLabel: "Local Processing",
      },
      nodeRight: { icon: "BsCloudCheck", label: "Cloud Insights" },
    },
  },
  iot_reuse_1: {
    type: "ReuseCard",
    content: {
      heading: "Bridge the Gap Between <br /> Hardware and Intelligence",
      items: [
        {
          icon: "BsCpu",
          title: "Edge Device Management & Connectivity",
          desc: "Facilitate the distributed setup, governance, and networking of edge devices for efficient and holistic data transmission across the ecosystem.",
        },
        {
          icon: "BsLightningCharge",
          title: "Real-time Data Processing at the Edge",
          desc: "Execute data analytics directly on edge hardware to boost decision-making speed and eliminate latency for critical industrial operations.",
        },
        {
          icon: "BsShieldLock",
          title: "Edge Security & Compliance",
          desc: "Implement robust security controls at the edge to enhance device integrity and ensure data remains protected from evolving cyber threats.",
        },
        {
          icon: "BsDatabaseDown",
          title: "IoT Data Storage & Processing",
          desc: "Strategically manage data produced by IoT systems using a hybrid approach of edge and central processing to maximize performance.",
        },
        {
          icon: "BsCloudCheck",
          title: "Cloud & On-premises Integration",
          desc: "Seamlessly link edge devices with cloud or on-premise systems without quality loss, allowing for infinite system scalability.",
        },
        {
          icon: "BsActivity",
          title: "Monitoring & Analytics for Edge",
          desc: "Utilize advanced diagnostic tools to monitor, assess, and provide valuable real-time insights for all distributed edge devices.",
        },
      ],
    },
  },
  iot_feature_1: {
    type: "FeatureSection",
    content: {
      mainTitle:
        "Expert Solutions, Proven Results Your Success, Our Commitment",
      features: [
        {
          icon: "BsLightningCharge",
          title: "Real-Time Data Processing",
          desc: "Employs instant processing of data in all its locations, enhancing decision-making speed without dependence on a central point.",
        },
        {
          icon: "BsShieldCheck",
          title: "Enhanced Data Security",
          desc: "Protects sensitive data with high-end security measures and encryption directly on the user edge.",
        },
        {
          icon: "BsCloudArrowUp",
          title: "Edge-to-Cloud Synchronization",
          desc: "Seamlessly integrates edge devices with cloud systems to allow efficient sharing and storage of information.",
        },
        {
          icon: "BsDiagram3",
          title: "AI and ML Capabilities at the Edge",
          desc: "Processes advanced AI and machine learning models nearer to the devices for superior IoT system functioning.",
        },
        {
          icon: "BsCpu",
          title: "Low Latency Communication",
          desc: "Delivers immense communication speed to avoid interruptions and ensure the smooth running of IoT systems.",
        },
        {
          icon: "BsGearWideConnected",
          title: "Customizable Edge Gateways",
          desc: "Provides application-specific edge gateway variants tailored for a myriad of diverse industry verticals.",
        },
      ],
    },
  },
  iot_challenge_1: {
    type: "ChallengeGrid",
    content: {
      heading: "The Strategic Impact <br /> of Edge Computing",
      challenges: [
        {
          icon: "BsClockHistory",
          title: "Reduced Latency",
          desc: "Processing data in an edge network reduces waiting time, leading to quicker and instant decision-making processes.",
        },
        {
          icon: "BsCpu",
          title: "Facilitates AI and ML at the Edge",
          desc: "Deploying Edge AI capabilities for preventive maintenance, real-time anomaly detection, and advanced automation.",
        },
        {
          icon: "BsSpeedometer2",
          title: "Improved Device Performance",
          desc: "Performing operations at the data source increases the native capabilities and overall effectiveness of IoT devices.",
        },
        {
          icon: "BsActivity",
          title: "Faster Response Times",
          desc: "Enables smart devices to engage in near real-time, which is paramount for self-driving cars and smart healthcare systems.",
        },
        {
          icon: "BsHddNetwork",
          title: "Better Bandwidth Management",
          desc: "Local processing minimizes the volume of data transferred, optimizing network usage and reducing operational costs.",
        },
      ],
    },
  },
  iot_faq_1: {
    type: "UseableFaqSection",
    content: {
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question:
            "What is the primary difference between Cloud IoT and Edge IoT?",
          answer:
            "Cloud IoT sends all data to a central server for processing, while Edge IoT processes data locally near the source. This significantly reduces latency, saves bandwidth, and allows for real-time decision-making without waiting for cloud round-trips.",
        },
        {
          question:
            "How does Edge Integration handle connectivity failures or internet outages?",
          answer:
            "Our Edge solutions feature 'Offline Capability,' allowing devices to continue local processing and data logging even when the internet is unstable. Once the connection is restored, the system automatically synchronizes the data with the central cloud.",
        },
        {
          question: "Is data security compromised when processed at the Edge?",
          answer:
            "On the contrary, Edge processing can be more secure. By filtering sensitive data locally before sending it to the cloud, we reduce the attack surface. We implement multi-layered security, including hardware-level encryption and secure boot protocols.",
        },
        {
          question:
            "Can we deploy advanced AI and Machine Learning models on Edge hardware?",
          answer:
            "Yes, we specialize in 'Edge AI.' We deploy optimized, lightweight ML models directly onto edge gateways to perform real-time tasks like predictive maintenance, anomaly detection, and facial recognition without needing a cloud connection.",
        },
        {
          question: "Which industries benefit most from IoT Edge Integration?",
          answer:
            "Industries requiring immediate response times benefit most, such as Smart Manufacturing (Industry 4.0), Healthcare (Remote Patient Monitoring), Autonomous Vehicles, and Smart Grid management where even a millisecond delay can be critical.",
        },
      ],
    },
  },
};

export const cloudMigrationData = {
  cmig_bento_1: {
    type: "MigrationBento",
    content: {
      heading: "Enterprise Cloud Transformation",
      items: [
        { id: 1, size: "large", title: "Zero-Downtime Migration", desc: "We sync your live databases in real-time, ensuring a seamless switch-over without interrupting your business operations.", icon: "BsLightningCharge", tag: "High Availability" },
        { id: 2, size: "small", title: "Cost Guard", desc: "Immediate 30% reduction in OpEx.", icon: "BsBarChartSteps" },
        { id: 3, size: "small", title: "Security First", desc: "AES-256 encryption during transit.", icon: "BsShieldLock" },
        { id: 4, size: "medium", title: "Infrastructure as Code (IaC)", desc: "We automate your entire cloud environment using Terraform and CloudFormation for repeatable, error-free deployments.", icon: "BsGearWideConnected", tag: "Automation" },
        { id: 5, size: "medium", title: "Legacy Modernization", desc: "Transforming monolithic apps into microservices during the migration phase.", icon: "BsCpu", tag: "Modernization" },
      ],
    },
  },
  cmig_comparison_1: {
    type: "MigrationComparison",
    content: {
      subtitle: "The Strategic Shift",
      headers: ["Metric", "Legacy Infrastructure", "Cloud-Native (Vertex Pro)"],
      points: [
        { label: "Scaling", old: "Manual / Weeks to Provision", new: "Auto-Scaling / Seconds" },
        { label: "Security", old: "Perimeter-based / Static", new: "Zero Trust / Dynamic IAM" },
        { label: "Updates", old: "Scheduled Downtime Required", new: "Blue-Green / Canary Deployments" },
        { label: "Costs", old: "Fixed CAPEX (Idle Resources)", new: "Pay-as-you-go OPEX" }
      ],
    },
  },
  cmig_reuse_1: {
    type: "ReuseCard",
    content: {
      heading: "Modernize Your Business <br /> with Strategic Cloud Migration",
      items: [
        {
          icon: "BsTruck",
          title: "Rehosting (Lift & Shift)",
          desc: "Moving your applications to the cloud as-is with minimal changes for the fastest transition.",
        },
        {
          icon: "BsLayers",
          title: "Replatforming",
          desc: "Making minor adjustments to take advantage of cloud features without changing the core architecture.",
        },
        {
          icon: "BsShuffle",
          title: "Refactoring",
          desc: "Re-architecting applications to be fully cloud-native, ensuring maximum scalability and efficiency.",
        },
        {
          icon: "BsBoxes",
          title: "Repurchasing",
          desc: "Moving from legacy internal systems to a SaaS (Software as a Service) platform.",
        },
        {
          icon: "BsHouseCheck",
          title: "Retaining",
          desc: "Keeping mission-critical data on-premise while migrating other services for a hybrid approach.",
        },
        {
          icon: "BsArrowRepeat",
          title: "Retiring",
          desc: "Identifying and decommissioning redundant or non-useful systems during the migration phase.",
        },
      ],
    },
  },
  cmig_challenge_1: {
    type: "ChallengeGrid",
    content: {
      heading: "Our Proven 5-Step <br /> Migration Roadmap",
      challenges: [
        {
          icon: "BsBarChart",
          title: "Discovery & Assessment",
          desc: "We analyze your current infrastructure, applications, and data to create a detailed migration roadmap.",
        },
        {
          icon: "BsGear",
          title: "Strategic Planning",
          desc: "Choosing the right cloud provider (AWS/Azure/GCP) and defining the migration strategy (The 6 Rs).",
        },
        {
          icon: "BsShieldLock",
          title: "Secure Data Transfer",
          desc: "Using encrypted channels to move your databases and files to the new cloud environment with zero data loss.",
        },
        {
          icon: "BsSpeedometer2",
          title: "Optimization & Testing",
          desc: "Rigorous testing of the migrated apps to ensure performance is better than the original setup.",
        },
        {
          icon: "BsCheck2Circle",
          title: "Final Cutover",
          desc: "Switching your operations to the live cloud environment with carefully managed downtime (Go-Live).",
        },
      ],
    },
  },
  cmig_flow_1: {
    type: "MigrationFlow",
    content: {
      heading: "Our Enterprise Migration Framework",
      challenges: [
        {
          heading: "Phase 01: Audit",
          subheading: "Discovery & Readiness",
          icon: "BsSearch",
          desc: "Deep-dive into legacy dependencies, application mapping, and TCO (Total Cost of Ownership) analysis.",
        },
        {
          heading: "Phase 02: Design",
          subheading: "Cloud Landing Zone",
          icon: "BsCpu",
          desc: "Architecting VPCs, IAM roles, and network security groups to create a secure enterprise landing zone.",
        },
        {
          heading: "Phase 03: Migration",
          subheading: "Data & App Transfer",
          icon: "BsDatabaseFillLock",
          desc: "Executing the move using block-level replication or database migration services (DMS) for zero data loss.",
        },
        {
          heading: "Phase 04: Validation",
          subheading: "Testing & UAT",
          icon: "BsCheckCircleFill",
          desc: "Rigorous load testing and User Acceptance Testing (UAT) to ensure performance benchmarks are met.",
        },
        {
          heading: "Phase 05: Hypercare",
          subheading: "Go-Live & Support",
          icon: "BsCloudCheckFill",
          desc: "24/7 post-migration monitoring and continuous performance tuning for the newly migrated workload.",
        },
      ],
    },
  },
  cmig_faq_1: {
    type: "UseableFaqSection",
    content: {
      faqTitle: "Cloud Migration Common Questions",
      faqs: [
        {
          question: "How long does the migration process take?",
          answer:
            "The timeline depends on the complexity of your apps and data size. A simple migration can take 2-4 weeks, while large enterprises might take several months.",
        },
        {
          question: "Will our services go offline during migration?",
          answer:
            "We use 'Zero Downtime' techniques where we sync data in the background and only switch over once everything is verified on the cloud.",
        },
        {
          question: "How do you ensure no data is lost?",
          answer:
            "We perform multiple backups before starting and use checksum verification to ensure every single file is moved correctly.",
        },
      ],
    },
  },
};

export const cloudConsultingData = {
  ccon_contact_1: {
    type: "ContactSection",
    content: {
      subTitle: "Get in Touch",
      title: "Start Your Cloud Journey",
      description: "Our experts are ready to transform your technical vision into a secure, scalable reality.",
      phone1: "(+92) 3156661667",
      phone2: "(+1) 929-207-2406",
      email1: "info@vertexpro.net",
      email2: "support@vertexpro.net",
    }
  },
  ccon_reuse_1: {
    type: "ReuseCard",
    content: {
      heading: "High-Performance Cloud Solutions Driven by Innovation",
      items: [
        {
          icon: "BsBarChartSteps",
          title: "Cloud Assessment & Adoption",
          desc: "Examine and transition to the most suitable cloud services for improved business resilience and efficiency.",
        },
        {
          icon: "BsCompass",
          title: "Cloud Strategy Development",
          desc: "Develop and implement a unique cloud vision strategy that best suits your business focus and perspective.",
        },
        {
          icon: "BsCashStack",
          title: "Cloud Cost Optimization",
          desc: "Control cloud spending by monitoring, managing, and employing techniques for optimization.",
        },
        {
          icon: "BsDiagram3",
          title: "Multi-Cloud Architecture Design",
          desc: "Design a robust multi-cloud setup that allows for performance, flexibility, and independence from any single vendor.",
        },
        {
          icon: "BsShieldCheck",
          title: "Compliance and Security Assessment",
          desc: "Verify that cloud services are compliant and data security is strong enough to safeguard the data and any industry requirements.",
        },
        {
          icon: "BsMap",
          title: "Infrastructure and Application Roadmap",
          desc: "Create an achievable transitional development plan for infrastructure and applications to the cloud.",
        },
      ],
    },
  },
  ccon_feature_1: {
    type: "FeatureSection",
    content: {
      mainTitle: "Why Vertex Pro Is Your Ideal Cloud Partner?",
      features: [
        {
          icon: "BsPerson",
          title: "Team Expertise",
          desc: "Expert cloud handling experience across different top platforms present in our team.",
        },
        {
          icon: "BsCoin",
          title: "Cost-Effective Solutions",
          desc: "Cost effective and efficient method of performing upkeep of the IT infrastructure.",
        },
        {
          icon: "BsClockHistory",
          title: "24/7 Support",
          desc: "The support team resolves any issues connected with the cloud for all clients.",
        },
        {
          icon: "BsAward",
          title: "Proven Track Record & Client Satisfaction",
          desc: "This has earned us remarkable longevity and high rates of customer satisfaction. Quality of service is what we are committed to.",
        },
        {
          icon: "BsLightbulb",
          title: "Innovation and Future-Readiness",
          desc: "We are attuned to current trends and what the future demands in terms of cloud technology such as AI, ML, and IoT.",
        },
        {
          icon: "BsCalendarCheck",
          title: "On Time Project Delivery",
          desc: "The full-cycle cloud services will guarantee the deployment on time.",
        },
      ],
    },
  },
  ccon_timeline_1: {
    type: "TimeLine",
    content: {
      sectionTitle:
        "How Can You Transform Your Business With Cloud Consulting Services?",
      steps: [
        {
          id: "01",
          title: "Consultation & Discovery",
          desc: "Adopting cloud technology and optimizing it according to one's specific business and existing infrastructure.",
        },
        {
          id: "02",
          title: "Strategy & Planning",
          desc: "Formulate a strategic approach to cloud computing that is specific to client business goals and the financial resources available.",
        },
        {
          id: "03",
          title: "Cloud Architecture Design",
          desc: "Create an effective and efficient cloud infrastructure for new or existing systems which can be effectively used.",
        },
        {
          id: "04",
          title: "Implementation",
          desc: "Implement the cloud solution, including porting applications, data and other resources to the allocated cloud.",
        },
        {
          id: "05",
          title: "Optimization & Performance Monitoring",
          desc: "Optimize and monitor the functionality of the cloud on a constant basis in order to achieve operational efficiency.",
        },
        {
          id: "06",
          title: "Continuous Support & Scaling",
          desc: "Carry on catering support and scaling according to your growth and further requirements.",
        },
      ],
    },
  },
  ccon_faq_1: {
    type: "UseableFaqSection",
    content: {
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question:
            "01. What are Reasons for Hiring Superior Cloud Engineers at Vertex Pro?   ",
          answer:
            "We have a flexible and skilled team of cloud engineers who can optimize your cloud setting in every possible way.",
        },
        {
          question:
            "02. What is Cloud Consulting and how can it benefit my business?",
          answer:
            "Cloud consulting involves expert guidance on cloud strategy, migration, and optimization to improve scalability and reduce IT costs.",
        },
        {
          question:
            "03. How do you ensure data security during cloud migration?",
          answer:
            "We perform a thorough Compliance and Security Assessment to verify that all data is encrypted and meets industry standards.",
        },
        {
          question:
            "04. Do you provide support after the cloud setup is complete?",
          answer:
            "Yes, we provide 24/7 continuous support and scaling to ensure your cloud environment grows with your business.",
        },
      ],
    },
  },
  ccon_innovation_1: {
    type: "Innovation",
    content: {
      title: "Lead Your Industry Forward with Strategic Cloud Innovation",
      description:
        "Through our cloud specialist teams, we deliver services over AWS, Microsoft Azure, and Google Cloud.",
      row1: [
        {
          name: "Azure",
          url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
        },
        {
          name: "AWS",
          url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        },
        {
          name: "IBM",
          url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        },
        {
          name: "Oracle",
          url: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
        },
      ],
      row2: [
        {
          name: "Google Cloud",
          url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
        },
        {
          name: "MetaCloud",
          url: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg",
        },
        {
          name: "Ingrow",
          url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        },
      ],
    },
  },
};

export const cloudManagedServicesData = {
  cmng_contact_1: {
    type: "ContactSection",
    content: {
      subTitle: "Get in Touch",
      title: "Secure Your Infrastructure Now",
      description: "Let's build something great together. Our experts are ready to transform your technical vision into a secure, scalable reality.",
      phone1: "(+92) 3156661667",
      phone2: "(+1) 929-207-2406",
      email1: "info@vertexpro.net",
      email2: "support@vertexpro.net",
    }
  },
  cmng_reuse_1: {
    type: "ReuseCard",
    content: {
      heading: "Managed Cloud Services for Seamless Operations",
      items: [
        {
          icon: "BsActivity",
          title: "Cloud Monitoring and Management",
          desc: "Monitoring performance and actively managing cloud resources in all regions on a continual basis to ensure optimal performance.",
        },
        {
          icon: "BsCpu",
          title: "Automated Infrastructure Provisioning",
          desc: "Fast, automated scaling in and out of cloud-owned resources according to workloads for new and existing systems.",
        },
        {
          icon: "BsCloudArrowDown",
          title: "Backup and Disaster Recovery",
          desc: "Solutions that incorporate backup services and quick failure recovery services to protect information from unforeseen disasters.",
        },
        {
          icon: "BsShieldLock",
          title: "Security and Compliance Implementation",
          desc: "Adoption of comprehensive security measures and compliance strategies designed to safeguard cloud environment boundaries.",
        },
        {
          icon: "BsCoin",
          title: "Cloud Cost Monitoring and Optimization",
          desc: "Cost containment measures provided with frequent assessment and suggestions for effective budget provision on any platform.",
        },
        {
          icon: "BsTools",
          title: "Incident Response and Troubleshooting",
          desc: "Proactive cloud operations ensuring prompt detection and correction of operational hitches to prevent service interruption.",
        },
        {
          icon: "BsShieldLock",
          title: "Ensuring Cloud Security Compliance",
          desc: "Implement appropriate security safeguards and procedures to be in conformity with industry best practices.",
        },
        {
          icon: "BsHospital",
          title: "Financial & Healthcare Solutions",
          desc: "Deliver devoted cloud security services to address challenges of controls specific to the financial & healthcare industries.",
        },
      ],
    },
  },
  cmng_feature_1: {
    type: "FeatureSection",
    content: {
      mainTitle:
        "Expert Solutions, Proven Results Your Success, Our Commitment",
      features: [
        {
          icon: "BsPatchCheck",
          title: "Proven Expertise",
          desc: "Group of certified cloud experts in the use of the leading cloud platforms.",
        },
        {
          icon: "BsShieldLock",
          title: "Advanced Security Protocols",
          desc: "We protect your information with the best encryption technologies and security protocols in the market.",
        },
        {
          icon: "BsGearWideConnected",
          title: "Comprehensive Cloud Management",
          desc: "Cloud management is provided in its totality inclusive of all the stages of your cloud development.",
        },
        {
          icon: "BsBarChartSteps",
          title: "Proactive Monitoring",
          desc: "It's always active in order to prevent business operations from being affected by potential issues.",
        },
        {
          icon: "BsCashStack",
          title: "Cost Transparency",
          desc: "Straightforward pricing for cloud services with no unexpected charges.",
        },
        {
          icon: "BsHeadset",
          title: "24/7 Support",
          desc: "Non-stop assistance ensures cloud operations run without a hitch by resolving issues quickly.",
        },
      ],
    },
  },
  cmng_timeline_1: {
    type: "TimeLine",
    content: {
      sectionTitle: "Turning Ideas into Action Every Step of the Way",
      steps: [
        {
          id: "01",
          title: "Assessment & Planning",
          desc: "Establish the business requirements and design, or improve an existing cloud infrastructure for efficiencies and elasticity.",
        },
        {
          id: "02",
          title: "Requirements Analysis",
          desc: "Understand and identify the clients' requirements to develop the cloud offering that best suits them",
        },
        {
          id: "03",
          title: "Candidate interview and shortlisting",
          desc: "Identify the pool of candidates qualified for the positions of cloud managers and cloud architects and select the appropriate candidate based on projects.",
        },
        {
          id: "04",
          title: "Planning and designing",
          desc: "Study the needs of the client and formulate purposeful planning and extensive cloud design that addresses the intention of the clients.",
        },
        {
          id: "05",
          title: "Sprint management",
          desc: "Conduct sprints in an orderly manner without compromising the timelines and completion of intended phases of development.",
        },
        {
          id: "06",
          title: "Peer review",
          desc: "Carry out stringent peer review processes to maintain the standards and quality of outputs.",
        },
        {
          id: "07",
          title: "Documentation and Hand Over",
          desc: "Conclude all the documents, hand over the project and get sign off from client to mark the end of the project successfully.",
        },
      ],
    },
  },
  cmng_faq_1: {
    type: "UseableFaqSection",
    content: {
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question:
            "What is the difference between Cloud Consulting and Managed Services?",
          answer:
            "Cloud Consulting focuses on strategy, architecture design, and planning your cloud journey. Managed Services, on the other hand, involves the day-to-day management, 24/7 monitoring, and maintenance of your cloud environment so you can focus on your core business.",
        },
        {
          question:
            "How do you help in reducing our monthly cloud expenditure?",
          answer:
            "We perform continuous cost optimization by identifying underutilized resources, implementing automated scheduling, and 'right-sizing' your instances. Our proactive management typically helps clients reduce their cloud bills by 20% to 30%.",
        },
        {
          question: "How are security patches and updates handled?",
          answer:
            "We follow a proactive security approach. Our team ensures that all OS-level patches, security configurations, and compliance updates are applied systematically without disrupting your business operations.",
        },
        {
          question: "What is your response time in case of a system failure?",
          answer:
            "We operate based on strict Service Level Agreements (SLAs). Our 24/7 monitoring tools often detect and resolve issues before they impact your users. For critical incidents, our response team is alerted instantly for immediate remediation.",
        },
        {
          question: "Can you manage our existing cloud infrastructure?",
          answer:
            "Yes, we specialize in taking over existing environments. We start with a comprehensive audit of your current setup on AWS, Azure, or Google Cloud, and then transition it into our managed framework for better performance and security.",
        },
        {
          question: "How do you ensure data protection and disaster recovery?",
          answer:
            "We implement robust Backup and Disaster Recovery (DR) strategies tailored to your needs. This includes automated backups, cross-region replication, and regular recovery drills to ensure your data is safe and restorable at any time.",
        },
      ],
    },
  },
  cmng_innovation_1: {
    type: "Innovation",
    content: {
      title: "Optimize Your Business with Comprehensive Cloud Management",
      description:
        "Vertex Pro executes complete segment-wise administration of the cloud ranging from AWS, Azure, Google, Digital Ocean Cloud Platforms hence offering monitoring, security, and cost management of your cloud resources",
      row1: [
        {
          name: "Apple",
          url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        },
        {
          name: "Microsoft",
          url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        },
        {
          name: "Google",
          url: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg",
        },
        {
          name: "Amazon",
          url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        },
        {
          name: "Meta",
          url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
        },
        {
          name: "Terraform",
          url: "https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg",
        },
        {
          name: "Kubernetes",
          url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
        },
      ],
      row2: [
        {
          name: "Dell",
          url: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
        },
        {
          name: "HP",
          url: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
        },
        {
          name: "IBM",
          url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        },
        {
          name: "Intel",
          url: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
        },
        {
          name: "Cisco",
          url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
        },
        {
          name: "Prometheus",
          url: "https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg",
        },
        {
          name: "Grafana",
          url: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg",
        },
      ],
    },
  },
};
