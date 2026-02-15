import styles from "./Outcomes.module.css";

export default function Outcomes() {
  const outcomesData = [
    {
      company: "Tealium",
      title: "Defining the Tag Management Category",
      badges: ["Zero-to-One", "Category Innovation"],
      context:
        "Early-stage AdMarTech fragmentation where eCommerce sites relied on dozens of disparate analytics and marketing vendors.",
      opportunity:
        "I saw the potential to remove the structural bottleneck between marketing intent and engineering execution. The challenge was to transform an analytics consultancy into a scalable SaaS business.",
      role: "Generalist",
      outcome:
        "Spearheaded the launch of a first-of-its-kind platform that abstracted away the code. This created the Tag Management category, allowing marketing teams to deploy pixels in minutes and establishing a new global industry standard.",
    },
    {
      company: "Nike",
      title: "NEO: Proprietary Nike Experimentation and Optimization Service",
      badges: ["Zero-to-One", "Proprietary Systems"],
      context:
        "A global digital ecosystem requiring high-integrity validation for features across diverse demographics within a complex technical environment.",
      opportunity:
        "Standard client-side testing tools were limited to cosmetic 'look and feel' changes. I saw a gap in our ability to test and target deeper server-side functionality, new workflows, and core business logic.",
      role: "Principal Product Manager and Developer",
      outcome:
        "Led the discovery and delivery of a proprietary service enabling request-scoped server-side enabled experimentation. This shifted the culture from front-end styling to high-impact functional testing and business logic validation.",
    },
    {
      company: "Nike",
      title: "DREAMS: Digital Real-time Analytics Monitoring System",
      badges: ["Zero-to-One", "High-Velocity Systems"],
      context:
        "High-velocity global product launches where site traffic and transactional volume spike instantly, historically requiring war rooms of experts to manage system failures with limited in-the-moment visibility.",
      opportunity:
        "Standard observability tools suffered from high-latency data lags, making it impossible to mitigate failures during the critical minutes of a 'hype' drop. I saw the need for a dedicated, low-latency telemetry system designed specifically for non-linear load spikes.",
      role: "Principal Product Manager",
      outcome:
        "Discovered and delivered the DREAMS platform, providing real-time visibility into high-velocity launch windows. This transformed the operational culture from reactive firefighting to proactive mitigation, establishing the foundational infrastructure for automated system recovery and scaling.",
    },
    {
      company: "Nike",
      title: "DREAMS: Real-Time Personalization & Recommendations",
      badges: ["AI/ML", "Optimization"],
      context:
        "Nike.com operated as a passive product catalog with static content placement, lacking the ability to respond to individual user intent in real-time.",
      opportunity:
        "I recognized that the low-latency telemetry built for system monitoring could be harnessed for commerce. Legacy analytics were too slow to trigger in-the-moment cross-sell and upsell, leaving significant revenue demand uncaptured during high-intent sessions.",
      role: "Director of Product",
      outcome:
        "Discovered and delivered an expansion of the DREAMS architecture to power real-time affinity recommendations. This transformed the site from a static catalog into an adaptive experience that reacted to live traffic signals, directly recapturing lost revenue opportunity.",
    },
    {
      company: "Nike",
      title: "Sports Science & Elite Athlete Lab Experience",
      badges: ["Zero-to-One", "Data Platforms"],
      context:
        "The intersection of elite athletic performance science and product design. Kinesiology lab telemetry was historically siloed in legacy formats, limiting the ability to apply holistic insights to product fit and protection.",
      opportunity:
        "I was brought in to architect the transition from disconnected research spreadsheets to a unified digital ecosystem. The challenge was to modernize the technical stack while designing a high-integrity UX for the athlete lab experience.",
      role: "Expert Solutions Architect and Product Manager",
      outcome:
        "Led the architectural delivery of a centralized sports science data platform. This zero-to-one initiative involved transpiling legacy SAS and R algorithms into high-performance Python, creating a shared data platform that connected lab research and product design.",
    },
    {
      company: "Vevo",
      title: "Next-Gen OTT/CTV Platform Launch",
      badges: ["Zero-to-One", "Media Systems"],
      context:
        "A critical shift in media consumption as viewers migrated from YouTube-centric discovery to direct Connected TV (CTV) and living-room experiences.",
      opportunity:
        "Relying solely on third-party distribution created a 'data blind spot' and limited monetization. We needed to architect an owned-and-operated distribution layer to capture direct-to-consumer signals and secure our presence in the CTV landscape.",
      role: "VP of Product & Engineering",
      outcome:
        "Led the architectural delivery and launch of Vevo’s first linear programming platform. This established a proprietary first-party data loop and transformed Vevo from a content provider into a direct-to-consumer media network with full monetization control.",
    },
    {
      company: "Vevo",
      title: "First-of-its-Kind Content Intelligence",
      badges: ["AI/ML", "Category Innovation"],
      context:
        "Vevo manages the world’s largest premium music video library. Maintaining a robust supply chain of content delivery requires high-velocity content operations.",
      opportunity:
        "The legacy manual supply chain had a massive bottleneck with metadata enrichment taking days. Collaborating with data science, we discovered that automating the tagging of content metadata via computer vision, NLP, and 3rd-party APIs was the only way to unlock true time-to-market speed.",
      role: "VP of Product & Engineering",
      outcome:
        "Delivered an automated content intelligence pipeline using AI/ML for metadata tagging. This modernized the primary supply chain bottleneck, scaling content operations 100x and reducing time to market from days to minutes.",
    },
    {
      company: "Dell Technologies",
      title: "Unified AIOps User Intelligence",
      badges: ["Systems Thinking", "Data Engineering"],
      context:
        "The AIOps ecosystem, CloudIQ and Moogsoft, existed as siloed platforms with fragmented customer telemetry, leaving a massive gap in our understanding of the end-to-end user journey.",
      opportunity:
        "I recognized that optimizing the product experience required bridging these disconnected streams. The challenge was to synthesize hundreds of disparate data features into a unified perspective on product health and adoption.",
      role: "Principal Product Manager",
      outcome:
        "Led the discovery and delivery of a unified intelligence layer. Assisted by LLMs, I developed a Python framework for automated data ingestion that transformed raw telemetry from several disparate sources into a centralized intelligence system for identifying systemic friction.",
    },
    {
      company: "Dell Technologies",
      title: "Predictive AI & Explainable Insights",
      badges: ["AI/ML", "Predictive Analytics"],
      context:
        "CloudIQ observability supports a global base of 20,000+ enterprise infrastructure accounts, generating massive, high-velocity telemetry streams.",
      opportunity:
        "Standard metrics failed to signal the 'why' behind customer churn. I identified the need for a predictive model that could decode complex behaviors into a window of opportunity for intervention before a customer reached the point of no return.",
      role: "Principal Product Manager",
      outcome:
        "Developed an explainable segmentation model using unsupervised ML (e.g., k-means, DBSCAN, GMM) to identify latent user patterns in time-series data. By tuning for segment similarity and dispersion variance, I transformed multi-dimensional customer behaviors into high-integrity churn signals. This enabled the organization to shift from instinct to actionable insight, pinpointing the windows of opportunity for strategic intervention.",
    },
  ];
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Outcomes</h2>

        <div className={styles.list}>
          {outcomesData.map((o, i) => (
            <div
              key={i}
              className={`${styles.case} ${i % 2 !== 0 ? styles.mutedBackground : ""}`}
            >
              <div className={styles.caseHeader}>
                <div className={styles.meta}>
                  <span className={styles.company}>{o.company}</span>
                  {/* Badge Loop */}
                  <div className={styles.badgeContainer}>
                    {o.badges?.map((badge, bi) => (
                      <span key={bi} className={styles.badge}>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <h4 className={styles.caseTitle}>{o.title}</h4>
              </div>

              <div className={styles.caseGrid}>
                <div className={styles.details}>
                  <div className={styles.block}>
                    <h5>The Context</h5>
                    <p>{o.context}</p>
                  </div>
                  <div className={styles.block}>
                    <h5>The Opportunity</h5>
                    <p>{o.opportunity}</p>
                  </div>
                </div>

                <div className={styles.outcomes}>
                  <div className={styles.block}>
                    <h5>My Role</h5>
                    <p>{o.role}</p>
                  </div>
                  <div className={styles.block}>
                    <h5>The Outcome</h5>
                    <p className={styles.outcomeText}>{o.outcome}</p>
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
