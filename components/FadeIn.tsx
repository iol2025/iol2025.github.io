"use client";
import styles from "./FadeIn.module.css";

import React, { PropsWithChildren, useEffect, useRef, useState } from "react";

const FadeIn = ({ children }: PropsWithChildren) => {
  const [isVisible, setIsVisible] = useState(false);
  const obsRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((es) => {
      es.forEach((e) => setIsVisible(e.isIntersecting));
    });
    if (obsRef.current) observer.observe(obsRef?.current);
    return () => {
      if (obsRef.current) observer.unobserve(obsRef?.current);
    };
  }, []);
  return (
    <div
      className={
        isVisible ? `${styles.fade_in} ${styles.is_visible}` : styles.fade_in
      }
      ref={obsRef}
    >
      {children}
    </div>
  );
};

export default FadeIn;
