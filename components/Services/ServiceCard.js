import styles from "@/components/Services/ServiceCard.module.css";

export default function ServiceCard({
  iconBg,
  title,
  description,
  iconPath,
  iconPath2,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.icon} style={{ background: iconBg }}>
        <svg
          className={styles.svg}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={iconPath}
          />
          {iconPath2 && (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={iconPath2}
            />
          )}
        </svg>
      </div>

      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
