"use client";

import { useEffect } from "react";

// Anima [data-reveal] e os filhos de [data-reveal-stagger] quando entram na tela.
// Só esconde o que está fora da tela no carregamento: o que já está visível nunca some.
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const pending = new Set<HTMLElement>();

    const reveal = (el: HTMLElement) => {
      if (!pending.delete(el)) return;
      observer?.unobserve(el);
      el.classList.replace("reveal-pending", "reveal-in");
      // Imagens animam a <img> interna; os demais animam o próprio elemento.
      const isImage = el.dataset.reveal === "image";
      el.addEventListener("animationend", function done(event) {
        if (isImage ? event.animationName !== "reveal-clip" : event.target !== el) return;
        el.removeEventListener("animationend", done);
        el.classList.remove("reveal-in");
      });
    };

    const isOnScreen = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.94 && r.bottom > 0;
    };

    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => entries.forEach((entry) => entry.isIntersecting && reveal(entry.target as HTMLElement)),
            { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
          )
        : null;

    document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-stagger] > *").forEach((el) => {
      if (isOnScreen(el)) return;
      el.classList.add("reveal-pending");
      pending.add(el);
      observer?.observe(el);
    });

    // Reserva: confere periodicamente, caso o navegador atrase os eventos de visibilidade.
    const timer = window.setInterval(() => {
      pending.forEach((el) => isOnScreen(el) && reveal(el));
      if (pending.size === 0) window.clearInterval(timer);
    }, 400);

    return () => {
      observer?.disconnect();
      window.clearInterval(timer);
    };
  }, []);

  return null;
}
