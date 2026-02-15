import styles from "./Values.module.css";

export default function Values() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Values</h2>
        <div className={styles.grid}>
          <div className={styles.block}>
            <h3>Integrity & Accountability</h3>
            <p>
              I am a dependable partner who prioritizes radical transparency and
              follow-through. This consistent accountability establishes the
              trust necessary for high-performance teams to thrive. That
              foundation of trust drives a culture of vulnerability where teams
              feel safe to take risks, share unfinished ideas, and lean into the
              collective creativity required to solve complex and ambiguous
              product challenges.
            </p>
          </div>
          <div className={styles.block}>
            <h3>Player-Coach</h3>
            <p>
              I operate as a host-leader, creating the environment for others to
              succeed while staying deeply involved in the daily craft of
              product management. I am just as comfortable authoring a product
              brief or analyzing market signals as I am shaping a product vision
              and long-term strategy. By coaching through active participation,
              I empower my team to take ownership of their domains while
              ensuring our tactical execution creates the strategic impact and
              market differentiation required to win.
            </p>
          </div>
          <div className={styles.block}>
            <h3>Authenticity</h3>
            <p>
              I bring my whole self to work because professional layers often
              mask the very insights we need most. I foster an environment where
              radical honesty is the standard and directness is seen as a sign
              of respect. This approach builds more resilient teams and ensures
              that our products are shaped by genuine debate and evidence rather
              than political consensus or the loudest voice in the room.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
