"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styles from "./TeckStack.module.css";
import Icons from "../Icons/Icons";

export default function TechStack() {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 0.95", "start 0.25"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <Icons />
      </div>

      <div className={styles.titleContainer} ref={titleRef}>
        <p className={styles.title}>My Tech Stack</p>
      </div>
      <motion.div style={{ opacity }} className={styles.text}>
        <p className={styles.heading}>
          Full Stack Developer/Front End Obsessed
        </p>
        <br />
        <p>My tech skills align with what {`you're`} looking for </p>
        <br />
        <ul>
          <li className={styles.listItem}>
            Solid understanding of React, Next.js, CSS, JavaScript and
            TypeScript
          </li>
          <li className={styles.listItem}>Experience working with Node.js </li>
          <li className={styles.listItem}>
            Familiarity with SQL databases and integrating with third-party APIs{" "}
          </li>
          <li className={styles.listItem}>
            Design background with a strong interest in developing <br />
            professional-standard UX/UI skills
          </li>
          <li className={styles.listItem}>
            Comfortable with standard developer tools including Git and GitHub
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
