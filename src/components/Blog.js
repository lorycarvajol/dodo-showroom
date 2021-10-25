import React, { useState } from "react";
import { blogsData } from "../data/blogsData";
import { motion } from "framer-motion";
import { ElfsightWidget } from "react-elfsight-widget";
import Star from "../../src/pages/images/stareye.png";

const Blog = (props) => {
  const [currentBlog] = useState(blogsData);

  const blog = currentBlog[props.blogNumber];

  // random background circle
  let left = Math.floor(Math.random() * 200 + 700) + "px";
  let top = Math.floor(Math.random() * 200 + 150) + "px";
  let size = "scale(" + (Math.random() + 0.7) + ")";

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 200,
    },
    visible: { 
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.35 },
      x: -800,
    }
  };

  // random img pop
  let plusMinus = Math.random() > 0.4 ? 1 : -1;
  let imgX = Math.random() * 350 * plusMinus;
  let imgY = Math.random() * 120 * plusMinus;

  const imgAnim = {
    initial: {
      opacity: 0,
      x: imgX,
      y: imgY,
    },
    visible: { 
      opacity: 1,
      x: 0,
      y: 0,
    }
  }

  const transition = {
    ease: [.03,.87,.73,.9],
    duration: .6,
  }

  return (
    <motion.div
      className="blog-main"
      initial="initial"
      animate="visible"
      exit="exit"
      transition={transition}
      variants={variants}
    >
      <div className="blog-content">    
        <h1>{blog.title}</h1>
        <p>{blog.subtitle}</p>     
      </div>
      <motion.div 
        className="img-content"
        initial="initial"
        animate="visible"
        variants={imgAnim}
        transition={{duration: 1.2}}
      >
        <div className="img-container hover">          
          <p><ElfsightWidget widgetID="b3071723-19df-43b6-a8a7-1213fa033ef1" /></p>         
        </div>
        
      </motion.div>
      <span className="random-circle" style={{ left, top, transform: size }}><img src={Star}/></span>
    </motion.div>
  );
};

export default Blog;