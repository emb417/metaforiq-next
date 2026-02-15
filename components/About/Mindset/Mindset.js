import styles from "./Mindset.module.css";

export default function Mindset() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="kicker">The Mindset</h2>
          <h3 className={styles.tagline}>Signals & Systems</h3>
        </div>
        <div className={styles.grid}>
          <div className={styles.largeCard}>
            <h3>Intellectual Humility & Curiosity</h3>
            <p>
              I believe the only constant in product is change. What worked in
              the past may not work now because the context, the technology, and
              the market have shifted. I treat my intuition as a starting point
              and lean into a curiosity about the end-to-end process to find
              where a problem actually resides today. By maintaining this
              humility, I de-risk complex initiatives and ensure we are solving
              for the broader market opportunities that drive true innovation.
            </p>
          </div>
          <div className={styles.largeCard}>
            <h3>Synthesizing Local and Global Impact</h3>
            <p>
              Systems thinking is the ability to execute on local metrics
              without sacrificing the global vision. I focus on understanding
              how individual product interactions and usage patterns ripple
              through the entire ecosystem. By recognizing the connection
              between creating demand and capturing value, I ensure that
              immediate tactical wins consistently strengthen the long-term
              viability of the product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
