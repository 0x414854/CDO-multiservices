"use client";
import { useState, useRef } from "react";
import styles from "@/styles/content/beforeAfterSlider.module.css";
import Image from "next/image";

export default function BeforeAfterSlider({ beforeSrc, afterSrc, alt }) {
  const containerRef = useRef(null);
  const [sliderPos, setSliderPos] = useState(50); // Position initiale en %

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let pos = ((clientX - rect.left) / rect.width) * 100;
    pos = Math.max(0, Math.min(100, pos));
    setSliderPos(pos);
  };

  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

  return (
    <div
      ref={containerRef}
      className={styles.beforeAfterContainer}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Image avant : visible entièrement */}
      <Image src={beforeSrc} alt={alt} fill style={{ objectFit: "cover" }} />

      {/* Image après : masquée selon slider */}
      <div className={styles.afterWrapper} style={{ width: `${sliderPos}%` }}>
        <Image src={afterSrc} alt={alt} fill style={{ objectFit: "cover" }} />
      </div>

      {/* Curseur */}
      <div className={styles.slider} style={{ left: `${sliderPos}%` }} />
    </div>
  );
}
