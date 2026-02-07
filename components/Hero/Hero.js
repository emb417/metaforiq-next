import styles from "@/components/Hero/Hero.module.css";

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>Software Product Consulting</div>

        <h1 className={styles.title}>
          Turning Ambiguity into{" "}
          <span className={styles.titleAccent}>Shipped Product.</span>
        </h1>

        <p className={styles.subtitle}>
          MetaforIQ helps organizations discover, design, and deliver new
          software capabilities when the problem is unclear, the stakes are
          high, and the path forward isn’t obvious. We specialize in zero-to-one
          product work across AI-enabled capabilities, data platforms, and B2B
          SaaS.
        </p>

        <div className={styles.actions}>
          <a href="mailto:eric@metaforiq.com" className={styles.cta}>
            Work with MetaforIQ
          </a>
          <p className={styles.experience}>
            20+ years of building for Best Buy, Nike, Vevo, and Dell.
          </p>
        </div>
      </div>

      {/* Decorative background */}
      <div className={styles.bgDecor} />
    </header>
  );
}
