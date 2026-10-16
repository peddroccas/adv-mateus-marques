// Conteúdo do site. Edite os textos e contatos aqui; o layout fica em app/page.tsx.

export const contact = {
  phone: "+5561985503907",
  phoneLabel: "(61) 98550-3907",
  email: "mateusmarquesrosa@gmail.com",
  instagram: "https://www.instagram.com/adv_mateusmarques/",
  instagramLabel: "@adv_mateusmarques",
  whatsappMessage: "Olá, gostaria de conversar sobre uma situação jurídica.",
};

export const whatsappLink = (message: string = contact.whatsappMessage) =>
  `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;

export const brand = {
  name: "Mateus Marques Rosa",
  tagline: "Advocacia Criminal",
  location: "Brasília/DF",
  service: "Atendimento presencial e online",
};

export const navLinks = [
  { href: "#atuacao", label: "Atuação" },
  { href: "#sobre", label: "Sobre" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export const ctaLabel = "Agendar pelo WhatsApp";

export const hero = {
  label: "Criminal e execução penal",
  title: "Defesa criminal e execução penal em Brasília, com estratégia e transparência.",
  description:
    "Para quem responde a um processo criminal ou tem um familiar preso: análise individualizada do caso e clareza sobre os caminhos jurídicos possíveis, sem falsas promessas.",
  secondaryLink: { href: "#atuacao", label: "Conhecer áreas de atuação" },
  trust: ["Atendimento presencial e online", "Brasília/DF", "Contato próximo com o advogado"],
  photo: {
    src: "/figma/mateus.jpeg",
    alt: "Mateus Marques Rosa, advogado criminalista, de terno azul-marinho",
    caption: "Advogado criminalista · Brasília/DF",
  },
};

export const practice = {
  label: "Áreas de atuação",
  title: "Defesa em cada etapa do caso.",
  description: "Atuação criminal e execução penal, com atenção às particularidades de cada situação.",
  cardLinkLabel: "Falar sobre este caso",
  areas: [
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
  ],
};

export const principles = {
  label: "Princípios da atuação",
  items: [
    { icon: "/figma/icon-6.svg", text: "Análise cuidadosa de cada caso" },
    { icon: "/figma/icon-4.svg", text: "Estratégia defensiva individualizada" },
    { icon: "/figma/icon-7.svg", text: "Estudo e atenção aos detalhes" },
    { icon: "/figma/icon-2.svg", text: "Comunicação clara e transparente" },
  ],
};

export const about = {
  label: "Sobre o advogado",
  nameLines: ["Mateus", "Marques Rosa"],
  titleLines: ["Uma atuação pautada em", "análise, estratégia e clareza."],
  description:
    "Atuação em advocacia criminal e execução penal, com foco na análise individualizada dos casos, na estratégia defensiva e na comunicação transparente com clientes e familiares.",
  caption: "Advocacia Criminal · Brasília/DF",
  photo: { src: "/figma/mateus.jpeg", alt: "Retrato de Mateus Marques Rosa" },
};

export const howItWorks = {
  label: "Primeiro contato",
  title: "Como funciona o atendimento",
  steps: [
    "Entre em contato pelo WhatsApp",
    "Apresente brevemente a situação e as informações disponíveis",
    "Combine os próximos passos do atendimento",
  ],
  note: "Fluxo proposto, sujeito à confirmação do advogado",
};

export const faq = {
  label: "Dúvidas iniciais",
  titleLines: ["Perguntas", "frequentes"],
  helpText: "Não encontrou sua dúvida?",
  helpLink: "Pergunte pelo WhatsApp",
  questions: [
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
      a: `Pelo WhatsApp ${contact.phoneLabel}. Envie uma mensagem com um resumo da situação para combinar o atendimento.`,
    },
  ],
};

export const contactSection = {
  label: "Contato",
  title: "Fale com o advogado",
  description:
    "Cada situação exige análise própria. Entre em contato para apresentar o caso e entender os próximos passos possíveis.",
  cardTitle: "WhatsApp",
  cardText: "Envie uma mensagem com um resumo da situação para iniciar o atendimento.",
  emailPrompt: "Prefere e-mail?",
};

export const footer = {
  navTitle: "Navegação",
  navLinks: navLinks.filter((link) => link.href !== "#duvidas"),
  contactTitle: "Contato",
  areasTitle: "Áreas de atuação",
};
