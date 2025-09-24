"use client";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React, { useState } from "react";
import Project from "./Project";
import SectionHeading from "./SectionHeading";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const PROJECTS_PER_PAGE = 3;

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = projectsData.slice(startIndex, endIndex);

  const scrollToProjectsTop = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    scrollToProjectsTop();
  };

  const goToPrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
    scrollToProjectsTop();
  };

  const goToNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
    scrollToProjectsTop();
  };

  return (
    <section ref={ref} className="scroll-mt-28 mb-28" id="projects">
      <SectionHeading>My Projects</SectionHeading>
      
      {/* Projects Grid */}
      <div>
        {currentProjects.map((project) => (
          <React.Fragment key={project.id}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 gap-2">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            disabled={currentPage === 1}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <IoChevronBack className="w-4 h-4 mr-1" />
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  currentPage === page
                    ? "text-white bg-gray-900 dark:bg-white dark:text-gray-900"
                    : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
            <IoChevronForward className="w-4 h-4 ml-1" />
          </button>
        </div>
      )}

      {/* Page Info */}
      {totalPages > 1 && (
        <div className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
          Showing {startIndex + 1}-{Math.min(endIndex, projectsData.length)} of {projectsData.length} projects
        </div>
      )}
    </section>
  );
}
