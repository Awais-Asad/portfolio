"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
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
            <Image
              src="data:image/jpeg;base64,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"
              alt="Awais portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
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
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Awais.</span> I'm a{" "}
        <span className="font-bold">web developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com/in/awais-asad-81b99b155"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/OAwais"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
