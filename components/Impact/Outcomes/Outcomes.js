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
        "Remove the structural bottleneck between marketing intent and engineering execution. I saw the potential to transform a consultancy into a scalable SaaS product.",
      role: "VP of Technology",
      outcome:
        "Spearheaded the launch of a first-of-its-kind platform that abstracted away the code. This created the 'Tag Management' category, allowing marketing teams to deploy pixels in minutes and defining a new industry standard.",
    },
    {
      company: "Nike",
      title:
        "NEO: Nike.com's Proprietary Experimentation and Optimization Service",
      badges: ["Zero-to-One", "Proprietary Systems"],
      context:
        "A global digital ecosystem requiring high-integrity validation for features across diverse demographics.",
      opportunity:
        "Move beyond off-the-shelf testing tools that couldn't handle Nike’s specialized technical telemetry or provide the necessary rigor for high-stakes bets.",
      role: "Director of Product, Nike.com & Analytics",
      outcome:
        "Architected and scaled a custom experimentation framework. This shifted the organizational culture from gut-feel to 95% statistical confidence on all major product releases.",
    },
    {
      company: "Nike",
      title: "DREAMS: Digital Real-time Analytics Monitoring System",
      badges: ["Zero-to-One", "High-Velocity Systems"],
      context:
        "High-velocity global product launches where site traffic and transactional volume spike instantly requiring war rooms of experts supporting systems failing under load with zero visibility into what's happening in-the-moment.",
      opportunity:
        "Create a low-latency system specifically for observing 'hype' drops and other in-the-moment events. Standard observability tools lacked the real-time insights required to predict and mitigate failures.",
      role: "Director of Product, Nike.com & Analytics",
      outcome:
        "Launched the DREAMS platform to initially address the needs for low-latency monitoring. This established a dedicated infrastructure that can be evolved into automated system scaling or recovery during Nike's most critical global launch windows.",
    },
    {
      company: "Nike",
      title: "DREAMS: Personalization and Recommendations",
      badges: ["AI/ML", "Optimization"],
      context:
        "Nike.com was a passive catalog of products with only static content placement and no personalization.",
      opportunity:
        "Harness live traffic signals to drive real-time cross-sell and upsell. Legacy analytics latency wasn't able to act on in-the-moment decisions leaving revenue demand opportunity on the table.",
      role: "Director of Product, Nike.com & Analytics",
      outcome:
        "Expanded DREAMS to include personalization and recommendations. This empowered customer-facing affinity recommendations that adapted to live traffic signals.",
    },
    {
      company: "Nike",
      title: "Sports Science & Athlete Clinic Experience",
      badges: ["Zero-to-One", "Data Platforms"],
      context:
        "The intersection of elite athletic performance science and product design for fit and protection.",
      opportunity:
        "Bridge the gap between dozens of siloed lab-based physiological data sets captured in spreadsheets. The opportunity to share study results across teams would provide for holistic insights and recomendations to the product design teams.",
      role: "Director of Product, Nike.com & Analytics",
      outcome:
        "Led the development of a sports science data platform and athlete clinic experience. This zero-to-one initiative consolidated the storage of complex physiological telemetry into a shared data platform and transpiled algorithms written in SAS & R into higher performing Python for real-time data capture and analysis.",
    },
    {
      company: "Vevo",
      title: "Next-Gen OTT/CTV Platform Launch",
      badges: ["Zero-to-One", "Media Systems"],
      context:
        "The shift in media consumption from YouTube-centric viewing to direct Connected TV (CTV) and living-room experiences.",
      opportunity:
        "Establish an owned-and-operated distribution layer to capture direct-to-consumer data and gain monetization control.",
      role: "VP of Product & Engineering",
      outcome:
        "Architected and launched Vevo's first linear programming platform. This established a direct data loop and secured the brand's presence in the living room engagement space.",
    },
    {
      company: "Vevo",
      title: "First-of-its-Kind Content Intelligence",
      badges: ["AI/ML", "Category Innovation"],
      context:
        "Vevo manages the world’s largest premium music video library, distributing across a global OTT and CTV footprint.",
      opportunity:
        "Transition from a legacy manual supply chain to a discovery-driven engine by identifying that automated metadata was the key to unlocking time-to-market.",
      role: "VP of Product & Engineering",
      outcome:
        "Architected an automated supply chain using computer vision pipelines for genre and affinity tagging. This modernized the platform, scaling content operations 100x, reducing time-to-market from days to minutes.",
    },
    {
      company: "Dell Technologies",
      title: "Unified AIOps User Intelligence",
      badges: ["Systems Thinking", "Enterprise B2B"],
      context:
        "CloudIQ and Moogsoft AIOps were two distinct, siloed systems part of the same end-to-end user journey. Customer data was fragmented across separate systems owned by different functions.",
      opportunity:
        "Synthesize holistic customer intelligence data across disconnected platforms to provide a unified view of the product experience.",
      role: "Principal Product Manager",
      outcome:
        "Spearheaded the integration of Google Analytics and Pendo across the ecosystem. Pulled together disparate data streams into a unified user intelligence platform. This delivered a cohesive user intelligence platform, enabling product management to see between the lines of siloed data.",
    },
    {
      company: "Dell Technologies",
      title: "Predictive AI & Explainable Insights",
      badges: ["AI/ML", "Enterprise B2B"],
      context:
        "CloudIQ observability supports a global base of 20,000+ enterprise storage and infrastructure accounts.",
      opportunity:
        "Identify the 'why' behind customer churn buried in massive telemetry streams where standard metrics failed to provide actionable intelligence.",
      role: "Principal Product Manager",
      outcome:
        "Developed explainable algorithms that decoded complex customer behaviors into actionable insights. This identified the window of opportunity to activate new strategies and shift from reactive to proactive customer success.",
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
