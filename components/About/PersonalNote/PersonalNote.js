import styles from "./PersonalNote.module.css";

export default function PersonalNote() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.card}>
          <h2 className="kicker">A Personal Note</h2>
          <h3 className={styles.title}>Beyond the Roadmap</h3>
          <p className={styles.text}>
            I am a husband, father of two, and grandfather of two. Lately, my
            family has embraced overland camping, exploring and photographing
            the most remote corners of the Pacific Northwest. At home, we value
            our family time spent around board games. I particularly favor
            European-style economic strategy games, with action drafting and
            hand management at their core.
          </p>
          <p className={styles.text}>
            In my "downtime," I am deeply involved in the Virtual Pinball
            community. I am the sole operator and developer of the Virtual
            Pinball Chat website, where I build and maintain the back-end APIs
            and Discord bots that power our weekly and seasonal competitions.
            When I’m not tinkering with code, I’m usually working my way through
            a list of the top 100 sci-fi and fantasy novels or exploring a wide
            range of musical genres. As a builder at heart and an aspiring
            musician, I often find myself creating instead of consuming. Whether
            I’m navigating the strategic challenges of a board game or a
            technical stack, I thrive on curiosity and the pursuit of the most
            effective approach.
          </p>
        </div>
      </div>
    </section>
  );
}
