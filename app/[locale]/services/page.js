"use client";
import { Link } from "@/i18n/navigation";
import styles from "@/styles/page/services.module.css";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import GeneralCleaningImg from "@/public/images/services/generalCleaning.png";
import WindowCleaning from "@/public/images/services/windowCleaning.png";
import OfficeCleaning from "@/public/images/services/officeCleaning.png";
import EndOfLeaseCleaning from "@/public/images/services/endOfLeaseCleaning.png";
import SpringCleaning from "@/public/images/services/springCleaning.png";
import ConciergeService from "@/public/images/services/conciergeService.png";
import Housekeeper from "@/public/images/services/housekeeper.png";
import ConstructionCleaningImg from "@/public/images/services/constructionCleaning.png";

export default function Services() {
  const t = useTranslations("ServicesPage");
  const services = [
    {
      key: "generalCleaning",
      img: GeneralCleaningImg,
      title: t("generalCleaningTitle"),
      desc: t("generalCleaningDesc"),
      href: "/services/general-cleaning",
    },
    {
      key: "officeCleaning",
      img: OfficeCleaning,
      title: t("officeCleaningTitle"),
      desc: t("officeCleaningDesc"),
      href: "/services/office-cleaning",
    },
    {
      key: "constructionCleaning",
      img: ConstructionCleaningImg,
      title: t("constructionCleaningTitle"),
      desc: t("constructionCleaningDesc"),
      href: "/services/construction-cleaning",
    },
    {
      key: "windowCleaning",
      img: WindowCleaning,
      title: t("windowCleaningTitle"),
      desc: t("windowCleaningDesc"),
      href: "/services/window-cleaning",
    },
    {
      key: "endOfLeaseCleaning",
      img: EndOfLeaseCleaning,
      title: t("endOfLeaseCleaningTitle"),
      desc: t("endOfLeaseCleaningDesc"),
      href: "/services/end-of-lease-cleaning",
    },
    {
      key: "springCleaning",
      img: SpringCleaning,
      title: t("springCleaningTitle"),
      desc: t("springCleaningDesc"),
      href: "/services/spring-cleaning",
    },
    {
      key: "conciergeService",
      img: ConciergeService,
      title: t("conciergeServiceTitle"),
      desc: t("conciergeServiceDesc"),
      href: "/services/concierge-service",
    },
    {
      key: "housekeeper",
      img: Housekeeper,
      title: t("housekeeperTitle"),
      desc: t("housekeeperDesc"),
      href: "/services/housekeeper",
    },
  ];

  return (
    <main className={styles.servicesPage}>
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
      <ul className={styles.services}>
        {services.map((s, index) => (
          <motion.li
            key={s.key}
            className={styles.service}
            style={{ backgroundImage: `url(${s.img.src})` }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link href={s.href}>
              <div className={styles.content}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </main>
  );
}
