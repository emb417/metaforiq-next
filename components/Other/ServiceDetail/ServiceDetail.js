import styles from "./ServiceDetail.module.css";

export default function ServiceDetail({
  title,
  problem,
  deliverables,
  outcomes,
  engagement,
  reversed = false,
}) {
  return (
    <section className={`${styles.section} ${reversed ? styles.reversed : ""}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>

            <div className={styles.block}>
              <h4 className={styles.label}>The Problem</h4>
              <p>{problem}</p>
            </div>

            <div className={styles.block}>
              <h4 className={styles.label}>Typical Outcomes</h4>
              <p>{outcomes}</p>
            </div>

            <div className={styles.engagement}>
              <span className={styles.engagementLabel}>Engagement:</span>{" "}
              {engagement}
            </div>
          </div>

          <div className={styles.deliverablesCard}>
            <h4 className={styles.label}>What I Deliver</h4>
            <ul className={styles.list}>
              {deliverables.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
