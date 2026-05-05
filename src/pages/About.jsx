import React from 'react';
import { useSiteData } from '../context/SiteContext';
import SectionRenderer from '../components/SectionRenderer';

const About = () => {
    const { siteData } = useSiteData();
    const sections = siteData?.about?.sections || [];
    const hiddenSections = siteData?.about?.hiddenSections || [];

    return (
        <div>
            {sections.map((instanceId) => {
                if (hiddenSections.includes(instanceId)) return null;
                return <SectionRenderer key={instanceId} instanceId={instanceId} />;
            })}
        </div>
    );
};

export default About;
