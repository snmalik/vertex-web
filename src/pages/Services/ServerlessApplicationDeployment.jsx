import React from 'react';
import { useSiteData } from '../../context/SiteContext';
import SectionRenderer from '../../components/SectionRenderer';

const ServerlessApplicationDeployment = () => {
  const { siteData } = useSiteData();
  const serviceSlug = "serverless-application-deployment";

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

export default ServerlessApplicationDeployment;
