import Logo from "@/components/App/Logo/Logo";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.logoWrapper}>
            <a href="/">
              <Logo width={80} height={80} alt="MetaforIQ Logo" />
            </a>
          </div>

          <div className={styles.navLinks}>
            <a href="/impact" className={styles.link}>
              Impact
            </a>
            <a href="/about" className={styles.link}>
              About
            </a>
            <a href="mailto:eric@metaforiq.com" className="btn btn-primary">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
