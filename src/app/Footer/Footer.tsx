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
                technical skills to Boiler {`Room’s`} development team. <br />
                <br />
                Thank you for your time — I look forward to the possibility of
                contributing to your mission.
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
