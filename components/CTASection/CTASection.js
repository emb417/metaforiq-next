import styles from "@/components/CTASection/CTASection.module.css";

export default function CTASection() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>Ready to Build What’s Next?</h2>

        <p className={styles.subtitle}>
          If you’re facing an ambiguous product problem and need senior product
          leadership to drive discovery, alignment, and delivery, let’s talk.
        </p>

        <a href="mailto:eric@metaforiq.com" className="btn btn-surface">
          Start the Conversation
        </a>
      </div>

      <div className={styles.decor} />
    </section>
  );
}
