"use client";

import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  githubClientUrl,
  deploymentUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className="group mb-3 sm:mb-8 last:mb-0 "
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section className=" bg-gray-100 max-w-[48rem] border border-black/5 rounded-lg sm:group-even:pl-8 overflow-hidden sm:pr-8 relative sm:h-[25rem] hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[50%]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-22 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          
          {/* Links Section */}
          <div className="flex flex-wrap gap-3 mt-4 items-center">
            {githubUrl && (
              <div className="flex items-center gap-1">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-950 dark:text-white/70 dark:hover:text-white transition"
                  title="View GitHub Repository"
                >
                  <FaGithubSquare size={24} />
                </a>
                {githubClientUrl && (
                  <span className="text-xs text-gray-600 dark:text-white/50 ml-1">Server</span>
                )}
              </div>
            )}
            {githubClientUrl && (
              <div className="flex items-center gap-1">
                <a
                  href={githubClientUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-950 dark:text-white/70 dark:hover:text-white transition"
                  title="View Client GitHub Repository"
                >
                  <FaGithubSquare size={24} />
                </a>
                <span className="text-xs text-gray-600 dark:text-white/50 ml-1">Client</span>
              </div>
            )}
            {deploymentUrl && (
              <div className="flex items-center gap-1">
                <a
                  href={deploymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-950 dark:text-white/70 dark:hover:text-white transition"
                  title="View Live Demo"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
                <span className="text-xs text-gray-600 dark:text-white/50 ml-1">Live Demo</span>
              </div>
            )}
          </div>
        </div>

        <Image
          className="hidden sm:block absolute top-8 -right-40 w-[32.25rem] h-[65%] rounded-lg shadow-2xl group-even:right-[initial] group-even:-left-40
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:-translate-y-3
        group-hover:-rotate-2
        
        group-even:group-hover:translate-x-3        
        group-even:group-hover:rotate-2
        transition"
          src={imageUrl}
          alt={title}
          quality={95}
        />
      </section>
    </motion.div>
  );
}
