"use client";
import styles from "@/styles/content/servicePage.module.css";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ServicePage({ translationKey, image }) {
  const t = useTranslations(translationKey);

  const serviceItems = Object.keys(t.raw("services.items"));
  const valuesItems = Object.keys(t.raw("values"));

  return (
    <main className={styles.generalCleaningPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {t("title")}
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link href="/contact" className={styles.primaryButton}>
              {t("primaryCta")}
            </Link>
            <Link href="/services" className={styles.secondaryButton}>
              {t("secondaryCta")}
            </Link>
          </motion.div>
        </div>

        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src={image}
            alt={t("imageAlt")}
            fill
            className={styles.image}
            priority
          />
        </motion.div>
      </section>

      {/* Intro */}
      <section className={styles.introContainer}>
        <div className={styles.intro}>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {t("intro.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {t("intro.text")}
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className={styles.services}>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("services.title")}
        </motion.h2>
        <div className={styles.grid}>
          {serviceItems.map((key, index) => (
            <motion.div
              key={key}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {t(`services.items.${key}`)}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        {valuesItems.map((key, index) => (
          <motion.div
            key={key}
            className={styles.value}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 * index }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>{t(`values.${key}.title`)}</h3>
            <p>{t(`values.${key}.text`)}</p>
          </motion.div>
        ))}
      </section>

      {/* Final CTA */}
      <motion.section
        className={styles.finalCta}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>{t("final.title")}</h2>
        <p>{t("final.text")}</p>
        <Link href="/contact" className={styles.primaryButton}>
          {t("final.button")}
        </Link>
      </motion.section>
    </main>
  );
}
