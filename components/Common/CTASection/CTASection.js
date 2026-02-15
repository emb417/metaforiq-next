import Link from "next/link";
import styles from "./CTASection.module.css";

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonLink,
}) {
  return (
    <section className={`section-padding ${styles.ctaSection}`}>
      <div className="container">
        <div className={styles.ctaCard}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
          <div className={styles.ctaActions}>
            <Link href={buttonLink} className="btn btn-primary btn-lg">
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
