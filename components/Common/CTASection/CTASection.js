import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import styles from "./CTASection.module.css";

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonLink,
}) {
  const handleTrackClick = () => {
    if (buttonLink.startsWith("mailto:")) {
      trackEvent("contact_click", "Conversion", buttonText);
    } else {
      trackEvent("cta_click", "Engagement", buttonText);
    }
  };

  return (
    <section className={`section-padding ${styles.ctaSection}`}>
      <div className="container">
        <div className={styles.ctaCard}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
          <div className={styles.ctaActions}>
            <Link
              href={buttonLink}
              className="btn btn-primary btn-lg"
              onClick={handleTrackClick}
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
