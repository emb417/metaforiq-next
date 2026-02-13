import styles from "./OperatingStyle.module.css";

export default function OperatingStyle() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <h2 className="kicker">Operating Style</h2>
            <h3 className={styles.title}>How I work with your team.</h3>
            <p className={styles.desc}>
              I integrate as a force-multiplier, not a black box. My goal is to elevate the teams 
              I work with while delivering tangible progress on high-stakes initiatives.
            </p>
            
            <div className={styles.traits}>
              <div className={styles.trait}>
                <strong>Radical Transparency:</strong> I communicate trade-offs and risks early. No surprises.
              </div>
              <div className={styles.trait}>
                <strong>Hands-on Collaboration:</strong> I work alongside engineers and designers to ensure strategy translates to execution.
              </div>
              <div className={styles.trait}>
                <strong>Outcome Ownership:</strong> I don't just deliver a document; I stay until the metrics move in the right direction.
              </div>
            </div>
          </div>
          
          <div className={styles.sidebar}>
            <div className={styles.filterCard}>
              <h4>Best for teams that:</h4>
              <ul>
                <li>Value evidence over hierarchy</li>
                <li>Are tackling high-ambiguity product spaces</li>
                <li>Need to bridge the gap between AI hype and reality</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
