'use client';

import { motion } from 'framer-motion'
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <header 
            className="z-[999] relative opacity-100">
            <motion.div 
                className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white/65 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-slate-900/65 dark:border-black/40"
                initial={{ opacity: 0, x: "-50%", y: -100 }}
                animate={{ opacity: 1, x: "-50%", y: 0 }}
            ></motion.div>
            <nav 
                className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul 
                    className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-slate-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {
                        links.map((link) => (
                            <motion.li 
                                className="relative h-3/4 flex items-center justify-center" 
                                key={link.hash}
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <Link 
                                    className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-slate-950 transition dark:text-slate-400 dark:hover:text-slate-50", 
                                        {
                                            "dark:text-white text-slate-950": activeSection === link.name
                                        }
                                    )} 
                                    href={link.hash}
                                    onClick={() => {
                                        setActiveSection(link.name);
                                        setTimeOfLastClick(Date.now());
                                    }}
                                >
                                    {link.name}
                                    {activeSection == link.name && (
                                        <motion.span 
                                        className="bg-slate-100 absolute inset-0 rounded-full -z-10 dark:bg-slate-700"
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 30
                                        }}></motion.span>
                                    )}
                                </Link>
                            </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
