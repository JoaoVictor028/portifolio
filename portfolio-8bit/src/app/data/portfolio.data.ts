export type Locale = 'pt' | 'en';
export type SkillLevel = 'CORE' | 'ADVANCED' | 'WORKING KNOWLEDGE';

export interface SkillCategory {
  name: string;
  color: 'cyan' | 'purple' | 'green' | 'yellow';
  skills: ReadonlyArray<{ name: string; level: SkillLevel }>;
}

export interface ExpertiseArea {
  id: string;
  icon: string;
  name: string;
  description: string;
  technologies: readonly string[];
}

export interface PortfolioProject {
  id: string;
  code: string;
  name: string;
  type: string;
  status: string;
  accent: 'cyan' | 'magenta' | 'green';
  stack: readonly string[];
  summary: string;
  problem: string;
  architecture: string;
  challenges: readonly string[];
  solution: string;
  result: string;
}

export interface ExperienceItem {
  code: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  tags: readonly string[];
}

export interface ContactLink {
  label: string;
  handle: string;
  url: string | null;
  icon: string;
}

export interface CertificationItem {
  code: string;
  title: string;
  detail: string;
  topics: readonly string[];
}

export interface PortfolioContent {
  documentTitle: string;
  documentDescription: string;
  languageLabel: string;
  nav: { home: string; about: string; stack: string; credentials: string; projects: string; experience: string; contact: string; menu: string };
  profile: { name: string; role: string; tagline: string; availability: string; location: string; currentFocus: readonly string[] };
  hero: { bootProfile: string; bootRuntime: string; online: string; projectsAction: string; contactAction: string; build: string; mode: string };
  about: { command: string; title: string; currentFocus: string; status: string; lead: string; body: string; base: string; approach: string; approachValue: string; statusValue: string };
  skillsHeading: { command: string; title: string; legend: string; core: string; advanced: string; working: string };
  certificationsHeading: { command: string; title: string; intro: string };
  expertiseHeading: { command: string; title: string };
  projectsHeading: { command: string; title: string; intro: string; openCase: string; caseFile: string; problem: string; architecture: string; challenges: string; solution: string; result: string; close: string };
  processHeading: { command: string; title: string };
  architectureHeading: { command: string; title: string; reference: string; disclaimer: string; client: string; angular: string; api: string; application: string; data: string; clientDetail: string; angularDetail: string; apiDetail: string; applicationDetail: string; dataDetail: string };
  experienceHeading: { command: string; title: string };
  terminal: { command: string; title: string; ready: string; placeholder: string; available: string; help: string; about: string; skills: string; projects: string; contact: string; success: string; unknown: string; secure: string };
  contact: { command: string; title: string; channel: string; heading: string; body: string; openTerminal: string; locked: string };
  footer: { buildStatus: string; madeWith: string };
  skills: readonly SkillCategory[];
  certifications: readonly CertificationItem[];
  expertise: readonly ExpertiseArea[];
  projects: readonly PortfolioProject[];
  process: readonly { code: string; name: string; detail: string }[];
  experience: readonly ExperienceItem[];
  contacts: readonly ContactLink[];
}

/** All editable portfolio content lives here. Both languages deliberately use the same factual source. */
export const PORTFOLIO_CONTENT: Record<Locale, PortfolioContent> = {
  pt: {
    documentTitle: 'João Victor Cunha — Desenvolvedor de Software',
    documentDescription: 'Portfólio profissional de João Victor Cunha, Desenvolvedor de Software com foco em .NET e Angular.',
    languageLabel: 'Português',
    nav: { home: 'INÍCIO', about: 'SOBRE', stack: 'STACK', credentials: 'FORMAÇÕES', projects: 'DESTAQUES', experience: 'EXPERIÊNCIA', contact: 'CONTATO', menu: 'MENU' },
    profile: {
      name: 'JOÃO VICTOR CUNHA', role: 'DESENVOLVEDOR DE SOFTWARE',
      tagline: 'Construindo APIs, sistemas web e interfaces com .NET e Angular.',
      availability: 'ABERTO A NOVAS OPORTUNIDADES', location: 'Mogi das Cruzes, SP, Brasil',
      currentFocus: ['.NET & C#', 'Angular & TypeScript', 'APIs RESTful', 'SQL Server', 'Modernização de sistemas'],
    },
    hero: { bootProfile: 'carregando perfil profissional', bootRuntime: 'carregando ambiente de desenvolvimento', online: 'SISTEMA ONLINE', projectsAction: 'VER PROJETOS', contactAction: 'ENTRAR EM CONTATO', build: 'BUILD: ONLINE', mode: 'MODO: ENGENHARIA DE SOFTWARE' },
    about: { command: '> quem sou', title: 'DESENVOLVIMENTO DE SOFTWARE, DO BACK-END À INTERFACE', currentFocus: 'foco atual', status: 'status', lead: 'Desenvolvedor de software com experiência em soluções web, APIs e evolução de sistemas.', body: 'Atuo com .NET, Angular e bancos relacionais para transformar necessidades de produto em entregas claras, sustentáveis e úteis para quem usa.', base: 'BASE', approach: 'ABORDAGEM', approachValue: 'PRODUTO × ENGENHARIA', statusValue: 'DISPONÍVEL PARA CONVERSAR' },
    skillsHeading: { command: '> carregar --stack', title: 'TECNOLOGIAS A SERVIÇO DE PROBLEMAS REAIS', legend: 'NÍVEL DE EXPERIÊNCIA', core: 'PRINCIPAL', advanced: 'AVANÇADO', working: 'EM EVOLUÇÃO' },
    certificationsHeading: { command: '> listar --formações', title: 'FORMAÇÕES E CERTIFICAÇÕES', intro: 'Conhecimentos formais que complementam a prática diária de desenvolvimento.' },
    expertiseHeading: { command: '> capacidades --todas', title: 'ENGENHARIA ALÉM DO FRAMEWORK' },
    projectsHeading: { command: '> listar ./destaques', title: 'DESTAQUES DE ATUAÇÃO', intro: 'Experiências técnicas selecionadas, descritas sem expor informações internas ou sensíveis.', openCase: 'VER DETALHES', caseFile: 'DESTAQUE_TÉCNICO', problem: '01 / CONTEXTO', architecture: '02 / FOCO TÉCNICO', challenges: '03 / RESPONSABILIDADES', solution: '04 / ATUAÇÃO', result: '05 / IMPACTO', close: 'Fechar detalhes da atuação' },
    processHeading: { command: '> executar --processo', title: 'COMO EU CONSTRUO' },
    architectureHeading: { command: '> inspecionar --sistema', title: 'SISTEMAS SAUDÁVEIS DEIXAM SEUS CAMINHOS CLAROS', reference: 'ARQUITETURA DE REFERÊNCIA', disclaimer: 'NÃO REPRESENTA UM PROJETO ESPECÍFICO', client: 'CLIENTE', angular: 'ANGULAR', api: 'API REST', application: 'APLICAÇÃO', data: 'DADOS', clientDetail: 'Navegador / Mobile', angularDetail: 'UI + Estado', apiDetail: 'Camada de contrato', applicationDetail: 'Regras / Serviços', dataDetail: 'Banco / Cache' },
    experienceHeading: { command: '> carregar --trajetória', title: 'TRAJETÓRIA PROFISSIONAL' },
    terminal: { command: '> abrir --terminal', title: 'UM TERMINAL PEQUENO E SEGURO', ready: 'Terminal pronto. Digite ajuda para ver os comandos permitidos.', placeholder: "digite 'ajuda'", available: 'DISPONÍVEIS: ajuda · sobre · habilidades · projetos · contato · limpar', help: 'Comandos disponíveis: ajuda · sobre · habilidades · projetos · contato · limpar · sudo me-contrate', about: 'Desenvolvedor de Software — .NET, Angular, APIs RESTful e soluções web.', skills: 'Stack: C#, .NET, Angular, TypeScript, SQL Server, Entity Framework, testes e Docker.', projects: 'Os destaques reúnem controle de acesso, biometria facial e evolução de sistemas.', contact: 'Canais de contato estão disponíveis na seção CONTATO.', success: '✓ Permissão concedida. Uma boa conversa é o próximo comando recomendado.', unknown: 'Comando não encontrado: {command}. Tente ajuda.', secure: 'SEGURO / LOCAL' },
    contact: { command: '> estabelecer --conexão', title: 'CONEXÃO DISPONÍVEL', channel: 'CANAL ABERTO', heading: 'VAMOS CONVERSAR.', body: 'Estou aberto a conversar sobre oportunidades, times e desafios em desenvolvimento de software.', openTerminal: 'ABRIR TERMINAL', locked: 'INDISPONÍVEL' },
    footer: { buildStatus: 'STATUS DA BUILD:', madeWith: 'FEITO COM ANGULAR' },
    skills: [
      { name: 'INTERFACE', color: 'cyan', skills: [{ name: 'Angular', level: 'CORE' }, { name: 'TypeScript', level: 'CORE' }, { name: 'JavaScript', level: 'ADVANCED' }, { name: 'UI / UX', level: 'ADVANCED' }] },
      { name: 'BACK-END', color: 'purple', skills: [{ name: 'C# & .NET', level: 'CORE' }, { name: 'PHP', level: 'ADVANCED' }, { name: 'APIs RESTful', level: 'CORE' }, { name: 'Entity Framework', level: 'ADVANCED' }] },
      { name: 'DADOS & ENTREGA', color: 'green', skills: [{ name: 'SQL Server', level: 'ADVANCED' }, { name: 'MySQL', level: 'WORKING KNOWLEDGE' }, { name: 'Testes automatizados', level: 'ADVANCED' }, { name: 'Docker & Git', level: 'ADVANCED' }] },
    ],
    certifications: [
      { code: 'FORM_01', title: 'Boas práticas em C#', detail: 'Formação voltada a práticas de desenvolvimento e código sustentável.', topics: ['C#', 'Clean Code'] },
      { code: 'FORM_02', title: 'ASP.NET Core, Entity Framework e LINQ', detail: 'Formação em aplicações com C#, .NET, persistência de dados e consultas.', topics: ['.NET', 'Entity Framework', 'LINQ'] },
      { code: 'FORM_03', title: 'Programação orientada a objetos em C#', detail: 'Fundamentos de modelagem e desenvolvimento orientado a objetos.', topics: ['C#', 'POO'] },
      { code: 'FORM_04', title: 'Testes em .NET', detail: 'Formação aplicada a estratégias de teste no ecossistema .NET.', topics: ['.NET', 'Testes'] },
      { code: 'FORM_05', title: 'IT Essentials', detail: 'Fundamentos de infraestrutura e suporte à tecnologia.', topics: ['Infraestrutura', 'TI'] },
    ],
    expertise: [
      { id: 'web', icon: '</>', name: 'Soluções web', description: 'Desenvolvimento de aplicações web com atenção à usabilidade e à manutenção.', technologies: ['Angular', 'TypeScript', 'JavaScript'] },
      { id: 'api', icon: '{ }', name: 'Back-end & APIs', description: 'APIs e funcionalidades de negócio construídas com C#, .NET e Entity Framework.', technologies: ['C#', '.NET', 'REST'] },
      { id: 'data', icon: '▦', name: 'Dados & consultas', description: 'Modelagem e consultas em bancos relacionais, com foco em clareza e desempenho.', technologies: ['SQL Server', 'MySQL', 'EF'] },
      { id: 'quality', icon: '✓', name: 'Qualidade', description: 'Testes unitários e de integração como parte do fluxo de desenvolvimento.', technologies: ['TDD', 'BDD', 'Testes'] },
      { id: 'legacy', icon: '↻', name: 'Modernização', description: 'Evolução de sistemas legados e integrações para arquiteturas mais sustentáveis.', technologies: ['Migração', 'APIs', 'Refatoração'] },
      { id: 'delivery', icon: '◈', name: 'Colaboração', description: 'Trabalho em times ágeis com documentação, alinhamento e melhoria contínua.', technologies: ['Scrum', 'Kanban', 'Jira'] },
    ],
    projects: [
      { id: 'project-01', code: 'ATUAÇÃO_01', name: 'CONTROLE DE ACESSO', type: 'SISTEMAS DE SEGURANÇA', status: 'ATUAÇÃO ATUAL', accent: 'cyan', stack: ['PHP', 'Integrações', 'Sistemas'], summary: 'Desenvolvimento e evolução de recursos voltados a soluções de controle de acesso.', problem: 'Necessidade de evoluir recursos de software que apoiam fluxos de controle de acesso.', architecture: 'Soluções web e integrações construídas no contexto dos sistemas existentes.', challenges: ['Manter a continuidade de fluxos operacionais', 'Trabalhar com regras de acesso', 'Preservar informações internas'], solution: 'Atuação no desenvolvimento de funcionalidades e evolução de recursos em PHP.', result: 'Contribuição para a continuidade e evolução das soluções de controle de acesso.' },
      { id: 'project-02', code: 'ATUAÇÃO_02', name: 'BIOMETRIA FACIAL', type: 'IDENTIFICAÇÃO E ACESSO', status: 'ATUAÇÃO ATUAL', accent: 'magenta', stack: ['PHP', 'APIs', 'Biometria facial'], summary: 'Atuação em fluxos e integrações relacionados a identificação por biometria facial.', problem: 'Necessidade de apoiar fluxos de identificação e autorização de acesso.', architecture: 'Integrações e recursos desenvolvidos sem expor detalhes proprietários do ambiente.', challenges: ['Confiabilidade de fluxos de acesso', 'Integração com sistemas existentes', 'Proteção de contexto interno'], solution: 'Desenvolvimento de funcionalidades que apoiam o uso de biometria facial no contexto de controle de acesso.', result: 'Evolução técnica de recursos voltados a identificação e controle de acesso.' },
      { id: 'project-03', code: 'ATUAÇÃO_03', name: 'EVOLUÇÃO DE SISTEMAS', type: 'BACK-END, INTERFACE E DADOS', status: 'EXPERIÊNCIA ANTERIOR', accent: 'green', stack: ['.NET', 'Angular', 'SQL Server', 'Testes'], summary: 'Experiência com evolução de funcionalidades, relatórios legados, consultas e testes automatizados.', problem: 'Sistemas precisavam evoluir mantendo o suporte a regras e dados existentes.', architecture: 'Funcionalidades em .NET e Angular, consultas SQL Server com Entity Framework e testes unitários.', challenges: ['Migração de relatórios legados', 'Evolução de funcionalidades', 'Equilíbrio entre interface e back-end'], solution: 'Implementação de funcionalidades, consultas otimizadas e participação em decisões de UI/UX.', result: 'Ampliação da experiência em modernização, desenvolvimento web e qualidade de software.' },
    ],
    process: [
      { code: '01', name: 'DESCOBRIR', detail: 'Entendo objetivo, contexto e restrições antes de partir para a solução.' }, { code: '02', name: 'DESENHAR', detail: 'Torno decisões técnicas claras antes de avançar para a implementação.' }, { code: '03', name: 'CONSTRUIR', detail: 'Entrego mudanças coesas, legíveis e prontas para evoluir.' }, { code: '04', name: 'TESTAR', detail: 'Verifico comportamento, casos de borda e experiência de uso.' }, { code: '05', name: 'ENTREGAR', detail: 'Publico com cuidado e comunicação objetiva.' }, { code: '06', name: 'EVOLUIR', detail: 'Aprendo com o uso e sigo melhorando o sistema.' },
    ],
    experience: [
      { code: 'REGISTRO_01', role: 'DESENVOLVEDOR DE SOFTWARE', organization: 'Assectra Segurança do Trabalho', period: 'JUN 2025 — ATUAL', description: 'Desenvolvimento e evolução de soluções em PHP para controle de acesso, incluindo fluxos e integrações relacionados a biometria facial.', tags: ['PHP', 'BIOMETRIA FACIAL', 'CONTROLE DE ACESSO'] },
      { code: 'REGISTRO_02', role: 'ANALISTA DE DESENVOLVIMENTO DE SOFTWARE', organization: 'Star Consulting S/S LTDA', period: 'AGO 2024 — OUT 2024', description: 'Atuação com funcionalidades back-end em .NET e front-end em Angular, migração de relatórios de sistema legado, consultas SQL Server com Entity Framework e testes unitários.', tags: ['.NET', 'ANGULAR', 'SQL SERVER'] },
      { code: 'REGISTRO_03', role: 'ESTAGIÁRIO DE DESENVOLVIMENTO', organization: 'Star Consulting S/S LTDA', period: 'MAR 2023 — AGO 2024', description: 'Colaboração em soluções web, testes unitários e de integração, suporte técnico e pesquisas para projetos de maior complexidade.', tags: ['WEB', 'TESTES', 'ÁGIL'] },
    ],
    contacts: [
      { label: 'LinkedIn', handle: 'jvictorcunha28', url: 'https://www.linkedin.com/in/jvictorcunha28', icon: 'in' }, { label: 'E-mail', handle: 'jovcunha36@gmail.com', url: 'mailto:jovcunha36@gmail.com', icon: '@' }, { label: 'GitHub', handle: 'A CONFIGURAR', url: null, icon: '⌘' },
    ],
  },
  en: {
    documentTitle: 'João Victor Cunha — Software Developer',
    documentDescription: 'Professional portfolio of João Victor Cunha, a Software Developer focused on .NET and Angular.',
    languageLabel: 'English',
    nav: { home: 'HOME', about: 'ABOUT', stack: 'STACK', credentials: 'CREDENTIALS', projects: 'HIGHLIGHTS', experience: 'EXPERIENCE', contact: 'CONTACT', menu: 'MENU' },
    profile: { name: 'JOÃO VICTOR CUNHA', role: 'SOFTWARE DEVELOPER', tagline: 'Building APIs, web systems and interfaces with .NET and Angular.', availability: 'OPEN TO NEW OPPORTUNITIES', location: 'Mogi das Cruzes, SP, Brazil', currentFocus: ['.NET & C#', 'Angular & TypeScript', 'RESTful APIs', 'SQL Server', 'System modernization'] },
    hero: { bootProfile: 'loading professional profile', bootRuntime: 'loading development environment', online: 'SYSTEM ONLINE', projectsAction: 'VIEW PROJECTS', contactAction: 'GET IN TOUCH', build: 'BUILD: ONLINE', mode: 'MODE: SOFTWARE ENGINEERING' },
    about: { command: '> whoami', title: 'SOFTWARE DEVELOPMENT, FROM BACK-END TO INTERFACE', currentFocus: 'current_focus', status: 'status', lead: 'Software developer experienced in web solutions, APIs and system evolution.', body: 'I work with .NET, Angular and relational databases to turn product needs into clear, sustainable and useful deliveries.', base: 'BASE', approach: 'APPROACH', approachValue: 'PRODUCT × ENGINEERING', statusValue: 'READY TO CONNECT' },
    skillsHeading: { command: '> load --stack', title: 'TECHNOLOGY IN SERVICE OF REAL PROBLEMS', legend: 'EXPERIENCE LEVEL', core: 'CORE', advanced: 'ADVANCED', working: 'GROWING' },
    certificationsHeading: { command: '> list --credentials', title: 'TRAINING AND CERTIFICATIONS', intro: 'Formal learning that complements day-to-day development practice.' },
    expertiseHeading: { command: '> capabilities --all', title: 'ENGINEERING BEYOND THE FRAMEWORK' },
    projectsHeading: { command: '> ls ./highlights', title: 'SELECTED EXPERIENCE HIGHLIGHTS', intro: 'Selected technical experience, presented without exposing sensitive or internal information.', openCase: 'VIEW DETAILS', caseFile: 'TECHNICAL_HIGHLIGHT', problem: '01 / CONTEXT', architecture: '02 / TECHNICAL FOCUS', challenges: '03 / RESPONSIBILITIES', solution: '04 / CONTRIBUTION', result: '05 / IMPACT', close: 'Close experience details' },
    processHeading: { command: '> run --process', title: 'HOW I BUILD' },
    architectureHeading: { command: '> inspect --system', title: 'HEALTHY SYSTEMS MAKE THEIR PATHS CLEAR', reference: 'REFERENCE ARCHITECTURE', disclaimer: 'NOT A CLAIM ABOUT A SPECIFIC PROJECT', client: 'CLIENT', angular: 'ANGULAR', api: 'REST API', application: 'APPLICATION', data: 'DATA', clientDetail: 'Browser / Mobile', angularDetail: 'UI + State', apiDetail: 'Contract layer', applicationDetail: 'Rules / Services', dataDetail: 'Database / Cache' },
    experienceHeading: { command: '> load --timeline', title: 'PROFESSIONAL JOURNEY' },
    terminal: { command: '> open --terminal', title: 'A SMALL, SAFE TERMINAL', ready: 'Terminal ready. Type help to see allowed commands.', placeholder: "type 'help'", available: 'AVAILABLE: help · about · skills · projects · contact · clear', help: 'Available commands: help · about · skills · projects · contact · clear · sudo hire-me', about: 'Software Developer — .NET, Angular, RESTful APIs and web solutions.', skills: 'Stack: C#, .NET, Angular, TypeScript, SQL Server, Entity Framework, testing and Docker.', projects: 'The highlights cover access control, facial biometrics and system evolution.', contact: 'Contact channels are available in the CONTACT section.', success: '✓ Permission granted. A great conversation is the next recommended command.', unknown: 'Command not found: {command}. Try help.', secure: 'SECURE / LOCAL' },
    contact: { command: '> establish --connection', title: 'CONNECTION AVAILABLE', channel: 'OPEN CHANNEL', heading: 'LET’S TALK.', body: 'I am open to discussing opportunities, teams and software development challenges.', openTerminal: 'OPEN TERMINAL', locked: 'UNAVAILABLE' },
    footer: { buildStatus: 'BUILD STATUS:', madeWith: 'MADE WITH ANGULAR' },
    skills: [
      { name: 'FRONTEND', color: 'cyan', skills: [{ name: 'Angular', level: 'CORE' }, { name: 'TypeScript', level: 'CORE' }, { name: 'JavaScript', level: 'ADVANCED' }, { name: 'UI / UX', level: 'ADVANCED' }] },
      { name: 'BACKEND', color: 'purple', skills: [{ name: 'C# & .NET', level: 'CORE' }, { name: 'PHP', level: 'ADVANCED' }, { name: 'RESTful APIs', level: 'CORE' }, { name: 'Entity Framework', level: 'ADVANCED' }] },
      { name: 'DATA & DELIVERY', color: 'green', skills: [{ name: 'SQL Server', level: 'ADVANCED' }, { name: 'MySQL', level: 'WORKING KNOWLEDGE' }, { name: 'Automated testing', level: 'ADVANCED' }, { name: 'Docker & Git', level: 'ADVANCED' }] },
    ],
    certifications: [
      { code: 'TRAIN_01', title: 'C# best practices', detail: 'Training focused on development practices and sustainable code.', topics: ['C#', 'Clean Code'] },
      { code: 'TRAIN_02', title: 'ASP.NET Core, Entity Framework and LINQ', detail: 'Training in C# and .NET applications, persistence and querying data.', topics: ['.NET', 'Entity Framework', 'LINQ'] },
      { code: 'TRAIN_03', title: 'Object-oriented programming in C#', detail: 'Foundations of modeling and object-oriented development.', topics: ['C#', 'OOP'] },
      { code: 'TRAIN_04', title: 'Testing in .NET', detail: 'Training in testing strategies within the .NET ecosystem.', topics: ['.NET', 'Testing'] },
      { code: 'TRAIN_05', title: 'IT Essentials', detail: 'Foundations of infrastructure and technology support.', topics: ['Infrastructure', 'IT'] },
    ],
    expertise: [
      { id: 'web', icon: '</>', name: 'Web solutions', description: 'Web applications built with attention to usability and maintainability.', technologies: ['Angular', 'TypeScript', 'JavaScript'] },
      { id: 'api', icon: '{ }', name: 'Back-end & APIs', description: 'Business APIs and features built with C#, .NET and Entity Framework.', technologies: ['C#', '.NET', 'REST'] },
      { id: 'data', icon: '▦', name: 'Data & queries', description: 'Modeling and querying relational databases with clarity and performance in mind.', technologies: ['SQL Server', 'MySQL', 'EF'] },
      { id: 'quality', icon: '✓', name: 'Quality', description: 'Unit and integration testing as part of the development flow.', technologies: ['TDD', 'BDD', 'Testing'] },
      { id: 'legacy', icon: '↻', name: 'Modernization', description: 'Evolving legacy systems and integrations toward more sustainable architectures.', technologies: ['Migration', 'APIs', 'Refactoring'] },
      { id: 'delivery', icon: '◈', name: 'Collaboration', description: 'Working in agile teams through documentation, alignment and continuous improvement.', technologies: ['Scrum', 'Kanban', 'Jira'] },
    ],
    projects: [
      { id: 'project-01', code: 'HIGHLIGHT_01', name: 'ACCESS CONTROL', type: 'SECURITY SYSTEMS', status: 'CURRENT WORK', accent: 'cyan', stack: ['PHP', 'Integrations', 'Systems'], summary: 'Development and evolution of features used in access control solutions.', problem: 'The work supports the evolution of software resources behind access-control flows.', architecture: 'Web solutions and integrations built in the context of existing systems.', challenges: ['Maintaining operational flow continuity', 'Working with access rules', 'Protecting internal information'], solution: 'Contributing to feature development and resource evolution in PHP.', result: 'Supporting the continuity and technical evolution of access-control solutions.' },
      { id: 'project-02', code: 'HIGHLIGHT_02', name: 'FACIAL BIOMETRICS', type: 'IDENTIFICATION AND ACCESS', status: 'CURRENT WORK', accent: 'magenta', stack: ['PHP', 'APIs', 'Facial biometrics'], summary: 'Working with flows and integrations related to facial-biometric identification.', problem: 'Supporting identification and access-authorization flows.', architecture: 'Integrations and features delivered without exposing proprietary environment details.', challenges: ['Reliable access flows', 'Integration with existing systems', 'Protecting internal context'], solution: 'Developing features that support facial biometrics in an access-control context.', result: 'Technical evolution of resources focused on identification and access control.' },
      { id: 'project-03', code: 'HIGHLIGHT_03', name: 'SYSTEM EVOLUTION', type: 'BACK-END, INTERFACE AND DATA', status: 'PREVIOUS EXPERIENCE', accent: 'green', stack: ['.NET', 'Angular', 'SQL Server', 'Testing'], summary: 'Experience with feature evolution, legacy reports, database queries and automated testing.', problem: 'Systems needed to evolve while supporting existing rules and data.', architecture: '.NET and Angular features, SQL Server queries with Entity Framework and unit tests.', challenges: ['Legacy report migration', 'Feature evolution', 'Balancing interface and back-end'], solution: 'Implementing features, optimized queries and contributing to UI/UX decisions.', result: 'Broader experience in modernization, web development and software quality.' },
    ],
    process: [
      { code: '01', name: 'DISCOVER', detail: 'I understand objectives, context and constraints before choosing a solution.' }, { code: '02', name: 'DESIGN', detail: 'I make technical decisions clear before implementation starts.' }, { code: '03', name: 'BUILD', detail: 'I deliver cohesive, readable changes that are ready to evolve.' }, { code: '04', name: 'TEST', detail: 'I verify behavior, edge cases and the user experience.' }, { code: '05', name: 'SHIP', detail: 'I release with care and clear communication.' }, { code: '06', name: 'EVOLVE', detail: 'I learn from use and keep improving the system.' },
    ],
    experience: [
      { code: 'CAREER_LOG_01', role: 'SOFTWARE DEVELOPER', organization: 'Assectra Segurança do Trabalho', period: 'JUN 2025 — PRESENT', description: 'Developing and evolving PHP solutions for access control, including flows and integrations related to facial biometrics.', tags: ['PHP', 'FACIAL BIOMETRICS', 'ACCESS CONTROL'] },
      { code: 'CAREER_LOG_02', role: 'SOFTWARE DEVELOPMENT ANALYST', organization: 'Star Consulting S/S LTDA', period: 'AUG 2024 — OCT 2024', description: 'Worked on .NET back-end and Angular front-end features, legacy report migration, SQL Server queries with Entity Framework and unit testing.', tags: ['.NET', 'ANGULAR', 'SQL SERVER'] },
      { code: 'CAREER_LOG_03', role: 'SOFTWARE DEVELOPMENT INTERN', organization: 'Star Consulting S/S LTDA', period: 'MAR 2023 — AUG 2024', description: 'Collaborated on web solutions, unit and integration testing, technical support and research for more complex projects.', tags: ['WEB', 'TESTING', 'AGILE'] },
    ],
    contacts: [
      { label: 'LinkedIn', handle: 'jvictorcunha28', url: 'https://www.linkedin.com/in/jvictorcunha28', icon: 'in' }, { label: 'E-mail', handle: 'jovcunha36@gmail.com', url: 'mailto:jovcunha36@gmail.com', icon: '@' }, { label: 'GitHub', handle: 'TO CONFIGURE', url: null, icon: '⌘' },
    ],
  },
};
