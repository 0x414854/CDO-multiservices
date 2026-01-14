"use client";
import styles from "@/styles/footer/footer.module.css";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

import Logo from "@/public/logo/logoWhite.png";
import PhoneIcon from "@/public/icons/phone.svg";
import MailIcon from "@/public/icons/mail.svg";
import DaysIcon from "@/public/icons/days.svg";

import Copyright from "./copyright";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  return (
    <footer className={styles.footerContainer}>
      <section className={styles.footer}>
        <div className={styles.intro}>
          <div className={styles.container}>
            <Image
              src={Logo}
              width={300}
              height={80}
              alt="Logo Footer CDO Multiservices - Expert en nettoyage Suisse"
              className={styles.logo}
            />
            <p>{t("description")}</p>
          </div>

          <section className={styles.infos}>
            <Link href="https://www.renovero.ch/fr/artisans/cdo-multiservices-sarl">
              <Image
                src="https://rest-api.renovero.ch/public/account/gVH0AQuU/rating-badge/image"
                width={120}
                height={50}
                alt="Image renovero.ch CDO Multiservices - Expert en nettoyage à Genève"
                sizes="(min-width: 768px) 120px, 230px"
              />
            </Link>
            <ul className={styles.langSelect}>
              {[
                { code: "fr", label: t("fr") },
                { code: "en", label: t("en") },
                { code: "pt", label: t("pt") },
              ].map((lang) => (
                <li
                  key={lang.code}
                  className={locale === lang.code ? styles.active : styles.lang}
                  onClick={() => {
                    router.replace(pathname, { locale: lang.code }); // change la langue
                  }}
                >
                  {lang.label}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className={styles.linksContainer}>
          <h3>{t("h3_1")}</h3>
          <ul className={styles.links}>
            <li className={styles.link}>
              <Link href="/services">{t("services")}</Link>
            </li>
            <li className={styles.link}>
              <Link href="/gallery">{t("gallery")}</Link>
            </li>
            <li className={styles.link}>
              <Link href="/reviews">{t("reviews")}</Link>
            </li>
            <li className={styles.link}>
              <Link href="/about">{t("about")}</Link>
            </li>
            <li className={styles.link}>
              <Link href="/contact">{t("contact")}</Link>
            </li>
          </ul>
        </div>
        <div className={styles.legalsContainer}>
          <h3>{t("h3_2")}</h3>
          <ul className={styles.legals}>
            <li className={styles.legal}>
              <Link href="/privacy-policy">{t("privacyPolicy")}</Link>
            </li>
            <li className={styles.legal}>
              <Link href="/legal-notice"> {t("legalNotice")}</Link>
            </li>
          </ul>
        </div>
        <div className={styles.ContactContainer}>
          <h3>{t("h3_3")}</h3>
          <ul className={styles.contacts}>
            <li className={styles.contact}>
              <Image
                src={PhoneIcon}
                width={18}
                height={18}
                alt="SVG Icon - CDO Multiservices"
              />
              <div className={styles.phoneContainer}>
                <Link href="tel:+41766692059">+41 76 669 20 59</Link>
                <Link href="tel:+41766236181 ">+41 76 623 61 81 </Link>
              </div>
            </li>
            <li className={styles.contact}>
              <Image
                src={MailIcon}
                width={18}
                height={18}
                alt="SVG Icon - CDO Multiservices"
              />
              <Link href="mailto:cdo-multiservices@hotmail.com">
                cdo-multiservices@hotmail.com
              </Link>
            </li>
            <li className={styles.contact}>
              <Image
                src={DaysIcon}
                width={18}
                height={18}
                alt="SVG Icon - CDO Multiservices"
              />
              {t("days")}
            </li>
          </ul>
        </div>
      </section>
      <Copyright />
    </footer>
  );
}
