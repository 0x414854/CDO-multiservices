"use client";
import styles from "@/styles/page/about.module.css";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import AboutImg from "@/public/images/generalCleaning.png";
import CleanImg from "@/public/icons/clean.png";
import CheckCTAImg from "@/public/icons/check_cta.png";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <main className={styles.aboutPage}>
      <section className={styles.titleSection}>
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("title")}
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("subtitle")}
        </motion.span>
      </section>
      <section className={styles.historyContainer}>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("history_title")}
        </motion.h2>
        <div className={styles.container}>
          <div className={styles.histories}>
            <motion.p
              className={styles.history}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {" "}
              {t("history_1")}
            </motion.p>
            <motion.p
              className={styles.history}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {" "}
              {t("history_2")}
            </motion.p>
            <motion.p
              className={styles.history}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {" "}
              {t("history_3")}
            </motion.p>
          </div>
          <Image
            src={AboutImg}
            width={300}
            height={300}
            sizes="(min-width: 1024px) 100%, 300px"
            alt="Image nettoyage de vitre CDO Multiservices - Suisse"
            className={styles.img}
          />
        </div>
      </section>

      <section className={styles.valueContainer}>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("value_title")}
        </motion.h2>
        <ul className={styles.values}>
          <motion.li
            className={styles.value}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src={CheckCTAImg}
              width={40}
              height={40}
              alt="Icone de validation - CDO Multiservices, Suisse"
            />
            <h3>{t("value_1")}</h3>
            <p>{t("value_desc_1")}</p>
          </motion.li>
          <motion.li
            className={styles.value}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src={CheckCTAImg}
              width={40}
              height={40}
              alt="Icone de validation - CDO Multiservices, Suisse"
            />
            <h3>{t("value_2")}</h3>
            <p>{t("value_desc_2")}</p>
          </motion.li>
          <motion.li
            className={styles.value}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src={CheckCTAImg}
              width={40}
              height={40}
              alt="Icone de validation - CDO Multiservices, Suisse"
            />
            <h3>{t("value_3")}</h3>
            <p>{t("value_desc_3")}</p>
          </motion.li>
        </ul>
      </section>
      <motion.section
        className={styles.ctaContainer}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src={CleanImg}
          width={50}
          height={50}
          alt="Icone de nettoyage - CDO Multiservices, Suisse"
        />
        <h2>{t("cta_title")}</h2>
        <p>{t("cta_descr")}</p>
        <Link href="/contact#form">
          <button>{t("cta_button")}</button>
        </Link>
      </motion.section>
    </main>
  );
}
