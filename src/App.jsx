import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from "./components/Loader";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServicesDetails";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import HomeLayout from "./layout/HomeLayout";
import AllPagesLayout from "./layout/AllPagesLayout"

import DevopsConsulting from "./pages/Services/DevopsConsulting";
import CoManagedItServives from "./pages/Services/CoManagedItServices"
import ManagedITProcess from "./pages/Services/ManagedITServices";
import CloudConsulting from "./pages/Services/CloudConsulting";
import CloudManageServices from "./pages/Services/CloudManageServices";
import CloudInfrastructure from "./pages/Services/CloudInfrastructure";
import CloudMigration from "./pages/Services/CloudMigration";
import IotEdgeIntegration from "./pages/Services/IotEdgeIntegration";
import CloudIntelligenceAnalytics from "./pages/Services/CloudIntelligence&Analytics";
import ContainerizationOrchestrations from "./pages/Services/ContainerizationOrchestrations";
import SiteReliabilityEngineering from "./pages/Services/SiteReliabilityEngineering";
import ServerlessApplicationDeployment from './pages/Services/ServerlessApplicationDeployment'
import InfrastructureAsCode from "./pages/Services/InfrastructureAsCode";
import EmailSecurityPhishingProtection from "./pages/Services/EmailSecurity&PhishingProtection";

import RiskAssessmentGapAnalysis from "./pages/Services/RiskAssessment&GapAnalysis";
import EndpointDetectionAndResponse from "./pages/Services/EndpointDetectionAndResponse";
import DatabaseAdministrationOptimization from "./pages/Services/DatabaseAdministration&Optimization";
import DatabaseMigrationModernization from "./pages/Services/DatabaseMigration&Modernization";




const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [pageName, setPageName] = useState("Home");

  useEffect(() => {
  const path = location.pathname;

  // Page Name Logic
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
  }, 1000);

  return () => clearTimeout(timer);

}, [location.pathname]);


  return (
    <>
      {loading && <Loader page={pageName} />}

      {!loading && (
        <Routes>

          {/* Home Layout */}
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
          </Route>


          <Route element={<AllPagesLayout />}>
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/services/:id" element={<ServiceDetail />} /> */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
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





