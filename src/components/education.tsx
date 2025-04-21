"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My Education</SectionHeading>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <Image src='/PUCIT.png' alt="PUCIT" width="150" height="100" />
        </div>

        <div>
          <p className="font-medium">
            Bachelor of Computer Science
          </p>
          <p>Punjab University College of Information Technology</p>
          <p className="mt-1">Graduated in 2017</p>
        </div>
      </div>
    </motion.section>
  );
}
