"use client";

import { useState, useEffect } from "react";
import Logo from "@/components/App/Logo/Logo";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.logoWrapper}>
            <a href="/" onClick={() => setMenuOpen(false)}>
              <Logo width={80} height={80} alt="MetaforIQ Logo" />
            </a>
          </div>

          {/* Desktop nav */}
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

          {/* Hamburger button — mobile/tablet only */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`${styles.bar} ${menuOpen ? styles.barTopOpen : ""}`}
            />
            <span
              className={`${styles.barMid} ${menuOpen ? styles.barMidOpen : ""}`}
            />
            <span
              className={`${styles.bar} ${menuOpen ? styles.barBotOpen : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <a
          href="/impact"
          className={styles.mobileLink}
          onClick={() => setMenuOpen(false)}
        >
          Impact
        </a>
        <a
          href="/about"
          className={styles.mobileLink}
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
        <a
          href="mailto:eric@metaforiq.com"
          className={`btn btn-primary ${styles.mobileCta}`}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
