// Master Content Strategy File — IT Consultant & Systems Designer
// Concept: Moins de friction / Less friction.
// Promise: Helping organisations work better through simple, reliable, and intelligent systems.

const content = {
  fr: {
    nav: { 
      manifesto: "Approche", 
      expertise: "Expertises", 
      projects: "Selected Systems", 
      contact: "Contact", 
      langLabel: "EN" 
    },
    hero: {
      label: "Ousmane Diop — Consultant IT Indépendant",
      statusBadge: "",
      line1: "Des systèmes",
      line2: "plus simples.",
      line3: "",
      sub: "Systèmes numériques, automatisation et IA pour supprimer les frictions.",
    },
    manifesto: {
      title: "Moins de friction.",
      statement: "La technologie n'est jamais le point de départ.",
      body: "Une solution efficace commence par une bonne compréhension des besoins. Ensuite seulement viennent l'architecture, les outils et l'automatisation. Je préfère supprimer un outil plutôt que d'en ajouter un. La meilleure automatisation est celle qui devient invisible.",
    },
    marqueeItems: [
      "Cloud",
      "Automatisation",
      "Intelligence Artificielle",
      "Microsoft 365",
      "Stratégie Numérique",
      "Architecture",
      "Sécurité",
      "React",
      "OpenAI",
      "n8n",
      "Power Platform",
      "Azure",
    ],
    chaptersLabel: "Approche",
    chapters: [
      {
        title: "01. Comprendre",
        body: "Écouter le terrain et comprendre comment les équipes travaillent au quotidien avant de parler d'outils.",
      },
      {
        title: "02. Structurer",
        body: "Bâtir des fondations d'identités et de cloud claires qui soutiennent la croissance sans créer de rigidité.",
      },
      {
        title: "03. Simplifier",
        body: "Supprimer les frictions, clarifier les processus et éliminer les étapes superflues avant d'automatiser.",
      },
      {
        title: "04. Automatiser",
        body: "Rendre les tâches répétitives invisibles, fiables et autonomes pour redonner du temps aux équipes.",
      },
      {
        title: "05. Évoluer",
        body: "Faire évoluer le système en continu et en douceur aux côtés de l'organisation et des usages réels.",
      },
    ],
    expertiseLabel: "Expertises",
    expertise: [
      {
        title: "Un Cloud qui évolue avec votre entreprise",
        desc: "Identités unifiées, gouvernance cloud et espaces de travail collaboratifs sans serveur physique.",
        tools: ["Microsoft 365", "Entra ID / Azure", "Intune", "Windows Server", "Exchange Online", "SharePoint"],
      },
      {
        title: "Éliminer le travail répétitif",
        desc: "Suppression des saisies manuelles et automatisation des flux opérationnels entre vos outils.",
        tools: ["Flux IA", "Power Automate", "n8n / Make", "Intégrations API", "Scripts Python"],
      },
      {
        title: "L'IA là où elle crée une vraie valeur",
        desc: "Agents IA utiles intégrés directement dans le quotidien et les processus de vos équipes.",
        tools: ["LLMs", "Agents IA", "Prompt Engineering", "RAG", "Model Context Protocol (MCP)"],
      },
      {
        title: "Des produits web conçus pour durer",
        desc: "Développement de produits web sur mesure, rapides, sécurisés et simples à faire évoluer.",
        tools: ["Python", "React", "Node.js", "Next.js", "WordPress", "Shopify", "Headless CMS"],
      },
      {
        title: "Une sécurité qui protège sans friction",
        desc: "Protection des accès et des données confidentielles sans alourdir le quotidien des collaborateurs.",
        tools: ["Accès Conditionnel", "Microsoft Defender", "Zero Trust", "Antivirus", "Prévention"],
      },
      {
        title: "Une stratégie qui aligne technologie et objectifs métiers",
        desc: "Conseil et gouvernance pour faire de la technologie un levier d'efficacité et de clarté.",
        tools: ["Gouvernance IT", "Transformation Numérique", "Analyse de Processus", "Gestion de Projet", "ITIL v4", "Design de Solution"],
      },
    ],
    projectsLabel: "De la question à la solution.",
    conversationHook: "Chaque projet commence par une question. La technologie n'est qu'une partie de la réponse.",
    questionsList: [
      {
        name: "Assistant IA WhatsApp",
        question: "Comment rendre l'interaction client sans friction ?",
        paragraph: "Les petites entreprises perdent des clients lorsqu'elles ne répondent pas instantanément. Un assistant IA doit gérer les rendez-vous et commandes naturellement, 24h/24.",
        isFeatured: true, // Highlights this item
        badgeText: "SOLUTION ACTIVE — DISPONIBLE IMMÉDIATEMENT",
        highlights: [
          "Prise de rendez-vous & FAQ",
          "API Meta Cloud & SQLite",
          "Alertes Telegram en temps réel",
          "Déploiement en 4 étapes"
        ],
        link: "whatsapp-ai",
        linkText: "Déployer la solution →"
      },
      {
        name: "OutilsBelges",
        question: "Comment rendre la complexité compréhensible ?",
        paragraph: "Les règles administratives sont souvent complexes. Un bon logiciel doit les rendre accessibles sans pour autant les sursimplifier.",
        highlights: [
          "47+ calculateurs fiscaux officiels",
          "Développé sur-mesure",
          "Plateforme d'utilité publique"
        ],
        link: "https://outilsbelges.be",
        linkText: "Visiter la plateforme →"
      },
      {
        name: "Yobantel",
        question: "Comment connecter les personnes, les produits et la logistique ?",
        paragraph: "Les opérations transfrontalières impliquent de nombreux flux. Le défi n'est pas d'ajouter des outils, mais de les faire collaborer.",
        highlights: [
          "Logistique transfrontalière",
          "Workflows de commandes",
          "Automatisation"
        ],
        link: "yobantel",
        linkText: "Étude de cas →"
      }
    ],
    otherSelectedTitle: "Autres réalisations.",
    otherSelectedWork: [
      {
        name: "Microsoft Modern Workplace",
        type: "Étude de cas",
        link: "microsoft-workplace"
      },
      {
        name: "Kelbail",
        type: "En ligne",
        link: "https://kelbail.com"
      },
      {
        name: "AI Agents",
        type: "Étude de cas",
        link: "ai-agents"
      },
      {
        name: "CRM Platform",
        type: "Étude de cas",
        link: "crm-platform"
      }
    ],
    whatsappCaseStudy: {
      title: "Assistant IA WhatsApp (Bot PME)",
      subtitle: "Assistant IA WhatsApp intelligent pour commerces locaux (restaurants, salons, coiffeurs, cliniques, pharmacies).",
      overview: "Gère de bout en bout la relation client : prise de commande/RDV, FAQ dynamique, horaires, et alerting Telegram en temps réel pour le gérant.",
      architecture: [
        { name: "API Meta Cloud", role: "Interface de réception et d'envoi des messages clients" },
        { name: "Webhook Node.js Express", role: "Routage intelligent, traitement logique et validation" },
        { name: "Base SQLite", role: "Stockage léger et sécurisé de la FAQ, des horaires et des commandes" },
        { name: "Moteur IA (API OpenAI/OpenRouter)", role: "Compréhension naturelle et réponses contextuelles fluides" },
        { name: "Alertes Telegram", role: "Notification instantanée du gérant en cas de commande ou d'alerte" }
      ],
      steps: [
        { num: "01", title: "Installation", desc: "Clonage et installation des dépendances Node.js en moins d'une minute." },
        { num: "02", title: "Configuration JSON", desc: "Création de la fiche d'identité du commerce (horaires, faq, menu, identifiants WhatsApp)." },
        { num: "03", title: "Onboarding en base", desc: "Script d'onboarding automatisé pour valider et initialiser la base de données locale." },
        { num: "04", title: "Vérification", desc: "Script de diagnostic de connexion automatique vers Meta API et les clés IA." }
      ],
      packages: [
        { name: "Formule Base", setup: "500 €", recurring: "100 €/mois" },
        { name: "Formule Pro", setup: "800 €", recurring: "150 €/mois" }
      ]
    },
    microsoftCaseStudy: {
      title: "Microsoft Modern Workplace",
      subtitle: "Transformation cloud, identités et sécurité Zero-Trust d'entreprise.",
      overview: "Mise en place d'une infrastructure moderne unifiée éliminant les serveurs locaux physiques au profit d'une gouvernance cloud centralisée et hautement sécurisée.",
      architecture: [
        { name: "Microsoft Entra ID", role: "Gestion centralisée des identités et des accès conditionnels" },
        { name: "Microsoft Intune", role: "Gouvernance et sécurisation automatique de la flotte d'appareils" },
        { name: "Microsoft Defender", role: "Protection active contre les menaces et blocage des pièces jointes suspectes" },
        { name: "Exchange & SharePoint", role: "Espaces collaboratifs unifiés et migration de données sans interruption" }
      ],
      steps: [
        { num: "01", title: "Audit & Inventaire", desc: "Analyse complète des serveurs physiques existants et des accès collaborateurs." },
        { num: "02", title: "Design Architecture", desc: "Définition des règles de sécurité Zero-Trust et de la politique d'accès conditionnel." },
        { num: "03", title: "Migration Active", desc: "Bascule des boîtes mails et fichiers vers le cloud sans interruption de service." },
        { num: "04", title: "Automatisation", desc: "Mise en place des scripts d'onboarding automatique des nouveaux arrivants." }
      ],
      packages: null // No packages pricing
    },
    yobantelCaseStudy: {
      title: "Yobantel",
      subtitle: "Plateforme logistique et financière transfrontalière pour la diaspora.",
      overview: "Rapprochement des processus d'achat, de transport et de paiement pour permettre à la diaspora de commander et de faire livrer des marchandises directement en Afrique de l'Ouest.",
      architecture: [
        { name: "Interface React/Next.js", role: "Parcours utilisateur fluide et responsive de commande" },
        { name: "Webhook & API", role: "Calcul en temps réel des frais de douane et de transport logistique" },
        { name: "Passerelle de Paiement", role: "Intégration de Stripe et Mobile Money locaux" },
        { name: "Système de Notification", role: "Suivi d'expédition automatisé envoyé par SMS et WhatsApp" }
      ],
      steps: [
        { num: "01", title: "Étude Terrain", desc: "Analyse des frictions logistiques entre la commande en Europe et le retrait en Afrique." },
        { num: "02", title: "Modélisation", desc: "Design des flux financiers et des calculs de commission automatique." },
        { num: "03", title: "Développement API", desc: "Intégration des terminaux de paiement transfrontaliers et des prestataires." },
        { num: "04", title: "Automatisation", desc: "Mise en place du suivi de colis en temps réel pour le client final." }
      ],
      packages: null
    },
    aiAgentsCaseStudy: {
      title: "AI Agents",
      subtitle: "Déploiement d'agents autonomes d'analyse et de traitement de données.",
      overview: "Conception de scripts intelligents capables de lire, trier et synthétiser des rapports complexes pour accélérer la prise de décision opérationnelle.",
      architecture: [
        { name: "LLM local / Cloud", role: "Moteur cognitif de traitement sémantique des documents" },
        { name: "n8n / Workflows", role: "Orchestration automatique des tâches et des déclencheurs" },
        { name: "Model Context Protocol", role: "Connexion sécurisée des agents aux bases de données internes" }
      ],
      steps: [
        { num: "01", title: "Cartographie", desc: "Définition des tâches répétitives à forte consommation de temps." },
        { num: "02", title: "Prompt Engineering", desc: "Modélisation des personas d'agents et des critères de validation." },
        { num: "03", title: "Intégration Slack/Email", desc: "Raccordement des agents directement dans les outils de communication des équipes." }
      ],
      packages: null
    },
    crmCaseStudy: {
      title: "CRM Platform",
      subtitle: "Plateforme de gestion client sur-mesure pour les équipes commerciales.",
      overview: "Création d'un outil de suivi commercial sans fioritures, rapide et directement connecté aux flux de facturation.",
      architecture: [
        { name: "Base Postgre / SQLite", role: "Structure de données robuste et indexée pour des requêtes instantanées" },
        { name: "API REST", role: "Synchronisation automatique des ventes avec les outils de comptabilité" }
      ],
      steps: [
        { num: "01", title: "Analyse CRM", desc: "Définition des étapes clés du tunnel de vente propre à l'entreprise." },
        { num: "02", title: "Développement", desc: "Bâtiment de l'interface utilisateur minimaliste axée sur la vitesse de saisie." },
        { num: "03", title: "Connexion Facturation", desc: "Automatisation de la création de factures lors du passage d'une opportunité en 'Gagné'." }
      ],
      packages: null
    },
    contact: {
      title: "Consultation & Prise de Contact",
      line: "Discutons de vos enjeux.",
      sub: "Un projet, une question ou une friction à éliminer ? Discutons-en.",
      statusLabel: "Statut",
      statusValue: "Disponibilité active (Conseil & Projets)",
      locationLabel: "Localisation",
      locationValue: "Bruxelles, Belgique (Sur site & Remote)",
      slaLabel: "Délai de réponse",
      slaValue: "Sous 24 heures ouvrées",
      projectTypesTitle: "Sélectionnez vos besoins (optionnel)",
      projectTypes: [
        { id: "cloud", label: "☁️ Migration Cloud & Identités" },
        { id: "security", label: "🛡️ Audit Sécurité & Defender" },
        { id: "ai", label: "🤖 Automation & Assistant IA" },
        { id: "arch", label: "📐 Architecture & Conseil IT" }
      ],
      namePh: "Votre Nom / Entreprise",
      emailPh: "Votre Email Professionnel",
      messagePh: "Décrivez brièvement vos objectifs ou vos frictions...",
      submit: "Envoyer la demande",
      thanks: "Demande préparée avec succès ! Mon client email s'ouvre...",
      email: "nooreyni35@gmail.com",
    },
    footer: { tag: "CONSULTANT IT INDÉPENDANT" },
  },
  en: {
    nav: { 
      manifesto: "Approach", 
      expertise: "Expertise", 
      projects: "Selected Systems", 
      contact: "Contact", 
      langLabel: "FR" 
    },
    hero: {
      label: "Ousmane Diop — Independent IT Consultant",
      statusBadge: "",
      line1: "Simpler",
      line2: "systems.",
      line3: "",
      sub: "Digital systems, automation and AI to eliminate friction.",
    },
    manifesto: {
      title: "Less friction.",
      statement: "Technology is never the starting point.",
      body: "An effective solution begins with a deep understanding of human needs. Only then come architecture, tools, and automation. I'd rather remove a tool than add one. The best automation is the one that becomes invisible.",
    },
    marqueeItems: [
      "Cloud",
      "Automation",
      "Artificial Intelligence",
      "Microsoft 365",
      "Digital Strategy",
      "Architecture",
      "Security",
      "React",
      "OpenAI",
      "n8n",
      "Power Platform",
      "Azure",
    ],
    chaptersLabel: "Approach",
    chapters: [
      {
        title: "01. Understand",
        body: "Listen to how teams work before picking tools or writing a single line of code.",
      },
      {
        title: "02. Structure",
        body: "Build clear identity and cloud foundations that support growth without creating rigidity.",
      },
      {
        title: "03. Simplify",
        body: "Remove friction, clarify processes, and eliminate unnecessary steps before automating.",
      },
      {
        title: "04. Automate",
        body: "Make repetitive work invisible, reliable, and autonomous to give time back to teams.",
      },
      {
        title: "05. Evolve",
        body: "Evolve systems naturally alongside business growth and real-world usage.",
      },
    ],
    expertiseLabel: "Expertise",
    expertise: [
      {
        title: "Cloud that scales with your business",
        desc: "Unified identities, cloud governance, and modern digital workplaces with zero physical servers.",
        tools: ["Microsoft 365", "Entra ID / Azure", "Intune", "Windows Server", "Exchange Online", "SharePoint"],
      },
      {
        title: "Removing repetitive work",
        desc: "Eliminating manual data entry and automating operational workflows across your tools.",
        tools: ["AI Workflows", "Power Automate", "n8n / Make", "API Integrations", "Scripts"],
      },
      {
        title: "AI where it actually creates value",
        desc: "Deploying useful AI agents directly integrated into daily team workflows.",
        tools: ["LLMs", "AI Agents", "Prompt Engineering", "RAG", "Model Context Protocol (MCP)"],
      },
      {
        title: "Web products built to last",
        desc: "Building bespoke web products that are fast, secure, and easy to maintain.",
        tools: ["Python", "React", "Node.js", "Next.js", "WordPress", "Shopify", "Headless CMS"],
      },
      {
        title: "Security that protects without friction",
        desc: "Protecting identities and sensitive files without slowing down team productivity.",
        tools: ["Conditional Access", "Microsoft Defender", "Zero Trust", "Antivirus", "Prevention"],
      },
      {
        title: "Strategy that aligns tech with business",
        desc: "Advisory and IT governance that turns technology into a lever of clarity and efficiency.",
        tools: ["IT Governance", "Digital Transformation", "Business Process Analysis", "Project Management", "ITIL v4", "Solution Design"],
      },
    ],
    projectsLabel: "From question to solution.",
    conversationHook: "Every project starts with a question. Technology is only part of the answer.",
    questionsList: [
      {
        name: "WhatsApp AI Assistant",
        question: "How do you make customer interaction frictionless?",
        paragraph: "Small businesses lose customers when they can't answer quickly. An AI assistant should manage bookings and orders naturally, 24/7.",
        isFeatured: true,
        badgeText: "ACTIVE SYSTEM — AVAILABLE FOR DEPLOYMENT",
        highlights: [
          "Bookings & dynamic FAQ",
          "Meta Cloud API & SQLite",
          "Telegram alerts",
          "4-step deployment script"
        ],
        link: "whatsapp-ai",
        linkText: "Deploy Solution →"
      },
      {
        name: "OutilsBelges",
        question: "How do you make complexity understandable?",
        paragraph: "Administrative rules are often difficult to understand. Good software should make them accessible without oversimplifying them.",
        highlights: [
          "47+ official calculators",
          "Built from scratch",
          "Public service platform"
        ],
        link: "https://outilsbelges.be",
        linkText: "Visit platform →"
      },
      {
        name: "Yobantel",
        question: "How do you connect people, products and logistics?",
        paragraph: "Cross-border operations involve many moving parts. The challenge is not adding more tools, but making them work together.",
        highlights: [
          "Cross-border logistics",
          "Order workflows",
          "Automation"
        ],
        link: "yobantel",
        linkText: "Case study →"
      }
    ],
    otherSelectedTitle: "Other selected work.",
    otherSelectedWork: [
      {
        name: "Microsoft Modern Workplace",
        type: "Case Study",
        link: "microsoft-workplace"
      },
      {
        name: "Kelbail",
        type: "Live",
        link: "https://kelbail.com"
      },
      {
        name: "AI Agents",
        type: "Case Study",
        link: "ai-agents"
      },
      {
        name: "CRM Platform",
        type: "Case Study",
        link: "crm-platform"
      }
    ],
    whatsappCaseStudy: {
      title: "WhatsApp AI Assistant (Bot PME)",
      subtitle: "SME WhatsApp AI Assistant for local shops (restaurants, beauty salons, hair salons, clinics, pharmacies).",
      overview: "Allows businesses to manage client interactions end-to-end: order taking, appointment scheduling, dynamic FAQ, hours lookup, and real-time Telegram alerts.",
      architecture: [
        { name: "Meta Cloud API", role: "Interface to receive and send customer WhatsApp messages" },
        { name: "Node.js Express Webhook", role: "Smart routing, business logic and validation" },
        { name: "SQLite Database", role: "Lightweight and secure storage for FAQs, hours, and orders" },
        { name: "AI Engine (OpenAI/OpenRouter API)", role: "Natural understanding and fluid contextual responses" },
        { name: "Telegram Alerts", role: "Instant manager notification for orders or critical alerts" }
      ],
      steps: [
        { num: "01", title: "Installation", desc: "Cloning and installing Node.js dependencies in less than a minute." },
        { num: "02", title: "JSON Config", desc: "Defining business profile details (business hours, FAQ database, services/menu, WhatsApp keys)." },
        { num: "03", title: "DB Onboarding", desc: "Automated onboarding script to securely seeding local SQLite database." },
        { num: "04", title: "Verification", desc: "Automated verification script diagnostics check to ensure everything is online." }
      ],
      packages: [
        { name: "Base Package", setup: "500 €", recurring: "100 €/month" },
        { name: "Pro Package", setup: "800 €", recurring: "150 €/month" }
      ]
    },
    microsoftCaseStudy: {
      title: "Microsoft Modern Workplace",
      subtitle: "Cloud, identity and Zero-Trust architecture for businesses.",
      overview: "Migrating physical servers to modern cloud instances to achieve high availability, unified security policies, and simplified device management.",
      architecture: [
        { name: "Microsoft Entra ID", role: "Unified directory and conditional access rules" },
        { name: "Microsoft Intune", role: "Endpoint governance and compliance enforcement" },
        { name: "Microsoft Defender", role: "Anti-phishing and file protection policies" }
      ],
      steps: [
        { num: "01", title: "Audit", desc: "Analyzing current physical servers and network nodes." },
        { num: "02", title: "Design", desc: "Structuring security templates and groups configurations." },
        { num: "03", title: "Migration", desc: "Zero-downtime cutover of identity profiles." }
      ],
      packages: null
    },
    yobantelCaseStudy: {
      title: "Yobantel",
      subtitle: "Cross-border logistics & financial platform for diaspora.",
      overview: "Simplifying order processing, pricing, and international payments to deliver products to West African destinations.",
      architecture: [
        { name: "React/Next.js Interface", role: "Clean consumer shopping cart flows" },
        { name: "Logistics Engine", role: "Live custom customs tax calculators" }
      ],
      steps: [
        { num: "01", title: "Research", desc: "Field research on West African delivery bottlenecks." },
        { num: "02", title: "Payment API Integration", desc: "Stripe and Mobile Money routing." }
      ],
      packages: null
    },
    aiAgentsCaseStudy: {
      title: "AI Agents",
      subtitle: "Autonomous LLM agents built to read, sort and format business intelligence documents.",
      overview: "Custom parsing workflows designed to automate indexing and reporting tasks for legal and financial documentation.",
      architecture: [
        { name: "LLM Orchestrator", role: "Context handling and evaluation" },
        { name: "Model Context Protocol", role: "Connecting agents to local file paths and internal resources" }
      ],
      steps: [
        { num: "01", title: "Mapping", desc: "Auditing manual file operations workflows." },
        { num: "02", title: "Prompt Tuning", desc: "Setting guidelines and evaluation templates." }
      ],
      packages: null
    },
    crmCaseStudy: {
      title: "CRM Platform",
      subtitle: "Bespoke database-centric CRM designed for rapid tracking and invoicing.",
      overview: "Tailored customer relations software engineered for speed, omitting heavy widgets to keep page load times under 200ms.",
      architecture: [
        { name: "SQLite Database", role: "Optimized, local file-based schema" },
        { name: "Billing Webhook", role: "Automatic invoices generation on win state" }
      ],
      steps: [
        { num: "01", title: "Flows", desc: "Structuring pipeline milestones." },
        { num: "02", title: "REST APIs", desc: "Integrating accountancy tools synchronization." }
      ],
      packages: null
    },
    contact: {
      title: "Consultation & Contact",
      line: "Let's talk about your challenges.",
      sub: "A project, a question, or a friction to eliminate? Let's discuss it.",
      statusLabel: "Status",
      statusValue: "Open for consultations & projects",
      locationLabel: "Location",
      locationValue: "Brussels, Belgium (On-site & Remote)",
      slaLabel: "Response SLA",
      slaValue: "Within 24 business hours",
      projectTypesTitle: "Select your project scope (optional)",
      projectTypes: [
        { id: "cloud", label: "☁️ Cloud & Identity Migration" },
        { id: "security", label: "🛡️ Security Audit & Defender" },
        { id: "ai", label: "🤖 Automation & AI Assistants" },
        { id: "arch", label: "📐 Architecture & IT Advisory" }
      ],
      namePh: "Your Name / Company",
      emailPh: "Your Business Email",
      messagePh: "Briefly outline your goals or challenges...",
      submit: "Send Consultation Request",
      thanks: "Request prepared successfully! Email client launching...",
      email: "nooreyni35@gmail.com",
    },
    footer: { tag: "INDEPENDENT IT CONSULTANT" },
  },
};

export default content;
