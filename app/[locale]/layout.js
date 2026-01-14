import "./globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "CDO Multiservices", // TODO: Change this
  description:
    "Entreprise de nettoyage à Genève et en Suisse. CDO Multiservices propose des services professionnels pour particuliers et entreprises. Devis gratuit.", // TODO: Change this
  icons: [{ url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" }],
  keywords: [
    // TODO: Change All keywords
    "entreprise de nettoyage genève",
    "nettoyage professionnel suisse",
    "société de nettoyage genève",
    "service de nettoyage genève",
    "nettoyage bureaux genève",
    "nettoyage fin de chantier suisse",
    "nettoyage industriel genève",
    "nettoyage commercial genève",
    "nettoyage appartements genève",
    "nettoyage maisons suisse",
    "entreprise de nettoyage suisse",
    "nettoyage locaux professionnels",
    "nettoyage écologique genève",
  ],
  authors: [{ name: "0x414854 – Arthur BARRAUD" }], // TODO: Change this
  openGraph: {
    title: "CDO Multiservices", // TODO: Change this
    description:
      "Entreprise de nettoyage à Genève et en Suisse. CDO Multiservices propose des services professionnels pour particuliers et entreprises. Devis gratuit.", // TODO: Change this
    url: "https://www.cdo-multiservices.ch", // TODO: Change this
    siteName: "CDO Multiservices", // TODO: Change this
    images: [
      {
        url: "/ogImage.png", // TODO: Add 'ogImage.png (1200 x 630) in 'public' folder
        width: 1200,
        height: 630,
        alt: "Aperçu site web CDO Multiservices", // TODO: Change this
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CDO Multiservices",
    description:
      "Entreprise de nettoyage à Genève et en Suisse. CDO Multiservices propose des services professionnels pour particuliers et entreprises. Devis gratuit.", // TODO: Change this
    images: ["/ogImage.png"],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
