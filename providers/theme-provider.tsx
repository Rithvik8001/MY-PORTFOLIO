"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ReactNode } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <NextThemeProvider enableSystem={false}>{children}</NextThemeProvider>;
};

export default ThemeProvider;
