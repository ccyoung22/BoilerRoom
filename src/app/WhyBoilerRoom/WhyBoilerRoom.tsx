"use client";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";
import styles from "./WhyBoilerRoom.module.css";

export default function WhyBoilerRoom() {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 0.95", "start 0.25"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);
  const springY = useSpring(titleY, {
    stiffness: 300,
    damping: 20,
    restDelta: 0.001,
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const letterSpacing = useTransform(scrollYProgress, [0, 1], ["2em", "0em"]);
  return (
    <div className={styles.container}>
      <motion.div
        ref={titleRef}
        style={{
          y: springY, // Disable scroll animation on mobile
          letterSpacing, // Disable letter-spacing animation on mobile
        }}
        className={styles.titleContainer}
      >
        <p>why Boiler Room?</p>
      </motion.div>

      <motion.div style={{ opacity }} className={styles.textContainer}>
        <p>
          What excites me most about Boiler Room is your mission to nurture
          creative talent. Having experienced firsthand the challenges of
          surviving as an independent creative, I deeply appreciate your
          commitment to supporting emerging artists and amplifying voices from
          overlooked scenes around the globe.
        </p>
        <br />
        <p>
          {" "}
          I value your commitment to diversity and inclusivity, not just as
          policy but as the foundation of your work.{" "}
          {`I'm eager to contribute to `}
          an environment that champions creating spaces where everyone feels
          welcome and represented.
        </p>
        <br />
        <p>
          The opportunity to work in a hybrid environment with a team that
          celebrates creativity and supports each other is exactly what {`I'm`}
          looking for.
        </p>
      </motion.div>
    </div>
  );
}
