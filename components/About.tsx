"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="scroll-mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I'm a <span className="font-medium">Fullstack & Cloud Engineer</span> with{" "}
        <span className="font-medium">5+ years of experience</span> in software development, 
        specializing in <span className="font-medium">Next.js, Spring Boot, and Python</span>. 
        Currently, I work as a <span className="font-medium">Backend & Infrastructure Engineer</span> at{" "}
        <span className="font-medium">Bank Discount</span>, where I build{" "}
        <span className="font-medium">Helm configurations</span> and deploy{" "}
        <span className="font-medium">microservices on GKE</span> including Redis, Postgres, 
        and business-critical services. I've led the{" "}
        <span className="font-medium">migration of on-prem systems to GCP</span> and 
        contributed to cloud-native architecture decisions.
      </p>

      <p className="mb-3">
        Previously, I worked as a <span className="font-medium">Software Backend Developer</span> at{" "}
        <span className="font-medium">Bank Hapoalim</span> for 3 years, specializing in{" "}
        <span className="font-medium">Microservices environments</span> and creating{" "}
        <span className="font-medium">RESTful APIs</span>. I implemented{" "}
        <span className="font-medium">CI/CD pipelines</span> with Jenkins, OpenShift, 
        and worked extensively with <span className="font-medium">multithreaded environments</span> using 
        CompletableFutures and Java Generics. I also collaborated with AWS mentors on implementing 
        innovative remote control technology.
      </p>

      <p className="mb-3">
        I have strong expertise in <span className="font-medium">cloud-native architectures</span> 
        (GCP, AWS, Kubernetes, Docker) and <span className="font-medium">scalable microservices</span>. 
        Recently, I've been diving deep into <span className="font-medium">Generative AI and LLMs</span>, 
        with hands-on experience in <span className="font-medium">AI Agent development</span>, 
        integrating frameworks like <span className="font-medium">LangChain, HuggingFace, OpenAI API, and FastAPI</span> 
        to build intelligent services. My core stack includes{" "}
        <span className="font-medium">
          Spring Boot, Next.js, React, Python, GCP, Kubernetes, and PostgreSQL.
        </span>{" "}
        I'm passionate about <span className="font-medium">continuous learning</span> and always{" "}
        <span className="font-medium">eager to tackle new challenges</span> in the evolving tech landscape.
      </p>

      <p>
        <span className="italic">When I'm not coding,</span> I enjoy playing
        video games, watching anime, exercising and dancing Bachata.{" "}
        <span className="font-medium">
          I also find pleasure in learning new skills,
        </span>{" "}
        such as playing the piano and studying foreign languages.
      </p>
    </motion.section>
  );
}
