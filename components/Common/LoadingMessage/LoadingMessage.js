import Image from "next/image";
import styles from "@/components/Common/LoadingMessage/LoadingMessage.module.css";

export default function LoadingMessage({ message = "Loading..." }) {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/icon.png"
        width={128}
        height={128}
        alt={message}
        className={styles.icon}
      />

      <div className={styles.message}>{message}</div>

      <div className={styles.version}>
        metaforiq-next v{process.env.APP_VERSION}
      </div>
    </div>
  );
}
