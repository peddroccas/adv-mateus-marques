const phone = "+5561985503907";
const phoneLabel = "(61) 98550-3907";
const email = "mateusmarquesrosa@gmail.com";
const instagram = "https://www.instagram.com/adv_mateusmarques/";
const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent("Olá, gostaria de conversar sobre uma situação jurídica.")}`;

const areas = [
  {
    number: "01",
    audience: "Para quem está sendo investigado ou processado",
    title: "Defesa em processos criminais",
    description:
      "Acompanhamento de pessoas investigadas ou acusadas, com estratégias defensivas, atuação em audiências e recursos criminais.",
    tags: "Tráfico de drogas · Audiências · Recursos criminais",
  },
  {
    number: "02",
    audience: "Para quem foi preso ou tem um familiar preso",
    title: "Liberdade e habeas corpus",
    description:
      "Pedidos de liberdade e habeas corpus, com análise dos fundamentos jurídicos de cada caso. A apresentação do pedido não garante sua concessão.",
    tags: "Prisão preventiva · Pedidos de liberdade · Habeas corpus",
  },
  {
    number: "03",
    audience: "Para quem cumpre pena e para seus familiares",
    title: "Execução penal",
    description:
      "Progressão de regime, remição, livramento condicional, indulto, comutação e outros benefícios previstos em lei.",
    tags: "Progressão de regime · Remição · Livramento condicional",
  },
];

const questions = [
  {
    q: "Quais informações devo ter em mãos antes do primeiro contato?",
    a: "Um breve resumo do que aconteceu e, se houver, o número do processo, documentos recebidos e datas importantes. Não é preciso ter tudo organizado para entrar em contato.",
  },
  {
    q: "O atendimento pode ser online?",
    a: "Sim. O atendimento é feito de forma presencial em Brasília/DF ou online.",
  },
  {
    q: "O advogado atua em execução penal?",
    a: "Sim. A atuação inclui progressão de regime, remição de pena, livramento condicional, indulto, comutação e outros benefícios previstos em lei.",
  },
  {
    q: "Como faço para agendar uma conversa?",
    a: `Pelo WhatsApp ${phoneLabel}. Envie uma mensagem com um resumo da situação para combinar o atendimento.`,
  },
];

function Label({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span />{children}</p>;
}

function ArrowIcon() {
  return <img aria-hidden="true" className="arrow-icon" src="/figma/icon-1.svg" alt="" width="18" height="18" />;
}

function WhatsAppButton({ className = "" }: { className?: string }) {
  return <a className={`button ${className}`} href={whatsapp} target="_blank" rel="noreferrer">Agendar pelo WhatsApp <ArrowIcon /></a>;
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#inicio" aria-label="Mateus Marques Rosa, início">
            <strong>Mateus Marques Rosa</strong><span>ADVOCACIA CRIMINAL</span>
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#atuacao">Atuação</a><a href="#sobre">Sobre</a><a href="#como-funciona">Como funciona</a><a href="#duvidas">Dúvidas</a><a href="#contato">Contato</a>
          </nav>
          <WhatsAppButton className="nav-button" />
          <details className="mobile-menu">
            <summary aria-label="Abrir navegação"><span /><span /><span /></summary>
            <nav aria-label="Navegação móvel"><a href="#atuacao">Atuação</a><a href="#sobre">Sobre</a><a href="#como-funciona">Como funciona</a><a href="#duvidas">Dúvidas</a><a href="#contato">Contato</a></nav>
          </details>
          <a className="mobile-contact" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp"><ArrowIcon /></a>
        </div>
      </header>

      <main id="inicio">
        <section className="hero section-cream">
          <div className="hero-inner">
            <div className="hero-copy">
              <Label>Criminal e execução penal</Label>
              <h1>Defesa criminal e execução penal em Brasília, com estratégia e transparência.</h1>
              <p className="hero-description">Para quem responde a um processo criminal ou tem um familiar preso: análise individualizada do caso e clareza sobre os caminhos jurídicos possíveis, sem falsas promessas.</p>
              <div className="hero-actions"><WhatsAppButton /><a className="text-link" href="#atuacao">Conhecer áreas de atuação <ArrowIcon /></a></div>
              <ul className="trust-list"><li>Atendimento presencial e online</li><li>Brasília/DF</li><li>Contato próximo com o advogado</li></ul>
            </div>
            <figure className="portrait hero-portrait">
              <img src="/figma/mateus.jpeg" alt="Mateus Marques Rosa, advogado criminalista, de terno azul-marinho" />
              <figcaption><strong>Mateus Marques Rosa</strong><span>Advogado criminalista · Brasília/DF</span></figcaption>
            </figure>
          </div>
        </section>

        <section className="practice section-gray" id="atuacao">
          <div className="container">
            <div className="section-intro"><Label>Áreas de atuação</Label><h2>Defesa em cada etapa do caso.</h2><p>Atuação criminal e execução penal, com atenção às particularidades de cada situação.</p></div>
            <div className="area-grid">
              {areas.map((area) => <article className="area-card" key={area.number}>
                <div className="card-top"><span>{area.number}</span><i /></div>
                <p className="audience">{area.audience}</p><h3>{area.title}</h3><p className="card-description">{area.description}</p>
                <p className="tags">{area.tags}</p><a className="card-link" href={`https://wa.me/${phone}?text=${encodeURIComponent(`Olá, gostaria de conversar sobre ${area.title.toLowerCase()}.`)}`} target="_blank" rel="noreferrer">Falar sobre este caso <ArrowIcon /></a>
              </article>)}
            </div>
          </div>
        </section>

        <section className="principles section-cream" aria-label="Princípios da atuação">
          <div className="principles-inner">
            <Label>Princípios da atuação</Label>
            <div className="principles-grid">
              <div><img className="principle-icon" src="/figma/icon-2.svg" alt="" width="22" height="22" /><strong>Análise cuidadosa de cada caso</strong></div>
              <div><img className="principle-icon" src="/figma/icon-3.svg" alt="" width="22" height="22" /><strong>Estratégia defensiva individualizada</strong></div>
              <div><img className="principle-icon" src="/figma/icon-4.svg" alt="" width="22" height="22" /><strong>Estudo e atenção aos detalhes</strong></div>
              <div><img className="principle-icon" src="/figma/icon-5.svg" alt="" width="18" height="18" /><strong>Comunicação clara e transparente</strong></div>
            </div>
          </div>
        </section>

        <section className="about section-navy" id="sobre">
          <div className="container about-inner">
            <div className="about-name"><Label>Sobre o advogado</Label><h2>Mateus<br />Marques Rosa</h2><div className="gold-rule" /></div>
            <div className="about-desc"><h3>Uma atuação pautada em<br />análise, estratégia e clareza.</h3><p>Atuação em advocacia criminal e execução penal, com foco na análise individualizada dos casos, na estratégia defensiva e na comunicação transparente com clientes e familiares.</p><span className="about-caption">Advocacia Criminal · Brasília/DF</span><WhatsAppButton /></div>
            <img className="about-photo" src="/figma/mateus.jpeg" alt="Mateus Marques Rosa" />
          </div>
        </section>

        <section className="process section-cream" id="como-funciona">
          <div className="container process-inner"><div className="process-intro"><Label>Primeiro contato</Label><h2>Como funciona o atendimento</h2></div>
            <div className="steps-grid"><article><span className="step-number">01</span><p>Entre em contato pelo WhatsApp</p></article><article><span className="step-number">02</span><p>Apresente brevemente a situação e as informações disponíveis</p></article><article><span className="step-number">03</span><p>Combine os próximos passos do atendimento</p></article></div>
            <WhatsAppButton /><small className="process-note">Fluxo proposto, sujeito à confirmação do advogado</small>
          </div>
        </section>

        <section className="faq section-gray" id="duvidas">
          <div className="container faq-inner"><div className="faq-side"><Label>Dúvidas iniciais</Label><h2>Perguntas<br />frequentes</h2><p>Não encontrou sua dúvida?</p><a href={whatsapp} target="_blank" rel="noreferrer">Pergunte pelo WhatsApp <ArrowIcon /></a></div>
            <div className="faq-list">{questions.map((item) => <details key={item.q}><summary>{item.q}<span className="faq-toggle"><img src="/figma/icon-8.svg" alt="" width="18" height="18" /></span></summary><p>{item.a}</p></details>)}</div>
          </div>
        </section>

        <section className="contact section-navy" id="contato">
          <div className="container contact-inner"><div className="contact-copy"><Label>Contato</Label><h2>Fale com o advogado</h2><p>Cada situação exige análise própria. Entre em contato para apresentar o caso e entender os próximos passos possíveis.</p><div className="contact-location"><strong>Brasília/DF</strong><span>Atendimento presencial e online</span></div></div>
            <aside className="contact-card"><p className="contact-card-title"><img src="/figma/icon-3.svg" alt="" width="22" height="22" />WhatsApp</p><a className="phone-link" href={whatsapp} target="_blank" rel="noreferrer">{phoneLabel}</a><p>Envie uma mensagem com um resumo da situação para iniciar o atendimento.</p><WhatsAppButton /><span className="email-note">Prefere e-mail?</span><a className="email-link" href={`mailto:${email}`}>{email}</a></aside>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><div className="footer-brand"><strong>Mateus Marques Rosa</strong><b>Advocacia Criminal</b><span>Brasília/DF · Atendimento presencial e online</span></div><div className="footer-column"><strong>Navegação</strong><a href="#atuacao">Atuação</a><a href="#sobre">Sobre</a><a href="#como-funciona">Como funciona</a><a href="#contato">Contato</a></div><div className="footer-column"><strong>Contato</strong><a href={whatsapp} target="_blank" rel="noreferrer">{phoneLabel}</a><a href={`mailto:${email}`}>{email}</a><a href={instagram} target="_blank" rel="noreferrer">@adv_mateusmarques ↗</a></div><div className="footer-column"><strong>Áreas de atuação</strong><a href="#atuacao">Defesa em processos criminais</a><a href="#atuacao">Liberdade e habeas corpus</a><a href="#atuacao">Execução penal</a></div></div><div className="container footer-bottom"><span>Mateus Marques Rosa · Advocacia Criminal</span><span>Atendimento presencial e online · Brasília/DF</span></div></footer>
    </>
  );
}
