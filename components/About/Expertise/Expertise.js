import styles from "./Expertise.module.css";

export default function Expertise() {
  return (
    <section id="expertise" className={`section-padding ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* Left Column */}
        <div className={styles.left}>
          <h2 className="kicker">The Practitioner</h2>

          <h3 className={styles.title}>
            Solving Technical Complexity with Evidence-Led Product Judgment
          </h3>

          <p className={styles.description}>
            Throughout my career, I’ve founded teams and pioneered
            first-of-their-kind platforms, including A/B testing systems,
            personalized omni-channel experiences, real-time analytics, and
            AI/ML pipelines. My leadership has delivered automated video
            ratings, genre affinity modeling, and intelligent content workflows.
            I thrive in fast-moving, emerging spaces where quantitative and
            qualitative evidence guides product direction.
          </p>
          <p className={styles.description}>
            Operating at the intersection of product, design, and engineering, I
            drive product-market fit discovery, define long-term product
            strategy, and collaborate with cross-functional partners to design,
            deliver and operate new capabilities. My recent work includes
            building explainable customer segmentation models, applying
            generative AI to product workflows, and generating ML-driven
            insights for customer-facing experiences.
          </p>
          <p className={styles.description}>
            I am seeking a high-leverage Principal Product Manager or hands-on
            Product Leader role where I can lead the discovery of new AI-enabled
            capabilities within environments that value experimentation,
            evidence-based product judgment, and outcome-based learning.
          </p>
        </div>

        {/* Right Column */}
        <div className={styles.right}>
          <h4 className={styles.rightTitle}>Recommendations</h4>

          <p className={styles.rightDescription}>
            Product leadership exists at the intersection of strategic vision
            and technical execution. These perspectives from my partners
            highlight my commitment to evidence-led decision-making and my
            ability to translate complex architecture into business value.
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
            <div className={styles.quote}>
              "Exceptional! I've worked with many leaders in technology and it's
              rare to come across someone who understands how to identify and
              deliver both the technical and business outcomes that delivers
              Value/ROI." — Sr. Technology Program Manager
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
