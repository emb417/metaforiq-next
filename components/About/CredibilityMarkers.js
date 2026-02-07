import styles from "./CredibilityMarkers.module.css";

export default function CredibilityMarkers() {
  const stats = [
    { label: "Years Experience", value: "25+" },
    { label: "B2B Customers Supported", value: "20k+" },
    { label: "Revenue Demand Driven", value: "$30M+" },
    { label: "Industries Spanned", value: "6+" }
  ];

  const industries = [
    "Enterprise B2B SaaS",
    "Global E-commerce",
    "Digital Media & OTT",
    "AdTech & Personalization",
    "Observability & AIOps",
    "Sports Science & Innovation"
  ];

  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="kicker">Credibility</h2>
        <h3 className={styles.title}>A track record of delivering at scale.</h3>
        
        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <h4 className={styles.subtitle}>Industries I've Impacted</h4>
          <div className={styles.industries}>
            {industries.map((ind, i) => (
              <span key={i} className={styles.industryTag}>{ind}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
