import styles from "@/styles/content/whyUs.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";

import QualityIcon from "@/public/icons/check.png";

export default function WhyUs() {
  const t = useTranslations("WhyUs");

  const features = [
    {
      id: "quality",
      icon: QualityIcon,
    },
    {
      id: "experience",
      icon: QualityIcon,
    },
    {
      id: "certified",
      icon: QualityIcon,
    },
    {
      id: "available",
      icon: QualityIcon,
    },
  ];

  return (
    <section className={styles.whyUsContainer}>
      <h2>{t("h2")}</h2>

      <ul className={styles.featuresList}>
        {features.map((f) => (
          <li key={f.id} className={styles.featureItem}>
            <div className={styles.imgContainer}>
              <Image
                src={f.icon}
                width={30}
                height={30}
                alt={t(`items.${f.id}.title`)}
              />
            </div>

            <div className={styles.infosContainer}>
              <h3>{t(`items.${f.id}.title`)}</h3>
              <p>{t(`items.${f.id}.description`)}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
