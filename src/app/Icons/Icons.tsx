"use client";
import styles from "./Icons.module.css";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

interface IconsProps {
  icon: string;
}

export default function Icons({ icon }: IconsProps) {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start start", "end end"],
  });

  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [4, 2, 1]);

  return (
    <motion.div
      style={{ scale: scale }}
      className={styles.iconContainer}
      ref={element}
    >
      {icon}
    </motion.div>
  );
}
