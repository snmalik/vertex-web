import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from "./components/common/Loader";
import { useSiteData } from "./context/SiteContext";

// Layouts
const HomeLayout = lazy(() => import("./layout/HomeLayout"));
const AllPagesLayout = lazy(() => import("./layout/AllPagesLayout"));
const AdminLayout = lazy(() => import("./Admin/layout/AdminLayout"));
const ProtectedRoute = lazy(() => import("./Admin/components/ProtectedRoute"));

// Pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));

// Service Pages
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
const ServerlessApplicationDeployment = lazy(() => import('./pages/Services/ServerlessApplicationDeployment'));
const InfrastructureAsCode = lazy(() => import("./pages/Services/InfrastructureAsCode"));
const EmailSecurityPhishingProtection = lazy(() => import("./pages/Services/EmailSecurity&PhishingProtection"));
const RiskAssessmentGapAnalysis = lazy(() => import("./pages/Services/RiskAssessment&GapAnalysis"));
const EndpointDetectionAndResponse = lazy(() => import("./pages/Services/EndpointDetectionAndResponse"));
const DatabaseAdministrationOptimization = lazy(() => import("./pages/Services/DatabaseAdministration&Optimization"));
const DatabaseMigrationModernization = lazy(() => import("./pages/Services/DatabaseMigration&Modernization"));

// Admin Pages
const Login = lazy(() => import("./Admin/pages/Login"));
const HomeHeroEditor = lazy(() => import("./Admin/pages/Home/HomeHeroEditor"));
const HomeStatsEditor = lazy(() => import("./Admin/pages/Home/HomeStatsEditor"));
const HomeTrustBarEditor = lazy(() => import("./Admin/pages/Home/HomeTrustBarEditor"));
const HomeServicesEditor = lazy(() => import("./Admin/pages/Home/HomeServicesEditor"));
const HomeMethodologyEditor = lazy(() => import("./Admin/pages/Home/HomeMethodologyEditor"));
const HomeTeamEditor = lazy(() => import("./Admin/pages/Home/HomeTeamEditor"));
const HomeIndustryEditor = lazy(() => import("./Admin/pages/Home/HomeIndustryEditor"));
const HomePortfolioEditor = lazy(() => import("./Admin/pages/Home/HomePortfolioEditor"));
const HomeBlogEditor = lazy(() => import("./Admin/pages/Home/HomeBlogEditor"));
const HomeFAQEditor = lazy(() => import("./Admin/pages/Home/HomeFAQEditor"));
const HomeCTAEditor = lazy(() => import('./Admin/pages/Home/HomeCTAEditor'));
const FooterEditor = lazy(() => import("./Admin/pages/FooterEditor"));
const ContactDetailsEditor = lazy(() => import("./Admin/pages/Contact/ContactDetailsEditor"));
const ContactMapEditor = lazy(() => import("./Admin/pages/Contact/ContactMapEditor"));
const AboutUsEditor = lazy(() => import("./Admin/pages/Common/AboutUsEditor"));
const GetInTouchEditor = lazy(() => import("./Admin/pages/Common/GetInTouchEditor"));
const TestimonialEditor = lazy(() => import("./Admin/pages/Common/TestimonialEditor"));
const NavbarEditor = lazy(() => import("./Admin/pages/Common/NavbarEditor"));
const SliderLogoEditor = lazy(() => import("./Admin/pages/Common/SliderLogoEditor"));
const PageController = lazy(() => import("./Admin/pages/PageController/PageController"));

const AppContent = () => {
  const { loading: siteLoading } = useSiteData();
  const location = useLocation();
  const [pageName, setPageName] = useState("Home");
  const [loading, setLoading] = useState(false);

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
    else if (path === "/admin/login") newPage = "Admin Login";
    else if (path === "/admin" || path.startsWith("/admin/")) newPage = "Admin Panel";
    else if (path.startsWith("/services/")) newPage = "Service";

    setPageName(newPage);
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (siteLoading) return <Loader page={pageName} />;

  return (
    <>
      {loading && <Loader page={pageName} />}
      {!loading && (
        <Suspense fallback={<Loader page={pageName} />}>
          <Routes>
            {/* Home Layout */}
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<Home />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="/admin/navbar" replace />} />
                <Route path="navbar" element={<NavbarEditor />} />
                <Route path="footer-editor" element={<FooterEditor />} />

                <Route path="home/hero" element={<HomeHeroEditor />} />
                <Route path="home/stats" element={<HomeStatsEditor />} />
                <Route path="home/trustbar" element={<HomeTrustBarEditor />} />
                <Route path="home/services" element={<HomeServicesEditor />} />
                <Route path="home/methodology" element={<HomeMethodologyEditor />} />
                <Route path="home/team" element={<HomeTeamEditor />} />
                <Route path="home/industries" element={<HomeIndustryEditor />} />
                <Route path="home/portfolio" element={<HomePortfolioEditor />} />
                <Route path="home/faq" element={<HomeFAQEditor />} />
                <Route path="home/cta" element={<HomeCTAEditor />} />
                <Route path="blog" element={<HomeBlogEditor />} />

                <Route path="contact/details" element={<ContactDetailsEditor />} />
                <Route path="contact/map" element={<ContactMapEditor />} />

                <Route path="common/testimonials" element={<TestimonialEditor />} />
                <Route path="common/about-us" element={<AboutUsEditor />} />
                <Route path="common/get-in-touch" element={<GetInTouchEditor />} />
                <Route path="common/slider-logos" element={<SliderLogoEditor />} />

                <Route path="page-controller/:pageKey/:sectionId?" element={<PageController />} />
              </Route>
            </Route>

            <Route element={<AllPagesLayout />}>
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
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
