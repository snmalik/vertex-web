import React from 'react';
import { useSiteData } from '../../context/SiteContext';
import SectionRenderer from '../../components/SectionRenderer';

export default function DatabaseAdministrationOptimization() {
  const { siteData } = useSiteData();
  const serviceSlug = "database-administration-&-optimization";
  
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
}
