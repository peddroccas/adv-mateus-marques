import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Reveal from "./reveal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Mateus Marques Rosa | Advocacia Criminal em Brasília",
  description:
    "Defesa criminal e execução penal em Brasília, com estratégia, transparência e análise individualizada de cada caso.",
  openGraph: {
    title: "Mateus Marques Rosa | Advocacia Criminal",
    description: "Atuação criminal e execução penal em Brasília/DF.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable} scroll-smooth scroll-pt-[73px] md:scroll-pt-[105px]`}>
      <body className="bg-cream pb-[77px] font-sans text-[14px] text-navy antialiased md:pb-0">
        {children}
        <Reveal />
        <Analytics />
      </body>
    </html>
  );
}
