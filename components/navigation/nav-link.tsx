"use client";

import { NavLinkItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { motion } from "framer-motion";

type NavLinkProps = NavLinkItem;

const NavLink = ({ label, href, color, Icon }: NavLinkProps) => {
  const { width } = useWindowSize();
  const pathname = usePathname();
  const active = useMemo(() => pathname === href, [pathname, href]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Link scroll={false} className="relative py-3" href={href}>
      {width <= 648 ? (
        <Icon
          className="w-5 h-5 transition-colors"
          style={{
            color: active ? color : "currentColor",
          }}
        />
      ) : (
        <p
          className="text-sm 2xl:text-xl"
          style={{
            color: active ? color : "currentColor",
          }}
        >
          {label}
        </p>
      )}
      {active && (
        <motion.div
          layout
          transition={{}}
          layoutId="indicator"
          className="absolute bottom-0 h-[1px] w-full transition-colors"
          style={{
            backgroundColor: color,
          }}
        ></motion.div>
      )}
    </Link>
  );
};

export default NavLink;
