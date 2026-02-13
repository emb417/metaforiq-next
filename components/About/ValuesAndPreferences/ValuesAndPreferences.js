import styles from "./ValuesAndPreferences.module.css";

export default function ValuesAndPreferences() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.category}>
          <h2 className={styles.sectionTitle}>Values</h2>
          <div className={styles.grid}>
            <div className={styles.block}>
              <h3>Integrity</h3>
              <p>
                I am a dependable person. I strive to do what I say. I try to be
                present in every meeting (no multitasking usually). I stress
                about not being on time. I take responsibility when I see a
                power vacuum, where nobody is taking responsibility. I rarely
                fail to keep myself accountable, i.e. if I say I’ll do
                something, you can expect it to be done 98% of the time.
              </p>
            </div>
            <div className={styles.block}>
              <h3>Truth</h3>
              <p>
                I promise to always be truthful. I may not be able to disclose
                confidential information, but you can always trust that I will
                tell the truth.
              </p>
            </div>
            <div className={styles.block}>
              <h3>Initiative</h3>
              <p>
                I have a bias for action. We should take just enough time to
                think through the options but be quick to take the next steps in
                the right direction, in order to learn faster.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.category}>
          <h2 className={styles.sectionTitle}>Preferences</h2>
          <div className={styles.grid}>
            <div className={styles.block}>
              <p>
                I like pull based systems over push based systems, think kanban
                flow instead of time boxed sprints.
              </p>
            </div>
            <div className={styles.block}>
              <p>
                I prefer to gain consent on a solution option instead of
                compromising facets of the option in the name of making everyone
                happy to gain consensus. This leads to the tragedy of the
                commons and doesn’t allow us to ship bold products.
              </p>
            </div>
            <div className={styles.block}>
              <p>
                I love drawings. I think the best way to communicate complex
                software product problems and opportunities is through diagrams:
                user journeys, flow charts, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}