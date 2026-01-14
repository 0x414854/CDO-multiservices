"use client";
import styles from "@/styles/page/reviews.module.css";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import ArrowIcon from "@/public/icons/arrow_right.png";

export default function ReviewsPage() {
  const t = useTranslations("ReviewsPage");

  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (review) => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedReview(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setReviews(data.reviews);
      });
  }, []);

  const averageRating =
    reviews.length > 0
      ? (() => {
          const avg =
            reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
          return avg % 1 === 0 ? avg : avg.toFixed(1);
        })()
      : null;

  return (
    <main className={styles.reviewsPage}>
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
      {reviews.length === 0 ? (
        <section className={styles.noReviewsContainer}>
          {averageRating && (
            <motion.div
              className={styles.averageRating}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p>⭐ {averageRating} / 5</p> <span>({reviews.length} avis)</span>
            </motion.div>
          )}

          <motion.a
            href="/reviews-form"
            className={styles.button}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <button>{t("button")}</button>
            <Image src={ArrowIcon} width={20} height={20} alt="Arrow right" />
          </motion.a>
          <p>Aucun avis client pour le moment.</p>
        </section>
      ) : (
        <div className={styles.reviewsContainer}>
          <div className={styles.container}>
            {averageRating && (
              <motion.div
                className={styles.averageRating}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <p>⭐ {averageRating} / 5</p>{" "}
                <span>({reviews.length} avis)</span>
              </motion.div>
            )}
            <motion.a
              href="/reviews-form"
              className={styles.button}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <button>{t("button")}</button>
              <Image src={ArrowIcon} width={20} height={20} alt="Arrow right" />
            </motion.a>
          </div>

          <ul className={styles.reviewsList}>
            {reviews.map((r, index) => (
              <motion.li
                key={r.id}
                className={styles.review}
                onClick={() => openModal(r)}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 * index }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div>
                  <strong>{r.author}</strong> —{" "}
                  <span className={styles.stars}>
                    {Array.from({ length: r.rating }, (_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </span>
                </div>

                <p>{r.content_fr || r.content_en || r.content_pt}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      )}

      {/* 🔥 MODAL */}
      {isModalOpen && selectedReview && (
        <div
          className={`${styles.modalContainer} ${
            isModalOpen ? styles.active : ""
          }`}
        >
          <div
            className={`${styles.overlay} ${isModalOpen ? styles.active : ""}`}
            onClick={closeModal}
          ></div>

          <section className={styles.reviewModal}>
            <button className={styles.modalCloseBtn} onClick={closeModal}>
              ✖
            </button>

            <div className={styles.modalHeader}>
              <h3>{selectedReview.author}</h3>

              <span className={styles.stars}>
                {Array.from({ length: selectedReview.rating }, (_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </span>
            </div>

            <div className={styles.modalContent}>
              <p>
                {selectedReview.content_fr ||
                  selectedReview.content_en ||
                  selectedReview.content_pt}
              </p>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
