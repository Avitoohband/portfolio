"use client";

import { motion } from "framer-motion";

import { skillsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.75);

  const fadeInAmimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
            key={index}
            variants={fadeInAmimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.05 * index,
            }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
