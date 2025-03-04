import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
  {
    title: "Graduated bootcamp",
    location: "Remote",
    description:
      "Sample Description",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Program Manager",
    location: "Louisville, KY",
    description:
      "Sample Description",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
  {
    title: "Mobile Operations Manager",
    location: "Louisville, KY",
    description:
      "Sample Description",
    icon: React.createElement(FaReact),
    date: "2022 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Invoice Dashboard",
    description:
      "A web app for tracking customer invoices and visualizing monthly revenue. Features include data visualization, pagination, authentication, and form validation",
    tags: ["React", "Next.js", "Typescript", "PostgreSQL", "NeonDB", "Next Auth", "Zod", "Tailwind"],
    imageUrl: "https://picsum.photos/1200/900",
  },
  {
    title: "The Black Palm Bakery",
    description:
      "Currently working as a full-stack developer building a website for The Black Palm Bakery - A new bakery in Louisville, KY.",
    tags: ["Vue", "HTML", "CSS", "Javascript", "Java", "PostgreSQL", "Netlify", "Git"],
    imageUrl: "https://picsum.photos/1200/900",
  },
  {
    title: "Recipe Manager",
    description:
      "A recipe management application built for The Black Palm Bakery to allow them to create, manage, and organize recipes.",
    tags: ["Vue", "HTML", "CSS", "Javascript", "Java", "Sping", "PostgreSQL", "Git"],
    imageUrl: "https://picsum.photos/1200/900",
  },
] as const;

export const skillsData = [
  "Java",
  "Spring Framework",
  "RESTful APIs",
  "JDBC",
  "Prisma",
  "SQL",
  "PostgreSQL",
  "Unit Testing (JUnit)",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Framer Motion",
  "React",
  "Next.js",
  "Vue",
  "Node.js",
  "Git",
  "Agile",
  "CI/CD",
  "npm",
  "Vite",
  "Maven",
  "Github",
  "pgAdmin",
  "Postman",
  "IntelliJ",
  "VS Code"
] as const;