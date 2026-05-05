import {
  databaseAdminData,
  databaseMigrationData,
  managedITData,
  coManagedITData,
  emailSecurityData,
  endpointDetectionData,
  riskAssessmentData,
  containerizationData,
  sreData,
  serverlessData,
  iacData,
  devopsConsultingData,
  cloudIntelligenceData,
  cloudInfrastructureData,
  iotEdgeData,
  cloudMigrationData,
  cloudConsultingData,
  cloudManagedServicesData,
} from "./servicesSectionData";

// --- 🏠 HOME PAGE DEFINITION ---

const homePage = {
  sections: [
    "home_hero_1",
    "home_about_1",
    "home_stats_1",
    "home_trustbar_1",
    "home_services_1",
    "home_methodology_1",
    "home_testimonials_1",
    "home_team_1",
    "home_portfolio_1",
    "home_industry_1",
    "home_faq_1",
    "home_cta_1",
    "home_contact_1",
  ],
  hiddenSections: [],
  data: {
    home_hero_1: {
      type: "Hero",
      content: {
        topText: "Global Infrastructure & Security Experts",
        title:
          "Enterprise IT Infrastructure & <span>Cybersecurity Solutions</span>",
        description:
          "We design, secure, and manage scalable IT environments that keep your business operational, secure, and future-ready.",
        primaryBtn: "Schedule Consultation",
        secondaryBtn: "Explore Solutions",
        trustLine:
          "✔ 15+ Years Experience | ✔ Enterprise Infrastructure | ✔ 24/7 Global Support",
        heroImgUrl1: "",
        heroImgUrl2: "",
      },
    },
    home_about_1: {
      type: "About",
      content: {
        subTitle: "About Vertex Pro",
        title:
          "Enterprise Technology Partner for <span>Global <br /> Scale & Security<span/>",
        descriptions: [
          "Vertex Pro is a specialized IT Infrastructure and Cybersecurity firm dedicated to stabilizing and securing complex digital environments. We move beyond basic support to provide enterprise-grade systems architecture that drives real business resilience.",
          "From cloud transformation to 24/7 security operations, we serve as the technical backbone for organizations that cannot afford downtime.",
        ],
        mainImgUrl: "",
        img1Url: "",
        img2Url: "",
        img3Url: "",
      },
    },
    home_stats_1: {
      type: "Stats",
      content: {
        stats: [
          { id: 1, end: 254, label: "Project Complete" },
          { id: 2, end: 164, label: "Quality Team Member" },
          { id: 3, end: 433, label: "Awards Winning" },
          { id: 4, end: 30, label: "Years Of Experience" },
        ],
      },
    },
    home_trustbar_1: {
      type: "TrustBar",
      content: {
        tagline: "Global Partners & Certifications",
        partners: [
          { name: "AWS", url: "" },
          { name: "Azure", url: "" },
          { name: "Google Cloud", url: "" },
          { name: "Cisco", url: "" },
          { name: "Cloudflare", url: "" },
          { name: "Docker", url: "" },
          { name: "Kubernetes", url: "" },
          { name: "Fortinet", url: "" },
        ],
      },
    },
    home_services_1: {
      type: "Services",
      content: {
        subtitle: "Our Expertise",
        title: "Scalable Technology Solutions",
        description:
          "We provide enterprise-level IT services that ensure security, scalability, and operational excellence for global businesses.",
        services: [
          {
            title: "Enterprise Web Solutions",
            img: "",
            text: "Custom-built, scalable, and secure web applications designed for high-performance business operations.",
          },
          {
            title: "Cybersecurity & Compliance",
            img: "",
            text: "Advanced threat protection and vulnerability management to secure your critical business data.",
          },
          {
            title: "Cloud & Infrastructure",
            img: "",
            text: "Optimized database architecture and resilient cloud environments for maximum uptime and reliability.",
          },
          {
            title: "DevOps & Automation",
            img: "",
            text: "Accelerating deployment cycles and improving system stability through modern CI/CD automation.",
          },
        ],
      },
    },
    home_methodology_1: {
      type: "Methodology",
      content: {
        subtitle: "Execution Framework",
        title: "How We Deliver Results",
        steps: [
          {
            title: "Discovery & Audit",
            text: "We perform a deep-dive technical audit of your existing infrastructure and security gaps.",
          },
          {
            title: "Strategic Architecture",
            text: "Our experts design a scalable, secure, and cost-optimized roadmap tailored to your goals.",
          },
          {
            title: "Seamless Deployment",
            text: "Zero-downtime execution and migration handled by our senior engineering team.",
          },
          {
            title: "24/7 Managed Operations",
            text: "Continuous monitoring, threat detection, and proactive optimization to ensure 99.9% uptime.",
          },
        ],
      },
    },
    home_testimonials_1: {
      type: "Testimonials",
      content: {
        reviews: [
          {
            id: 1,
            name: "James Wilson",
            role: "CTO, TechFlow",
            reviewText:
              "Vertex Pro has completely transformed our deployment cycle. Their DevOps expertise is second to none.",
            stars: 5,
            imageUrl: "",
          },
          {
            id: 2,
            name: "Sarah Jenkins",
            role: "Founder, CloudScale",
            reviewText:
              "The cloud migration was seamless. We experienced zero downtime thanks to their proactive planning.",
            stars: 5,
            imageUrl: "",
          },
        ],
      },
    },
    home_team_1: {
      type: "Team",
      content: {
        subtitle: "How We Work",
        title: "Meet Our Team",
        description:
          "Our leadership team combines deep expertise in Cloud, DevOps, CyberSecurity and Enterprise Development to deliver scalable digital transformation solutions.",
        members: [
          {
            name: "Olivia Martin",
            role: "Cloud Solutions Architect",
            image: "",
            socials: { fb: "#", tw: "#", inst: "#" },
          },
          {
            name: "Daniel Brooks",
            role: "DevOps Engineer",
            image: "",
            socials: { fb: "#", tw: "#", inst: "#" },
          },
          {
            name: "Ryan Cooper",
            role: "Software Engineer",
            image: "",
            socials: { fb: "#", tw: "#", inst: "#" },
          },
          {
            name: "Alex Deitarson",
            role: "UI/UX Designer",
            image: "",
            socials: { fb: "#", tw: "#", inst: "#" },
          },
        ],
      },
    },
    home_portfolio_1: {
      type: "Portfolio",
      content: {
        subtitle: "Portfolio",
        title: "See How We Bring Ideas to Life",
        categories: [
          "Cloud",
          "Web Design",
          "DevOps",
          "Database",
          "CyberSecurity",
        ],
        projects: [
          {
            id: 1,
            category: "Cloud",
            title: "Cloud Infrastructure",
            subtitle: "Cloud Infrastructure",
            img: "",
          },
          {
            id: 2,
            category: "Web Design",
            title: "Web Development",
            subtitle: "Innovating solutions",
            img: "",
          },
          {
            id: 3,
            category: "DevOps",
            title: "DevOps Automation",
            subtitle: "DevOps Automation",
            img: "",
          },
        ],
      },
    },
    home_industry_1: {
      type: "Industry",
      content: {
        title: "Driving Industry Transformation Through",
        accentTitle: "Innovative Solutions",
        industries: [
          { title: "Insurance", iconName: "FaShieldAlt" },
          { title: "Real Estate", iconName: "FaBuilding" },
          { title: "Transportation & Logistic", iconName: "FaTruck" },
          { title: "Media & Entertainment", iconName: "FaGamepad" },
          { title: "Education", iconName: "FaGraduationCap" },
          { title: "Finance", iconName: "FaMoneyBillWave" },
          { title: "Healthcare", iconName: "FaCapsules" },
          { title: "Manufacturing & Industrial", iconName: "FaBoxOpen" },
        ],
      },
    },
    home_faq_1: {
      type: "FAQ",
      content: {
        badge: "F.A.Q",
        title: "Got Questions? We've Got Answers!",
        subtitle:
          "We understand you may have questions, and we're here to help. Our FAQ section provides expert answers to common queries, ensuring you have all the information you need.",
        images: [{ url: "" }, { url: "" }, { url: "" }, { url: "" }],
        questions: [
          {
            id: 1,
            question:
              "What core IT services do you provide for modern enterprises?",
            answer:
              "We offer end-to-end IT solutions including Managed IT Support, Cybersecurity, Cloud Migration, DevOps automation, and Database Management.",
          },
          {
            id: 2,
            question:
              "How do your Managed IT Services ensure business continuity?",
            answer:
              "We ensure reliability through 24/7 proactive monitoring, automated patch management, and robust incident response.",
          },
        ],
      },
    },
    home_cta_1: {
      type: "CTA",
      content: {
        title: "Ready to Secure & Scale Your Enterprise?",
        description:
          "Join global organizations that trust Vertex Pro for resilient infrastructure and 24/7 security operations. Let's discuss your technical roadmap.",
        whatsappNumber: "447534038019",
        whatsappMessage: "Hi Vertex Pro, I'm interested in your services.",
        whatsappButtonText: "Chat on WhatsApp",
        contactButtonText: "Get in Touch",
      },
    },
    home_contact_1: {
      type: "ContactSection",
      content: {},
    },
  },
};

// --- 📄 ABOUT PAGE DEFINITION ---
const aboutPage = {
  sections: [
    "about_page_header_1",
    "about_page_about_1",
    "about_page_testimonials_1",
    "about_page_contact_1",
    "about_page_slider_1",
  ],
  hiddenSections: [],
  data: {
    about_page_header_1: {
      type: "AllPagesHero",
      content: {
        title: "About Our Company",
        pathnames: ["About Us"],
      },
    },
    about_page_about_1: {
      type: "About",
      content: {
        subTitle: "About Vertex Pro",
        title:
          "Enterprise Technology Partner for <span>Global <br /> Scale & Security<span/>",
        descriptions: [
          "Vertex Pro is a specialized IT Infrastructure and Cybersecurity firm dedicated to stabilizing and securing complex digital environments.",
          "Our mission is to bridge the gap between complex technology and seamless business execution.",
        ],
        mainImgUrl: "",
        img1Url: "",
        img2Url: "",
        img3Url: "",
      },
    },
    about_page_testimonials_1: {
      type: "Testimonials",
      content: {
        reviews: [
          {
            id: 1,
            name: "James Wilson",
            role: "CTO, TechFlow",
            reviewText:
              "Vertex Pro has completely transformed our deployment cycle.",
            stars: 5,
            imageUrl: "",
          },
        ],
      },
    },
    about_page_contact_1: {
      type: "ContactSection",
      content: {},
    },
    about_page_slider_1: {
      type: "Slider",
      content: { logos: [] },
    },
  },
};

// --- ✍️ BLOG PAGE DEFINITION ---
const blogPage = {
  sections: ["blog_page_header_1", "blog_blog_1", "blog_contact_1"],
  hiddenSections: [],
  data: {
    blog_page_header_1: {
      type: "AllPagesHero",
      content: {
        title: "Latest Blog & Articles",
        pathnames: ["Blog"],
      },
    },
    blog_blog_1: {
      type: "Blog",
      content: {
        subtitle: "Latest Blog",
        title: "Latest Blog & Articles",
        posts: [],
      },
    },
    blog_contact_1: {
      type: "ContactSection",
      content: {},
    },
  },
};

// --- 📞 CONTACT PAGE DEFINITION ---
const contactPage = {
  sections: ["contact_page_header_1", "contact_info_cards_1", "contact_contact_1", "contact_map_1"],
  hiddenSections: [],
  data: {
    contact_page_header_1: {
      type: "AllPagesHero",
      content: {
        title: "Contact Us",
        pathnames: ["Contact"],
      },
    },
    contact_info_cards_1: {
      type: "ContactHeader",
      content: {
        title: "Contact Our Experts",
        subtitle: "We are here to help you scale and secure your business.",
        pk_label: "Pakistan Office",
        pk_address: "13 N, Gurumangat Road, Gulberg II, Lahore, PK 54000",
        pk_phone: "+92 315 6661667",
        usa_label: "USA Office",
        usa_address: "7901 4th St N, STE 300, St. Petersburg, FL 33702",
        usa_phone: "+1 929-207-2406",
        email1: "info@vertexpro.net",
        email2: "support@vertexpro.net",
      },
    },
    contact_contact_1: {
      type: "ContactSection",
      content: {
        subTitle: "Get in Touch",
        title: "Send us a Message",
        description:
          "Have a project in mind? Let's build something great together. We're ready to transform your technical vision into reality.",
        phone1: "(+92) 3156661667",
        phone2: "(+1) 929-207-2406",
        email1: "info@vertexpro.net",
        email2: "support@vertexpro.net",
      },
    },
    contact_map_1: {
      type: "Map",
      content: {
        mapUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1699.6331578029472!2d74.41753506660463!3d31.57174405204873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901232ce62997%3A0xf2b8447d275aff5!2sVertex%20Pro%20Technologies!5e0!3m2!1sen!2s!4v1771407039180!5m2!1sen!2s",
      },
    },
  },
};

// --- 🚀 FINAL SITE EXPORT ---
export const initialSiteData = {
  navbar: {
    logoUrl: "",
    ctaText: "Contact Us",
    ctaLink: "/contact",
    menuItems: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "About", path: "/about" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" },
    ],
    servicesData: {
      "IT Services": ["Managed IT Services", "Co-Managed IT Services"],
      CyberSecurity: [
        "Email Security & Phishing Protection",
        "Endpoint Detection and Response",
        "Risk Assessment & Gap Analysis",
      ],
      Cloud: [
        "Cloud Consulting",
        "Cloud Intelligence & Analytics",
        "Cloud Managed Services",
        "Cloud Infrastructure",
        "IoT Edge Integration",
        "Cloud Migration",
      ],
      DevOps: [
        "Containerization Orchestrations",
        "Site Reliability Engineering",
        "Serverless Application Deployment",
        "Infrastructure as Code",
        "DevOps Consulting",
      ],
      Database: [
        "Database Administration & Optimization",
        "Database Migration & Modernization",
      ],
    },
  },

  // Page Layouts
  home: {
    sections: homePage.sections,
    hiddenSections: homePage.hiddenSections,
  },
  about: {
    sections: aboutPage.sections,
    hiddenSections: aboutPage.hiddenSections,
  },
  blog: {
    sections: blogPage.sections,
    hiddenSections: blogPage.hiddenSections,
  },
  contact: {
    sections: contactPage.sections,
    hiddenSections: contactPage.hiddenSections,
  },

  // Service Page Layouts
  servicePages: {
    "database-administration-&-optimization": {
      sections: [
        "db_admin_reuse_1",
        "db_admin_challenge_1",
        "db_admin_feature_1",
        "db_admin_faq_1",
      ],
      hiddenSections: [],
    },
    "database-migration-&-modernization": {
      sections: [
        "db_mig_reuse_1",
        "db_mig_challenge_1",
        "db_mig_feature_1",
        "db_mig_flow_1",
        "db_mig_faq_1",
      ],
      hiddenSections: [],
    },
    "managed-it-services": {
      sections: [
        "managed_it_hero_1",
        "managed_it_reuse_1",
        "managed_it_flow_1",
      ],
      hiddenSections: [],
    },
    "co-managed-it-services": {
      sections: [
        "co_managed_it_reuse_1",
        "co_managed_it_flow_1",
        "co_managed_it_feature_1",
        "co_managed_it_flow_2",
        "co_managed_it_faq_1",
      ],
      hiddenSections: [],
    },
    "email-security-&-phishing-protection": {
      sections: [
        "email_sec_reuse_1",
        "email_sec_challenge_1",
        "email_sec_faq_1",
      ],
      hiddenSections: [],
    },
    "endpoint-detection-and-response": {
      sections: ["endpoint_reuse_1", "endpoint_challenge_1", "endpoint_faq_1"],
      hiddenSections: [],
    },
    "risk-assessment-&-gap-analysis": {
      sections: ["risk_reuse_1", "risk_challenge_1", "risk_faq_1"],
      hiddenSections: [],
    },
    "containerization-orchestrations": {
      sections: [
        "container_reuse_1",
        "container_devops_1",
        "container_feature_1",
        "container_challenge_1",
        "container_faq_1",
      ],
      hiddenSections: [],
    },
    "site-reliability-engineering": {
      sections: [
        "sre_reuse_1",
        "sre_devops_1",
        "sre_marquee_1",
        "sre_challenge_1",
        "sre_faq_1",
      ],
      hiddenSections: [],
    },
    "serverless-application-deployment": {
      sections: [
        "serverless_reuse_1",
        "serverless_feature_1",
        "serverless_challenge_1",
        "serverless_faq_1",
      ],
      hiddenSections: [],
    },
    "infrastructure-as-code": {
      sections: ["iac_reuse_1", "iac_feature_1", "iac_flow_1", "iac_faq_1"],
      hiddenSections: [],
    },
    "devops-consulting": {
      sections: [
        "dcons_reuse_1",
        "dcons_feature_1",
        "dcons_challenge_1",
        "dcons_faq_1",
      ],
      hiddenSections: [],
    },
    "cloud-intelligence-&-analytics": {
      sections: [
        "cia_reuse_1",
        "cia_feature_1",
        "cia_challenge_1",
        "cia_faq_1",
      ],
      hiddenSections: [],
    },
    "cloud-infrastructure": {
      sections: [
        "cinf_reuse_1",
        "cinf_innovation_1",
        "cinf_feature_1",
        "cinf_challenge_1",
        "cinf_faq_1",
      ],
      hiddenSections: [],
    },
    "iot-edge-integration": {
      sections: [
        "iot_reuse_1",
        "iot_architecture_1",
        "iot_feature_1",
        "iot_challenge_1",
        "iot_faq_1",
      ],
      hiddenSections: [],
    },
    "cloud-migration": {
      sections: [
        "cmig_reuse_1",
        "cmig_challenge_1",
        "cmig_flow_1",
        "cmig_bento_1",
        "cmig_comparison_1",
        "cmig_faq_1",
      ],
      hiddenSections: [],
    },
    "cloud-consulting": {
      sections: [
        "ccon_reuse_1",
        "ccon_innovation_1",
        "ccon_feature_1",
        "ccon_timeline_1",
        "ccon_faq_1",
        "ccon_contact_1",
      ],
      hiddenSections: [],
    },
    "cloud-managed-services": {
      sections: [
        "cmng_reuse_1",
        "cmng_innovation_1",
        "cmng_feature_1",
        "cmng_timeline_1",
        "cmng_faq_1",
        "cmng_contact_1",
      ],
      hiddenSections: [],
    },
  },

  // Unified Section Data (Flattened for App Performance)
  sectionData: {
    ...homePage.data,
    ...aboutPage.data,
    ...blogPage.data,
    ...contactPage.data,
    ...databaseAdminData,
    ...databaseMigrationData,
    ...managedITData,
    ...coManagedITData,
    ...emailSecurityData,
    ...endpointDetectionData,
    ...riskAssessmentData,
    ...containerizationData,
    ...sreData,
    ...serverlessData,
    ...iacData,
    ...devopsConsultingData,
    ...cloudIntelligenceData,
    ...cloudInfrastructureData,
    ...iotEdgeData,
    ...cloudMigrationData,
    ...cloudConsultingData,
    ...cloudManagedServicesData,
  },

  footer: {
    description:
      "Vertex Pro is a global leader in Enterprise IT Infrastructure, Cybersecurity, and Managed Tech Solutions.",
    email: "info@vertexpro.net",
    phone: "(+1) 929-207-2406",
    address: "13 N, Gurumangat Road, Gulberg II, Lahore, PK 54000",
    socials: { instagram: "#", twitter: "#", facebook: "#" },
    coreServices: {
      heading: "Core Services",
      links: [
        { label: "Cloud Solutions", path: "/services/cloud-consulting" },
        {
          label: "Cybersecurity",
          path: "/services/risk-assessment-&-gap-analysis",
        },
        { label: "Managed IT", path: "/services/co-managed-it-services" },
        { label: "DevOps", path: "/services/devops-consulting" },
        { label: "IT Assessment", path: "/contact" },
      ],
    },
    company: {
      heading: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Contact Us", path: "/contact" },
      ],
    },
    copyrightText: "Copyright © 2026 Vertex Pro. All Rights Reserved.",
    bottomLinks: [
      { label: "Security Policy", path: "/privacy" },
      { label: "Sitemap", path: "/faq" },
    ],
  },
};
