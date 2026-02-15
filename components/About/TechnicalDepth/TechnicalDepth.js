import styles from "./TechnicalDepth.module.css";

export default function TechnicalDepth() {
  const categories = [
    {
      title: "AI / ML & Data Platforms",
      skills: [
        "Generative AI & LLMs",
        "RAG & Agentic AI",
        "MLOps & Feature Engineering",
        "Model Evaluation Frameworks",
        "Data Mesh",
      ],
    },
    {
      title: "Modern Stack",
      skills: [
        "Node.js & React",
        "Python (numpy, sci-kit)",
        "REST & GraphQL APIs",
        "Cloud-Native Architecture (AWS)",
        "Kubernetes & Docker",
      ],
    },
    {
      title: "Technical Domains",
      skills: [
        "B2B/B2C User Experiences",
        "Analytics & Experimentation",
        "Multi-Channel Marketing",
        "Observability (OpenTelemetry)",
        "IAM & Security",
      ],
    },
  ];

  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="kicker">Technical Depth</h2>
        <h3 className={styles.mainTitle}>
          Architectural Literacy for Product Strategy
        </h3>
        <p className={styles.lead}>
          I believe that effective product leadership in complex environments
          requires more than just high-level oversight; it requires the ability
          to speak the language of engineering. By maintaining a hands-on
          relationship with emerging technologies in software, data science, and
          architecture, I am able to collaborate and communicate effectively.
        </p>
        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <div key={i} className={styles.category}>
              <h4 className={styles.catTitle}>{cat.title}</h4>
              <ul className={styles.skillList}>
                {cat.skills.map((skill, j) => (
                  <li key={j}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
