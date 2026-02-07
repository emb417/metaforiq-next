import styles from "@/components/Home/Hero/Hero.module.css";

export default function Hero() {
  return (
    <header className={`section-padding ${styles.hero}`}>
      <div className={`container ${styles.inner}`}>
        <div className={`kicker ${styles.badge}`}>
          Product Outcomes & Measurement
        </div>

        <h1 className={styles.title}>
          Measure what matters.
          <br />
          <span className={styles.titleAccent}>Build what works.</span>
        </h1>

        <p className={styles.subtitle}>
          Leaders need clarity on which bets will move the needle. I help teams
          choose the right metrics, validate the riskiest assumptions, and
          double down on what proves value.
        </p>
      </div>

      {/* Decorative background */}
      <div className={styles.bgDecor} />
    </header>
  );
}
