import styles from "@/components/Expertise/Expertise.module.css";

export default function Expertise() {
  return (
    <section id="expertise" className={`section-padding ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* Left Column */}
        <div className={styles.left}>
          <h2 className="kicker">Technical Depth</h2>

          <h3 className={styles.title}>
            Sound judgment where product and engineering meet.
          </h3>

          <p className={styles.description}>
            Early technical and product decisions quietly determine speed, cost,
            and optionality later. I work at the intersection of product,
            design, and engineering to help teams reason through tradeoffs,
            choose deliberately, and avoid decisions that look cheap now but
            fail under scale or change.
          </p>
          <p className={styles.description}>
            The tools matter less than knowing when and why to use them. My work
            commonly involves:
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
            Continuous Outcome-Based Learning
          </h4>

          <p className={styles.rightDescription}>
            In complex product environments, certainty comes from quantitative
            and qualitative feedback. I help teams use customer behavior,
            telemetry, and data to guide decisions continuously.
          </p>

          <div className={styles.quotes}>
            <div className={styles.quote}>
              “While many product leaders rely on instinct alone, Eric treats
              intuition as a hypothesis to be tested.” — VP of Engineering, B2B
              SaaS Platform
            </div>
            <div className={styles.quote}>
              “Eric has the rare skill to effectively communicate directly to
              the business, and its partners, at a level that assures capture of
              the best business and technical requirements.” — Sr. Program
              Management Consultant
            </div>
            <div className={styles.quote}>
              “Eric has that rare ability to get in the weeds design
              architecture and code and then tackle strategic challenges as
              well.  He has designed, championed and architected digital
              solutions that have outperformed existing SaaS technologies.” —
              Sr. Digital Analytics Consultant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
