"use client";

import styles from "./page.module.css";
import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "./Hero/Hero";
import Intro from "./Intro/Intro";
import WhyBoilerRoom from "./WhyBoilerRoom/WhyBoilerRoom";
import WhyMe from "./WhyMe/WhyMe";
import Summary from "./Summary/Summary";
import Footer from "./Footer/Footer";
import Blank from "./Blank/Blank";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    lenis.on("scroll", (e) => {
      console.log(e);
    });
  }, []);
  return (
    <main className={styles.main}>
      <Hero />
      <Blank />
      <Intro />
      <Blank />
      <WhyMe />
      <WhyBoilerRoom />
      <Summary />
      <Footer />
    </main>
  );
}
