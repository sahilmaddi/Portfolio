export const profile = {
  name: 'Sahil Maddi',
  role: 'Java Full Stack Developer',
  location: 'Hyderabad, India',
  email: 'maddisahil615@gmail.com',
  phone: '+91 8317627594',
  phoneHref: 'tel:+918317627594',
  linkedin: 'https://www.linkedin.com/in/sahil-maddi/',
  github: 'https://github.com/sahilmaddi',
  resume: '/Maddi_Sahil_Java_Developer_Role_Resume.pdf',
  resumeDownloadName: 'Sahil_Maddi_Resume.pdf',
  photo: '/photo.jpeg',
};

export const stats = [
  { value: '4+', label: 'years building enterprise web apps' },
  { value: '3', label: 'companies, from IT services to enterprise teams' },
  { value: '9', label: 'projects shown in this portfolio' },
  { value: '5', label: 'active certifications (ServiceNow & Google Cloud)' },
];

export const strengths = [
  {
    icon: 'server',
    title: 'Backend & APIs',
    text: 'Spring Boot microservices and REST APIs with Spring Security and Hibernate, tuned for speed and uptime.',
  },
  {
    icon: 'layers',
    title: 'Full-stack delivery',
    text: 'React and Angular front ends wired to Java back ends, from the database schema to a responsive UI.',
  },
  {
    icon: 'workflow',
    title: 'Integration & automation',
    text: 'API platform migrations across TIBCO, MuleSoft and WSO2, ServiceNow, and AI-assisted tooling with the OpenAI API.',
  },
];

export const skills = [
  { group: 'Languages', items: ['Java', 'SQL', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { group: 'Backend', items: ['Spring Boot', 'Microservices', 'REST APIs', 'Spring Security', 'Hibernate', 'Spring XML'] },
  { group: 'Frontend', items: ['React.js', 'Angular', 'Tailwind CSS', 'Bootstrap', 'Next.js'] },
  { group: 'Data & messaging', items: ['MySQL', 'Oracle SQL', 'PostgreSQL', 'Redis', 'Kafka'] },
  { group: 'DevOps & cloud', items: ['Docker', 'Jenkins', 'Git', 'Maven', 'Gradle', 'SonarQube', 'AWS DevOps'] },
  { group: 'Platforms & tools', items: ['ServiceNow', 'TIBCO API Management', 'OpenAI API', 'Postman'] },
];

export const experience = [
  {
    company: 'HCLTech',
    role: 'Software Engineer',
    period: 'Mar 2025 – Present',
    location: 'Hyderabad & Vijayawada, India',
    points: [
      'Develop and maintain scalable enterprise software in Java, improving system stability through proactive debugging and refactoring.',
      'Optimise backend performance to improve API response times for core service modules.',
      'Collaborate with cross-functional teams in an Agile setup to deliver features on schedule.',
    ],
    tech: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'React', 'Docker'],
  },
  {
    company: 'Sage IT',
    role: 'Java Software Developer',
    period: 'Jan 2023 – Jul 2024',
    location: 'Hyderabad, India',
    points: [
      'Engineered a version migration tool for TIBCO API Management in Java and Spring XML to automate manual migration work.',
      'Designed and implemented RESTful APIs for internal accelerator tools that support cross-platform data workflows.',
      'Built SHIP AI, which automates project migration between TIBCO BW6, MuleSoft and WSO2 using OpenAI-generated XML configurations.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring XML', 'Hibernate', 'MySQL', 'OpenAI API'],
  },
  {
    company: 'LanceSoft',
    role: 'Associate Java Developer',
    period: 'May 2022 – Jan 2023',
    location: 'Hyderabad, India',
    points: [
      'Developed a full-stack hotel management application with Java Spring Boot and React.js.',
      'Built responsive front-end interfaces with HTML, CSS, JavaScript and Bootstrap.',
      'Managed data persistence and complex queries across MySQL and Oracle SQL databases.',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'Oracle SQL'],
  },
];

export const featuredProjects = [
  {
    title: 'QuickBite: Food Delivery Microservices',
    tag: 'Microservices · Kafka',
    description:
      'Food ordering platform with customer, restaurant-owner and rider apps, built as six Spring Boot services behind an API gateway.',
    points: [
      'Spring Cloud Gateway validates JWTs; Eureka discovery; order and delivery services coordinate through Kafka events.',
      'Server-side pricing, optimistic locking on orders, live order tracking in a React + Tailwind front end, Docker Compose and CI.',
    ],
    tech: ['Java 21', 'Spring Boot', 'Spring Cloud', 'Kafka', 'PostgreSQL', 'React', 'Tailwind CSS', 'Docker'],
    links: [{ label: 'Code', href: 'https://github.com/sahilmaddi/quickbite-food-delivery' }],
  },
  {
    title: 'BankFlow: Digital Banking',
    tag: 'Fintech · Microservices',
    description:
      'Banking app with accounts, instant transfers, statements and notifications, split into a core banking service and a Kafka-driven notification service.',
    points: [
      'Idempotency keys so a retried transfer never pays twice; ordered row locks so parallel transfers never overdraw.',
      'Double-entry ledger with running balances, OAuth2 resource servers (JWT), dead-letter topic, React + Tailwind front end.',
    ],
    tech: ['Java 21', 'Spring Boot', 'Spring Security', 'Kafka', 'PostgreSQL', 'React', 'Tailwind CSS', 'Docker'],
    links: [{ label: 'Code', href: 'https://github.com/sahilmaddi/bankflow-digital-banking' }],
  },
  {
    title: 'Askwise: Agentic RAG',
    tag: 'AI · RAG · LLM agents',
    description:
      'Ask questions about your documents and get answers with a citation for every fact, from an agent that searches, grades, retries and checks its own answers.',
    points: [
      'Hybrid retrieval (vector + BM25 with rank fusion), Prompty prompts, pluggable LLMs: Llama via Ollama, Azure OpenAI, OpenAI, Mistral.',
      'Tika/OCR ingestion, FAISS, Milvus or Azure AI Search; OpenTelemetry to Grafana; Docker, Kubernetes and Terraform on Azure Container Apps.',
    ],
    tech: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'React', 'Tailwind CSS', 'Docker', 'Kubernetes', 'Terraform'],
    links: [{ label: 'Code', href: 'https://github.com/sahilmaddi/askwise-agentic-rag' }],
  },
  {
    title: 'IntelliMeet AI',
    tag: 'AI · Real-time video',
    description:
      'Video conferencing app with live transcription, AI meeting summaries, link extraction and a Q&A assistant that answers questions about the meeting.',
    points: [
      'Peer-to-peer WebRTC calls for multiple participants, with signalling over WebSocket (STOMP).',
      'Spring Boot 3 back end on PostgreSQL, plus a Python FastAPI service for the AI features.',
    ],
    tech: ['Java 17', 'Spring Boot', 'WebSocket', 'WebRTC', 'React', 'PostgreSQL', 'FastAPI'],
    links: [{ label: 'Code', href: 'https://github.com/sahilmaddi/intellimeet-ai' }],
  },
  {
    title: 'HireHub: Job Portal',
    tag: 'Full stack',
    description: 'Job portal where candidates search and apply for jobs and recruiters post roles and move applicants through a hiring pipeline.',
    points: [
      'Spring Security with JWT and role-based access; dynamic job search with JPA Specifications and pagination.',
      'Validated status workflow with an audit trail, recruiter dashboard, React + Tailwind front end, Docker Compose and CI.',
    ],
    tech: ['Java 21', 'Spring Boot', 'Spring Security', 'JPA', 'PostgreSQL', 'React', 'Tailwind CSS'],
    links: [{ label: 'Code', href: 'https://github.com/sahilmaddi/hirehub-job-portal' }],
  },
  {
    title: 'Microservices E-Commerce Platform',
    tag: 'Distributed systems',
    description: 'A scalable e-commerce platform built as independent Spring Boot microservices with an Angular front end.',
    points: [
      'Eureka service discovery, Zipkin distributed tracing, Kafka for real-time messaging and Redis caching.',
      'Razorpay payments, with a CI/CD pipeline on Jenkins, SonarQube and Docker for automated testing and deployment.',
    ],
    tech: ['Spring Boot', 'Angular', 'Kafka', 'Redis', 'Eureka', 'Docker', 'Jenkins'],
    links: [],
    note: 'Repository not public',
  },
  {
    title: 'SHIP AI: API Migration Tool',
    tag: 'Built at Sage IT',
    description:
      'Sage IT Hub for Integration Platforms: a tool that automates migrating integration projects between TIBCO BW6, MuleSoft and WSO2.',
    points: [
      'Uses the OpenAI API to generate XML configurations from tool requirements and company templates.',
      'Tested end to end with Postman and SoapUI to keep data and tool compatibility intact.',
    ],
    tech: ['Java', 'Spring XML', 'OpenAI API', 'Postman', 'SoapUI'],
    links: [],
    note: 'Company project',
  },
  {
    title: 'Polling App',
    tag: 'Full stack · Live',
    description: 'Web app for creating polls and voting on them, with results that update in real time.',
    points: [
      'Separate Admin and User dashboards with role-based access control through Spring Security.',
      'Client and server containerised and run together with Docker Compose.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'React', 'Docker'],
    links: [
      { label: 'Live demo', href: 'https://poll-your-opinion.vercel.app/' },
      { label: 'Code', href: 'https://github.com/sahilmaddi/polling' },
    ],
  },
];

export const moreProjects = [
  {
    title: 'VCIOUS: Hotel Management System',
    description: 'Room booking, customer management and multi-branch support, with Twilio SMS verification and email notifications.',
    tech: ['Spring Boot', 'Spring Security', 'React', 'MySQL', 'Twilio'],
    links: [{ label: 'Frontend code', href: 'https://github.com/sahilmaddi/hotel-react-component' }],
  },
  {
    title: 'SketchToCode',
    description: 'Upload a hand-drawn UI sketch, pick a framework and get starter code from a Spring Boot API that orchestrates a Python service.',
    tech: ['Spring Boot', 'Python', 'Flask', 'React', 'Docker'],
    links: [
      { label: 'Frontend code', href: 'https://github.com/sahilmaddi/sketchtocode' },
      { label: 'Backend code', href: 'https://github.com/sahilmaddi/springboot-sketchtocode' },
    ],
  },
  {
    title: 'Pokémon Trading Cards',
    description: 'Card collection app with a full CRUD Spring Boot REST API, a bulk card-generation endpoint and a React front end.',
    tech: ['Spring Boot', 'React', 'Docker'],
    links: [{ label: 'Code', href: 'https://github.com/sahilmaddi/pokemon-trading-cards' }],
  },
  {
    title: 'Payment Integration API',
    description: 'Spring Boot service that creates orders, handles Razorpay payment callbacks and sends email confirmations.',
    tech: ['Spring Boot', 'Razorpay', 'MySQL'],
    links: [{ label: 'Code', href: 'https://github.com/sahilmaddi/Payment_Integration_API' }],
  },
  {
    title: 'User Management System',
    description: 'Registration, login and password reset by email, with dependent country, state and city dropdowns.',
    tech: ['Spring Boot', 'Thymeleaf', 'MySQL', 'Spring Mail'],
    links: [{ label: 'Code', href: 'https://github.com/sahilmaddi/usermgmt' }],
  },
];

export const certifications = [
  {
    name: 'Certified System Administrator (CSA)',
    issuer: 'ServiceNow',
    date: 'Dec 2025',
    href: 'https://www.credly.com/badges/36d53276-f938-47e3-a2bf-fbd9bf21e47c',
  },
  {
    name: 'Certified Application Developer (CAD)',
    issuer: 'ServiceNow',
    date: 'Oct 2025',
    href: 'https://www.credly.com/badges/72f0e23e-e383-48f8-bebc-e4eb9daa87d2',
  },
  {
    name: 'Deploy an Agent with Agent Development Kit (ADK)',
    issuer: 'Google Cloud',
    date: 'Nov 2026',
    href: 'https://www.credly.com/badges/c477205a-060a-4fd4-8128-a5dfc1fa597d',
  },
  {
    name: 'Evaluate and Improve Agent Development Kit Agents',
    issuer: 'Google Cloud',
    date: 'Nov 2026',
    href: 'https://www.credly.com/badges/78a4b22e-f9e5-428d-89cd-5e25039affc5',
  },
  {
    name: 'Accelerate Development with Antigravity',
    issuer: 'Google Cloud',
    date: 'Nov 2026',
    href: 'https://www.credly.com/badges/e0e96c90-b724-49c2-aa2a-0e905a58d3a3',
  },
];

export const education = [
  { degree: 'M.Tech, Computer Science', school: 'VNR Vignana Jyothi Institute of Engineering & Technology', place: 'Hyderabad' },
  { degree: 'B.Tech, Computer Science & Engineering', school: 'Bennett University', place: 'Greater Noida' },
];
