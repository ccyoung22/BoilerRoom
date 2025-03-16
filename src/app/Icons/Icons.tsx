"use client";
import styles from "./Icons.module.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface IconsProps {
  icon: string;
}

export default function Icons({ icon }: IconsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={styles.iconContainer}
      initial={{ y: "0%" }}
      animate={
        isInView
          ? { y: "-1000%", transition: { duration: 15, ease: "easeOut" } }
          : {}
      }
    >
      {icon}
    </motion.div>
  );
}
