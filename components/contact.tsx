'use client';

import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

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
            Connect with me directly through{" "}
            <a className="underline" href="https://linkedin.com/in/garrettmcouch">
                LinkedIn
            </a>, or send me a message through this form!
        </p>
        <form 
            className="mt-10 flex flex-col"
            action={async (formData) => {
                const { error } = await sendEmail(formData);
                if(error) {
                    toast.error(error);
                    return;
                }
                toast.success("Email successfully sent!");
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
                maxLength={5000}
                className="h-52 my-3 px-4 rounded-lg borderBlack p-4" 
            />
            <SubmitBtn />
        </form>
    </motion.section>
  )
}
