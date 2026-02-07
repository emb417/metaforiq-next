import styles from "@/components/Common/Footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={`section-padding ${styles.footer}`}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brandBlock}>
            <a href="/" className={styles.logo}>
              Metafor<span className={styles.logoAccent}>IQ</span>
            </a>
            <p className={styles.copy}>
              &copy; {new Date().getFullYear()} MetaforIQ LLC.
            </p>
          </div>

          <nav className={styles.nav}>
            <a href="/services" className={styles.link}>
              Services
            </a>
            <a href="/expertise" className={styles.link}>
              Expertise
            </a>
            <a href="/about" className={styles.link}>
              About
            </a>
            <a href="mailto:eric@metaforiq.com" className={styles.link}>
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
