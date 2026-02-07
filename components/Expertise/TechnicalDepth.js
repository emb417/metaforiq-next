import styles from "./TechnicalDepth.module.css";

export default function TechnicalDepth() {
  const categories = [
    {
      title: "AI / ML & Data Platforms",
      skills: ["Generative AI & LLMs", "RAG & Agentic AI", "MLOps & Feature Engineering", "Model Evaluation Frameworks"]
    },
    {
      title: "Modern Stack",
      skills: ["Node.js & React", "Python (FastAPI, Data Science)", "REST & GraphQL APIs", "Cloud-Native Architecture (AWS)"]
    },
    {
      title: "Infrastructure & Ops",
      skills: ["Kubernetes & Docker", "CI/CD (GitHub Actions, Jenkins)", "Observability (OpenTelemetry)", "IAM & Security"]
    }
  ];

  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="kicker">Technical Depth</h2>
        <h3 className={styles.mainTitle}>Contextualized capability.</h3>
        <p className={styles.lead}>
          I don't just collect certifications. I build systems that solve real-world problems 
          using the right tool for the job.
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
