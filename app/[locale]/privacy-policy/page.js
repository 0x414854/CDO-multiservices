"use client";
import styles from "@/styles/page/privacyPolicy.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const t = useTranslations("PrivacyPolicy");
  return (
    <main className={styles.mainContainer}>
      <section className={styles.titleContainer}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("title")}
        </motion.h1>
        <motion.span
          className={styles.update}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("update")}
        </motion.span>
      </section>
      {/* Contenu des sections */}
      <section className={styles.sectionsContainer}>
        <motion.section
          className={styles.section}
          id="intro"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("titleSection_1")}</h2>
          <p className={styles.sectionText}>
            {t("section_1_1")} <strong>{t("section_1_1_1")}</strong> (
            <span className={styles.website}>{t("websiteUrl")}</span>){" "}
            {t("section_1_1_2")}
          </p>
          <p className={styles.sectionText}>{t("section_1_2")}</p>
          <p className={styles.sectionText}>{t("section_1_3")}</p>
        </motion.section>

        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        <motion.section
          className={styles.section}
          id="personnalData"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("titleSection_2")}</h2>
          <h3 className={styles.sectionSubtitle}>{t("subtitleSection_2")}</h3>
          <div className={styles.sectionText}>
            <p className={styles.sectionText}>{t("section_2")}</p>
            <ul>
              <li>{t("section_2_1")}</li>
              <li>{t("section_2_2")}</li>
              <li>{t("section_2_3")}</li>
              <li>{t("section_2_4")}</li>
              <li>{t("section_2_5")}</li>
              <li>{t("section_2_6")}</li>
            </ul>
            <p className={styles.sectionText}>{t("section_2_7")}</p>
          </div>
          <h3 className={styles.sectionSubtitle}>{t("subtitleSection_2_1")}</h3>

          <div className={styles.sectionText}>
            <p className={styles.sectionText}>{t("section_2_1_1")}</p>
            <ul>
              <li>{t("section_2_1_2")}</li>
              <li>{t("section_2_1_3")}</li>
              <li>{t("section_2_1_4")}</li>
              <li>{t("section_2_1_5")}</li>
              <li>{t("section_2_1_6")}</li>
              <li>{t("section_2_1_7")}</li>
            </ul>
            <p className={styles.sectionText}>{t("section_2_1_8")}</p>
          </div>
        </motion.section>

        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        <motion.section
          className={styles.section}
          id="finality"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("titleSection_3")}</h2>
          <div className={styles.sectionText}>
            <p className={styles.sectionText}>{t("section_3")}</p>
            <ul>
              <li>{t("section_3_1")}</li>
              <li>{t("section_3_2")}</li>
              <li>{t("section_3_3")}</li>
              <li>{t("section_3_4")}</li>
              <li>{t("section_3_5")}</li>
            </ul>
            <p className={styles.sectionText}>{t("section_3_6")}</p>
          </div>
        </motion.section>

        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        <motion.section
          className={styles.section}
          id="finality"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("titleSection_4")}</h2>
          <div className={styles.sectionText}>
            <p className={styles.sectionText}>{t("section_4")}</p>
            <ul>
              <li>{t("section_4_1")}</li>
              <li>{t("section_4_2")}</li>
              <li>{t("section_4_3")}</li>
            </ul>
          </div>
        </motion.section>

        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        <motion.section
          className={styles.section}
          id="cookies"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("titleSection_5")}</h2>
          <div className={styles.sectionText}>
            <p className={styles.sectionText}>{t("section_5")}</p>
            <p className={styles.sectionText}>{t("section_5_1")}</p>

            <ul>
              <li>{t("section_5_1_1")}</li>
              <li>{t("section_5_1_2")}</li>
            </ul>
            <p className={styles.sectionText}>{t("section_5_2")}</p>
            <p className={styles.sectionText}>{t("section_5_3")}</p>
          </div>
        </motion.section>

        <motion.div className={styles.separator}></motion.div>

        <motion.section
          className={styles.section}
          id="conservation"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("titleSection_6")}</h2>
          <div className={styles.sectionText}>
            <p className={styles.sectionText}>{t("section_6")}</p>
            <ul>
              <li>{t("section_6_1")}</li>
              <li>{t("section_6_2")}</li>
            </ul>
          </div>
        </motion.section>

        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        <motion.section
          className={styles.section}
          id="droits"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("titleSection_7")}</h2>
          <div className={styles.sectionText}>
            <p className={styles.sectionText}>{t("section_7")}</p>
            <ul>
              <li>{t("section_7_1")}</li>
              <li>{t("section_7_2")}</li>
              <li>{t("section_7_3")}</li>
              <li>{t("section_7_4")}</li>
              <li>{t("section_7_5")}</li>
            </ul>
            <p className={styles.sectionText}>{t("section_7_6")}</p>
            <Link
              href="mailto:cdo-multiservices@hotmail.com"
              className={styles.link}
            >
              cdo-multiservices@hotmail.com
            </Link>
          </div>
        </motion.section>

        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        <motion.section
          className={styles.section}
          id="transmission"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("titleSection_8")}</h2>
          <div className={styles.sectionText}>
            <p className={styles.sectionText}>{t("section_8")}</p>
            <ul>
              <li>{t("section_8_1")}</li>
              <li>{t("section_8_2")}</li>
            </ul>
          </div>
        </motion.section>

        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        <motion.section
          className={styles.section}
          id="security"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("titleSection_9")}</h2>
          <p className={styles.sectionText}>{t("section_9")}</p>
          <p className={styles.sectionText}>{t("section_9_1")}</p>
        </motion.section>

        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        <motion.section
          className={styles.section}
          id="links"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("titleSection_10")}</h2>
          <p className={styles.sectionText}>{t("section_10")}</p>
        </motion.section>

        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        <motion.section
          className={styles.section}
          id="modification"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("titleSection_11")}</h2>
          <p className={styles.sectionText}>{t("section_11")}</p>
        </motion.section>

        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        <motion.section
          className={styles.section}
          id="contact"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("titleSection_12")}</h2>
          <p className={styles.sectionText}>{t("section_12")}</p>
          <Link
            href="mailto:cdo-multiservices@hotmail.com"
            className={styles.link}
          >
            cdo-multiservices@hotmail.com
          </Link>
        </motion.section>
      </section>
    </main>
  );
}
