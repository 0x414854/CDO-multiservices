"use client";

import styles from "@/styles/content/services.module.css";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import ArrowIcon from "@/public/icons/arrow_right_white.png";
import { motion } from "framer-motion";

export default function Services() {
  const t = useTranslations("Services");

  // Liste des services dynamiques
  const services = [
    { id: "general", link: "/services/nettoyage-general" },
    // { id: "windows", link: "/services/nettoyage-vitres" },
    // { id: "offices", link: "/services/nettoyage-bureaux" },
    // { id: "concierge", link: "/services/conciergerie" },
    // { id: "maid", link: "/services/femme-menage" },
    // { id: "spring", link: "/services/nettoyage-printemps" },
    { id: "renovation", link: "/services/fin-chantier" },
    { id: "lease", link: "/services/fin-bail" },
  ];

  return (
    <section className={styles.servicesContainer} id="services">
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 100, scale: 0 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {t("title")}
      </motion.h2>
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 100, scale: 0 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {t("subtitle")}
      </motion.p>

      <ul className={styles.servicesList}>
        {services.map((service) => (
          <motion.li
            key={service.id}
            className={styles.serviceItem}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link href={service.link}>
              <div className={styles.serviceCard}>
                <h3>{t(`items.${service.id}.title`)}</h3>
                <p>{t(`items.${service.id}.description`)}</p>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
      <motion.a
        href="/services"
        className={styles.button}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <button>{t("button")}</button>
        <Image src={ArrowIcon} width={20} height={20} alt="Arrow right" />
      </motion.a>
    </section>
  );
}
