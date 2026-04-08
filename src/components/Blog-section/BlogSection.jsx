import React from "react";
import { motion } from "framer-motion";
import styles from "./BlogSection.module.css";
import { blogPosts } from "./blogData";



const BlogSection = () => {
  return (
    <section className={styles.blogSection}>
      <p className={styles.blogSubHeading}>Latest Blog</p>
      <h2 className={styles.blogHeading}>Latest Blog Posts</h2>
      <div className={styles.blogGrid}>
        {blogPosts.map((post, index) => (
      <motion.div  key={index} className={styles.blogCard}>
  <div  className={styles.imageWrapper}>
    <img src={post.image} alt={post.title} />
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
