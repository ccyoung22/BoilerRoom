"use client";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";
import styles from "./WhyMe.module.css";

export default function WhyMe() {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 0.95", "start 0.15"],
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
        <p>why me?</p>
      </motion.div>

      <motion.div style={{ opacity }} className={styles.textContainer}>
        <p>
          {`I've`} taken a non-traditional path to tech, which gives me a unique
          perspective. I studied Illustration and Animation at University.
          During that time, I started selling vintage clothing to support
          myself—cycling to car boot sales with a camping rucksack, collecting
          finds, then photographing and selling them online.{" "}
        </p>
        <br />
        <p>
          {" "}
          After University the business became my full-time job and {`I’ve`}{" "}
          been running it ever since. {`It's`} given me incredible opportunities
          to travel, collaborate with diverse and interesting people, and
          constantly challenge myself. Most importantly, it taught me how to
          adapt quickly, manage shifting priorities, and continually learn in an
          ever-changing environment—skills that translate perfectly to the
          fast-paced world of development.
        </p>
        <br />
        <p>
          After carrying the business through a few challenging years, I craved
          a new direction. My transition into tech was serendipitous, after
          working alongside a developer last year, I became captivated by the
          creative potential of web development. I started learning HTML and CSS
          on my own, and I was hooked. I knew I had found my next step.{" "}
        </p>
        <br />
        <p>
          {" "}
          For the past 16 weeks {`I’ve`} been studying web development full time
          at the School Of Code, A rigorous, fast-paced programme focused on
          both technical and problem-solving skills. Every week we worked in new
          teams, from a range of backgrounds, with a focus on agile teamwork,
          and learning how to learn. For our final project, my team built
          {` "Flock"`} a community-focused app that connects people with shared
          interests—a concept that aligns with Boiler {`Room's`} mission of
          fostering community through digital platforms.
        </p>
      </motion.div>
    </div>
  );
}
