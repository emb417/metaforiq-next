import Logo from "@/components/Logo/Logo";
import styles from "@/components/NavBar/NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <div className={styles.logoWrapper}>
            <a href="/">
              <Logo width={80} height={80} alt="MetaforIQ Logo" />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className={styles.navLinks}>
            <a href="#services" className={styles.link}>
              Services
            </a>
            <a href="#expertise" className={styles.link}>
              Expertise
            </a>
            <a href="mailto:eric@metaforiq.com" className={styles.cta}>
              Engage!
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
