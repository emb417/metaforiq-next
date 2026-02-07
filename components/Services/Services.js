import styles from "@/components/Services/Services.module.css";
import ServiceCard from "@/components/Services/ServiceCard";

export default function Services() {
  return (
    <section id="services" className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="kicker">Consulting Services</h2>
          <h3 className={styles.title}>
            Support for high-stakes product decisions.
          </h3>

          <p className={styles.description}>
            I work with teams when the cost of building the wrong thing is high.
            Working together to define success, test assumptions early, and
            focus effort where it will matter most.
          </p>
        </div>

        <div className={styles.grid}>
          <ServiceCard
            iconBg="var(--color-brand)"
            title="Zero-to-One Delivery"
            description="For founding teams and new product initiatives where early decisions set long-term direction. I help define success criteria, pressure-test assumptions, and shape product and architecture choices so early momentum translates into durable value."
            iconPath="M13 10V3L4 14h7v7l9-11h-7z"
          />

          <ServiceCard
            iconBg="var(--color-brand-light)"
            title="AI & ML Pipelines"
            description="Apply machine learning where it changes outcomes. I help teams design AI-enabled workflows, validate model impact, and embed explainable insights into the systems where decisions are actually made."
            iconPath="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V10a2 2 0 012-2h10a2 2 0 012 2v9a2 2 0 002 2h2a2 2 0 002-2v-6a2 2 0 00-2-2H9z"
          />

          <ServiceCard
            iconBg="var(--teal-500)"
            title="Analytics & Observability"
            description="Build the measurement backbone that turns product activity into evidence. I design analytics, experimentation, and observability systems that make it clear what’s working, what isn’t, and why — in real time."
            iconPath="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            iconPath2="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
        </div>
      </div>
    </section>
  );
}
