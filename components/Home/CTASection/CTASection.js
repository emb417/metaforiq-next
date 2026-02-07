import styles from "@/components/Home/CTASection/CTASection.module.css";

export default function CTASection() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>
          Ready to make the next decision with confidence?
        </h2>

        <p className={styles.subtitle}>
          If you’re facing a high-stakes product decision and need experienced
          judgment to define success, test assumptions, and move forward with
          evidence, let’s talk.
        </p>

        <a href="mailto:eric@metaforiq.com" className="btn btn-surface">
          Start the Conversation
        </a>
      </div>

      <div className={styles.decor} />
    </section>
  );
}
