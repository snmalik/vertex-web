import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from "./components/Loader";

// Layouts
import HomeLayout from "./layout/HomeLayout";
import AllPagesLayout from "./layout/AllPagesLayout";

// Lazy Loading Components (Performance boost)
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));

// Services (Lazy Loaded)
const DevopsConsulting = lazy(() => import("./pages/Services/DevopsConsulting"));
const CoManagedItServives = lazy(() => import("./pages/Services/CoManagedItServices"));
const ManagedITProcess = lazy(() => import("./pages/Services/ManagedITServices"));
const CloudConsulting = lazy(() => import("./pages/Services/CloudConsulting"));
const CloudManageServices = lazy(() => import("./pages/Services/CloudManageServices"));
const CloudInfrastructure = lazy(() => import("./pages/Services/CloudInfrastructure"));
const CloudMigration = lazy(() => import("./pages/Services/CloudMigration"));
const IotEdgeIntegration = lazy(() => import("./pages/Services/IotEdgeIntegration"));
const CloudIntelligenceAnalytics = lazy(() => import("./pages/Services/CloudIntelligence&Analytics"));
const ContainerizationOrchestrations = lazy(() => import("./pages/Services/ContainerizationOrchestrations"));
const SiteReliabilityEngineering = lazy(() => import("./pages/Services/SiteReliabilityEngineering"));
const ServerlessApplicationDeployment = lazy(() => import("./pages/Services/ServerlessApplicationDeployment"));
const InfrastructureAsCode = lazy(() => import("./pages/Services/InfrastructureAsCode"));
const EmailSecurityPhishingProtection = lazy(() => import("./pages/Services/EmailSecurity&PhishingProtection"));
const RiskAssessmentGapAnalysis = lazy(() => import("./pages/Services/RiskAssessment&GapAnalysis"));
const EndpointDetectionAndResponse = lazy(() => import("./pages/Services/EndpointDetectionAndResponse"));
const DatabaseAdministrationOptimization = lazy(() => import("./pages/Services/DatabaseAdministration&Optimization"));
const DatabaseMigrationModernization = lazy(() => import("./pages/Services/DatabaseMigration&Modernization"));

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [pageName, setPageName] = useState("Home");

  // 1. Initializations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  // 2. Page Change Logic
  useEffect(() => {
    const path = location.pathname;
    let newPage = "Page";

    if (path === "/") newPage = "Home";
    else if (path === "/about") newPage = "About";
    else if (path === "/services") newPage = "Services";
    else if (path === "/contact") newPage = "Contact";
    else if (path === "/blog") newPage = "Blog";
    else if (path.startsWith("/services/")) newPage = "Service";

    setPageName(newPage);
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 800); // 800ms is enough for a smooth feel

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Loader */}
      {loading && <Loader page={pageName} />}

      {!loading && (
        <Suspense fallback={<Loader page={pageName} />}>
          {/* MAIN Landmark for Accessibility */}
          <main id="main-content">
            <Routes>
              {/* Home Layout */}
              <Route path="/" element={<HomeLayout />}>
                <Route index element={<Home />} />
              </Route>

              {/* All Pages Layout */}
              <Route element={<AllPagesLayout />}>
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Optimized Service Routes */}
                <Route path="/services/devops-consulting" element={<DevopsConsulting />} />
                <Route path="/services/co-managed-it-services" element={<CoManagedItServives />} />
                <Route path="/services/managed-it-services" element={<ManagedITProcess />} />
                <Route path="/services/cloud-consulting" element={<CloudConsulting />} />
                <Route path="/services/cloud-manage-services" element={<CloudManageServices />} />
                <Route path="/services/cloud-infrastructure" element={<CloudInfrastructure />} />
                <Route path="/services/cloud-migration" element={<CloudMigration />} />
                <Route path="/services/iot-edge-integration" element={<IotEdgeIntegration />} />
                <Route path="/services/cloud-intelligence-&-analytics" element={<CloudIntelligenceAnalytics />} />
                <Route path="/services/containerization-orchestrations" element={<ContainerizationOrchestrations />} />
                <Route path="/services/site-reliability-engineering" element={<SiteReliabilityEngineering />} />
                <Route path="/services/serverless-application-deployment" element={<ServerlessApplicationDeployment />} />
                <Route path="/services/infrastructure-as-code" element={<InfrastructureAsCode />} />
                <Route path="/services/email-security-&-phishing-protection" element={<EmailSecurityPhishingProtection />} />
                <Route path="/services/risk-assessment-&-gap-analysis" element={<RiskAssessmentGapAnalysis />} />
                <Route path="/services/endpoint-detection-and-response" element={<EndpointDetectionAndResponse />} />
                <Route path="/services/database-Administration-&-optimization" element={<DatabaseAdministrationOptimization />} />
                <Route path="/services/database-migration-&-modernization" element={<DatabaseMigrationModernization />} />
              </Route>
            </Routes>
          </main>
        </Suspense>
      )}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;