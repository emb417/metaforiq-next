import Link from "next/link";
import WhoIsThisFor from "@/components/Services/WhoIsThisFor";
import ServiceDetail from "@/components/Services/ServiceDetail";
import ProcessOverview from "@/components/Services/ProcessOverview";
import styles from "./ServicesPage.module.css";

export const metadata = {
  title: "Consulting Services | Metaforiq",
  description:
    "High-stakes product decisions, AI/ML pipelines, and data infrastructure services by Eric Brousseau.",
};

export default function ServicesPage() {
  const services = [
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
    <main className={styles.main}>
      <header className={`section-padding ${styles.header}`}>
        <div className="container">
          <h1 className="kicker">Services</h1>
          <h2 className={styles.heroTitle}>
            Support for high-stakes product decisions.
          </h2>
          <p className={styles.heroLead}>
            I work with teams when the cost of building the wrong thing is high.
            Leveraging 20+ years of experience to define success, test
            assumptions early, and focus effort where it matters most.
          </p>
        </div>
        {/* Decorative background */}
        <div className={styles.bgDecor} />
      </header>

      <WhoIsThisFor />

      {services.map((service, index) => (
        <ServiceDetail key={index} {...service} />
      ))}

      <ProcessOverview />

      <section className={`section-padding ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h3>Ready to build something that matters?</h3>
            <p>
              Let's discuss your project, your constraints, and how we can work
              together.
            </p>
            <div className={styles.ctaActions}>
              <Link
                href="mailto:eric@metaforiq.com"
                className="btn btn-primary btn-lg"
              >
                Discuss your project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
