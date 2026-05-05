import React from 'react'
import { useSiteData } from '../context/SiteContext'
import SectionRenderer from '../components/SectionRenderer'

const Blog = () => {
    const { siteData } = useSiteData();
    const sections = siteData?.blog?.sections || [];
    const hiddenSections = siteData?.blog?.hiddenSections || [];

    return (
        <div>
            {sections.map((id) => {
                if (hiddenSections.includes(id)) return null;
                return <SectionRenderer key={id} instanceId={id} />;
            })}
        </div>
    )
}

export default Blog
