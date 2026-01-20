"use client";
import styles from "@/styles/page/contact.module.css";
import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion } from "framer-motion";

import PhoneIcon from "@/public/icons/phone.svg";
import MailIcon from "@/public/icons/mail.svg";
import UploadIcon from "@/public/icons/upload.svg";
// Ajouter les 2 numeros de telephone
// Finir mon form
// Envoyer le mail quand validation du form
// Ajouter toute les traductions

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  const [fileName, setFileName] = useState(t("upload"));

  const contactInfo = [
    {
      icon: PhoneIcon,
      alt: t("altPhoneIcon"),
      title: t("phoneTitle"),
      values: [
        { label: "+41 76 623 61 81", href: "tel:+41766236181" },
        { label: "+41 76 609 20 59", href: "tel:+41766092059" },
      ],
    },
    {
      icon: MailIcon,
      alt: t("altMailIcon"),
      title: t("mailTitle"),
      values: [
        {
          label: "contact@cdo-multiservices.ch",
          href: "mailto:contact@cdo-multiservices.ch",
        },
      ],
    },
    {
      icon: MailIcon,
      alt: t("altMapIcon"),
      title: t("addressTitle"),
      values: [
        { label: "Rue Montchoisy 40,", href: null },
        { label: "1207 Genève, Suisse", href: null },
      ],
    },
  ];

  //   FORM
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    consent: false,
    photo: null,
  });

  const serviceKeys = [
    "general",
    "windows",
    "office",
    "concierge",
    "maid",
    "spring",
    "construction",
    "endOfLease",
  ];

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(""); // <- nouveau
  const [submitSuccess, setSubmitSuccess] = useState(null); // true / false
  const [hideMessage, setHideMessage] = useState(false);

  function clearError(field) {
    if (!errors[field]) return;
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
  }

  // (Optionnel) Valide un seul champ et renvoie message d'erreur ou null
  function validateField(field, value) {
    if (field === "firstName" && !value?.trim()) return t("errorFirstName");
    if (field === "lastName" && !value?.trim()) return t("errorLastName");
    if (field === "email") {
      if (!value?.trim()) return t("errorEmail");
      if (!/\S+@\S+\.\S+/.test(value)) return t("errorEmail");
    }
    if (field === "phone" && !value?.trim()) return t("errorPhone");
    if (field === "service" && !value?.trim()) return t("errorService");
    if (field === "message" && !value?.trim()) return t("errorMessage");
    if (field === "consent" && !value) return t("errorConsent");
    return null;
  }

  // VALIDATION COMPLETE
  function validateForm() {
    const newErrors = {};
    const eFirst = validateField("firstName", form.firstName);
    if (eFirst) newErrors.firstName = eFirst;

    const eLast = validateField("lastName", form.lastName);
    if (eLast) newErrors.lastName = eLast;

    const eEmail = validateField("email", form.email);
    if (eEmail) newErrors.email = eEmail;

    const ePhone = validateField("phone", form.phone);
    if (ePhone) newErrors.phone = ePhone;

    const eService = validateField("service", form.service);
    if (eService) newErrors.service = eService;

    const eMessage = validateField("message", form.message);
    if (eMessage) newErrors.message = eMessage;

    const eConsent = validateField("consent", form.consent);
    if (eConsent) newErrors.consent = eConsent;

    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    const validation = validateForm();
    setErrors(validation);

    if (Object.keys(validation).length > 0) {
      return; // ❌ Stop l’envoi si erreurs
    }

    // ✅ Formulaire valide → envoyer
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setSubmitMessage(data.message);
    setSubmitSuccess(data.success);

    setTimeout(() => setHideMessage(true), 10000);

    if (data.success) {
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
        consent: false,
        photo: null,
      });
      setFileName(t("upload"));
      setErrors({});
      setSubmitted(false);
    }
  }

  return (
    <main className={styles.contactPage}>
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
      <ul className={styles.contactsInfo}>
        {contactInfo.map((info) => (
          <motion.li
            key={info.title}
            className={styles.contact}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.content}>
              <div className={styles.imgContainer}>
                <Image src={info.icon} width={20} height={20} alt={info.alt} />
              </div>
              <h2>{info.title}</h2>
              {/* {info.values.length > 1 ? (
                <div className={styles.valuesRow}>
                  {info.values.map((item, index) => (
                    <Link key={index} href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : (
                info.values.map((item, index) =>
                  item.href ? (
                    <Link key={index} href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  ) : (
                    <p key={index} className={styles.value}>
                      {item.label}
                    </p>
                  )
                )
              )} */}
              <div className={styles.valuesRow}>
                {info.values.map((item, index) =>
                  item.href ? (
                    <Link key={index} href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  ) : (
                    <p key={index} className={styles.value}>
                      {item.label}
                    </p>
                  )
                )}
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
      <motion.form
        id="form"
        className={styles.form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* PRENOM + NOM */}
        <div className={styles.row}>
          <div className={styles.field}>
            <label
              className={submitted && errors.firstName ? styles.errorLabel : ""}
            >
              {t("firstName")}
            </label>

            <input
              value={form.firstName}
              onChange={(e) => {
                const v = e.target.value;
                setForm((prev) => ({ ...prev, firstName: v }));
                // retirer l'erreur au premier changement
                clearError("firstName");
                // (optionnel) valider en live et remettre un message si invalide:
                // const msg = validateField('firstName', v);
                // if (msg) setErrors(prev => ({...prev, firstName: msg}));
              }}
              className={submitted && errors.firstName ? styles.errorInput : ""}
            />

            {submitted && errors.firstName && (
              <p className={styles.errorMsg}>{errors.firstName}</p>
            )}
          </div>

          <div className={styles.field}>
            <label
              className={submitted && errors.lastName ? styles.errorLabel : ""}
            >
              {t("lastName")}
            </label>

            <input
              value={form.lastName}
              onChange={(e) => {
                const v = e.target.value;
                setForm((prev) => ({ ...prev, lastName: v }));
                clearError("lastName");
              }}
              className={submitted && errors.lastName ? styles.errorInput : ""}
            />

            {submitted && errors.lastName && (
              <p className={styles.errorMsg}>{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* EMAIL / PHONE */}
        <div className={styles.row}>
          <div className={styles.field}>
            <label
              className={submitted && errors.email ? styles.errorLabel : ""}
            >
              {t("email")}
            </label>

            <input
              type="email"
              value={form.email}
              onChange={(e) => {
                const v = e.target.value;
                setForm((prev) => ({ ...prev, email: v }));
                clearError("email");
              }}
              className={submitted && errors.email ? styles.errorInput : ""}
            />

            {submitted && errors.email && (
              <p className={styles.errorMsg}>{errors.email}</p>
            )}
          </div>

          <div className={styles.field}>
            <label
              className={submitted && errors.phone ? styles.errorLabel : ""}
            >
              {t("phone")}
            </label>

            <input
              type="tel"
              value={form.phone}
              onChange={(e) => {
                const v = e.target.value;
                setForm((prev) => ({ ...prev, phone: v }));
                clearError("phone");
              }}
              className={submitted && errors.phone ? styles.errorInput : ""}
            />

            {submitted && errors.phone && (
              <p className={styles.errorMsg}>{errors.phone}</p>
            )}
          </div>
        </div>

        {/* ENTREPRISE / SERVICE */}
        <div className={styles.row}>
          <div className={styles.field}>
            <label>{t("corporation")}</label>
            <input
              value={form.company}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, company: e.target.value }))
              }
            />
          </div>

          <div className={styles.field}>
            <label
              className={submitted && errors.service ? styles.errorLabel : ""}
            >
              {t("service")}
            </label>

            <select
              value={form.service}
              onChange={(e) => {
                const v = e.target.value;
                setForm((prev) => ({ ...prev, service: v }));
                clearError("service");
              }}
              className={submitted && errors.service ? styles.errorInput : ""}
            >
              <option value="">{t("selectService")}</option>

              {serviceKeys.map((key) => (
                <option key={key} value={key}>
                  {t(`servicesList.${key}`)}
                </option>
              ))}
            </select>

            {submitted && errors.service && (
              <p className={styles.errorMsg}>{errors.service}</p>
            )}
          </div>
        </div>

        {/* MESSAGE */}
        <div className={styles.textarea}>
          <label
            className={submitted && errors.message ? styles.errorLabel : ""}
          >
            {t("message")}
          </label>

          <textarea
            value={form.message}
            onChange={(e) => {
              const v = e.target.value;
              setForm((prev) => ({ ...prev, message: v }));
              clearError("message");
            }}
            className={submitted && errors.message ? styles.errorInput : ""}
          ></textarea>

          {submitted && errors.message && (
            <p className={styles.errorMsg}>{errors.message}</p>
          )}
        </div>

        {/* UPLOAD */}
        <div className={styles.uploadContainer}>
          <label className={styles.upload}>
            <Image
              src={UploadIcon}
              width={20}
              height={20}
              alt="Icone d'upload"
            />
            <span>{fileName}</span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0] ?? null;
                setForm((prev) => ({ ...prev, photo: file }));
                if (file) {
                  setFileName(file.name);
                  clearError("photo");
                } else {
                  setFileName(t("upload"));
                }
              }}
            />
          </label>
        </div>

        {/* CONSENT */}
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => {
              const checked = e.target.checked;
              setForm((prev) => ({ ...prev, consent: checked }));
              clearError("consent");
            }}
          />
          <span>{t("legalCheck")}</span>
        </div>

        {submitted && errors.consent && (
          <p className={styles.errorMsg}>{errors.consent}</p>
        )}

        <button type="submit" className={styles.submitBtn}>
          {t("send")}
        </button>
        {submitMessage && (
          <p
            className={`${styles.submitMessage} ${hideMessage ? styles.hide : ""} ${
              submitSuccess ? styles.successMsg : styles.errorMsg
            }`}
          >
            {submitMessage}
          </p>
        )}
      </motion.form>
    </main>
  );
}
