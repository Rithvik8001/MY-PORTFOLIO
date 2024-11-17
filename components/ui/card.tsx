import { cn } from "@/utils/lib";
import { HTMLAttributes, ReactNode } from "react";

type CardProps = {
  children?: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <article
      className={cn(
        "flex flex-col gap-4 p-4 rounded-xl bg-background-secondary border border-border transition-colors md:p-8",
        className
      )}
      {...props}
    >
      {children}
    </article>
  );
};

export default Card;
