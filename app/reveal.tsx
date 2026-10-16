"use client";

import { useEffect } from "react";

// Anima [data-reveal] e os filhos de [data-reveal-stagger] quando entram na tela.
// Só esconde o que está fora da tela no carregamento: o que já está visível nunca some.
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-stagger] > *");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          el.classList.replace("reveal-pending", "reveal-in");
          // Imagens animam a <img> interna; os demais animam o próprio elemento.
          const isImage = el.dataset.reveal === "image";
          el.addEventListener("animationend", function done(event) {
            if (isImage ? event.animationName !== "reveal-clip" : event.target !== el) return;
            el.removeEventListener("animationend", done);
            el.classList.remove("reveal-in");
          });
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );

    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.classList.add("reveal-pending");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
