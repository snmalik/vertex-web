import React from 'react';
import { useSiteData } from '../../context/SiteContext';
import SectionRenderer from '../../components/SectionRenderer';

const CoManagedIT = () => {
  const { siteData } = useSiteData();
  const serviceSlug = "co-managed-it-services";
  
  // Retrieve the page layout from the newly defined servicePages configuration
  const pageLayout = siteData?.servicePages?.[serviceSlug] || { sections: [], hiddenSections: [] };
  const visibleSections = pageLayout.sections.filter(s => !pageLayout.hiddenSections.includes(s));

  return (
    <div>
      {visibleSections.map(sectionId => (
        <SectionRenderer key={sectionId} instanceId={sectionId} />
      ))}
    </div>
  );
};

export default CoManagedIT;
