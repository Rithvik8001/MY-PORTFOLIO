import { Skill } from "@/types";

import htmlIcon from "@/assets/icons/html.png";
import cssIcon from "@/assets/icons/css.png";
import jsIcon from "@/assets/icons/js.png";
import vsCodeIcon from "@/assets/icons/vs-code.png";
import reactIcon from "@/assets/icons/react-js.png";
import gitIcon from "@/assets/icons/git.png";
import tailwindIcon from "@/assets/icons/tailwindcss.png";
import nextJsIcon from "@/assets/icons/next-js.png";
import pythonIcon from "@/assets/icons/python.png";
import postgresqlIcon from "@/assets/icons/postgresql.png";
import arcIcon from "@/assets/icons/arc.png";
import raycastIcon from "@/assets/icons/raycast.png";
import appleMusicIcon from "@/assets/icons/apple-music.png";
import warpIcon from "@/assets/icons/warp.png";

export const technologies: Skill[] = [
  {
    name: "HTML",
    description: "For structuring web content",
    image: htmlIcon,
  },
  {
    name: "CSS",
    description: "For styling web content",
    image: cssIcon,
  },
  {
    name: "JavaScript",
    description: "For making web content interactive",
    image: jsIcon,
  },
  {
    name: "React",
    description: "For building user interfaces",
    image: reactIcon,
  },
  {
    name: "Tailwind CSS",
    description: "For styling web content efficiently",
    image: tailwindIcon,
  },
  {
    name: "Next.js",
    description: "A web framework for React",
    image: nextJsIcon,
  },
  {
    name: "Python",
    description: "For backend development",
    image: pythonIcon,
  },
  {
    name: "PostgreSQL",
    description: "A powerful object-relational database system",
    image: postgresqlIcon,
  },
];

export const tools: Skill[] = [
  {
    name: "Git",
    description: "For version control",
    image: gitIcon,
  },
  {
    name: "VS Code",
    description: "Favorite code editor",
    image: vsCodeIcon,
  },
  {
    name: "Arc Browser",
    description: "My favorite browser of choice",
    image: arcIcon,
  },
  {
    name: "Raycast",
    description: "Favorite spotlight search alternative on mac",
    image: raycastIcon,
  },
  {
    name: "Apple Music",
    description: "Fav music app of choice",
    image: appleMusicIcon,
  },
  {
    name: "Warp",
    description: "An intelligent AI-powered terminal",
    image: warpIcon,
  },
];
