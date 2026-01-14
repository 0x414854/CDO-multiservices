import styles from "@/styles/content/services.module.css";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import ArrowIcon from "@/public/icons/arrow_right_white.png";

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
      <h2 className={styles.title}>{t("title")}</h2>
      <p className={styles.subtitle}>{t("subtitle")}</p>

      <ul className={styles.servicesList}>
        {services.map((service) => (
          <li key={service.id} className={styles.serviceItem}>
            <Link href={service.link}>
              <div className={styles.serviceCard}>
                <h3>{t(`items.${service.id}.title`)}</h3>
                <p>{t(`items.${service.id}.description`)}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/services" className={styles.button}>
        <button>{t("button")}</button>
        <Image src={ArrowIcon} width={20} height={20} alt="Arrow right" />
      </Link>
    </section>
  );
}
