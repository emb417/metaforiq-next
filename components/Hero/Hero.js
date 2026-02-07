import styles from "@/components/Hero/Hero.module.css";

export default function Hero() {
  return (
    <header className={`section-padding ${styles.hero}`}>
      <div className={`container ${styles.inner}`}>
        <div className={`kicker ${styles.badge}`}>
          Software Product Consulting
        </div>

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
      </div>

      {/* Decorative background */}
      <div className={styles.bgDecor} />
    </header>
  );
}
