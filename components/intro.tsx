/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
        <div
        className="flex items-center justify-center">
            <div className="relative">
                <motion.div
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1}}
                transition={{
                    type: "tween",
                    duration: .2
                }}>
                    <Image 
                    src="https://picsum.photos/192" 
                    alt="Garrett Portrait"
                    width="192"
                    height="192"
                    quality="95"
                    priority={true}
                    className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl" 
                    />
                </motion.div>
                <motion.span 
                className="absolute bottom-0 right-0 text-4xl"
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1}}
                transition={{
                    type: "spring",
                    stiffness: 125,
                    delay: .1,
                    duration: .7
                }}
                >
                    👋🏼
                </motion.span>
            </div>
        </div>
        <motion.h1 
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        >
            <span className="font-bold">Hello, I'm Garrett. </span> I'm a{" "}
            <span className="font-bold">full-stack developer</span> with a background in{" "}
            <span className="font-bold">project management</span>. I have a passion for{" "}
            <span className="font-bold">building relationships</span> and{" "}
            <span className="font-bold">collaborating with others</span>. Let's connect!
        </motion.h1>
        <motion.div 
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: .1
        }}
        >
            <Link 
            href="#contact"
            className="group bg-slate-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105 transition-all"
            >
                Contact me here 
                <BsArrowRight
                className="opacity-70 group-hover:translate-x-2 transition"
                />
            </Link>
            <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none border border-black/10 focus:scale-110 hover:scale-110 active:scale-105 transition-all cursor-pointer"
            href="/CV.pdf" 
            download
            >
                Download Resume 
                <HiDownload
                className="opacity-70 group-hover:translate-y-1 transition"
                />
            </a>
            <a
            className="bg-white text-slate-700 p-4 flex items-center gap-2 rounded-full border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-slate-950 active:scale-105 transition-all cursor-pointer"
            href="https://linkedin.com/in/garrettmcouch" 
            target="_blank"
            >
                <BsLinkedin/>
            </a>
            <a
            className="bg-white text-slate-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-slate-950 active:scale-105 transition-all cursor-pointer"
            href="https://github.com/malcus-g"
            target="_blank"
            >
                <FaGithubSquare/>
            </a>
        </motion.div>
    </section>
  )
}
