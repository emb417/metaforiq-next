import styles from "./PersonalNote.module.css";

export default function PersonalNote() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.card}>
          <h2 className="kicker">A Personal Note</h2>
          <h3 className={styles.title}>Beyond the Roadmap</h3>
          <p className={styles.text}>
            I am a husband, father of two, and grandfather of three. Lately, my
            family has embraced overland camping, exploring and photographing
            the most remote corners of the Pacific Northwest. At home, we value
            our family time spent around{" "}
            <a
              href="https://boardgamegeek.com/collection/user/emb417"
              target="_blank"
              className={styles.link}
            >
              board games
            </a>
            . I particularly favor European-style economic strategy games, with
            action drafting or hand management at their core.
          </p>
          <p className={styles.text}>
            In my "downtime," I am deeply involved in the Virtual Pinball
            community. I am the sole operator and developer of the{" "}
            <a
              href="https://virtualpinballchat.com"
              target="_blank"
              className={styles.link}
            >
              Virtual Pinball Chat
            </a>{" "}
            technology{" "}
            <a
              href="https://github.com/emb417/vpc-compose"
              target="_blank"
              className={styles.link}
            >
              {" "}
              stack
            </a>
            , including APIs and Discord bots. I am an admin who manages and
            moderates weekly competitions and high score validation on our
            Discord server. I also contribute to{" "}
            <a
              href="https://github.com/superhac/vpinfe"
              target="_blank"
              className={styles.link}
            >
              VPinFE
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/superhac/vpinplay"
              target="_blank"
              className={styles.link}
            >
              VPinPlay
            </a>
            .
          </p>
          <p className={styles.text}>
            When I’m not tinkering with code, I’m usually working my way through
            a list of the top 100 books in{" "}
            <a
              href="https://www.goodreads.com/review/list/12884151-eric-brousseau?shelf=scifi-opera"
              target="_blank"
              className={styles.link}
            >
              sci-fi
            </a>{" "}
            and{" "}
            <a
              href="https://www.goodreads.com/review/list/12884151-eric-brousseau?shelf=wizards-and-warriors"
              target="_blank"
              className={styles.link}
            >
              fantasy
            </a>{" "}
            novels or exploring a wide range of musical genres. As a builder at
            heart and an aspiring musician, I often find myself creating instead
            of consuming. Whether I’m navigating the strategic challenges of a
            board game or a technical stack, I thrive on curiosity and the
            pursuit of improvement.
          </p>
        </div>
      </div>
    </section>
  );
}
