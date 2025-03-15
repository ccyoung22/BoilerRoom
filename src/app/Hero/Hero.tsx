"use client";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const messages: string[] = [
  "I'M CAITLIN",
  "I SHOULD WORK AT BOILER ROOM",
  "THIS IS WHY",
];

export default function Hero() {
  const [index, setIndex] = useState<number>(0);
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["end start", "end end"],
  });

  const grow = useTransform(scrollYProgress, [0, 1], [4, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container} ref={element}>
      <motion.p style={{ scale: grow }} className={styles.text}>
        {messages[index]}
      </motion.p>
    </div>
  );
}
