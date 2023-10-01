import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

type useSectionInViewProps = {
  thresholdVal: number;
  sectionName: SectionName;
};

export function useSectionInView(sectionName: SectionName, thresholdVal = 0.5) {
  const { ref, inView } = useInView({
    threshold: thresholdVal,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (Date.now() - timeOfLastClick > 1000 && inView) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName, timeOfLastClick]);

  return { ref };
}
