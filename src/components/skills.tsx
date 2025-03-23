"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

// On hover, scale up, rotate slightly, and add a soft shadow.
const hoverEffect = {
  scale: 1.15,
  // rotate: -3,
  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 10,
  },
};


export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[58rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="flex flex-col items-center px-4 py-3 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            whileHover={hoverEffect}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Icon icon={skill.icon} className="text-5xl md:text-7xl" />
            <span className="mt-2">{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
