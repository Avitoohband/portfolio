import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import assemblerParserImg from "@/public/assembler-parser.png";
import carRentalImg from "@/public/car-rental.png";
import couponSystemImg from "@/public/coupon-system.png";
import portfolioProjectImg from "@/public/portfolio-project.png"

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
    title: " System Administrator and Technical Assistance",
    location: "Jerusalem, ISR",
    description:
      "I ensured seamless IT operations, supported classes, and managed personnel while overseeing international exams at the Pearson VUE Center.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2021 ",
  },
  {
    id: "e2",
    title: "Scrum Master and a Backend Java Developer",
    location: "Tel-Aviv, ISR",
    description:
      "I'm a Scrum Master at Bank Hapoalim, leading Agile projects with expertise in CI/CD, Microservices, Java development, ETL processes, error analysis, and Java testing. I've also collaborated on AWS projects during a Hackathon.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    id: "p1",
    title: "Assembler Parser",
    description:
      "A C program that reads and converts assembly to octal and binary files.",
    tags: ["C"],
    imageUrl: assemblerParserImg,
  },
  {
    id: "p2",
    title: "Coupon System",
    description:
      "A system which operates as a global data store for purchasing and managing shopping coupons. Server side written with Spring Boot Java, client side made with Angular.",
    tags: ["Spring Boot", "Java", "Angular", "Angular", "SQL"],
    imageUrl: couponSystemImg,
  },
  {
    id: "p3",
    title: "Car Rental",
    description:
      "A web app features a car showcase that presents detailed car information along with accompanying pictures. It enables modern search capabilities with autocomplete, a modern user-friendly interface, utilizing server-side rendering, type safety, and accessible UI components.",
    tags: ["NextJs", "React", "Tailwind CSS", "HeadlessUi", "TypeScript"],
    imageUrl: carRentalImg,
  },
  {
    id: "p4",
    title: "Profolio",
    description:
      "A personal portfolio site that is essentially a showcase of my skills and projects as a full-stack developer",
    tags: ["NextJs", "React", "Tailwind CSS", "Framer Motion", "TypeScript", "Email"],
    imageUrl: portfolioProjectImg,
  },
] as const;

export const skillsData = [
  "Java",
  "C",
  "C++",
  "Python",
  "TypeScript",
  "JavaScript",
  "CSS",
  "HTML",
  "Spring Boot",
  "Maven",
  "Gradle",
  "NodeJs",
  "Express",
  "React",
  "Next.Js",
  "Tailwind CSS",
  "Headless UI",
  "Redux",
  "Angular",
  "JUnit",
  "Mockito",
  "OCP",
  "Jenkins",
  "CI/CD",
  "Grafana",
  "Splunk",
  "Docker",
  "Kubernetes",
  "Atlassian Suite",
  "Git",
  "Postman",
  "Swagger",
  "OpenAPI",
  "Quilliup",
  "Kafka",
  "Windows",
  "VSC",
  "IntelliJ",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
] as const;
