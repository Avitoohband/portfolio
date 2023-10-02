"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";

export default function Experience() {
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
    <section ref={ref} id="experience" className="scroll-mt-28">
      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline lineColor="" animate={false}>
        {experiencesData.map((item, index) => (
          <Fragment key={item.id}>
            <VerticalTimelineElement     
              visible={true}
              date={item.date}
              icon={item.icon}
              contentStyle={{
                background: "#f3f5f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              iconStyle={{
                background: "white",
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
              }}>
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">
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
