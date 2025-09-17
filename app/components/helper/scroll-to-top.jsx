"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const DEFAULT_BTN_CLS =
    "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out hidden";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Vérifie côté client que window est défini
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Appel initial pour afficher le bouton si déjà scrollé
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClickBtn = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
      <button
          className={`${DEFAULT_BTN_CLS} ${visible ? "" : "hidden"}`}
          onClick={onClickBtn}
      >
        <FaArrowUp />
      </button>
  );
};

export default ScrollToTop;
