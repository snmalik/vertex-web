import React, { useMemo } from 'react';
import { useSiteData } from '../context/SiteContext';
import { resolveIcon } from '../utils/iconResolver';
import DevopsFlow from './services/DevopsFlow/DevOpsFlow';

// Import All Components
import HeroSection from './home/HeroSection/HeroSection';
import AboutUs from './home/AboutSection/AboutUs';
import StatsSection from './home/StatsSection/StatsSection';
import ServiceSection from './services/ServiceSection/ServiceSecton';
import Methodology from './home/Methodology/Methodology';
import TrustBar from './common/TrustBar/TrustBar';
import IndustryGrid from './home/IndustryGrid/IndustryGrid';
import FAQ from './home/faq/Faq';
import ContactCTA from './home/CTA/ContactCTA';
import SliderLogo from './common/Slider/SliderLogo';
import ContactSection from './contact/ContactSection/ContactSection';
import ContactPageHeader from './contact/ContactPage/Contact/ContactPage';
import BlogsPages from './blog/BlogPageMain/Blogs/BlogsPages';
import BlogSection from './blog/BlogSection/BlogSection';
import PortfolioSection from './home/PortfolioSection/PortfolioSection';
import TeamSection from './home/TeamSection/TeamSection';
import AllPagesHero from './common/AllPagesHero/AllPagesHero';

// Dual Testimonials — Home uses its own, all other pages use a different one
import HomeTestimonials from './home/Testimonials/Testimonials';
import OtherTestimonials from './about/MainAboutPage/Testmonial/Testimonials';

// Service Page Components
import ReuseCard from './services/ReuseCard/ReuseCard';
import ChallengeGrid from './services/ChallengeGrid/ChallengeGrid';
import FeatureGrid from './services/FeatureGrid/FeatureGrid';
import UseableFaqSection from './services/UseableFaqSection/UseableFaqSection';
import MigrationFlow from './services/MigrationFlow/MigrationFlow';
import ServiceHero from './services/ServiceHero/ServiceHero';
import FeatureSection from './services/FeatureSection/FeatureSection';
import SreTechMarquee from './services/SreTechMarquee/SreTechMarquee';
import TimeLine from './services/TimeLine/TimeLine';
import Innovation from './services/Innovation/Inovation';
import IoTArchitecture from './services/IoTArchitecture/IoTArchitecture';
import MigrationBento from './services/MigrationBento/MigrationBento';
import MigrationComparison from './services/MigrationComparison/MigrationComparison';

// Managed IT specialized components
import ManagedCard from './services/Managed/Managedcard/ManagedCard';
import BackupSection from './services/Managed/Backup-section/BackupSection';
import AverageSection from './services/Managed/Average-section/AverageSection';
import StrategyExecution from './services/Managed/Strategy-execution/StrategyExecution';
import ManagedFAQ from './services/Managed/faq/Faq';
import ManagedCTA from './services/Managed/Cta-section/CTASection';

// Decorative shapes required by AboutUs component
import lineShape from '../assets/image/ab-shape1.svg';
import circleShape from '../assets/image/shape-10.svg';
import bitDotShape from '../assets/image/shape-9.svg';

const SectionRenderer = ({ instanceId }) => {
    const { siteData } = useSiteData();
    const sectionConfig = siteData?.sectionData?.[instanceId];

    if (!sectionConfig) {
        console.warn(`SectionRenderer: No config for '${instanceId}'`);
        return null;
    }

    const { type, content } = sectionConfig;

    switch (type) {
        case 'Hero':
            // DB keys: heroImgUrl1, heroImgUrl2 → Component props: img1, img2
            return (
                <HeroSection
                    topText={content.topText}
                    title={content.title}
                    description={content.description}
                    primaryBtn={content.primaryBtn}
                    secondaryBtn={content.secondaryBtn}
                    trustLine={content.trustLine}
                    img1={content.heroImgUrl1}
                    img2={content.heroImgUrl2}
                />
            );

        case 'About':
            // DB keys: mainImgUrl, img1Url, img2Url, img3Url → Component props: mainImg, img1, img2, img3
            return (
                <AboutUs
                    subTitle={content.subTitle}
                    title={content.title}
                    descriptions={content.descriptions}
                    mainImg={content.mainImgUrl}
                    img1={content.img1Url}
                    img2={content.img2Url}
                    img3={content.img3Url}
                    lineShape={lineShape}
                    circleShape={circleShape}
                    bitDotShape={bitDotShape}
                />
            );

        case 'Stats':
            return <StatsSection stats={content.stats || []} />;

        case 'TrustBar':
            return <TrustBar {...content} />;

        case 'Services':
            return <ServiceSection {...content} />;

        case 'Methodology':
            return <Methodology {...content} />;

        case 'Testimonials':
            if (instanceId.startsWith('home')) {
                return <HomeTestimonials {...content} reviews={content.reviews || []} />;
            }
            return <OtherTestimonials {...content} reviews={content.reviews || []} />;

        case 'Team':
            return <TeamSection {...content} />;

        case 'Portfolio':
            return (
                <PortfolioSection
                    subtitle={content.subtitle}
                    title={content.title}
                    categories={content.categories}
                    items={content.projects}
                />
            );

        case 'Industry':
            return <IndustryGrid {...content} />;

        case 'FAQ':
            return <FAQ data={content} />;

        case 'Blog':
            return <BlogSection {...content} />;

        case 'CTA':
            return <ContactCTA data={content} />;

        case 'ContactSection':
            return <ContactSection {...content} />;

        case 'Slider':
            return <SliderLogo {...content} />;

        case 'ContactHeader':
            return <ContactPageHeader {...content} />;

        case 'AllPagesHero':
            return <AllPagesHero title={content.title} pathnames={content.pathnames} />;

        case 'BlogHeader':
            return <BlogsPages {...content} />;

        case 'Map':
            return (
                <div className="google-map-area">
                    <iframe
                        src={content.mapUrl}
                        style={{ width: '100%', height: '500px', border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            );

        // Service Pages
        case 'ReuseCard':
            return (
                <ReuseCard
                    heading={content.heading}
                    items={(content.items || []).map(item => ({ ...item, icon: resolveIcon(item.icon) }))}
                />
            );

        case 'ChallengeGrid':
            return (
                <ChallengeGrid
                    heading={content.heading}
                    challenges={(content.challenges || []).map(item => ({ ...item, icon: resolveIcon(item.icon) }))}
                />
            );

        case 'FeatureGrid':
            return (
                <FeatureGrid
                    heading={content.heading}
                    subheading={content.subheading}
                    features={(content.features || []).map(item => ({ ...item, icon: resolveIcon(item.icon) }))}
                />
            );

        case 'UseableFaqSection':
            return <UseableFaqSection faqTitle={content.faqTitle} faqs={content.faqs} />;

        case 'MigrationFlow':
            return (
                <MigrationFlow
                    heading={content.heading}
                    challenges={(content.challenges || []).map(item => ({ ...item, icon: resolveIcon(item.icon) }))}
                />
            );

        case 'ServiceHero':
            return (
                <ServiceHero
                    tag={content.tag}
                    title={content.title}
                    description={content.description}
                    buttonText={content.buttonText}
                />
            );

        case 'DevOpsFlow':
            return (
                <DevopsFlow
                    subtitle={content.subtitle}
                    title={content.title}
                    steps={(content.steps || []).map(step => ({ ...step, icon: resolveIcon(step.icon) }))}
                />
            );

        case 'FeatureSection':
            return (
                <FeatureSection
                    mainTitle={content.mainTitle}
                    features={(content.features || []).map(item => ({ ...item, icon: resolveIcon(item.icon) }))}
                />
            );

        case 'SreTechMarquee':
            return (
                <SreTechMarquee
                    heading={content.heading}
                    items={(content.items || []).map(item => ({ ...item, icon: resolveIcon(item.icon) }))}
                />
            );

        case 'ManagedCard':
            return (
                <ManagedCard
                    heading={content.heading}
                    items={content.items}
                />
            );

        case 'BackupSection':
            return (
                <BackupSection
                    title={content.title}
                    steps={content.steps}
                />
            );

        case 'AverageSection':
            return (
                <AverageSection
                    title={content.title}
                    features={content.features}
                />
            );

        case 'StrategyExecution':
            return (
                <StrategyExecution
                    title={content.title}
                    steps={content.steps}
                />
            );

        case 'ManagedFAQ':
            return (
                <ManagedFAQ
                    title={content.title}
                    faqs={content.faqs}
                />
            );

        case 'ManagedCTA':
            return <ManagedCTA {...content} />;

        case 'Innovation':
            return (
                <Innovation
                    title={content.title}
                    description={content.description}
                    row1={content.row1 || []}
                    row2={content.row2 || []}
                />
            );

        case 'TimeLine':
            return (
                <TimeLine
                    sectionTitle={content.sectionTitle}
                    steps={content.steps || []}
                />
            );

        case 'IoTArchitecture':
            return <IoTArchitecture content={content} />;

        case 'MigrationBento':
            return <MigrationBento content={content} />;

        case 'MigrationComparison':
            return <MigrationComparison content={content} />;

        default:
            return (
                <div style={{ padding: '20px', background: '#fff3cd', color: '#856404', border: '1px solid #ffeeba', margin: '10px' }}>
                    <strong>Type Error:</strong> Unknown component type "<code>{type}</code>" for instance ID "<code>{instanceId}</code>".
                </div>
            );
    }
};

export default SectionRenderer;
