import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import blackpalmbakery from "@/public/blackpalmbakery.png";
import blackpalmrecipemanager from "@/public/blackpalmrecipemanager.png";
import invoicedashboard from "@/public/invoicedashboard.png";

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
    title: "Mobile Operations Manager",
    location: "Louisville, KY",
    description:
      "Led the launch of a catering and events branch at Sunergos Coffee, designing and implementing systems for cost structures, pricing tools, inventory management, and profit tracking. Managed client relations and organized events, contributing to operational efficiency and customer satisfaction.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Graduated bootcamp",
    location: "Remote",
    description:
      "Completed a full-stack software development bootcamp where I learned how to develop dynamic web-based software systems. Studies included object oriented programming, web application development, database programming, and development tools and techniques.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
  {
    title: "Program Manager",
    location: "Louisville, KY",
    description:
      "Responsible for guiding proprietary software development, facilitating communication between development teams and executives, creating client documentation, and providing IT support across various operational tasks.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "The Black Palm Bakery",
    description:
    "Currently working as a full-stack developer building a website for The Black Palm Bakery - A new bakery in Louisville, KY.",
    tags: ["Vue", "HTML", "CSS", "Javascript", "Java", "PostgreSQL", "Netlify", "Git"],
    imageUrl: blackpalmbakery,
    link: "https://blackpalmbakery.com"
  },
  {
    title: "Recipe Manager",
    description:
    "A recipe management application built for The Black Palm Bakery to allow them to create, manage, and organize recipes.",
    tags: ["Vue", "HTML", "CSS", "Javascript", "Java", "Sping", "PostgreSQL", "Git"],
    imageUrl: blackpalmrecipemanager,
    link: "https://github.com/malcus-g/BlackPalmRecipeManager"
  },
  {
    title: "Invoice Dashboard",
    description:
      "A web app for tracking customer invoices and visualizing monthly revenue. Includes data visualization, pagination, authentication, and form validation",
    tags: ["React", "Next.js", "Typescript", "PostgreSQL", "NeonDB", "Next Auth", "Zod", "Tailwind"],
    imageUrl: invoicedashboard,
    link: "https://github.com/malcus-g/nextjs-dashboard"
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