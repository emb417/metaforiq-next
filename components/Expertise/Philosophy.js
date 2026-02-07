import styles from "./Philosophy.module.css";

export default function Philosophy() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="kicker">Philosophy</h2>
          <h3 className={styles.title}>Judgment over instinct. Tradeoffs over perfection.</h3>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h4>Product as a Hypothesis</h4>
            <p>Every feature is a bet. I treat intuition as a starting point for experimentation, not a final destination. Success is defined by measurable outcomes, not just shipping code.</p>
          </div>
          <div className={styles.card}>
            <h4>High-Stakes Tradeoffs</h4>
            <p>Seniority is the ability to see the hidden costs of "easy" decisions. I focus on architecture and product choices that preserve optionality and avoid technical debt that slows down future growth.</p>
          </div>
          <div className={styles.card}>
            <h4>Evidence-Led Direction</h4>
            <p>In ambiguous spaces, certainty is an illusion. I use customer insights, telemetry, and real-time analytics to find the signal in the noise and focus effort where it actually matters.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
