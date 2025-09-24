"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/portfolio-me.png"
              alt="Avi Tuchband Portrait"
              width={192}
              height={192}
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 1 }}
      >
        <span className="font-bold">Hello, I'm Avi.</span> I'm a{" "}
        <span className="font-bold">Fullstack & Cloud Engineer</span> with{" "}
        <span className="font-bold">5+ years</span> of experience specializing in{" "}
        <span className="underline">Next.js, Spring Boot, and Python</span>. I have strong expertise in{" "}
        <span className="font-bold">cloud-native architectures</span> (GCP, AWS, Kubernetes) and{" "}
        <span className="font-bold">Generative AI</span> with LLMs and AI Agents.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none  hover:bg-gray-950 hoverButton transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="https://docs.google.com/document/d/1tCHnJvd2t_wvr-vRpGGGfip_JzxnhQzZ/edit?usp=sharing&ouid=104445693280903602450&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hoverButton transition cursor-pointer borderBlack dark:bg-white/10"
        >
          View CV
          <IoEyeOutline className=" opacity-60 group-hover:scale-110" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/avituchband/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Avitoohband"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
