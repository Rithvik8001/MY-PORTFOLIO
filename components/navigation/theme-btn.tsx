"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useWindowSize } from "usehooks-ts";
import { useEffect, useState } from "react";

const ThemeBtn = () => {
  const { theme, setTheme } = useTheme();
  const { width } = useWindowSize();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleThemeChange = () => {
    if (theme) {
      theme === "light" ? setTheme("dark") : setTheme("light");
    }
  };

  return (
    <button className="text-sm 2xl:text-xl" onClick={handleThemeChange}>
      {width <= 648 ? (
        theme === "light" ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )
      ) : theme === "light" ? (
        "Dark"
      ) : (
        "Light"
      )}
    </button>
  );
};

export default ThemeBtn;
