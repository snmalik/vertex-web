import React from 'react'
import {
    BsCloudArrowUp,       
    BsDiagram3,           
    BsArrowRepeat,        
    BsLightningCharge,    
    BsShieldCheck,       
    BsHddStack,
    BsDatabaseX,          
    BsClockHistory,       
    BsExclamationCircle,  
    BsShieldSlash,        
    BsCurrencyDollar, 
    BsCloudCheck,         
    BsGearWideConnected,  
    BsInboxes,            
    BsShieldLock,
    BsSearch,
    BsCodeSlash,

    BsPatchCheck,
    BsRocketTakeoff               
} from "react-icons/bs";
import ReuseCard from '../../components/ReuseCard/ReuseCard';
import ChallengeGrid from '../../components/Challange/ChallengeGrid';
import FeatureGrid from '../../components/FeatureGrid/FeatureGrid';
import MigrationFlow from '../../components/migration-flow/MigrationFlow';
import UseableFaqSection from '../../components/Useable-faq-section/UseableFaqSection'
export default function DatabaseMigrationModernization() {


    const dbMigrationServices = [
        {
            icon: <BsCloudArrowUp />,
            title: "Legacy to Cloud Migration",
            desc: "Seamlessly moving your on-premise SQL Server, Oracle, or MySQL databases to managed cloud services like AWS RDS, Aurora, or Azure SQL."
        },
        {
            icon: <BsDiagram3 />,
            title: "Database Refactoring",
            desc: "Restructuring old schemas into modern, scalable architectures that support microservices and high-concurrency applications."
        },
        {
            icon: <BsArrowRepeat />,
            title: "Zero-Downtime Migration",
            desc: "Using CDC (Change Data Capture) and replication tools to sync data in real-time, ensuring your business stays online during the cutover."
        },
        {
            icon: <BsLightningCharge />,
            title: "SQL to NoSQL Modernization",
            desc: "Offloading heavy read/write workloads to NoSQL databases like MongoDB or DynamoDB for massive horizontal scaling."
        },
        {
            icon: <BsShieldCheck />,
            title: "Data Integrity & Validation",
            desc: "Rigorous pre- and post-migration testing to ensure every single record is transferred accurately with zero data loss."
        },
        {
            icon: <BsHddStack />,
            title: "Database Consolidation",
            desc: "Merging multiple fragmented databases into a single, unified system to reduce licensing costs and management overhead."
        }
    ];


    const dbMigrationChallenges = [
        {
            icon: <BsDatabaseX />,
            title: "Fear of Data Loss",
            desc: "Migrating millions of records is risky. We use automated verification scripts to ensure 100% data consistency throughout the process."
        },
        {
            icon: <BsClockHistory />,
            title: "Extended Business Downtime",
            desc: "Manual migrations can take hours or days. Our automated sync approach reduces downtime to just a few minutes of cutover."
        },
        {
            icon: <BsExclamationCircle />,
            title: "Schema Incompatibility",
            desc: "Older database versions often don't match modern cloud engines. We provide expert schema conversion and code refactoring."
        },
        {
            icon: <BsShieldSlash />,
            title: "Security During Transit",
            desc: "Data is most vulnerable when moving. We use encrypted tunnels (VPN/Direct Connect) to protect your data during migration."
        },
        {
            icon: <BsCurrencyDollar />,
            title: "Hidden Cloud Costs",
            desc: "Poorly planned migrations lead to high bills. We right-size your cloud instances to ensure you only pay for what you actually need."
        }
    ];


    const migrationFeatureData = [
        {
            icon: <BsShieldCheck />,
            title: "Zero Data Loss Guarantee",
            desc: "We use multi-layer validation and checksum verification to ensure every single record is moved with 100% integrity.",
            link: "/quality-standards"
        },
        {
            icon: <BsLightningCharge />,
            title: "Near-Zero Downtime",
            desc: "Our continuous data replication (CDC) technology allows your business to stay online while the migration happens in the background.",
            link: "/solutions/performance"
        },
        {
            icon: <BsCloudCheck />,
            title: "Cloud-Native Optimization",
            desc: "We don't just move your data; we modernize it to take full advantage of cloud-native features like auto-scaling and serverless.",
            link: "/services/cloud"
        },
        {
            icon: <BsGearWideConnected />,
            title: "Automated Conversion",
            desc: "Using advanced SCT (Schema Conversion Tools), we automate the translation of legacy code to modern SQL dialects accurately.",
            link: "/tech-stack"
        },
        {
            icon: <BsShieldLock />,
            title: "End-to-End Encryption",
            desc: "Your data is encrypted during the entire transition process, using secure VPN tunnels and private network peering.",
            link: "/services/security"
        },
        {
            icon: <BsInboxes />,
            title: "Proven Migration Framework",
            desc: "With a track record of migrating terabytes of production data, our 5-step strategic roadmap ensures a predictable outcome.",
            link: "/case-studies"
        }
    ];
    const migrationFlowData = [
        {
            step: "01",
            icon: <BsSearch />,
            title: "Discovery & Assessment",
            desc: "Hum aapke maujooda database structure, dependencies aur sizing ka audit karte hain taake sahi cloud resources select kiye ja saken."
        },
        {
            step: "02",
            icon: <BsCodeSlash />,
            title: "Schema & Code Conversion",
            desc: "Legacy database code aur schemas ko cloud-native format (jaise Oracle se PostgreSQL) mein convert kiya jata hai automated tools ke zariye."
        },
        {
            step: "03",
            icon: <BsArrowRepeat />,
            title: "Real-Time Data Sync",
            desc: "CDC (Change Data Capture) technology ka use karte hue hum live data ko sync karte hain, taake migration ke dauran aapka business online rahe."
        },
        {
            step: "04",
            icon: <BsPatchCheck />,
            title: "Testing & Validation",
            desc: "Final switch se pehle hum data integrity, performance aur connection strings ko thoroughly test karte hain taake zero-error ki tasdeeq ho sake."
        },
        {
            step: "05",
            icon: <BsRocketTakeoff />,
            title: "Final Cutover",
            desc: "Sab kuch test hone ke baad, hum application ko naye modern database par switch kar dete hain—minimal ya zero downtime ke sath."
        }
    ];
    const migrationFaqs = [
        {
            question: "Will my business experience downtime during the migration process?",
            answer: "No. We utilize 'Change Data Capture' (CDC) technology and continuous data replication. This ensures your source database remains live and accessible while we sync data in the background, reducing the final cutover window to just a few minutes."
        },
        {
            question: "How do you guarantee that no data will be lost during transition?",
            answer: "VertexPro guarantees 100% Data Integrity. We perform rigorous pre- and post-migration validations, including 'Checksum Verification' and 'Row-count Audits' to ensure every single record is identical in the target database."
        },
        {
            question: "What happens if my legacy schema is incompatible with the cloud target?",
            answer: "We provide comprehensive 'Schema Conversion' services. Whether moving from Oracle to PostgreSQL or SQL Server to Aurora, we use automated tools and manual code refactoring to ensure your stored procedures and tables work perfectly in the new environment."
        },
        {
            question: "Do you support cross-cloud migrations, such as from Azure to AWS?",
            answer: "Yes, we specialize in multi-cloud and cross-cloud transitions. We handle all the networking, security protocol adjustments, and API translations required to move your data seamlessly between different cloud providers."
        },
        {
            question: "How is database security handled after modernization?",
            answer: "Post-modernization, we implement a 'Zero Trust' architecture. Your data is isolated within a Private VPC, protected by end-to-end encryption and fine-grained IAM (Identity and Access Management) roles, significantly enhancing your security posture."
        },
        {
            question: "What kind of post-migration support do you offer?",
            answer: "After the migration is complete, we provide a stabilization period where we monitor query performance and system health. We ensure that the new cloud-native environment is fully optimized for speed and reliability before handing it over."
        }
    ];
    return (
        <div>
            <ReuseCard
                heading="Seamless Database Migration & Modernization"
                items={dbMigrationServices}
            />
            <ChallengeGrid
                heading="Overcoming the Risks of Data Transition"
                challenges={dbMigrationChallenges}
            />
            <FeatureGrid
                heading="Why VertexPro for Database<br /> Modernization?"
                subheading="Expertise, automation, and security combined to make your transition to the cloud effortless."
                features={migrationFeatureData}
            />
            <MigrationFlow
                heading="Our Strategic Migration Roadmap"
                challenges={migrationFlowData} />

            <UseableFaqSection
                faqTitle="Frequently Asked Questions"
                faqs={migrationFaqs}
            />
        </div>

    )
}
