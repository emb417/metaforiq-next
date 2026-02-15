import styles from "./Quote.module.css";

export default function Quote() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className={styles.container}>
        <p className={styles.quoteText}>
          "Teams with well-defined goals and strategic context to guide their
          outcomes will build momentum through explicit empowerment and
          inclusive engagement." - Eric B.
        </p>
      </div>
    </section>
  );
}
