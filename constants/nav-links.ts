import { NavLinkItem } from "@/types";
import { Home, User, Briefcase, Newspaper, Layers, Phone } from "lucide-react";

export const navlinks: NavLinkItem[] = [
  {
    label: "Home",
    href: "/",
    color: "var(--malibu-foreground)",
    Icon: Home,
  },
  {
    label: "About",
    href: "/about",
    color: "var(--green-foreground)",
    Icon: User,
  },
  {
    label: "Work",
    href: "/work",
    color: "var(--rose-foreground)",
    Icon: Briefcase,
  },
  {
    label: "Projects",
    href: "/projects",
    color: "var(--peach-foreground)",
    Icon: Newspaper,
  },
  {
    label: "Stack",
    href: "/stack",
    color: "var(--lavender-foreground)",
    Icon: Layers,
  },
  {
    label: "Contact",
    href: "/contact",
    color: "var(--biloba-foreground)",
    Icon: Phone,
  },
];
