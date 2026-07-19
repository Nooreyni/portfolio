// Bilingual content. Every claim here is real — no invented metrics, no fictional clients.
const content = {
  fr: {
    nav: { manifesto: "Manifeste", expertise: "Expertise", projects: "Projets", contact: "Contact", langLabel: "EN" },
    hero: {
      label: "Ousmane Diop — Architecte de systèmes numériques, Bruxelles",
      line1: "Concevoir",
      line2: "des systèmes",
      line3: "intelligents.",
      sub: "Je transforme des architectures complexes en systèmes clairs, automatisés et durables.",
    },
    manifesto: {
      statement: "Je transforme la complexité en clarté.",
      body: "La simplicité n'est pas un point de départ. C'est le résultat d'une architecture pensée avec rigueur — où chaque composant a une raison d'exister.",
    },
    marqueeItems: [
      "Complexité → Clarté",
      "Architecture",
      "Automatisation",
      "Systèmes intelligents",
      "Gouvernance",
      "Impact",
    ],
    chaptersLabel: "Approche",
    chapters: [
      {
        title: "Complexité",
        body: "Une PME jongle avec quinze outils qui s'ignorent. Doubles saisies, commandes perdues, démarches administratives belges qui ralentissent tout.",
      },
      {
        title: "Architecture",
        body: "Avant d'automatiser, je dessine le système. Tenants Microsoft 365, identités, flux de données — la gouvernance d'abord.",
      },
      {
        title: "Automatisation",
        body: "Le client commande sur WhatsApp. Le système reçoit, comprend, confirme, enregistre — sans intervention humaine.",
      },
      {
        title: "Optimisation",
        body: "Une obligation administrative devient un calcul instantané. Affiner en continu jusqu'à ce que le système devienne invisible.",
      },
      {
        title: "Impact",
        body: "Un système réussi ne se remarque plus. Il fonctionne — silencieusement, durablement. Du temps rendu, des décisions plus rapides.",
      },
    ],
    expertiseLabel: "Expertise",
    expertise: [
      {
        title: "Cloud & identité",
        desc: "Des environnements Microsoft 365 et Azure gouvernés, pas seulement déployés.",
        tools: ["Microsoft 365", "Azure AD", "Intune", "Windows Server"],
      },
      {
        title: "Automatisation",
        desc: "Des processus manuels transformés en flux fiables, mesurables.",
        tools: ["Power Automate", "Python", "SharePoint", "Scripts"],
      },
      {
        title: "Intelligence artificielle",
        desc: "Des agents conçus pour un usage réel, jamais pour la démonstration.",
        tools: ["OpenAI", "OpenRouter", "Prompt engineering", "Agents IA"],
      },
      {
        title: "Sécurité",
        desc: "Une conformité qui protège sans ralentir les équipes.",
        tools: ["Conditional Access", "Defender", "ESET", "Fortinet"],
      },
      {
        title: "Développement",
        desc: "Des produits web construits pour durer, pas pour paraître.",
        tools: ["React", "Node.js", "SQLite", "Python"],
      },
      {
        title: "Conseil & gouvernance",
        desc: "Une lecture claire de systèmes que plus personne ne comprend vraiment.",
        tools: ["ITIL v4", "Audit IT", "Stratégie", "Gestion de projet"],
      },
    ],
    projectsLabel: "Études de cas",
    caseLabels: { problem: "Problème", thinking: "Réflexion", architecture: "Architecture", outcome: "État actuel" },
    projects: [
      {
        name: "Assistant IA WhatsApp",
        tag: "Produit — validé en conditions réelles",
        problem: "Les commandes se noient dans les conversations WhatsApp — questions, réservations et commandes mélangées, sans suivi.",
        thinking: "Aller où le client est déjà, sans lui demander d'installer une application ni de créer un compte.",
        architecture: "Réception du message, compréhension du langage naturel, machine à états pour la commande, confirmation et enregistrement — multi-langue (FR/NL/EN), testé de bout en bout.",
        outcome: "Le système fonctionne de bout en bout, validé en conditions réelles. En recherche d'un premier commerce pilote.",
      },
      {
        name: "outilsbelges.be",
        tag: "Projet personnel — en production",
        problem: "Les démarches administratives belges (salaire net, TVA, crédit, véhicule…) sont dispersées entre des simulateurs peu fiables ou payants.",
        thinking: "Centraliser, vulgariser, rendre gratuit et instantané ce qui prend habituellement un rendez-vous ou un tableur.",
        architecture: "Portail de calculateurs conçu, développé et optimisé SEO de bout en bout, chaque résultat sourcé sur les barèmes officiels belges.",
        outcome: "47 outils en ligne, en production, trafic organique en croissance.",
      },
    ],
    contact: {
      line: "Discutons de votre prochain système.",
      namePh: "Nom",
      messagePh: "Votre message",
      submit: "Envoyer",
      thanks: "Message reçu. Réponse sous 48h.",
      email: "nooreyni35@gmail.com",
    },
    footer: { tag: "ARCHITECTE DE SYSTÈMES NUMÉRIQUES" },
  },
  en: {
    nav: { manifesto: "Manifesto", expertise: "Expertise", projects: "Work", contact: "Contact", langLabel: "FR" },
    hero: {
      label: "Ousmane Diop — Digital Systems Architect, Brussels",
      line1: "Building",
      line2: "intelligent",
      line3: "digital systems.",
      sub: "I turn complex architecture into clear, automated, lasting systems.",
    },
    manifesto: {
      statement: "I transform complexity into clarity.",
      body: "Simplicity isn't a starting point. It's the outcome of architecture thought through with rigor — where every component has a reason to exist.",
    },
    marqueeItems: [
      "Complexity → Clarity",
      "Architecture",
      "Automation",
      "Intelligent systems",
      "Governance",
      "Impact",
    ],
    chaptersLabel: "Approach",
    chapters: [
      {
        title: "Complexity",
        body: "An SME juggles fifteen tools that ignore each other. Double entries, lost orders, Belgian admin processes that slow everything down.",
      },
      {
        title: "Architecture",
        body: "Before automating, I map the system. Microsoft 365 tenants, identities, data flows — governance first.",
      },
      {
        title: "Automation",
        body: "The customer orders on WhatsApp. The system receives, understands, confirms, records — no human intervention.",
      },
      {
        title: "Optimization",
        body: "An administrative obligation becomes an instant calculation. Refined continuously until the system becomes invisible.",
      },
      {
        title: "Impact",
        body: "A successful system goes unnoticed. It simply works — quietly, durably. Time returned, faster decisions.",
      },
    ],
    expertiseLabel: "Expertise",
    expertise: [
      {
        title: "Cloud & identity",
        desc: "Microsoft 365 and Azure environments governed, not just deployed.",
        tools: ["Microsoft 365", "Azure AD", "Intune", "Windows Server"],
      },
      {
        title: "Automation",
        desc: "Manual processes turned into reliable, measurable flows.",
        tools: ["Power Automate", "Python", "SharePoint", "Scripts"],
      },
      {
        title: "Artificial intelligence",
        desc: "Agents built for real use, never for the demo.",
        tools: ["OpenAI", "OpenRouter", "Prompt engineering", "AI agents"],
      },
      {
        title: "Security",
        desc: "Compliance that protects without slowing teams down.",
        tools: ["Conditional Access", "Defender", "ESET", "Fortinet"],
      },
      {
        title: "Development",
        desc: "Web products built to last, not to look good in a demo.",
        tools: ["React", "Node.js", "SQLite", "Python"],
      },
      {
        title: "Consulting & governance",
        desc: "A clear read on systems nobody fully understands anymore.",
        tools: ["ITIL v4", "IT audit", "Strategy", "Project management"],
      },
    ],
    projectsLabel: "Case studies",
    caseLabels: { problem: "Problem", thinking: "Thinking", architecture: "Architecture", outcome: "Current state" },
    projects: [
      {
        name: "WhatsApp AI Assistant",
        tag: "Product — validated in real conditions",
        problem: "Orders drown in WhatsApp conversations — questions, bookings and orders mixed together, with no tracking.",
        thinking: "Go where the customer already is, without asking them to install an app or create an account.",
        architecture: "Message intake, natural language understanding, an order state machine, confirmation and logging — multi-language (FR/NL/EN), tested end to end.",
        outcome: "The system works end to end, validated in real conditions. Looking for a first pilot business.",
      },
      {
        name: "outilsbelges.be",
        tag: "Personal project — in production",
        problem: "Belgian administrative processes (net salary, VAT, loans, vehicles…) are scattered across unreliable or paywalled simulators.",
        thinking: "Centralize, simplify, and make instant and free what usually takes an appointment or a spreadsheet.",
        architecture: "A calculator portal designed, built and SEO-optimized end to end, every result sourced from official Belgian tables.",
        outcome: "47 tools live in production, growing organic traffic.",
      },
    ],
    contact: {
      line: "Let's discuss your next system.",
      namePh: "Name",
      messagePh: "Your message",
      submit: "Send",
      thanks: "Message received. I'll reply within 48h.",
      email: "nooreyni35@gmail.com",
    },
    footer: { tag: "DIGITAL SYSTEMS ARCHITECT" },
  },
};

export default content;
