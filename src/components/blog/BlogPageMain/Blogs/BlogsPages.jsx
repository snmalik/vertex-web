import React from "react";
import { motion } from "framer-motion";
import styles from "./BlogPage.module.css";
import shape from "../../../../assets/image/shape-9.svg";

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

const BlogsPages = ({ subtitle, title, posts }) => {
  const blogPosts = posts || [];
  const blog = {
    subtitle: subtitle || "Latest Blog",
    title: title || "Latest Blog & Articles"
  };

  return (
    <section className={styles.blogSection}>
      <p className={styles.blogSubHeading}>{blog.subtitle}</p>
      <h2 className={styles.blogHeading}>{blog.title}</h2>

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
              {post.image ? (
                <img src={post.image} alt={post.title} />
              ) : (
                <div className="w-100 h-100 bg-dark d-flex align-items-center justify-content-center text-white-50 small">
                  No Image Uploaded
                </div>
              )}
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

