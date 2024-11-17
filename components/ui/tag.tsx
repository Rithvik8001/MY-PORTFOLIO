import { cn } from "@/utils/lib";
import { HTMLAttributes, ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  className?: HTMLAttributes<HTMLParagraphElement>["className"];
};

const Tag = ({ children, className }: TagProps) => {
  return (
    <p
      className={cn(
        "px-3 py-2 rounded-full bg-transparent border border-border text-xs",
        className
      )}
    >
      {children}
    </p>
  );
};

export default Tag;
