'use client';

import SectionHeading from '@/components/section-heading';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
    className="max-w-[45rem] text-center leading-8"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: .175
    }}
    >
        <SectionHeading>About Me</SectionHeading>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti sit earum dolore libero sapiente nesciunt perspiciatis sint provident, rem nostrum vitae quasi a iusto, assumenda vel quos mollitia repudiandae ratione.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis laudantium, corrupti quibusdam magni enim quia natus architecto iste dolorum deserunt, vero exercitationem ipsam aperiam, beatae voluptatibus in ut odio possimus.
        </p>
    </motion.section>
  )
}
