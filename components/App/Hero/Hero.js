import styles from "./Hero.module.css";
import Avatar from "@/components/App/Avatar/Avatar";

export default function Hero({ kicker, titleIntro, titleAccent, subtitle }) {
  return (
    <header className={`section-padding ${styles.header}`}>
      <div className={`container`}>
        <div className={`kicker`}>{kicker}</div>

        <h1 className={styles.title}>
          {titleIntro}
          <br />
          <span className={styles.titleAccent}>{titleAccent}</span>
        </h1>
        <div className={styles.grid}>
          <Avatar />
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
      </div>

      {/* Decorative background */}
      <div className={styles.bgDecor} />
    </header>
  );
}
