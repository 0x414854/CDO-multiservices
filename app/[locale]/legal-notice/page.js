"use client";
import styles from "@/styles/page/legalNotice.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function LegalNotices() {
  const t = useTranslations("LegalNotices");
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
        {/* Éditeur */}
        <motion.section
          className={styles.section}
          id="editeur"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("titleSection_1")}</h2>
          <p className={styles.sectionText}>
            <strong>CDO Multiservices Sàrl</strong>
            <br />
            Rue de Montchoisy 40 <br />
            1207, Genève <br />
            Suisse <br />
            <br />
            <span className={styles.infos}>Email</span> :{" "}
            <Link
              href="mailto:cdo-multiservices@hotmail.com"
              className={styles.link}
            >
              cdo-multiservices@hotmail.com
            </Link>
            <br />
            <span className={styles.infos}>{t("phone")}</span> :{" "}
            <Link href="tel:+41766236181" className={styles.link}>
              +41 76 623 61 81
            </Link>{" "}
            {/* /{" "}
            <Link href="tel:+41766692059" className={styles.link}>
              +41 76 669 20 59
            </Link> */}
            <br />
            <span className={styles.infos}>Numéro IDE</span> : CHE-151.259.862
            <br />
            <strong>{t("contributors")} </strong>: WEBMASTER -{" "}
            <Link href="https://www.arthurbarraud.me" className={styles.link}>
              Arthur Barraud
            </Link>
          </p>
        </motion.section>
        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>
        {/* Hébergeur */}
        <motion.section
          className={styles.section}
          id="hebergeur"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("titleSection_2")}</h2>
          <p className={styles.sectionText}>
            Vercel Inc. <br />
            340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis <br />
            {t("website")} :{" "}
            <Link
              href="https://vercel.com"
              className={styles.link}
              target="_blank"
            >
              https://vercel.com
            </Link>
          </p>
        </motion.section>
        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        {/* Propriété intellectuelle */}
        <motion.section
          className={styles.section}
          id="propriete-intellectuelle"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("titleSection_3")}</h2>
          <p className={styles.sectionText}>
            <strong> {t("section_3_strong")}</strong> {t("section_3_1")}
            <br />
            <br />
            {t("section_3_2")}
            <strong> {t("section_3_strong")}</strong>
            .
            <br />
            <br />
            {t("section_3_3")}
          </p>
        </motion.section>
        <div className={styles.separator}></div>

        {/* Responsabilité */}
        <motion.section
          className={styles.section}
          id="responsabilite"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("titleSection_4")}</h2>

          <p className={styles.sectionText}>
            <strong> {t("section_3_strong")}</strong> {t("section_4_1")}{" "}
            <span className={styles.website}>{t("websiteUrl")}</span>.
          </p>

          <p className={styles.sectionText}>
            <strong> {t("section_3_strong")}</strong> {t("section_4_2")}
          </p>

          <p className={styles.sectionText}>
            {t("section_4_3_1")} <strong> {t("section_3_strong")}</strong>{" "}
            {t("section_4_3_2")}
          </p>

          <div className={styles.sectionText}>
            <p className={styles.sectionText}>
              <strong> {t("section_3_strong")}</strong> {t("section_4_4")}
            </p>
            <ul>
              <li>{t("section_4_4_1")}</li>
              <li>{t("section_4_4_2")}</li>
              <li>{t("section_4_4_3")}</li>
              <li>{t("section_4_4_4")}</li>
            </ul>
          </div>

          <p className={styles.sectionText}>{t("section_4_5")}</p>
        </motion.section>

        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        {/* Liens externes */}
        <motion.section
          className={styles.section}
          id="liens-externes"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("titleSection_5")}</h2>
          <p className={styles.sectionText}>
            {t("section_5_1")}{" "}
            <span className={styles.website}>{t("websiteUrl")}</span>{" "}
            {t("section_5_2")}
          </p>
          <p className={styles.sectionText}>
            <strong> {t("section_3_strong")}</strong> {t("section_5_3")}
          </p>
          <p className={styles.sectionText}>
            {t("section_5_4")}
            <strong> {t("section_3_strong")}</strong> {t("section_5_5")}
          </p>
        </motion.section>

        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        {/* Données personnelles */}
        <motion.section
          className={styles.section}
          id="rgpd"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("titleSection_6")}</h2>
          <div className={styles.sectionText}>
            <p className={styles.sectionText}>
              {t("section_6_1")} <strong> {t("section_3_strong")}</strong>{" "}
              {t("section_6_1_1")}
            </p>
            <ul>
              <li>{t("section_6_2_1")}</li>
              <li>{t("section_6_2_2")}</li>
              <li>{t("section_6_2_3")}</li>
              <li>{t("section_6_2_4")}</li>
            </ul>
          </div>
          <p className={styles.sectionText}>{t("section_6_3")}</p>
          <h3 className={styles.sectionSubtitle}>{t("subtitleSection_6")}</h3>
          <div className={styles.sectionText}>
            <p className={styles.sectionText}>{t("section_6_4")}</p>
            <ul>
              <li>{t("section_6_4_1")}</li>
              <li>{t("section_6_4_2")}</li>
              <li>{t("section_6_4_3")}</li>
              <li>{t("section_6_4_4")}</li>
              <li>{t("section_6_4_5")}</li>
            </ul>
          </div>
          <p className={styles.sectionText}>
            {t("section_6_5")}{" "}
            <Link
              href="mailto:cdo-multiservices@hotmail.com"
              className={styles.link}
            >
              cdo-multiservices@hotmail.com
            </Link>
            .
          </p>
          <h3 className={styles.sectionSubtitle}>{t("subtitleSection_6_1")}</h3>
          <p className={styles.sectionText}>{t("section_6_6")}</p>
          <h3 className={styles.sectionSubtitle}>{t("subtitleSection_6_2")}</h3>

          <p className={styles.sectionText}>
            {t("section_6_7")}{" "}
            <Link href="/privacy-policy" className={styles.link}>
              {t("politic")}
            </Link>
            {t("section_6_7_1")}
          </p>
        </motion.section>

        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        {/* Cookies */}
        <motion.section
          className={styles.section}
          id="cookies"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("titleSection_7")}</h2>
          <p className={styles.sectionText}>
            {t("section_7_1")}{" "}
            <span className={styles.website}>{t("websiteUrl")}</span>{" "}
            {t("section_7_2")}
          </p>
          <h3 className={styles.sectionSubtitle}>{t("subtitleSection_7_1")}</h3>
          <p className={styles.sectionText}>{t("section_7_3")}</p>
          <div className={styles.sectionText}>
            <p>Les cookies utilisés sur ce site sont les suivants :</p>
            <ul>
              <li>
                <strong>{t("section_7_3_1")}</strong>
                <br /> {t("section_7_3_1_1")}
              </li>
              <li>
                <strong>{t("section_7_3_2")}</strong> : <br />{" "}
                {t("section_7_3_2_1")}
              </li>
              <li>
                <strong>{t("section_7_3_3")}</strong> : <br />{" "}
                {t("section_7_3_3_1")}
              </li>
            </ul>
          </div>

          <h3 className={styles.sectionSubtitle}>{t("subtitleSection_7_2")}</h3>
          <p className={styles.sectionText}>{t("section_7_4")}</p>
          <p className={styles.sectionText}>{t("section_7_4_1")}</p>

          <h3 className={styles.sectionSubtitle}>{t("subtitleSection_7_3")}</h3>

          <p className={styles.sectionText}>{t("section_7_5")}</p>
          <h3 className={styles.sectionSubtitle}>{t("subtitleSection_7_4")}</h3>

          <p className={styles.sectionText}>
            {t("section_7_6")}{" "}
            <Link href="/privacy-policy" className={styles.link}>
              {t("politic")}
            </Link>
            {t("section_7_6_1")}
          </p>
        </motion.section>

        <motion.div
          className={styles.separator}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        {/* Droit applicable */}
        <motion.section
          className={styles.section}
          id="droit"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{t("titleSection_8")}</h2>
          <p className={styles.sectionText}>{t("section_8")}</p>
          <p className={styles.sectionText}>{t("section_8_1")}</p>
        </motion.section>
      </section>
    </main>
  );
}
