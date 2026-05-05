import React from 'react';
import { useSiteData } from '../../context/SiteContext';
import SectionRenderer from '../../components/SectionRenderer';

const DevopsConsulting = () => {
  const { siteData } = useSiteData();
  const serviceSlug = "devops-consulting";

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

export default DevopsConsulting;
