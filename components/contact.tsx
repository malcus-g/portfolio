'use client';

import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion'

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  
  

  return (
    <motion.section 
        id="contact" 
        ref={ref} 
        className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
        initial={{
            opacity: 0
        }}
        whileInView={{
            opacity: 1
        }}
        transition={{
            duration: 1
        }}
        viewport={{
            once: true
        }}
    >
        <SectionHeading>Contact Me</SectionHeading>
        <p className="text-slate-700 -mt-5">
            Please connect with me directly at {" "}
            <a className="underline" href="mailto:garrettcouch97@gmail.com">
                garrettcouch97@gmail.com
            </a> or through this form.
        </p>
        <form 
            className="mt-10 flex flex-col"
            action={async (formData: FormData) => {
                console.log(formData.get("senderEmail"));
                console.log(formData.get("message"));
            }}
        >
            <input 
                type="email"
                name="senderEmail" 
                className="h-14 px-4 rounded-lg borderBlack" 
                placeholder="Your Email"
                required
                maxLength={500}
            />

            <textarea 
                placeholder="Your Message"
                name="message"
                required
                maxLength={500}
                className="h-52 my-3 px-4 rounded-lg borderBlack p-4" 
            />
            <button 
                type="submit" 
                className="group flex items-center justify-center self-end gap-2 h-[3rem] w-[8rem] bg-slate-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-slate-950 cursor-pointer">
                    Submit 
                    <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
        </form>
    </motion.section>
  )
}
