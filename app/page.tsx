import { about, brand, contact, contactSection, ctaLabel, faq, footer, hero, howItWorks, navLinks, practice, principles, whatsappLink } from "@/content/site";

const whatsapp = whatsappLink();

// Classes compartilhadas
const wrap = "mx-auto w-full max-w-[1440px] px-6 md:px-8 nav:px-12 lg:px-24";
const h2Base = "font-heading font-medium tracking-[-.54px] text-balance";
const textLink = "inline-flex min-h-11 items-center gap-2 text-[14px] font-semibold text-navy";
const footerLink = "text-[14px] leading-[23px] transition-colors hover:text-gold";

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`flex items-center gap-3 text-[12px] font-semibold uppercase leading-[14.4px] tracking-[.96px] ${light ? "text-[#dce2e8]" : "text-blue"}`}>
      <span className="h-0.5 w-6 flex-[0_0_24px] bg-gold" />
      {children}
    </span>
  );
}

function ArrowIcon({ down = false }: { down?: boolean }) {
  return <img aria-hidden="true" src={down ? "/figma/icon-5.svg" : "/figma/icon-1.svg"} alt="" width="18" height="18" />;
}

function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <a
      className={`inline-flex min-h-[52px] items-center justify-center gap-4 whitespace-nowrap rounded-[6px] bg-gold px-[22px] text-[14px] font-semibold leading-[14px] text-navy transition duration-200 hover:-translate-y-px hover:bg-[#c8aa6e] ${className}`}
      href={whatsapp}
      target="_blank"
      rel="noreferrer"
    >
      {ctaLabel} <ArrowIcon />
    </a>
  );
}

function Lines({ lines, breakClassName }: { lines: string[]; breakClassName?: string }) {
  return <>{lines.map((line, i) => <span key={line}>{i > 0 && <><br className={breakClassName} /> </>}{line}</span>)}</>;
}

function NavLinks({ links = navLinks, className = "" }: { links?: typeof navLinks; className?: string }) {
  return <>{links.map((link) => <a key={link.href} href={link.href} className={className}>{link.label}</a>)}</>;
}

function FooterColumn({ title, className = "", children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={`flex flex-col items-start gap-[9px] ${className}`}>
      <strong className="mb-1 text-[12px] font-semibold uppercase leading-[15px] tracking-[.96px] text-muted">{title}</strong>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line bg-cream">
        <div className="mx-auto flex min-h-[72px] max-w-[1440px] items-center justify-between gap-6 px-6 md:min-h-[104px] md:px-8 nav:px-12 lg:gap-8 lg:px-24">
          <a className="flex shrink-0 flex-col gap-[2px] md:gap-[2.65px]" href="#inicio" aria-label={`${brand.name}, início`}>
            <strong className="font-heading text-[17px] font-semibold leading-[23px] tracking-[-.21px] md:text-[21px] md:leading-[27.3px]">{brand.name}</strong>
            <span className="text-[11px] uppercase leading-[14px] tracking-[.88px] text-muted md:leading-[13.2px]">{brand.tagline}</span>
          </a>
          <nav className="ml-auto hidden items-center gap-[18px] nav:flex lg:gap-8" aria-label="Navegação principal">
            <NavLinks className="whitespace-nowrap text-[13px] leading-[22.4px] transition-colors hover:text-gold lg:text-[14px]" />
          </nav>
          <div className="hidden nav:flex"><WhatsAppButton /></div>
          <details className="relative nav:hidden">
            <summary aria-label="Abrir menu" className="flex h-12 w-12 cursor-pointer list-none flex-col items-center justify-center gap-[5px] [&::-webkit-details-marker]:hidden">
              <span className="block h-[1.5px] w-[18px] rounded-[1px] bg-navy" />
              <span className="block h-[1.5px] w-[18px] rounded-[1px] bg-navy" />
              <span className="block h-[1.5px] w-[18px] rounded-[1px] bg-navy" />
            </summary>
            <nav aria-label="Navegação móvel" className="absolute top-14 right-0 z-25 flex min-w-[220px] flex-col border border-line bg-cream p-2 shadow-[0_12px_28px_rgba(20,36,58,.12)]">
              <NavLinks className="border-b border-[rgba(215,220,224,.75)] p-3 text-[14px] last:border-b-0" />
            </nav>
          </details>
        </div>
      </header>

      <main id="inicio">
        <section className="bg-cream pt-10 pb-14 md:pt-[72px] md:pb-20">
          <div className={`${wrap} grid grid-cols-1 items-center gap-9 md:grid-cols-[minmax(0,1fr)_300px] md:gap-8 nav:grid-cols-[minmax(0,1fr)_360px] nav:gap-[38px] lg:grid-cols-[minmax(0,1fr)_448px] lg:gap-16`}>
            <div className="hero-copy flex flex-col items-start gap-[22px] md:max-w-[736px] md:gap-[27.2px]">
              <Label>{hero.label}</Label>
              <h1 className="text-balance font-heading text-[32px] font-semibold leading-[1.15] tracking-[-.48px] md:text-[42px] md:leading-[1.1] md:tracking-[-.84px] nav:text-[47px] lg:text-[56px]">{hero.title}</h1>
              <p className="max-w-[700px] text-[16px] leading-[1.65] text-body md:text-[18px]">{hero.description}</p>
              <div className="flex w-full flex-col items-stretch gap-1 md:w-auto md:flex-row md:flex-wrap md:items-center md:gap-6">
                <WhatsAppButton />
                <a className={`${textLink} justify-center md:justify-start`} href={hero.secondaryLink.href}>{hero.secondaryLink.label} <ArrowIcon down /></a>
              </div>
              <ul className="flex flex-col gap-[7.5px] text-[13px] leading-[21px] text-muted md:flex-row md:flex-wrap md:gap-x-6 md:gap-y-2">
                {hero.trust.map((item) => <li key={item} className="flex items-center gap-2 before:h-1.5 before:w-1.5 before:flex-[0_0_6px] before:rounded-[3px] before:bg-gold before:content-['']">{item}</li>)}
              </ul>
            </div>
            <figure className="hero-portrait relative aspect-[4/5] overflow-hidden rounded-[4px] bg-[#4a4946] md:aspect-auto md:h-[430px] nav:h-[480px] lg:h-[560px]">
              <img className="h-full w-full object-cover object-[center_30%]" src={hero.photo.src} alt={hero.photo.alt} />
              <figcaption className="absolute bottom-5 left-5 flex min-w-[233px] flex-col gap-[3.5px] bg-[rgba(20,36,58,.94)] px-[18px] py-[14px] text-white">
                <strong className="font-heading text-[16px] font-semibold leading-[21px]">{brand.name}</strong>
                <span className="text-[12px] leading-[16px] text-[#dce2e8]">{hero.photo.caption}</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="bg-soft py-14 md:py-20" id="atuacao">
          <div className={wrap}>
            <div className="mb-10 flex flex-col items-start gap-[15px]" data-reveal-stagger>
              <Label>{practice.label}</Label>
              <h2 className={`${h2Base} text-[28px] leading-[1.2] md:text-[36px] md:leading-[1.25]`}>{practice.title}</h2>
              <p className="text-[16px] leading-[1.6] text-muted md:leading-[1.65]">{practice.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5" data-reveal-stagger>
              {practice.areas.map((area) => (
                <article key={area.number} className="flex flex-col border border-[rgba(20,36,58,.06)] bg-white p-[24.75px] shadow-[0_5px_18px_rgba(20,36,58,.025)] md:min-h-[395px] md:p-7">
                  <div className="mb-[17.7px] flex items-center justify-between text-[13px] font-semibold leading-[20px] text-gold"><span>{area.number}</span><i className="block h-0.5 w-7 bg-gold" /></div>
                  <p className="mb-[16.2px] text-[13px] font-medium leading-[19px] text-navy">{area.audience}</p>
                  <h3 className="mb-[17.6px] text-balance font-heading text-[21px] font-semibold leading-[28px]">{area.title}</h3>
                  <p className="mb-[18px] max-w-[276px] flex-1 text-[15px] leading-[1.7] text-body md:max-w-none">{area.description}</p>
                  <p className="mb-[17px] border-t border-line pt-4 text-[12px] leading-[20px] text-muted">{area.tags}</p>
                  <a className={`${textLink} self-start`} href={whatsappLink(`Olá, gostaria de conversar sobre ${area.title.toLowerCase()}.`)} target="_blank" rel="noreferrer">{practice.cardLinkLabel} <ArrowIcon /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream py-14 md:pt-[82px] md:pb-[72px]" aria-label={principles.label}>
          <div className={`${wrap} flex flex-col gap-9`}>
            <div data-reveal><Label>{principles.label}</Label></div>
            <ul className="grid grid-cols-2 items-start gap-x-5 gap-y-[27.8px] md:gap-8 nav:grid-cols-4" data-reveal-stagger>
              {principles.items.map((item) => (
                <li key={item.text} className="flex flex-col items-start gap-4 md:gap-[15px]">
                  <img className="flex-[0_0_22px]" src={item.icon} alt="" width="22" height="22" />
                  <strong className="font-heading text-[15px] font-medium leading-[22.5px] md:text-[18px] md:leading-[25.5px]">{item.text}</strong>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-navy py-14 text-white md:py-20" id="sobre">
          <div className={`${wrap} grid grid-cols-1 gap-8 [grid-template-areas:'name'_'photo'_'desc'] md:grid-cols-[280px_minmax(0,1fr)] md:items-start md:gap-x-8 md:gap-y-6 md:[grid-template-areas:'photo_name'_'photo_desc'] nav:grid-cols-[300px_minmax(0,1fr)] nav:gap-x-[45px] lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-x-24 lg:gap-y-10`}>
            <div className="flex flex-col items-start gap-6 [grid-area:name]" data-reveal-stagger>
              <Label light>{about.label}</Label>
              <h2 className="text-balance font-heading text-[36px] font-medium leading-[1.12] tracking-[-.54px] text-cream md:text-[44px] md:leading-[1.1] md:tracking-[-.78px] nav:text-[52px]"><Lines lines={about.nameLines} /></h2>
              <div className="h-0.5 w-16 bg-gold" />
            </div>
            <div className="aspect-[4/5] w-full self-center overflow-hidden rounded-lg [grid-area:photo] md:aspect-auto md:h-[420px] md:w-[280px] nav:h-[440px] nav:w-[300px] lg:h-[500px] lg:w-[400px]" data-reveal="image">
              <img className="h-full w-full object-cover object-[center_30%]" src={about.photo.src} alt={about.photo.alt} />
            </div>
            <div className="flex flex-col items-start gap-[23.4px] [grid-area:desc] md:gap-[23px]" data-reveal-stagger>
              <h3 className="text-balance font-heading text-[24px] font-semibold leading-[1.3] tracking-[-.45px] text-cream md:text-[25px] nav:text-[30px]"><Lines lines={about.titleLines} /></h3>
              <p className="max-w-[704px] text-[16px] leading-[1.7] text-[#dce2e8] md:text-[15px] nav:text-[18px]">{about.description}</p>
              <span className="text-[14px] leading-[1.7] text-[#c5ced6]">{about.caption}</span>
              <WhatsAppButton className="w-full md:w-auto" />
            </div>
          </div>
        </section>

        <section className="bg-cream py-14 md:py-20" id="como-funciona">
          <div className={`${wrap} flex flex-col items-start gap-8`}>
            <div className="flex flex-col items-start gap-[15px] md:gap-4" data-reveal-stagger>
              <Label>{howItWorks.label}</Label>
              <h2 className={`${h2Base} text-[28px] leading-[1.2] md:text-[36px]`}>{howItWorks.title}</h2>
            </div>
            <ol className="grid w-full grid-cols-1 gap-7 py-2 md:grid-cols-3 md:gap-10" data-reveal-stagger>
              {howItWorks.steps.map((step, i) => (
                <li key={step} className="flex flex-row items-center gap-4 md:flex-col md:items-start md:gap-6">
                  <span className="grid h-11 w-11 flex-[0_0_44px] place-items-center rounded-full bg-soft text-[14px] font-semibold leading-[14px] text-blue">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-heading text-[18px] font-medium leading-[1.45] text-navy md:text-[21px]">{step}</p>
                </li>
              ))}
            </ol>
            <WhatsAppButton className="self-stretch md:self-start" />
            <p className="relative pl-[15px] text-[13px] leading-[21px] text-muted before:absolute before:top-px before:bottom-px before:left-0 before:w-[3px] before:rounded-[2px] before:bg-gold before:content-['']">{howItWorks.note}</p>
          </div>
        </section>

        <section className="bg-soft py-14 md:py-20" id="duvidas">
          <div className={`${wrap} grid grid-cols-1 items-start gap-7 md:grid-cols-[280px_minmax(0,1fr)] md:gap-8 nav:grid-cols-[300px_minmax(0,1fr)] nav:gap-12 lg:grid-cols-[352px_minmax(0,1fr)] lg:gap-24`}>
            <div className="flex flex-col items-start gap-[15px] md:gap-4" data-reveal-stagger>
              <Label>{faq.label}</Label>
              <h2 className={`${h2Base} text-[28px] leading-[1.2] md:text-[36px]`}><Lines lines={faq.titleLines} breakClassName="max-md:hidden" /></h2>
              <div className="flex flex-col items-start gap-0.5 pt-[12.6px] md:pt-[11px]">
                <p className="text-[14px] leading-[23px] text-muted">{faq.helpText}</p>
                <a className={textLink} href={whatsapp} target="_blank" rel="noreferrer">{faq.helpLink} <ArrowIcon /></a>
              </div>
            </div>
            <div className="border-t border-line" data-reveal-stagger>
              {faq.questions.map((item, i) => (
                <details key={item.q} open={i === 0} className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 pt-[19px] pb-[21px] text-[15px] font-medium leading-[1.5] text-balance text-navy md:pt-6 md:pb-[26px] [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span className="flex flex-[0_0_18px] transition-transform duration-200 group-open:rotate-45"><img src="/figma/icon-8.svg" alt="" width="18" height="18" /></span>
                  </summary>
                  <p className="max-w-[624px] pb-[25px] text-[15px] leading-[1.7] text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-14 text-white md:py-20" id="contato">
          <div className={`${wrap} grid grid-cols-1 items-center gap-9 md:grid-cols-[minmax(0,1fr)_320px] md:gap-6 nav:grid-cols-[minmax(0,1fr)_360px] nav:gap-14 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-[120px]`}>
            <div className="flex flex-col items-start gap-[23.4px]" data-reveal-stagger>
              <Label light>{contactSection.label}</Label>
              <h2 className="text-balance font-heading text-[32px] font-medium leading-[1.15] tracking-[-.66px] md:text-[44px]">{contactSection.title}</h2>
              <p className="max-w-[659px] text-[16px] leading-[1.65] text-[#dce2e8] md:text-[18px]">{contactSection.description}</p>
              <div className="flex w-full flex-col gap-[7px] border-t border-[#3d4c5e] pt-[20.6px]">
                <strong className="font-heading text-[20px] font-medium leading-[27px]">{brand.location}</strong>
                <span className="text-[14px] leading-[23px] text-[#c6d0da]">{brand.service}</span>
              </div>
            </div>
            <aside className="flex flex-col gap-5 rounded-lg border border-[#34506d] bg-blue p-6 nav:p-8" data-reveal>
              <p className="flex items-center gap-3 font-heading text-[20px] font-medium leading-[26px]"><img src="/figma/icon-3.svg" alt="" width="22" height="22" />{contactSection.cardTitle}</p>
              <a className="text-[16px] font-medium leading-[21px]" href={whatsapp} target="_blank" rel="noreferrer">{contact.phoneLabel}</a>
              <p className="text-[15px] leading-[24px] text-[#dce2e8]">{contactSection.cardText}</p>
              <WhatsAppButton className="w-full" />
              <div className="flex flex-col gap-1 border-t border-[#34506d] pt-4">
                <span className="text-[13px] leading-[21px] text-[#dce2e8]">{contactSection.emailPrompt}</span>
                <a className="text-[13px] font-semibold leading-[21px] text-white" href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-cream pt-16 pb-8 text-navy">
        <div className={wrap}>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 nav:grid-cols-[1.3fr_.8fr_1.1fr_1.3fr] nav:gap-6 lg:gap-12" data-reveal-stagger>
            <div className="col-span-2 flex flex-col items-start md:col-span-1">
              <strong className="font-heading text-[17px] font-semibold leading-[23px] tracking-[-.21px] md:text-[21px] md:leading-[28px]">{brand.name}</strong>
              <small className="mt-[3px] text-[11px] uppercase leading-[14px] tracking-[.88px] text-muted">{brand.tagline}</small>
              <span className="mt-[15px] text-[14px] leading-[23px] text-muted">{brand.location} · {brand.service}</span>
            </div>
            <FooterColumn title={footer.navTitle}><NavLinks links={footer.navLinks} className={footerLink} /></FooterColumn>
            <FooterColumn title={footer.contactTitle}>
              <a className={`${footerLink} max-md:[overflow-wrap:anywhere]`} href={whatsapp} target="_blank" rel="noreferrer">{contact.phoneLabel}</a>
              <a className={`${footerLink} max-md:[overflow-wrap:anywhere]`} href={`mailto:${contact.email}`}>{contact.email}</a>
              <a className={`${footerLink} max-md:[overflow-wrap:anywhere]`} href={contact.instagram} target="_blank" rel="noreferrer">{contact.instagramLabel} ↗</a>
            </FooterColumn>
            <FooterColumn title={footer.areasTitle} className="col-span-2 md:col-span-1">
              {practice.areas.map((area) => <a key={area.number} className={footerLink} href="#atuacao">{area.title}</a>)}
            </FooterColumn>
          </div>
          <div className="mt-12 flex flex-col items-start gap-2 border-t border-line pt-6 text-[13px] leading-[20px] text-muted md:flex-row md:items-center md:justify-between md:gap-4">
            <span>{brand.name} · {brand.tagline}</span>
            <span>{brand.service} · {brand.location}</span>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-cream px-4 pt-[13px] pb-3 md:hidden">
        <WhatsAppButton className="w-full" />
      </div>
    </>
  );
}
