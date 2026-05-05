import React from 'react'
import { useSiteData } from '../context/SiteContext'
import SectionRenderer from '../components/SectionRenderer'

const Contact = () => {
    const { siteData } = useSiteData();
    const sections = siteData?.contact?.sections || [];
    const hiddenSections = siteData?.contact?.hiddenSections || [];

    return (
        <div>
            {sections.map((id) => {
                if (hiddenSections.includes(id)) return null;
                return <SectionRenderer key={id} instanceId={id} />;
            })}
        </div>
    )
}

export default Contact
