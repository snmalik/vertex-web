import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './AllpageHero.module.css';
import shape_1 from "../../../assets/image/shape-4.svg"
import shape_2 from "../../../assets/image/shape-5.svg"
import shape_3 from "../../../assets/image/shape-21.svg"
import shape_4 from "../../../assets/image/shape-51.svg"
import shape_5 from "../../../assets/image/shape-7.svg"

const HeroSection = ({ title, pathnames: customPathnames }) => {
  const location = useLocation();

  const pathnames = customPathnames || location.pathname.split('/').filter((x) => x);


  const currentPath = pathnames[pathnames.length - 1] || "Home";
  const displayTitle = title || currentPath.replace(/-/g, ' ');

  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{displayTitle}</h1>

        <nav className={styles.breadcrumb}>
          <Link to="/" className={styles.breadcrumbLink}>Home</Link>

          {pathnames.map((value, index) => {
            const isLast = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            return (
              <React.Fragment key={to}>
                <span className={styles.separator}>
                  <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                    <path d="M3 1L7 5L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>

                {isLast ? (
                  <span className={styles.currentPage}>
                    {value.replace(/-/g, ' ')}
                  </span>
                ) : (
                  <Link to={to} className={styles.breadcrumbLink}>
                    {value.replace(/-/g, ' ')}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>


      <div className={styles.decorDots}></div>
      <div className={styles.decorLines}></div>
      <div className={styles.shapeone} >
        <img src={shape_1} alt="" />
      </div>
      <div className={styles.shapetwo} >
        <img src={shape_1} alt="" />
      </div>
      <div className={styles.shapethree} >
        <img src={shape_2} alt="" />
      </div>
      <div className={styles.shapefour} >
        <img src={shape_3} alt="" />
      </div>
      <div className={styles.shapefive} >
        <img src={shape_3} alt="" />
      </div>
      <div className={styles.shapesix} >
        <img src={shape_3} alt="" />
      </div>
      <div className={styles.shapeseven} >
        <img src={shape_4} alt="" />
      </div>
      <div className={styles.shapeight} >
        <img src={shape_5} alt="" />
      </div>


    </div>
  );
};

export default HeroSection;

