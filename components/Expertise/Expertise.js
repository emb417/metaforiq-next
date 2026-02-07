import styles from "@/components/Expertise/Expertise.module.css";

export default function Expertise() {
  return (
    <section id="expertise" className={`section-padding ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* Left Column */}
        <div className={styles.left}>
          <h2 className="kicker">Technical Depth</h2>

          <h3 className={styles.title}>
            Judgment at the Intersection of Product and Engineering
          </h3>

          <p className={styles.description}>
            MetaforIQ operates at the intersection of product, design, and
            engineering, where early decisions shape everything that follows. We
            help teams reason through ambiguity, make deliberate tradeoffs, and
            choose approaches that hold up under scale, change, and real-world
            use.
          </p>

          <div className={styles.list}>
            <div className={styles.listItem}>
              <div className={styles.icon}>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className={styles.listText}>
                Cloud & Infrastructure (AWS, Kubernetes)
              </span>
            </div>

            <div className={styles.listItem}>
              <div className={styles.icon}>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className={styles.listText}>
                Event-Driven and Data-Intensive Architectures
              </span>
            </div>

            <div className={styles.listItem}>
              <div className={styles.icon}>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className={styles.listText}>
                Full-Stack Product Development (React, Node.js)
              </span>
            </div>

            <div className={styles.listItem}>
              <div className={styles.icon}>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className={styles.listText}>
                Generative AI, LLMOps, and Agent-Oriented Systems
              </span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.right}>
          <h4 className={styles.rightTitle}>
            Continuous Outcome-Based Learning.
          </h4>

          <p className={styles.rightDescription}>
            We thrive in undefined problem spaces where customer behavior,
            telemetry, and data science guide product direction and learning is
            continuous rather than staged.
          </p>

          <div className={styles.quotes}>
            <div className={styles.quote}>
              “While many product management folk start and end with instinct
              and intuition, Eric sees this as a starting point by which to form
              a thesis.”
            </div>
            <div className={styles.quote}>
              “He'll then take a highly analytical approach to validating the
              opportunity, and then engineer in a very lean and iterative way to
              maximize value delivery.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
