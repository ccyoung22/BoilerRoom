import styles from "./Blank.module.css";
import Icons from "../Icons/Icons";

export default function Blank() {
  return (
    <div className={styles.container}>
      <div className={styles.Icon1}>
        <Icons />
      </div>
      {/* <div className={styles.Icon2}>
        <Icons icon="☺" />
      </div>
      <div className={styles.Icon3}>
        <Icons icon="☺" />
      </div> */}
    </div>
  );
}
