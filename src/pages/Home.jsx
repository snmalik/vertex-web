import { useSiteData } from "../context/SiteContext";
import SectionRenderer from "../components/SectionRenderer";

const Home = () => {
  const { siteData } = useSiteData();
  const sections = siteData?.home?.sections || [];
  const hiddenSections = siteData?.home?.hiddenSections || [];

  return (
    <div className="yara">
      {sections.map(id => {
        if (hiddenSections.includes(id)) return null;
        return <SectionRenderer key={id} instanceId={id} />;
      })}
    </div>
  );
};

export default Home;
