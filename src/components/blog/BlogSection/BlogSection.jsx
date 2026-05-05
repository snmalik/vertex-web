import React from "react";
import { motion } from "framer-motion";
import styles from "./BlogSection.module.css";
const BlogSection = ({ subtitle, title, posts }) => {
  const blog = {
    subtitle: subtitle || "Latest Blog",
    title: title || "Latest Blog Posts"
  };
  const allPosts = posts || [];

  // Show all posts
  const displayPosts = allPosts;

  return (
    <section className={styles.blogSection}>
      <p className={styles.blogSubHeading}>{blog.subtitle}</p>
      <h2 className={styles.blogHeading}>{blog.title}</h2>
      <div className={styles.blogGrid}>
        {displayPosts.map((post, index) => (
          <motion.div className={styles.blogCard} key={post.id}>
            <div className={styles.imageWrapper}>
              {post.image ? (
                <img src={post.image} alt={post.title} />
              ) : (
                <div className="w-100 h-100 bg-dark d-flex align-items-center justify-content-center text-white-50 small">
                  No Image
                </div>
              )}
              <div className={styles.hoverShadow}></div>
            </div>
            <small>{post.date} | By {post.author}</small>
            <h3>{post.title}</h3>
            <hr className={styles.blueline} />
            <p>{post.description}</p>
            <button>Read More</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

