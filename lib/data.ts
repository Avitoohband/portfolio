import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import assemblerParserImg from "@/public/assembler-parser.png";
import carRentalImg from "@/public/car-rental.png";
import couponSystemImg from "@/public/coupon-system.png";
import portfolioProjectImg from "@/public/portfolio-project.png";
import microservicesSbImg from "@/public/microservices-sb.png";
import notesImg from "@/public/notes.png";
import pythonImg from "@/public/python.png";
import calculatorApiImg from "@/public/calculator-api.png";
import coLoreImg from "@/public/CoLore.png";
import javaImg from "@/public/java.png";
import employeeMgntImg from "@/public/employee-mgnt.png";
import mcpBookmarkImg from "@/public/mcp-bookmark.png";
import triviaClientImg from "@/public/trivia-client.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    id: "e1",
    title: "Backend & Infrastructure Engineer",
    location: "Bank Discount, Rishon Lezion",
    description:
      "Built Helm configurations and deployed microservices on GKE (Redis, Postgres, ODS, business-critical services). Developed shared infrastructure modules: Auth, JWT, API Gateway, Error Handling, WebClient, Swagger/OpenAPI. Led migration of on-prem systems to GCP and contributed to cloud-native architecture decisions.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
  {
    id: "e2",
    title: "Software Backend Developer",
    location: "Bank Hapoalim, Tel Aviv",
    description:
      "Specialized in developing Microservices environment and creating RESTful APIs. Implemented CI/CD pipelines with Jenkins, OpenShift, and Cloudia. Worked in multithreaded environments using CompletableFutures and Java Generics. Collaborated with AWS mentors on implementing innovative remote control technology.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
  {
    id: "e3",
    title: "System Administrator / Technical Assistance",
    location: "John Bryce, Jerusalem",
    description:
      "Managed IT systems, networks, and technical support for hundreds of users. Administered Pearson VUE Test Center and coordinated certification exam delivery.",
    icon: React.createElement(CgWorkAlt),
    date: "2015 - 2021",
  },
  {
    id: "e4",
    title: "B.A Psychology and Computer Science",
    location: "Open University, ISR",
    description:
      "Completed courses: Calculus, Linear Algebra, Data Structures & Algorithms, Operating Systems, Computer Organization Principles, Database Management Systems, Object-Oriented Programming using Java, Systems Programming Laboratory using C, Advanced Programming using Java, and various Psychology courses. GPA: 85",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    id: "e5",
    title: "Complete Generative AI Course with LangChain & HuggingFace",
    location: "Online Course",
    description:
      "Comprehensive course covering Generative AI, Large Language Models, LangChain framework, HuggingFace transformers, and practical AI application development.",
    icon: React.createElement(FaReact),
    date: "2025",
  },
  {
    id: "e6",
    title: "LLM Engineering: Master AI, Large Language Models & Agents",
    location: "Online Course",
    description:
      "Advanced course focusing on LLM engineering, AI agent development, and building intelligent systems with large language models.",
    icon: React.createElement(FaReact),
    date: "2025",
  },
  {
    id: "e7",
    title: "The Complete Agentic AI Engineering Course",
    location: "Online Course",
    description:
      "Specialized training in building AI agents, autonomous systems, and intelligent automation using modern AI frameworks.",
    icon: React.createElement(FaReact),
    date: "2025",
  },
  {
    id: "e8",
    title: "Professional PostgreSQL",
    location: "Brillix",
    description:
      "Advanced PostgreSQL database administration, optimization, and development course covering enterprise-level database management.",
    icon: React.createElement(LuGraduationCap),
    date: "2025",
  },
  {
    id: "e9",
    title: "Google Kubernetes Engine & Application Development",
    location: "Google Cloud",
    description:
      "Comprehensive training in GKE cluster management, containerized application deployment, and Kubernetes best practices on Google Cloud Platform.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    id: "e10",
    title: "Google Cloud Fundamentals",
    location: "Google Cloud",
    description:
      "Foundation course covering Google Cloud Platform services, architecture, and cloud computing fundamentals.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    id: "e11",
    title: "Splunk Dashboard Studio",
    location: "Splunk",
    description:
      "Training in creating advanced dashboards, data visualization, and analytics using Splunk's Dashboard Studio platform.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    id: "e12",
    title: "Cloud Computing with Amazon AWS",
    location: "Amazon Web Services",
    description:
      "Comprehensive AWS cloud computing course covering core services, architecture, and cloud deployment strategies.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    id: "e13",
    title: "Web Development with Node.js & React Bootcamp",
    location: "Online Bootcamp",
    description:
      "Intensive bootcamp covering full-stack web development with Node.js backend and React frontend development.",
    icon: React.createElement(FaReact),
    date: "2022/2023",
  },
  {
    id: "e14",
    title: "Next.js Web Development Studies",
    location: "Online Course",
    description:
      "Specialized training in Next.js framework, server-side rendering, static site generation, and modern React development patterns.",
    icon: React.createElement(FaReact),
    date: "2022/2023",
  },
  {
    id: "e15",
    title: "Spring Boot Java and Angular Fullstack Developer",
    location: "John Bryce College",
    description:
      "Full-stack development course combining Java Spring Boot backend with Angular TypeScript frontend, including database integration and RESTful API development.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    id: "e16",
    title: "MCSA – Microsoft Certified Solutions Associate",
    location: "Microsoft Certification",
    description:
      "Microsoft certification demonstrating expertise in Windows Server administration, Active Directory, and Microsoft enterprise solutions.",
    icon: React.createElement(LuGraduationCap),
    date: "2015",
  },
  {
    id: "e17",
    title: "CCNA – Cisco Certified Network Associate",
    location: "Cisco Certification",
    description:
      "Cisco networking certification covering network fundamentals, routing and switching, security, and network troubleshooting.",
    icon: React.createElement(LuGraduationCap),
    date: "2014",
  },
  {
    id: "e18",
    title: "Electrical and Electronics Engineering",
    location: "Mekif Gilo",
    description:
      "Technical education in electrical and electronics engineering, providing foundation in hardware systems and electronic circuit design.",
    icon: React.createElement(LuGraduationCap),
    date: "2012",
  },
] as const;

export const projectsData = [
  {
    id: "p1",
    title: "AI RAG Agent",
    description:
      "A Retrieval-Augmented Generation (RAG) application that answers questions about restaurant reviews using LangChain, Ollama, and ChromaDB.",
    tags: ["Python", "LangChain", "Ollama", "ChromaDB", "RAG", "AI"],
    imageUrl: pythonImg,
    githubUrl: "https://github.com/Avitoohband/ai-rag-agent",
  },
  {
    id: "p2",
    title: "AI Search Agent",
    description:
      "A powerful multi-source research agent that combines Google, Bing, and Reddit searches to provide comprehensive, well-researched answers to any question. Built with LangGraph and powered by GPT-4o.",
    tags: ["Python", "LangGraph", "GPT-4o", "AI Agents", "Multi-search"],
    imageUrl: pythonImg,
    githubUrl: "https://github.com/Avitoohband/ai-search-agent",
  },
  {
    id: "p3",
    title: "MCP Bookmark Manager",
    description:
      "A modern bookmark management application built with Next.js that doubles as a Model Context Protocol (MCP) server, providing AI assistants with bookmark management capabilities.",
    tags: ["Next.js", "MCP", "TypeScript", "AI Integration", "Bookmark Management"],
    imageUrl: mcpBookmarkImg,
    githubUrl: "https://github.com/Avitoohband/bookmark-manager",
  },
  {
    id: "p4",
    title: "CoLore",
    description:
      "A local-only, browser-based storytelling game built with Next.js, Tailwind CSS, and Zustand. Players take turns creating stories together with AI assistance.",
    tags: ["Next.js", "Tailwind CSS", "Zustand", "AI Storytelling", "Game"],
    imageUrl: coLoreImg,
    githubUrl: "https://github.com/Avitoohband/colore-client",
  },
  {
    id: "p5",
    title: "Employee Management System",
    description:
      "A Node.js end-to-end application featuring an employee management dashboard with full CRUD operations and modern UI.",
    tags: ["Node.js", "Express", "React", "MongoDB", "Full-stack"],
    imageUrl: employeeMgntImg,
    githubUrl: "https://github.com/Avitoohband/employee-mng-server",
    githubClientUrl: "https://github.com/Avitoohband/employee-mng-client",
  },
  {
    id: "p6",
    title: "Question Trivia",
    description:
      "A full-stack trivia application with real-time question management and interactive quiz functionality.",
    tags: ["Full-stack", "Trivia", "React", "Node.js", "Real-time"],
    imageUrl: triviaClientImg,
    githubUrl: "https://github.com/Avitoohband/msbit-question-server",
    githubClientUrl: "https://github.com/Avitoohband/msbit-question-client",
  },
  {
    id: "p7",
    title: "Calculator API with JWT",
    description:
      "Node.js Calculator API with JWT Authentication. This application provides a simple calculator API that performs basic arithmetic operations such as addition, subtraction, multiplication, and division with JWT-based authentication.",
    tags: ["Node.js", "JWT", "REST API", "Authentication", "Calculator"],
    imageUrl: calculatorApiImg,
    githubUrl: "https://github.com/Avitoohband/calc-server",
  },
  {
    id: "p8",
    title: "Transaction Bank Project",
    description:
      "Java microservice project. This Spring Boot application handles transaction operations with support for creating, updating, deleting, and fetching transactions. Includes filtering by type, amount, and date range, plus transaction summary calculations.",
    tags: ["Java", "Spring Boot", "Microservices", "REST API", "Banking"],
    imageUrl: javaImg,
    githubUrl: "https://github.com/Avitoohband/transaction-java-curl",
  },
  {
    id: "p9",
    title: "Customer Complaints Management",
    description:
      "Java microservice application that creates and retrieves customer complaints with comprehensive complaint management functionality.",
    tags: ["Java", "Spring Boot", "Microservices", "Customer Management"],
    imageUrl: javaImg,
    githubUrl: "https://github.com/Avitoohband/intuit-customer-complaint-mng",
  },
  {
    id: "p10",
    title: "Car Rental",
    description:
      "A web app that features a car showcase presenting detailed car information with accompanying pictures. It enables modern search capabilities with autocomplete, a modern user-friendly interface, utilizing server-side rendering, type safety, and accessible UI components.",
    tags: ["Next.js", "React", "Tailwind CSS", "HeadlessUI", "TypeScript"],
    imageUrl: carRentalImg,
    githubUrl: "https://github.com/Avitoohband/car-rental",
    deploymentUrl: "https://avi-car-rental.vercel.app/",
  },
  {
    id: "p11",
    title: "Portfolio",
    description:
      "A personal portfolio site that is essentially a showcase of my skills and projects as a full-stack developer.",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "React Email",
      "Resend",
    ],
    imageUrl: portfolioProjectImg,
    githubUrl: "https://github.com/Avitoohband/portfolio",
  },
  {
    id: "p12",
    title: "Coupon System",
    description:
      "A system that operates as a global data store for purchasing and managing shopping coupons. Server side written with Spring Boot Java, client side made with Angular.",
    tags: ["Spring Boot", "Java", "Angular", "TypeScript", "SQL"],
    imageUrl: couponSystemImg,
    githubUrl: "https://github.com/Avitoohband/Coupon-System-Project",
  },
  {
    id: "p13",
    title: "Assembler Parser",
    description:
      "A C program that reads and converts assembly to octal and binary files.",
    tags: ["C"],
    imageUrl: assemblerParserImg,
    githubUrl: "https://github.com/Avitoohband/C-exercises/tree/main/Assembler%20Parser",
  },
] as const;

export const skillsData = [
  // AI & Generative AI
  "LLMs",
  "AI Agents",
  "LangChain",
  "LangGraph",
  "HuggingFace",
  "OpenAI API",
  "FastAPI",
  
  // Programming Languages
  "Java",
  "Python",
  "TypeScript",
  "JavaScript",
  "C",
  "C++",
  "HTML",
  "CSS",
  
  // Fullstack Development
  "Next.js",
  "React",
  "Node.js",
  "Spring Boot",
  "Angular",
  "Express",
  "Tailwind CSS",
  "Headless UI",
  "Redux",
  "Framer Motion",
  "React Email",
  
  // Cloud & DevOps
  "GCP",
  "AWS",
  "Docker",
  "Kubernetes",
  "GKE",
  "Helm",
  "CI/CD",
  "Jenkins",
  "OpenShift",
  "Redis",
  
  // Databases
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  
  // Tools & Frameworks
  "Maven",
  "Gradle",
  "JUnit",
  "Mockito",
  "Git",
  "Postman",
  "Swagger",
  "OpenAPI",
  "Kafka",
  "Grafana",
  "Splunk",
  "Atlassian Suite",
  "VSC",
  "IntelliJ",
] as const;
