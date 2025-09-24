"use client";

import { motion } from "framer-motion";
import { Fragment, useState, useMemo } from "react";

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
  const [selectedYear, setSelectedYear] = useState<string>("all");

  // Extract unique years from experience data
  const availableYears = useMemo(() => {
    const years = new Set<string>();
    
    experiencesData.forEach(item => {
      const dateStr = item.date;
      // Extract years from date strings like "2024 - Present", "2021 - 2024", "2025", etc.
      const yearMatches = dateStr.match(/\d{4}/g);
      if (yearMatches) {
        yearMatches.forEach(year => years.add(year));
      }
    });
    
    return Array.from(years).sort((a, b) => parseInt(b) - parseInt(a)); // Sort descending
  }, []);

  // Filter experiences based on selected year
  const filteredExperiences = useMemo(() => {
    if (selectedYear === "all") return experiencesData;
    
    return experiencesData.filter(item => {
      const dateStr = item.date;
      return dateStr.includes(selectedYear);
    });
  }, [selectedYear]);

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

      {/* Year Filter */}
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap gap-2 p-1 bg-gray-100 rounded-lg dark:bg-gray-800">
          <button
            onClick={() => setSelectedYear("all")}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              selectedYear === "all"
                ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            }`}
          >
            All Years
          </button>
          {availableYears.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                selectedYear === year
                  ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      {selectedYear !== "all" && (
        <div className="text-center mb-6 text-sm text-gray-600 dark:text-gray-400">
          Showing {filteredExperiences.length} experience{filteredExperiences.length !== 1 ? 's' : ''} from {selectedYear}
        </div>
      )}

      <VerticalTimeline lineColor="" animate={false}>
        {filteredExperiences.map((item, index) => (
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
