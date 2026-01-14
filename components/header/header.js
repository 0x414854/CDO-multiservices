"use client";

import styles from "@/styles/header/header.module.css";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

import Logo from "@/public/logo/logo.png";
import LogoWhite from "@/public/logo/logoWhite.png";
import MenuIcon from "@/public/icons/menu_black.svg";
import MenuIconWhite from "@/public/icons/menu_white.svg";
import CrossIconWhite from "@/public/icons/cross_white.svg";
import CrossIcon from "@/public/icons/cross_black.svg";

export default function Header() {
  const t = useTranslations("Navbar");

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);

  // Total d'articles dans le panier

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  function toggleMenu() {
    if (menuOpen) {
      // on ferme : déclenche l'animation inverse
      setAnimateOut(true);
      setTimeout(() => {
        setMenuOpen(false);
        setAnimateOut(false);
      }, 400); // durée de ton animation inverse
    } else {
      setMenuOpen(true);
    }
  }

  function handleLocaleChange(e) {
    const newLocale = e.target.value;
    router.replace(pathname, { locale: newLocale });
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.navbarContainer} ${
        scrolled ? styles.navScrolled : ""
      }`}
    >
      {/* Logo */}
      <div className={styles.navLeft}>
        <Link href="/">
          <Image
            src={scrolled ? Logo : LogoWhite}
            width={230}
            height={50}
            alt="CDO Multiservices Logo - Nettoyage Professionnel en Suisse"
            sizes="(max-width: 480px) 120px, 230px"
            loading="lazy"
          />
        </Link>
      </div>

      {/* Desktop navigation */}
      <nav className={styles.desktopNav}>
        <ul className={styles.desktopMenu}>
          <li>
            <Link
              href="/services"
              className={`${styles.navLink} ${
                pathname === "/services" ? styles.active : ""
              }`}
            >
              {t("services")}
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className={`${styles.navLink} ${
                pathname === "/gallery" ? styles.active : ""
              }`}
            >
              {t("gallery")}
            </Link>
          </li>
          <li>
            <Link
              href="/reviews"
              className={`${styles.navLink} ${
                pathname === "/reviews" ? styles.active : ""
              }`}
            >
              {t("reviews")}
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${styles.navLink} ${
                pathname === "/about" ? styles.active : ""
              }`}
            >
              {t("about")}
            </Link>
          </li>
        </ul>

        <div className={styles.desktopActions}>
          <select
            value={locale}
            onChange={handleLocaleChange}
            className={styles.langSelect}
            aria-label="Select language"
          >
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="pt">PT</option>
          </select>

          <Link href="/contact" className={styles.contactButton}>
            {t("contact")}
          </Link>
        </div>
      </nav>

      {/* Mobile icons */}
      <div className={styles.mobileIcons}>
        <button onClick={toggleMenu}>
          <Image
            src={
              menuOpen
                ? scrolled
                  ? CrossIcon
                  : CrossIconWhite
                : scrolled
                  ? MenuIcon
                  : MenuIconWhite
            }
            width={30}
            height={30}
            alt="Menu"
            className={styles.menuIcon}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className={styles.overlay} onClick={toggleMenu}>
          <div
            className={`${styles.mobileNav} ${
              animateOut ? styles.slideLeft : styles.slideRight
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.overlayHeader}>
              <Link href="/">
                <Image src={Logo} width={200} height={50} alt="Logo" />
              </Link>
              {/* <button onClick={toggleMenu}>
                <Image
                  src={CrossIconWhite}
                  width={30}
                  height={30}
                  alt="Close"
                />
              </button> */}
            </div>
            <ul className={styles.mobileNavContainer}>
              {["/services", "/gallery", "/reviews", "/about", "/contact"].map(
                (href, i) => (
                  <li key={i} className={styles.navElement}>
                    <Link
                      href={href}
                      onClick={toggleMenu}
                      aria-selected={pathname === href ? "true" : "false"}
                    >
                      {t(
                        ["services", "gallery", "reviews", "about", "contact"][
                          i
                        ]
                      )}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <div className={styles.menuSeparator}></div>
            <ul className={styles.langSelectMobile}>
              {[
                { code: "fr", label: "Français" },
                { code: "en", label: "English" },
                { code: "pt", label: "Portugais" },
              ].map((lang) => (
                <li
                  key={lang.code}
                  className={locale === lang.code ? styles.active : ""}
                  onClick={() => {
                    router.replace(pathname, { locale: lang.code }); // change la langue
                  }}
                >
                  {lang.label}
                </li>
              ))}
            </ul>
            {/* <div className={styles.menuSeparator}></div> */}
          </div>
        </div>
      )}
    </header>
  );
}
