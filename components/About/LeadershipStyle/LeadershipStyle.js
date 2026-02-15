import styles from "./LeadershipStyle.module.css";

export default function LeadershipStyle() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.visual}>
            <h2 className="kicker">Leadership Style</h2>
            <h3 className={styles.title}>The Player-Coach & Host-Leader</h3>
          </div>
          <div className={styles.content}>
            <p>
              I operate at the intersection of product, design, and engineering. 
              I’m just as comfortable diving into <strong>Python</strong> or <strong>JavaScript</strong> to prototype a solution as I am 
              defining long-term product strategy.
            </p>
            <div className={styles.attributes}>
              <div className={styles.attribute}>
                <h4>Host-Leadership</h4>
                <p>
                  I don't just lead; I create the environment where Engineering, Design, and Data Science 
                  synchronize. I focus on removing friction and building shared technical language.
                </p>
              </div>
              <div className={styles.attribute}>
                <h4>Technical Depth as Empathy</h4>
                <p>
                  My background as an architect and engineer allows me to empathize with technical 
                  constraints and collaborate deeply with developers to find the most elegant path forward.
                </p>
              </div>
              <div className={styles.attribute}>
                <h4>Zero-to-One Specialist</h4>
                <p>
                  I thrive in the "ambiguous middle"—taking emergent technologies like Generative AI and 
                  shaping them into structured, evidence-led product capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
