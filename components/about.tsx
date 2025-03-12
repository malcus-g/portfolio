'use client';

import SectionHeading from '@/components/section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About", .9);

  return (
    <motion.section
    ref={ref}
    className="mb-28 sm:mb-0 max-w-[45rem] text-center leading-8 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: .175
    }}
    id="about"
    >
        <SectionHeading>About Me</SectionHeading>
        <p>
          As a{" "}
          <span className="font-bold">dedicated</span> and{" "}
          <span className="font-bold">versatile</span> professional, I bring a unique blend of hands-on operational experience, technical expertise, and passion for what I do. I am currently a{" "}
          <span className="font-bold">Project Manager</span> at A. Blair enterprises leveraging experience in{" "}
          <span className="font-bold">operations management</span> and the{" "}
          <span className="font-bold">software development life cycle</span>. 
        </p>
        &nbsp;
        <p>
          Notably, I successfully proposed, built, and launched the catering department for Sunergos Coffee and am currently developing a new website for The Black Palm Bakery. I also recently enhanced my technical skill set through a{" "}
          <span className="font-bold">Java Web Development bootcamp</span> with Tech Elevator, building on my{" "}
          <span className="font-bold">business marketing studies</span> at Indiana University Southeast. My goal is to transition into a full-time software development role where I can leverage my{" "}
          <span className="font-bold">problem-solving abilities</span> and{" "}
          <span className="font-bold">passion for technology</span> to drive innovation and success.
        </p>
    </motion.section>
  )
}
