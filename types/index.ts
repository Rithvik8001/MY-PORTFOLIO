import { LucideProps } from "lucide-react";
import { StaticImageData } from "next/image";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type NavLinkItem = {
  label: string;
  href: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  color: string;
};

export type ColorName =
  | "malibu"
  | "green"
  | "lavender"
  | "peach"
  | "biloba"
  | "rose"
  | "slate";

export type Experience = {
  role: string;
  from: string;
  to: string;
  company: string;
  descriptions: string[];
  color: ColorName;
  id: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  url: string;
  github: string;
  color: ColorName;
};

export type Skill = {
  name: string;
  description: string;
  image: StaticImageData;
};

export type Social = {
  name: string;
  url: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  color: ColorName;
};

export type Email = {
  name: string;
  email: string;
  message: string;
};
