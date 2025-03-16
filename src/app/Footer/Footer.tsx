import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.stickyFooter}>
          <div className={styles.contentContainer}>
            <div className={styles.mainText}>
              <p>
                {`I'd`} love to bring my combination of creative thinking and
                technical skills to your development team. <br />
                <br />
                {`I'm`} excited about the possibility of contributing to your
                digital platforms and helping build technology that connects
                people through music and culture.
              </p>
              <br />
              <br />
              <p>
                Thank You for your time. Looking forward to potentially joining
                the Boiler Room community.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.description}>
        <p>the best is yet to come </p>
        <span className={styles.smiley}>&#9786;</span>
      </div>
    </>
  );
}
