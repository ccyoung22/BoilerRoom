"use client";
import Image from "next/image";
import styles from "./Icons.module.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Icons() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={styles.iconContainer}
      initial={{ y: "0%" }}
      animate={
        isInView
          ? { y: "-1200%", transition: { duration: 12, ease: "easeOut" } }
          : {}
      }
    >
      <Image
        src="/smiley.png"
        alt="Smiley"
        width={180}
        height={180}
        className={styles.image}
      />
    </motion.div>
  );
}
