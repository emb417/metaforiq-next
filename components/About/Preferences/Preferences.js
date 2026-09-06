import styles from "./Preferences.module.css";

export default function Preferences() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Preferences</h2>
        <div className={styles.grid}>
          <div className={styles.block}>
            <h3>Apply First Principles</h3>
            <p>
              I lead by setting goals and guardrails at whatever elevation I'm
              operating from, then trusting the people and agents closer to the
              work to translate them further down. In an environment where the
              tools for building software change faster than any roadmap can
              account for, elevation is defined by scope, how much a decision
              touches.
            </p>
          </div>
          <div className={styles.block}>
            <h3>The Scientific Method</h3>
            <p>
              I treat product strategy as a series of testable hypotheses. My
              process is rooted in disciplined experimentation, where we
              identify our riskiest assumptions and design lean tests to
              validate them. With the pace of AI tooling changing this fast,
              evidence is what lets us build with confidence.
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
              insights needed to build impactful products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
