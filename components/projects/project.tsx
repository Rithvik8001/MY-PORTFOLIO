"use client";

import { Project as ProjectType } from "@/types";
import Card from "../ui/card";
import Tag from "../ui/tag";
import { motion } from "framer-motion";
import Link from "../ui/link";

type ProjectProps = ProjectType;

const Project = ({
  title,
  description,
  tags,
  url,
  github,
  color,
}: ProjectProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 20px 5px rgba(16, 33, 43, 0.09)",
      }}
      className="rounded-xl"
    >
      <Card>
        <h1 className="sm:text-xl font-semibold">{title}</h1>
        <p className="text-foreground-muted">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <Link color={color} href={url}>
            View
          </Link>
          <Link color={color} href={github}>
            GitHub
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};

export default Project;
