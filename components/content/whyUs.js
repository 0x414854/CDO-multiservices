"use client";

import styles from "@/styles/content/whyUs.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

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
      <motion.h2
        initial={{ opacity: 0, y: 100, scale: 0 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {t("h2")}
      </motion.h2>

      <ul className={styles.featuresList}>
        {features.map((f) => (
          <motion.li
            key={f.id}
            className={styles.featureItem}
            initial={{ opacity: 0, y: 100, scale: 0 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
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
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
