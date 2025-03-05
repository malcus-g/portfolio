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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti sit earum dolore libero sapiente nesciunt perspiciatis sint provident, rem nostrum vitae quasi a iusto, assumenda vel quos mollitia repudiandae ratione.
        </p>
        &nbsp;
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis laudantium, corrupti quibusdam magni enim quia natus architecto iste dolorum deserunt, vero exercitationem ipsam aperiam, beatae voluptatibus in ut odio possimus.
        </p>
    </motion.section>
  )
}
