'use client';

import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div 
    className="bg-slate-200 my-24 h-1 w-16 rounded-full hidden sm:block dark:bg-slate-200/20"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition= {{
        delay: .125
    }}
    >
    </motion.div>
  )
}
