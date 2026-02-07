import styles from "@/components/Logo/Logo.module.css";

export default function Logo({ width, height, alt }) {
  return (
    <img
      className={styles.logo}
      src="/logo-light.png"
      width={width}
      height={height}
      alt={alt}
    />
  );
}
