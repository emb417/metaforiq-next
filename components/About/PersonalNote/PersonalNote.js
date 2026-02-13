import styles from "./PersonalNote.module.css";

export default function PersonalNote() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.card}>
          <h2 className="kicker">A Human Detail</h2>
          <h3 className={styles.title}>Beyond the roadmap.</h3>
          <p className={styles.text}>
            I live and work in Portland, Oregon. When I’m not deep in product strategy or debugging a data pipeline, 
            you’ll likely find me tinkering with this very Raspberry Pi stack or exploring the Pacific Northwest 
            trails. I believe that the best professional relationships are built on a foundation of mutual 
            respect, clear communication, and a shared sense of curiosity.
          </p>
        </div>
      </div>
    </section>
  );
}
