'use client'

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import ChangingText from "./changing-text";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export default function Intro(){
    const {ref} = useSectionInView('Intro',0.10);

    return (
        <section
          ref={ref}
          id="home"
          className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4 bg-[#111827]"
        >
          {/* <WaveBackground /> */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}
              >
                {/* <Image
                  src="/temp.png"
                  alt="Portrait"
                  width="192"
                  height="192"
                  quality="95"
                  priority={true}
                  className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                /> */}
                <Avatar className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl">
                  <AvatarImage src="/Self Portait.jpeg" alt="portrait" />
                  <AvatarFallback>FA</AvatarFallback>
                </Avatar>
              </motion.div>
    
              <motion.span
                className="absolute bottom-0 right-0 text-4xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  delay: 0.1,
                  duration: 0.7,
                }}
              >
                {/* 👋 */}
              </motion.span>
            </div>
          </div>
    
          <motion.h1
            className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-white max-w-[51rem] mx-auto min-h-[162px]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* <span className="font-bold">Hello, I'm Faizan.</span> I'm a{" "}
            <span className="font-bold">software engineer</span> at{" "}
            <span className="font-bold">Techlogix</span> in Pakistan. I'm currently working with Next.Js, Nest.Js, Angular, and .Net. */}
            <ChangingText/>
          </motion.h1>
    
          <motion.div
            className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
              href="https://github.com/faizi2810"
              target="_blank"
            >
              GitHub <Icon icon="logos:github-octocat"  width="25" height="27" className="opacity-70" />
            </a>
    
            <a
              className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
              href="https://www.linkedin.com/in/muhammad-faizan-ahmad/"
              target="_blank"
            >
              <span className="opacity-70">LinkedIn</span>
              <Icon icon="devicon:linkedin" className="opacity-70" />
            </a>
          </motion.div>
        </section>
      );
}

