"use client";

import styles from "@/styles/page/reviewForm.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ReviewForm() {
  const t = useTranslations("ReviewFormPage");
  const [form, setForm] = useState({
    author: "",
    email: "",
    rating: 0,
    content: "",
    locale: "fr",
  });

  const [hover, setHover] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setSuccess(true);
      setForm({
        author: "",
        email: "",
        rating: 0,
        content: "",
        locale: "fr",
      });
    } else {
      setError(data.error || t("error"));
    }

    setLoading(false);
  }

  return (
    <main className={styles.reviewFormPage}>
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
      <motion.form
        className={styles.form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.infosContainer}>
          {/* Nom */}
          <input
            type="text"
            required
            placeholder={t("name")}
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
          />

          {/* Email */}
          <input
            type="email"
            required
            placeholder={t("mail")}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className={styles.starContainer}>
          <label className={styles.ratingLabel}>{t("note")}</label>
          {/* ⭐⭐⭐⭐⭐ — Rating */}
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                className={
                  (hover || form.rating) >= num
                    ? styles.starFilled
                    : styles.starEmpty
                }
                onMouseEnter={() => setHover(num)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setForm({ ...form, rating: num })}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        {/* Message */}
        <textarea
          required
          placeholder={t("review")}
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <p className={styles.legal}>
          {t("legal_1")}{" "}
          <Link
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.legalLink}
          >
            {t("legal_2")}
          </Link>
          .
        </p>
        {/* Bouton */}
        <button type="submit" disabled={loading}>
          {loading ? t("loading") : t("submit")}
        </button>

        {/* Messages */}
        {success && <p className={styles.success}>{t("send")}</p>}
        {error && <p className={styles.error}>{error}</p>}
      </motion.form>
    </main>
  );
}
