import Image from "next/image";
import styles from "@/styles/page/page.module.css";

import Hero from "@/components/content/hero";
import Header from "@/components/header/header";
import Services from "@/components/content/services";
import WhyUs from "@/components/content/whyUs";
import Reviews from "@/components/content/reviews";
import Footer from "@/components/footer/footer";
export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <Hero />
      <Services />
      <WhyUs />
      <Reviews />
    </main>
  );
}
