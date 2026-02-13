import styles from "./Mindset.module.css";

export default function Mindset() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Mindset</h2>
        <div className={styles.grid}>
          <div className={styles.block}>
            <h3>Help Others</h3>
            <p>
              We are all here to help others, our colleagues, our friends, our
              family. The best way to help others is to educate yourself so you
              can teach others or take responsibility to offload their
              stressors. We should strive to share responsibility and knowledge
              across team members and across teams. We are all in this together,
              one symbiotic living system of people.
            </p>
          </div>
          <div className={styles.block}>
            <h3>System Thinking</h3>
            <p>
              People systems (see above) and process systems; while optimizing
              for local maxima, be aware of any trade offs with the global
              maxima or adjacent locals. Take a step back to look at the whole
              system, look upstream and downstream. Seek to understand the value
              of each step, the expected outcome of each, how they all fit
              together in one end to end process system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}