import styles from "./Philosophy.module.css";

export default function Philosophy() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="kicker">Principles & Philosophy</h2>
          <h3 className={styles.title + " " + styles.grid}>
            <span>Quality over Quantity</span>
            <span>Effective over Efficient</span>
            <span>Outcomes over Output</span>
          </h3>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h4>The Scientific Method</h4>
            <p>
              Product strategy is executed as a series of experiments designed
              to transform assumptions into validated knowledge. By formulating
              testable hypotheses at the onset, critical risks are isolated and
              mitigated before significant resources are committed. This ensures
              the product remains anchored to proven customer value and viable
              business outcomes.
            </p>
          </div>
          <div className={styles.card}>
            <h4>Systems Thinking</h4>
            <p>
              Product excellence requires looking beyond surface-level symptoms
              to understand the end-to-end holistic process. By reading between
              the lines of market signals and user behavior, the goal is to
              identify the root causes of friction rather than just treating the
              effects. Analyzing these interdependencies allows for moving past
              incremental changes to discover the high-leverage opportunities
              that drive meaningful business outcomes.
            </p>
          </div>
          <div className={styles.card}>
            <h4>Cross-Functional Synthesis</h4>
            <p>
              Innovation is driven by the deliberate integration of diverse
              functional perspectives. By actively sharing deep experience
              across product, engineering, design, and data science, a shared
              technical and strategic language is established. This alignment
              eliminates departmental friction, allowing disparate disciplines
              to navigate complex trade-offs and execute as a singular unit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
