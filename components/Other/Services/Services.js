import styles from "./Services.module.css";
import ServiceCard from "@/components/Other/ServiceCard/ServiceCard";
import ServiceDetail from "@/components/Other/ServiceDetail/ServiceDetail";

export default function Services() {
  const servicesDetailData = [
    {
      title: "Zero-to-One Product Delivery",
      problem:
        "Founding teams often struggle to translate vision into a concrete roadmap, resulting in wasted effort on features that don't drive value. Early decisions in architecture and product shape set the ceiling for long-term growth.",
      outcomes:
        "Validated product-market fit, reduced time-to-market for MVPs, and a scalable technical foundation that survives the transition from 'launch' to 'scale'.",
      deliverables: [
        "Product Vision & Strategy",
        "Technical Architecture Design",
        "MVP Definition & Scoping",
        "Founding Team Formation",
        "Outcome-Based Roadmaps",
      ],
      engagement: "Project-based or Advisory",
    },
    {
      title: "AI/ML Strategy & Implementation",
      problem:
        "Organizations want to leverage LLMs and Agentic AI but struggle to identify where they add real business value or how to move beyond simple wrappers into production-ready pipelines.",
      outcomes:
        "Embedded AI features that change user outcomes, explainable insights from unstructured data, and validated RAG/Agentic workflows.",
      deliverables: [
        "AI/ML Opportunity Assessment",
        "RAG & Agentic Workflow Design",
        "LLM Evaluation Frameworks",
        "MLOps & Deployment Strategy",
        "Rapid Prototyping",
      ],
      engagement: "Project-based or Advisory",
      reversed: true,
    },
    {
      title: "Data & Analytics Infrastructure",
      problem:
        "A lack of visibility into user behavior and system performance leads to guesswork. Without a measurement backbone, teams cannot prove what's working or identify where users are dropping off.",
      outcomes:
        "Measurable product-led growth, unified visibility across B2B/B2C platforms, and a culture of experimentation rooted in evidence.",
      deliverables: [
        "Unified Analytics Stack (Pendo, GA4)",
        "A/B Testing & Experimentation Frameworks",
        "Customer Segmentation Models",
        "Real-Time Observability Pipelines",
        "Performance & Latency Optimization",
      ],
      engagement: "Project-based or Retainer",
    },
  ];
  return (
    <>
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

      <div className={styles.serviceDetailWrapper}>
        {servicesDetailData.map((service, index) => (
          <ServiceDetail
            key={index}
            title={service.title}
            problem={service.problem}
            outcomes={service.outcomes}
            deliverables={service.deliverables}
            engagement={service.engagement}
            reversed={service.reversed}
          />
        ))}
      </div>
    </>
  );
}
