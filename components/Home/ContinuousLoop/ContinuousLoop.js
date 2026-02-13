import styles from "./ContinuousLoop.module.css";

export default function ContinuousLoop() {
  const steps = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      ),
      title: "Discover",
      desc: "High-leverage opportunities are identified through customer discovery, stakeholder alignment, and the synthesis of empirical evidence. This phase focuses on isolating critical variables and validating the core vision through hypothesis testing before significant capital is committed.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      title: "Design",
      desc: "This phase ensures strategic intent is translated into a defined solution through cross-functional shaping and outcome-based metrics. By optimizing for user viability, technical feasibility, and business alignment, the product is structured to solve core needs while remaining technically sound and commercially sustainable.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
      title: "Deliver",
      desc: "Execution is focused on high-integrity delivery and the rapid deployment of incremental value. The primary focus is maintaining the strategic intent of the solution throughout the build cycle, leveraging incremental improvements to accelerate time-to-learning and gather empirical feedback.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v18h18"></path>
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
        </svg>
      ),
      title: "Operate",
      desc: "The loop is completed by evaluating how the product performs in a real-world environment. By synthesizing quantitative usage data with qualitative insights from surveys and interviews, the actual user experience is measured against the initial hypothesis to calibrate the next sequence of strategic product bets.",
    },
  ];

  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className={styles.title}>The Continuous Learning Loop</h2>
        <div className={styles.subtitle}>
          A cycle of perpetual validation that secures customer value and
          business outcomes by strengthening product-market fit through
          disciplined iteration.
        </div>
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepHeader}>
                <div className={styles.iconWrapper}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
              </div>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
