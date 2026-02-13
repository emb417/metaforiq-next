import styles from "./Philosophy.module.css";

export default function Philosophy() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="kicker">Principles & Philosophy</h2>
          <h3 className={styles.title + " " + styles.grid}>
            <span>Quality over Quantity.</span>
            <span>Effectiveness over Efficiency.</span>
            <span>Outcomes over Output.</span>
          </h3>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h4>The Scientific Method</h4>
            <p>
              Product strategy is executed as a series of empirical experiments
              designed to transform assumptions into validated knowledge. By
              formulating testable hypotheses at the onset of the lifecycle,
              critical risks are isolated and mitigated before significant
              resources are committed, ensuring that development remains
              anchored to proven customer value and viable business outcomes.
            </p>
          </div>
          <div className={styles.card}>
            <h4>Systems Thinking</h4>
            <p>
              Organizational complexity is navigated through the synthesis of
              interdependencies between technology, business strategy, and user
              behavior. By identifying the feedback loops that drive model
              performance and operational scale, a holistic architecture is
              maintained, ensuring that granular technical decisions
              consistently reinforce high-level business outcomes.
            </p>
          </div>
          <div className={styles.card}>
            <h4>Cross-Functional Synthesis</h4>
            <p>
              Innovation is driven by the deliberate integration of diverse
              functional perspectives. By leveraging deep experience across
              product, engineering, design, and data science, a shared technical
              and strategic language is established. This alignment eliminates
              departmental friction, allowing disparate disciplines to navigate
              trade-offs and execute as a singular, high-velocity unit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
