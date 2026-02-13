import styles from "./CredibilityMarkers.module.css";

export default function CredibilityMarkers() {
  const stats = [
    {
      label: "Years Experience",
      value: "25+",
      detail:
        "Discovering new AI and UX capabilities in B2B SaaS and B2C digital products across diverse industries and scales.",
    },
    {
      label: "Portfolio Management",
      value: "$30M",
      detail:
        "Responsible for Nike.com's front-end product portfolio, including 3rd-party vendors.",
    },
    {
      label: "B2B Customers",
      value: "20k+",
      detail:
        "Managed massive Enterprise scale and complexity, elevating customer insights for Dell AIOps.",
    },
    {
      label: "Content Ops Scale",
      value: "100x",
      detail:
        "Scaled computer vision tagging models and affinity playlisting algorithms at Vevo.",
    },
    {
      label: "Annual Revenue Demand",
      value: "$30M+",
      detail:
        "Generated additional revenue demand through A/B testing, personalization, and improved site performance at Nike.",
    },
    {
      label: "Complex Domains",
      value: "6+",
      detail:
        "Global E-commerce, Sports Science, Media & OTT, AI/ML & Data Platforms, Observability & AIOps, and Enterprise B2B SaaS.",
    },
  ];

  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="kicker">Quantifiable Magnitude</h2>
        <h3 className={styles.title}>Impact across Complex Domains</h3>

        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.tooltip}>{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
