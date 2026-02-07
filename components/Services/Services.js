import styles from "@/components/Services/Services.module.css";
import ServiceCard from "@/components/Services/ServiceCard";

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.kicker}>Consulting Services</h2>
          <h3 className={styles.title}>
            How we help you move from idea to impact.
          </h3>
        </div>

        <div className={styles.grid}>
          <ServiceCard
            iconBg="var(--color-brand)"
            title="Zero-to-One Delivery"
            description="Founding teams and pioneering first-of-their-kind platforms. We lead early discovery, define product strategy, and shape architectures that allow innovation to scale."
            iconPath="M13 10V3L4 14h7v7l9-11h-7z"
          />

          <ServiceCard
            iconBg="var(--color-brand-light)"
            title="AI & ML Pipelines"
            description="Applying Generative AI to product workflows, building explainable segmentation models, and embedding ML-driven insights into core decision systems."
            iconPath="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V10a2 2 0 012-2h10a2 2 0 012 2v9a2 2 0 002 2h2a2 2 0 002-2v-6a2 2 0 00-2-2H9z"
          />

          <ServiceCard
            iconBg="var(--teal-500)"
            title="Analytics & Observability"
            description="Designing real-time analytics stacks, experimentation systems, and observability foundations for complex B2B and B2C platforms."
            iconPath="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            iconPath2="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
        </div>
      </div>
    </section>
  );
}
