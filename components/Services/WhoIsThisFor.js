import styles from "./WhoIsThisFor.module.css";

export default function WhoIsThisFor() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.title}>Who these services are for</h3>
            <ul className={styles.list}>
              <li>
                <strong>Founding Teams:</strong> Building zero-to-one and needing a solid product and technical foundation.
              </li>
              <li>
                <strong>Product Leaders:</strong> Integrating AI/ML into existing workflows without adding technical debt.
              </li>
              <li>
                <strong>Engineering Organizations:</strong> Looking to bridge the gap between technical capability and business outcomes.
              </li>
              <li>
                <strong>Growth Teams:</strong> Requiring deep analytics and experimentation infrastructure to scale.
              </li>
            </ul>
          </div>
          <div className={`${styles.card} ${styles.negative}`}>
            <h3 className={styles.title}>Who they are not for</h3>
            <ul className={styles.list}>
              <li>
                Teams looking for <strong>"body shop" staff augmentation</strong> without strategic input.
              </li>
              <li>
                Projects focusing on <strong>low-complexity CRUD applications</strong> or commodity builds.
              </li>
              <li>
                Organizations <strong>not ready to commit</strong> to data-driven decision-making and experimentation.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
