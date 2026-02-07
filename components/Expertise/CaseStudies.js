import styles from "./CaseStudies.module.css";

export default function CaseStudies() {
  const cases = [
    {
      client: "Dell Technologies",
      title: "Unified AI-Driven Observability",
      context: "Integrating Moogsoft AIOps into the Dell CloudIQ ecosystem for 20,000+ B2B customers.",
      problem: "Fragmented analytics across platforms prevented customers from seeing unified insights into their infrastructure health.",
      role: "Director of Product Management",
      outcome: "Launched 'Insights and Engagement' initiative, surfacing AI-driven analysis directly into customer workflows and standardizing outcome measurement across the platform."
    },
    {
      client: "Vevo",
      title: "Automated ML Content Pipeline",
      context: "Scaling computer vision and data pipelines for the world's leading music video network.",
      problem: "Manual content rating and playlist generation were slow and didn't scale with the growing library of HD video content.",
      role: "VP of Product & Engineering",
      outcome: "Scaled computer vision models for automated music video ratings with human-in-the-loop validation, increasing throughput by 10x and improving playlist personalization."
    },
    {
      client: "Nike",
      title: "Digital Analytics & Personalization",
      context: "Leading analytics and experimentation for Nike.com during a period of massive digital growth.",
      problem: "Lack of real-time visibility into user behavior was costing millions in missed conversion opportunities.",
      role: "Director of Product, Nike.com & Analytics",
      outcome: "Generated an additional $30M in revenue demand by reducing site latency and implementing real-time personalization and A/B testing frameworks."
    }
  ];

  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="kicker">Case Studies</h2>
        <h3 className={styles.mainTitle}>Proven outcomes.</h3>
        
        <div className={styles.list}>
          {cases.map((c, i) => (
            <div key={i} className={styles.case}>
              <div className={styles.caseHeader}>
                <span className={styles.client}>{c.client}</span>
                <h4 className={styles.caseTitle}>{c.title}</h4>
              </div>
              <div className={styles.caseGrid}>
                <div className={styles.details}>
                  <div className={styles.block}>
                    <h5>The Context</h5>
                    <p>{c.context}</p>
                  </div>
                  <div className={styles.block}>
                    <h5>The Problem</h5>
                    <p>{c.problem}</p>
                  </div>
                </div>
                <div className={styles.outcomes}>
                  <div className={styles.block}>
                    <h5>My Role</h5>
                    <p>{c.role}</p>
                  </div>
                  <div className={styles.block}>
                    <h5>The Outcome</h5>
                    <p className={styles.outcomeText}>{c.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
