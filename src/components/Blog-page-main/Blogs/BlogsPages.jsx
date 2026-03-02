import React from "react";
import { motion } from "framer-motion";
import styles from "./BlogPage.module.css";
import { blogPosts } from "./blogData";
import shape from "../../../assets/image/shape-9.svg";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const BlogsPages = () => {
  return (
    <section className={styles.blogSection}>
      <p className={styles.blogSubHeading}>Latest Blog</p>
      <h2 className={styles.blogHeading}>Latest Blog & Articles</h2>

      <div className={styles.blogGrid}>
        {blogPosts.map((post, i) => (
          <motion.div
            key={post.id}
            className={styles.blogCard}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <div className={styles.imageWrapper}>
              <img src={post.image} alt={post.title} />
              <div className={styles.hoverShadow}></div>
            </div>

            <small>
              {post.date} | By {post.author}
            </small>

            <h3>{post.title}</h3>
            <hr className={styles.blueline} />
            <p>{post.description}</p>
            <button>Read More</button>
          </motion.div>
        ))}
      </div>

      <div className={styles.shapeImg}>
        <img src={shape} alt="shape" />
      </div>
    </section>
  );
};

export default BlogsPages;