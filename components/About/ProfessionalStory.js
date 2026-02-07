import Image from "next/image";
import styles from "./ProfessionalStory.module.css";

export default function ProfessionalStory() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className="kicker">The Story</h2>
            <h3 className={styles.title}>
              25 years of building at the intersection of product and
              engineering.
            </h3>
            <p>
              I started my career in 1999, helping build the foundation of
              BestBuy.com. Since then, I’ve seen the industry evolve from basic
              web interfaces to the complex, AI-driven ecosystems we navigate
              today.
            </p>
            <p>
              Along the way, I’ve held leadership roles at Nike, Vevo, New
              Relic, and Dell. I’ve seen what happens when teams move too fast
              without a strategy, and I’ve seen the magic that happens when
              engineering and product are perfectly aligned.
            </p>
            <p>
              <strong>What I’ve seen go wrong:</strong> Too often, organizations
              get swept up in technical hype—whether it was the early big data
              craze or the current AI gold rush—and lose sight of the actual
              user problem. They build complex solutions for simple needs, or
              they scale before they’ve validated their core assumptions.
            </p>
            <p>
              <strong>What goes right:</strong> The most successful initiatives
              I’ve led were rooted in a culture of evidence. We treated every
              roadmap item as a hypothesis, valued clarity over cleverness, and
              made deliberate tradeoffs that prioritized long-term optionality
              over short-term "wins."
            </p>
          </div>
          <div className={styles.imagePlaceholder}>
            {/* A professional image could go here, for now a styled box */}
            <div className={styles.box}>
              <Image
                src="/headshot.jpg"
                alt="Eric Brousseau"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
