'use client';

import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section 
    ref={ref}
    id="skills"
    className="max-w-[54rem] scroll-mt-28 text-center">
        <SectionHeading>My Skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-slate-800">
            {
                skillsData.map((skill, index) => (
                    <li 
                    key={index}
                    className="bg-white border border-black/[.1] rounded-xl px-5 py-3">
                        {skill}
                    </li>
                ))
            }
        </ul>
    </section>
  )
}
