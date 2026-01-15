"use client";
import { useEffect, useRef, useState } from "react";
import styles from "@/styles/content/hero.module.css";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import CleanIcon from "@/public/icons/clean.png";
import ArrowIcon from "@/public/icons/arrow_right.png";

// --- Composant compteur animé ---
function Counter({ end, duration = 1200 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRun.current) {
          hasRun.current = true;

          const startTime = performance.now();

          function animate(time) {
            const progress = Math.min((time - startTime) / duration, 1);
            const value = Math.floor(progress * end);
            setCount(value);

            if (progress < 1) requestAnimationFrame(animate);
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Hero() {
  const t = useTranslations("Hero");

  const highlights = [
    { number: 35, label: t("highlight_1"), suffix: "+" },
    { number: 20, label: t("highlight_2"), suffix: "+" },
    { number: 100, label: t("highlight_3"), suffix: "%" },
  ];

  return (
    <section className={styles.heroContainer}>
      <motion.div
        className={styles.span}
        initial={{ opacity: 0, y: 100, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src={CleanIcon}
          width={20}
          height={20}
          alt="Icone clean services - CDO Multiservices"
        />
        <span>{t("span")}</span>
      </motion.div>

      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 100, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {t("h1")}
      </motion.h1>
      <motion.h2
        className={styles.subtitle}
        initial={{ opacity: 0, y: 100, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {t("h2")}
      </motion.h2>

      <div className={styles.buttons}>
        <motion.a
          href="/contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <button>{t("button_1")}</button>
          <Image src={ArrowIcon} width={20} height={20} alt="Arrow right" />
        </motion.a>
        <motion.a
          href="/services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <button>{t("button_2")}</button>
        </motion.a>
      </div>

      <ul className={styles.highlights}>
        {highlights.map((item, i, index) => (
          <motion.li
            key={i}
            className={styles.highlight}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span>
              <Counter end={item.number} />
              {item.suffix}
            </span>
            <p>{item.label}</p>
          </motion.li>
        ))}
      </ul>
      <Link href="#services" className={styles.scrollDown}>
        <span className={styles.mouse}></span>
      </Link>
    </section>
  );
}
