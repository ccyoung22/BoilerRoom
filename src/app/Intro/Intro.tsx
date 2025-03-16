"use client";

import styles from "./Intro.module.css";
import Icons from "../Icons/Icons";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const paragraph =
  "When I saw your Junior Full Stack Developer role come up, I knew I had to apply. I’ve followed Boiler Room for years and I love what you do. I feel an authentic connection with your mission to champion creativity and build communities, and I would love to be a part of it.";

const words = paragraph.split(" ");

export default function Intro() {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0"],
  });

  return (
    <div className={styles.container}>
      <p className={styles.aboutText} ref={element}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Word>
          );
        })}
      </p>
      <div className={styles.Icon1}>
        <Icons />
      </div>
    </div>
  );
}

type WordProps = {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
};

const Word: React.FC<WordProps> = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
