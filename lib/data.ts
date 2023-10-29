import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import buildImg from "@/public/build.jpg";
import goalsImg from "@/public/goals.jpg";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  // {
  //   title: "Graduated bootcamp",
  //   location: "Lahore, Punjab",
  //   description:
  //     "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2019",
  // },
  {
    title: "Teacher",
    location: "Lahore, Punjab",
    description:
      "For a year, I diligently taught students ranging from class 1 to 7, fostering their educational growth and development.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2019",
  },
  {
    title: "Software Engineer",
    location: "Lahore, Punjab",
    description:
      "I have two years of hands-on experience as a web developer, working on a range of projects including backend development, front-end frameworks, and data-driven web applications.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "BUILD",
    description:
      "I worked as a web developer on this project for 1.5 years, where users have the capability to engage in chat and video conferences, share snapshots, and explore various opportunities.",
    tags: ["React", "Codeigniter", "MySQL", "Dolby.io", "Firebase"],
    imageUrl: buildImg,
  },
  {
    title: "GOALS",
    description:
      " I developed a CodeIgniter admin panel for goal and task management, including template creation for seamless collaboration.",
    tags: ["Codeigniter", "jQuery", "Datatables", "Twilio"],
    imageUrl: goalsImg,
  },
  {
    title: "HR SYSTEM",
    description:
      "In a collaborative project, I assisted in the development of an HR system in CodeIgniter, incorporating fingerprint scanning technology (RUR 4500) for streamlined employee attendance tracking.",
    tags: ["Codeigniter", "PHP", "MySQL", "DigitalPersona"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  // "CSS",
  "JavaScript",
  // "TypeScript",
  "React",
  // "Next.js",
  // "Node.js",
  "Git",
  // "Tailwind",
  // "Prisma",
  // "MongoDB",
  "Redux",
  // "GraphQL",
  // "Apollo",
  // "Express",
  // "PostgreSQL",
  // "Python",
  // "Django",
  // "Framer Motion",
  "PHP",
  "Codeigniter",
  "MySQL",
  "Firebase",
  "Dolby.io",
  "jQuery",
  "Datatables",
  "Highcharts",
  "Problem Solving"
] as const;
