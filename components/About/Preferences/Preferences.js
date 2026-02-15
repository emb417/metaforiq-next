import styles from "./Preferences.module.css";

export default function Preferences() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Preferences</h2>
        <div className={styles.grid}>
          <div className={styles.block}>
            <h3>The Scientific Method</h3>
            <p>
              I treat product strategy as a series of testable hypotheses. My
              process is rooted in disciplined experimentation, where we
              identify our riskiest assumptions and design lean tests to
              validate them. By shifting from a culture of requirements to a
              culture of experiments, I help the team reduce uncertainty and
              build products that are backed by evidence and real-world
              performance.
            </p>
          </div>
          <div className={styles.block}>
            <h3>Management by Principles</h3>
            <p>
              I lead through shared principles that empower teams to operate
              with high agency and alignment. By prioritizing a sustainable flow
              of work, I ensure the team maintains a steady state of continuous
              discovery and delivery. This approach reduces cognitive thrash and
              protects our collective focus, allowing us to stay responsive to
              new insights while maintaining a high standard of craft.
            </p>
          </div>
          <div className={styles.block}>
            <h3>Bias for Action</h3>
            <p>
              I view action as a prerequisite for effective decision-making. In
              complex environments, waiting for certainty often leads to
              stagnation. Since perfection can only be approached through
              continuous iteration, I prioritize generating the real-world
              evidence required to refine our direction. By shortening the loop
              between hypothesis and reality, we transform assumptions into the
              insights needed to build truly impactful products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
