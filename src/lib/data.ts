// All portfolio data centralized here with dual-language support (pt/en)

export const personalInfo = {
  name: "Thiago Gomes",
  role: {
    pt: "Full-Stack Software Engineer",
    en: "Full-Stack Software Engineer"
  },
  roleShort: {
    pt: "Full-Stack Engineer",
    en: "Full-Stack Engineer"
  },
  email: "thiagogomes1337@gmail.com",
  linkedin: "https://www.linkedin.com/in/thiago-gomes-fc/",
  github: "https://github.com/Thg1zZ",
  whatsapp: "https://wa.me/5521980635807", // To integrate your WhatsApp: Change this URL to https://wa.me/55 + your area code + your phone number
  whatsappDisplay: "+55 (21) 98063-5807", // Change this to your display phone number
  cvUrl: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/Curriculo_Thiago_Gomes_Final_Unica_Pagina.pdf`,
  available: true,
  stats: [
    { value: "3+", label: { pt: "Anos de Exp.", en: "Years of Exp." } },
    { value: "20+", label: { pt: "Projetos", en: "Projects" } },
    { value: "8", label: { pt: "Tecnologias", en: "Technologies" } },
    { value: "3", label: { pt: "Certificações", en: "Certifications" } },
  ],
};

export const skills = [
  { icon: "⚙", name: "C / C++", level: { pt: "Avançado", en: "Advanced" }, percent: 92 },
  { icon: "☕", name: "Java", level: { pt: "Avançado", en: "Advanced" }, percent: 88 },
  { icon: "🌐", name: "HTML / CSS / JS", level: { pt: "Avançado", en: "Advanced" }, percent: 90 },
  { icon: "📊", name: "Power BI", level: { pt: "Intermediário", en: "Intermediate" }, percent: 82 },
  { icon: "🤖", name: "IA / LLM API", level: { pt: "Intermediário", en: "Intermediate" }, percent: 78 },
  { icon: "🏗", name: "Software Eng.", level: { pt: "Avançado", en: "Advanced" }, percent: 95 },
];

export const education = [
  {
    date: { pt: "2023 — 2027", en: "2023 — 2027" },
    degree: { pt: "Bacharelado em Ciência da Computação", en: "B.S. in Computer Science" },
    institution: { pt: "Universidade Estácio de Sá", en: "Universidade Estácio de Sá" },
    description: {
      pt: "Previsão de Conclusão: 2027. Anteriormente: Universidade Veiga de Almeida (UVA) — Transferência Acadêmica.",
      en: "Expected graduation: 2027. Previously enrolled at Universidade Veiga de Almeida (UVA) — Academic Transfer."
    },
    status: "current",
  },
  {
    date: { pt: "Concluído — 28h", en: "Completed — 28h" },
    degree: { pt: "Java Completo (POO + Projetos)", en: "Complete Java (OOP + Projects)" },
    institution: { pt: "Udemy", en: "Udemy" },
    description: {
      pt: "Programação orientada a objetos, coleções, generics, tratamento de exceções, JDBC e projetos práticos completos em Java.",
      en: "Object-oriented programming, collections, generics, exception handling, JDBC and full practical Java projects."
    },
    status: "done",
  },
  {
    date: { pt: "Em andamento", en: "In progress" },
    degree: { pt: "Java Cloud Native", en: "Java Cloud Native" },
    institution: { pt: "Fundação Bradesco", en: "Fundação Bradesco" },
    description: {
      pt: "Desenvolvimento de aplicações Java para ambientes cloud, microsserviços, containers e boas práticas de arquitetura nativa em nuvem.",
      en: "Building Java applications for cloud environments, microservices, containers and cloud-native architecture best practices."
    },
    status: "progress",
  },
  {
    date: { pt: "Concluído", en: "Completed" },
    degree: { pt: "Power BI e Excel", en: "Power BI and Excel" },
    institution: { pt: "EmpowerData / Santander", en: "EmpowerData / Santander" },
    description: {
      pt: "Modelagem de dados, criação de dashboards interativos no Power BI, fórmulas avançadas e análise de dados com Excel.",
      en: "Data modeling, interactive dashboard creation in Power BI, advanced formulas and data analysis with Excel."
    },
    status: "done",
  },
  {
    date: { pt: "Concluído", en: "Completed" },
    degree: { pt: "Algoritmos e Lógica de Programação", en: "Algorithms and Programming Logic" },
    institution: { pt: "Udemy", en: "Udemy" },
    description: {
      pt: "Fundamentos de lógica computacional, estruturas de controle, funções, recursão e resolução de problemas com algoritmos eficientes.",
      en: "Fundamentals of computational logic, control structures, functions, recursion and problem-solving with efficient algorithms."
    },
    status: "done",
  },
  {
    date: { pt: "fev. 2026", en: "Feb 2026" },
    degree: { pt: "Santander Open Academy — Domine a IA com Gemini", en: "Santander Open Academy — Master AI with Gemini" },
    institution: { pt: "Santander", en: "Santander" },
    description: {
      pt: "Aplicações práticas de Inteligência Artificial com o modelo Gemini do Google, prompts avançados e integração em fluxos de trabalho.",
      en: "Practical applications of Artificial Intelligence using Google's Gemini model, advanced prompting and workflow integration."
    },
    status: "done",
  },
  {
    date: { pt: "out. 2025", en: "Oct 2025" },
    degree: { pt: "Imersão Dev — Agentes de IA", en: "Dev Immersion — AI Agents" },
    institution: { pt: "Google / Alura", en: "Google / Alura" },
    description: {
      pt: "Desenvolvimento de agentes inteligentes com IA generativa, integração com APIs do Google e construção de soluções orientadas a LLMs.",
      en: "Building intelligent agents with generative AI, integration with Google APIs and LLM-driven solution development."
    },
    status: "done",
  },
];

export const experience = [
  {
    date: { pt: "2024", en: "2024" },
    role: { pt: "Mesário — Eleições 2024", en: "Poll Worker — 2024 Elections" },
    company: { pt: "Justiça Eleitoral", en: "Electoral Justice" },
    description: {
      pt: "Atendimento e orientação ao público, registro de informações em sistema eletrônico e organização do fluxo de votação sob alta demanda.",
      en: "Customer service and guidance, electronic system data entry, and voting flow management under high demand."
    },
    link: null,
  },
  {
    date: { pt: "jun/2023 — jul/2023", en: "Jun 2023 — Jul 2023" },
    role: { pt: "Recepcionista e Auxiliar Administrativo", en: "Receptionist and Administrative Assistant" },
    company: { pt: "Technopark Estacionamento LTDA", en: "Technopark Estacionamento LTDA" },
    description: {
      pt: "Atendimento presencial e telefônico ao cliente, registro de informações e emissão de notas fiscais em sistema, além de apoio a rotinas administrativas e controle de dados operacionais.",
      en: "In-person and telephone customer service, data entry and invoice issuance in the system, administrative routine support, and operational data control."
    },
    link: null,
  },
  {
    date: { pt: "2024 — 2025", en: "2024 — 2025" },
    role: { pt: "Projetos Acadêmicos em Tecnologia da Informação", en: "Academic Projects in Information Technology" },
    company: { pt: "Universidade Veiga de Almeida", en: "Veiga de Almeida University" },
    description: {
      pt: "Desenvolvimento de projetos utilizando HTML, CSS, JavaScript e C, aplicando lógica de programação e estruturas de dados. Uso de Figma para prototipação e GitHub para versionamento de código.",
      en: "Project development using HTML, CSS, JavaScript, and C, applying programming logic and data structures. Figma for prototyping and GitHub for version control."
    },
    link: "https://github.com/Thg1zZ",
  },
];

export const projects = [
  {
    num: "001",
    title: { pt: "RodaLivre — Aluguel de Automóveis", en: "RodaLivre — Car Rental Platform" },
    description: {
      pt: "Plataforma de alta performance para locação de veículos. Arquitetura estrita de camadas, segurança Defense in Depth, JWT stateless, RBAC, AES-256 e rate limiting com Redis. Frontend Vanilla JS com Chart.js.",
      en: "High-performance vehicle rental platform. Layered architecture, Defense in Depth security, stateless JWT, RBAC, AES-256, and Redis rate limiting. Vanilla JS frontend with Chart.js."
    },
    tags: ["Java 21", "Spring Boot 3", "Spring Security", "PostgreSQL", "Redis", "Docker", "Vanilla JS"],
    status: { pt: "🛠️ Em desenvolvimento ativo", en: "🛠️ In active development" },
    link: null,
  },
  {
    num: "002",
    title: { pt: "TaskFlow — Gerenciador Colaborativo", en: "TaskFlow — Real-Time Task Collab" },
    description: {
      pt: "Plataforma colaborativa com comunicação em tempo real via Server-Sent Events (SSE). Autenticação via cookies HttpOnly, proteção contra IDOR, rate limiting, Next.js e Tailwind CSS. Deploy em produção Docker.",
      en: "Collaborative platform with real-time sync using Server-Sent Events (SSE). HttpOnly cookies authentication, IDOR protection, rate limiting, Next.js, and Tailwind CSS. Docker-ready production deployment."
    },
    tags: ["Spring Boot", "Java", "Next.js", "TypeScript", "Tailwind CSS", "SSE", "JWT", "Docker"],
    status: null,
    link: "https://task-manager-with-login.vercel.app/login",
  },
  {
    num: "003",
    title: { pt: "Bot de Busca para Discord", en: "Discord Search Bot" },
    description: {
      pt: "Aplicação em Python integrada à API do Discord que consome dados do DuckDuckGo e persiste consultas em Oracle, com respostas dinâmicas em tempo real.",
      en: "Python application integrated with Discord API, consuming DuckDuckGo API and persisting searches in Oracle, with real-time dynamic responses."
    },
    tags: ["Python", "Discord API", "Oracle DB", "DuckDuckGo API"],
    status: null,
    link: "https://github.com/Thg1zZ",
  },
  {
    num: "004",
    title: { pt: "Sudoku Java — Console & GUI Swing", en: "Sudoku Java — Console & Swing GUI" },
    description: {
      pt: "Desafio Bradesco Java Cloud Native. Jogo completo de Sudoku com geração de tabuleiros, validação de regras, sistema de dicas com penalidade de tempo e interface híbrida (Console e Swing).",
      en: "Bradesco Java Cloud Native challenge. Complete Sudoku game with board generation, rule validation, hint system with time penalty, and dual interface (Console and Swing)."
    },
    tags: ["Java", "POO", "Java Swing", "Estruturas de Dados"],
    status: null,
    link: "https://github.com/Thg1zZ/Game-Sudoku-Bradesco-Java-Cloud-",
  },
  {
    num: "005",
    title: { pt: "FocusBlock – Extensão Chrome", en: "FocusBlock – Chrome Extension" },
    description: {
      pt: "Extensão Manifest V3 para bloqueio programado de sites distrativos. Oferece controle por horário, estatísticas locais persistidas via chrome.storage e interface responsiva.",
      en: "Manifest V3 extension for scheduled blocking of distractive websites. Features timeline controls, local statistics persisted via chrome.storage, and responsive interface."
    },
    tags: ["JavaScript", "Chrome Extension", "Manifest V3", "HTML5/CSS3", "JSON"],
    status: null,
    link: "https://github.com/Thg1zZ/FocusBlock",
  },
  {
    num: "006",
    title: {
      pt: "Portal ENEN — Executiva Nacional dos Estudantes de Nutrição",
      en: "ENEN Portal — National Executive of Nutrition Students"
    },
    description: {
      pt: "Plataforma web integrada ao Sanity.io (Headless CMS) para gerenciamento dinâmico de notícias, eventos e documentos. Desenvolvida com HTML5 semântico, CSS3 modular (Custom Properties) e JavaScript (ES2022+), com regras rígidas de segurança contra XSS, Content Security Policy (CSP), tratamento robusto de erros via Fetch API e padrão Clean Code.",
      en: "Web platform integrated with Sanity.io (Headless CMS) for dynamic news, events, and document management. Built with semantic HTML5, modular CSS3 (Custom Properties), and modular JavaScript (ES2022+), featuring strict XSS security, Content Security Policy (CSP), robust Fetch API error handling, and Clean Code standards."
    },
    tags: ["HTML5", "CSS3", "JavaScript (ES2022+)", "Sanity.io", "Headless CMS", "CSP / XSS Security", "Fetch API"],
    status: null,
    link: "https://github.com/Thg1zZ/executiva-nacional-dos-estudantes-de-nutricaoenen",
  },
];
