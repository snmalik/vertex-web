import React from 'react';
import styles from './AboutHero.module.css';
import line_1 from '../../../../assets/image/ab-shape.svg'
import dot from '../../../../assets/image/shape-37.svg'
import circle from '../../../../assets/image/shape-10.svg'
import main from '../../../../assets/image/about-main.png'

const AboutHero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        
       
        <div className={styles.imageSide}>
        
          <div className={styles.dotPattern}></div>
          <div className={styles.bgBlur}></div>

        
          <div className={`${styles.imageCircle} ${styles.mainCircle}`}>
            <img src={ main} alt="Team" />
          </div>

          <div className={`${styles.imageCircle} ${styles.topCircle}`}>
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=300" alt="Discussion" />
          </div>

          <div className={`${styles.imageCircle} ${styles.bottomCircle}`}>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300" alt="Office" />
          </div>

          <div className={`${styles.imageCircle} ${styles.tinyCircle}`}>
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=150" alt="Work" />
          </div>

          {/* Floating "Creative Minds" Label */}
          <div className={styles.floatingTag}>
             <svg viewBox="0 0 100 100" className={styles.rotatingText}>
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text>
                  <textPath xlinkHref="#circlePath">
                    Creative Minds • Creative Minds •
                  </textPath>
                </text>
             </svg>
             <div className={styles.tagDot}></div>
          </div>

           <div className={styles.line}>
            <img src={line_1} alt="" />
        </div>
           <div className={styles.circle}>
            <img src={circle} alt="" />
        </div>
        </div>

     
        <div className={styles.contentSide}>
          <span className={styles.subTitle}>About Us</span>
          <h2 className={styles.mainTitle}>
            Pakistan’s Fast-Growing 
            IT Services <br />
            Company
          </h2>
          
          <div className={styles.description}>
            <p>
              Vertex Pro is one of Pakistan’s rapidly growing digital marketing company, helping
              brands succeed in the ever-evolving online landscape.
            </p>
            <p>
              We don’t just optimize, we create strategies that drive visibility, engagement, and real
              business growth. From creating compelling content to enhancing user experience,
              our approach ensures that every click counts.
            </p>
            <p>
              Whether you’re a startup or an established brand, we turn your digital presence into
              a competitive advantage.
            </p>
          </div>

          <button className={styles.readMoreBtn}>
            Read More
          </button>
          <div className={styles.dotImg}>
            <img src={dot } alt="" />
          </div>
        </div>

      

       


      </div>
    </section>
  );
};

export default AboutHero;

