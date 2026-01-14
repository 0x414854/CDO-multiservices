import styles from "@/styles/footer/copyright.module.css";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Copyright() {
  const t = useTranslations("Footer");
  return (
    <section className={styles.copyrightSection}>
      <div className={styles.copyrightContainer}>
        <p>{t("copyright")}</p>
      </div>
      <div className={styles.authorContainer}>
        <p>
          {t("p")}{" "}
          <Link href="https://www.arthurbarraud.me" target="_blank">
            Arthur BARRAUD
          </Link>
        </p>
      </div>
    </section>
  );
}
