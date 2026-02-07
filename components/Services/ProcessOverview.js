import styles from "./ProcessOverview.module.css";

export default function ProcessOverview() {
  const steps = [
    {
      title: "Discover",
      desc: "Customer discovery, stakeholder alignment, and data audit to identify high-leverage opportunities."
    },
    {
      title: "Design",
      desc: "Shaping the product vision, technical architecture, and outcome-based metrics."
    },
    {
      title: "Build",
      desc: "Hands-on delivery of MVPs, AI/ML pipelines, or analytics infrastructure."
    },
    {
      title: "Iterate",
      desc: "Rapid experimentation and performance optimization to drive continuous growth."
    }
  ];

  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className={styles.title}>The Process</h2>
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.number}>{index + 1}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
