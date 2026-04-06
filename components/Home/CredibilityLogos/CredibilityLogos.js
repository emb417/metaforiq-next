"use client";

import { use, useEffect, useState } from "react";
import styles from "./CredibilityLogos.module.css";

export default function CredibilityLogos() {
  const logos = [
    { name: "Best Buy", className: styles.bestbuy },
    { name: "Tealium", className: styles.tealium },
    { name: "Nike", className: styles.nike },
    { name: "Vevo", className: styles.vevo },
    { name: "New Relic", className: styles.newRelic },
    { name: "moogsoft", className: styles.moogsoft },
    { name: "Dell Technologies", className: styles.dell },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHoveredIndex((prev) => (prev + 1) % logos.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.tagline}>
          Proven in high-stakes environments with the world's most recognized
          brands
        </p>
        <div className={styles.logoGrid}>
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className={`${styles.logo} ${logo.className} ${
                index === hoveredIndex ? styles.hovered : ""
              }`}
              aria-label={logo.name}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
