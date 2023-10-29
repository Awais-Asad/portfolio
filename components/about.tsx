"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After obtaining a Bachelor of Science in Computer Science, I embarked on a journey to combine my technical acumen with a deep-seated passion for problem-solving. My two years of professional experience as a web developer encompassed a diverse array of projects, from CodeIgniter-based backend development to crafting interactive user interfaces with <span className="font-medium">React.js</span>. My current focus is on enhancing my data science skills, having recently started a master's program in Data Science. My versatile skill set includes proficiency in web development technologies like <span className="font-medium">JavaScript</span>, <span className="font-medium">PHP</span>, and various front-end and back-end frameworks. I thrive on adapting to new challenges and am eager to explore the intersection of data science and web development.
      </p>

      <p>
        Outside the realm of coding, I find solace in various interests and hobbies. I enjoy unwinding by engaging in outdoor activities, exploring the depths of <span className="font-medium">historical and philosophical realms</span>. My insatiable curiosity drives me to continually <span className="italic">learn and grow</span>, making me a well-rounded individual who is equally at ease with algorithms and Aristotle.
      </p>
    </motion.section>
  );
}
