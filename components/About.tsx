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
        <span className="font-medium"></span>
        Ever since I was young, I have been enthusiastic about everything
        related to computers. I worked as a{" "}
        <span className="font-medium">System Administrator</span> and provided{" "}
        <span className="font-medium">Technical Assistance</span> for
        approximately <span className="font-medium">six years.</span> During
        this time, I pursued studies at{" "}
        <span className="font-medium">Open University</span> in both{" "}
        <span className="font-medium">Psychology and Computer Science. </span>
        Additionally, I engaged in practical courses such as{" "}
        <span className="font-medium">Fullstack development</span> using{" "}
        <span className="font-medium">
          Spring Boot with Java and Angular with TypeScript,
        </span>{" "}
        and I completed various online courses related to{" "}
        <span className="font-medium">Web Development.</span> The moment I
        encountered code for the first time, I quickly {" "}
        <span className="underline">cultivated a keen interest</span> in programming.
        I'm driven by{" "}
        <span className="font-medium">a passion for problem-solving</span> and
        I'm always{" "}
        <span className="font-medium">
          eager to take on the next challenge.
        </span>{" "}
        I value <span className="font-medium">teamwork,</span>{" "}
        <span className="font-medium">creativity,</span> and{" "}
        <span className="font-medium">continuous learning. </span>
        My core stack includes{" "}
        <span className="font-medium">
          Spring Boot, React, Next.js, Node.js, TypeScript, and MongoDB.
        </span>{" "}
        I am always{" "}
        <span className="font-medium">looking to learn new technologies</span>{" "}
        and <span className="font-medium">looking for new challenges</span> as a
        full-stack developer. My goto quote:{" "}
        <span className="italic">
          {" "}
          "Coding Isn’t About What You Know, It’s About What You Can Figure Out"
        </span>{" "}
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
