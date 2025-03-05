'use client';

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "@/components/project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", .45);

  return (
    <section 
    ref={ref}
    className="mb-28 sm:mb-0 scroll-mt-28 max-w-[45rem]"
    id="projects">
        <SectionHeading>
            My Projects
        </SectionHeading>
        <div>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project} />
                </React.Fragment>
            ))}
        </div>
    </section>
  );
}
