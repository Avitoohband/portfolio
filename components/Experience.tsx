"use client";

import { motion } from "framer-motion";
import { Fragment } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { theme } = useTheme();

  const { ref } = useSectionInView("Experience");

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
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline lineColor="" animate={false}>
        {experiencesData.map((item, index) => (
          <Fragment key={item.id}>
            <VerticalTimelineElement
              visible={true}
              date={item.date}
              icon={item.icon}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f5f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: theme === 'light' ? "0.4rem solid #9ca3af" : '0.4rem solig rgba(255, 255 ,255 , 0.05)',
              }}
              iconStyle={{
                background: theme === 'light' ? "white" : 'rgba(255, 255 ,255 , 0.15)',
                fontSize: "1.5rem",
              }}
            >
              <motion.div
                variants={fadeInAmimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.07 * index,
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/50">
                  {item.description}
                </p>
              </motion.div>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
