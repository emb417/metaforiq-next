import Link from "next/link";
import Philosophy from "@/components/Expertise/Philosophy";
import TechnicalDepth from "@/components/Expertise/TechnicalDepth";
import OperatingStyle from "@/components/Expertise/OperatingStyle";
import CaseStudies from "@/components/Expertise/CaseStudies";
import styles from "./ExpertisePage.module.css";

export const metadata = {
  title: "Expertise | Metaforiq",
  description:
    "Product philosophy, technical depth, and case studies from Eric Brousseau's 20+ years of experience.",
};

export default function ExpertisePage() {
  return (
    <main className={styles.main}>
      <header className={`section-padding ${styles.header}`}>
        <div className="container">
          <h1 className="kicker">Expertise</h1>
          <h2 className={styles.heroTitle}>
            Sound judgment where product and engineering meet.
          </h2>
          <p className={styles.heroLead}>
            Early technical and product decisions quietly determine speed, cost,
            and optionality later. I work at the intersection of product,
            design, and engineering to help teams reason through tradeoffs and
            choose deliberately.
          </p>
        </div>
      </header>

      <Philosophy />
      <TechnicalDepth />
      <OperatingStyle />
      <CaseStudies />

      <section className={`section-padding ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h3>Looking for a partner in high-stakes decisions?</h3>
            <p>
              I focus on outcomes, not just output. Let's see if our operating
              styles align.
            </p>
            <div className={styles.ctaActions}>
              <Link
                href="mailto:eric@metaforiq.com"
                className="btn btn-primary btn-lg"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
