import Link from "next/link";
import ProfessionalStory from "@/components/About/ProfessionalStory";
import CredibilityMarkers from "@/components/About/CredibilityMarkers";
import PersonalNote from "@/components/About/PersonalNote";
import styles from "./AboutPage.module.css";

export const metadata = {
  title: "About | Eric Brousseau",
  description:
    "The professional story and track record of Eric Brousseau, a Principal Product Leader with 25+ years of experience.",
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <header className={`section-padding ${styles.header}`}>
        <div className="container">
          <h1 className="kicker">About</h1>
          <h2 className={styles.heroTitle}>
            Pragmatic leadership for complex product challenges.
          </h2>
          <p className={styles.heroLead}>
            I help organizations bridge the gap between technical potential and
            business impact. No fluff, just evidence-led direction and hands-on
            delivery.
          </p>
        </div>
      </header>

      <ProfessionalStory />
      <CredibilityMarkers />
      <PersonalNote />

      <section className={`section-padding ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h3>Looking for a seasoned perspective?</h3>
            <p>
              I’m currently taking on select advisory and project-based
              engagements.
            </p>
            <div className={styles.ctaActions}>
              <Link
                href="mailto:eric@metaforiq.com"
                className="btn btn-primary btn-lg"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
