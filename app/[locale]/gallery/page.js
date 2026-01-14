"use client";
import styles from "@/styles/page/gallery.module.css";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/content/beforeAfterSlider";

import Before_1 from "@/public/images/slider/before_1.jpg";
import Before_2 from "@/public/images/slider/before_2.jpg";
import Before_3 from "@/public/images/slider/before_3.jpg";
import Before_4 from "@/public/images/slider/before_4.jpg";

import After_1 from "@/public/images/slider/after_1.jpg";
import After_2 from "@/public/images/slider/after_2.jpg";
import After_3 from "@/public/images/slider/after_3.jpg";
import After_4 from "@/public/images/slider/after_4.jpg";

// import TestGalleryB from "@/public/images/7.png";
// import TestGalleryA from "@/public/images/8.png";

export default function GalleryPage() {
  const t = useTranslations("GalleryPage");

  const images = [
    // {
    //   before: TestGalleryB,
    //   after: TestGalleryA,
    //   alt: "Nettoyage cuisine - CDO Multiservices",
    //   title: "Test carte de visite",
    //   year: "2025",
    // },
    {
      before: Before_1,
      after: After_1,
      alt: "Nettoyage cuisine - CDO Multiservices",
      title: t("title_image_1"),
      year: "2025",
    },
    {
      before: Before_2,
      after: After_2,
      alt: "Nettoyage cuisine - CDO Multiservices",
      title: t("title_image_2"),
      year: "2025",
    },
    {
      before: Before_3,
      after: After_3,
      alt: "Nettoyage four - CDO Multiservices",
      title: t("title_image_3"),
      year: "2025",
    },
    {
      before: Before_4,
      after: After_4,
      alt: "Nettoyage armoire de rangement - CDO Multiservices",
      title: t("title_image_4"),
      year: "2025",
    },
  ];

  return (
    <main className={styles.galleryPage}>
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

      <section className={styles.sliderContainer}>
        {images.map((img, i) => (
          <motion.div
            key={i}
            className={styles.image}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2>
              {img.title} - <span>{img.year}</span>
            </h2>
            <BeforeAfterSlider
              beforeSrc={img.before}
              afterSrc={img.after}
              alt={img.alt}
            />
          </motion.div>
        ))}
      </section>
    </main>
  );
}
