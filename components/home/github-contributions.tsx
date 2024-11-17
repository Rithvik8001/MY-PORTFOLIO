"use client";

import GitHubCalendar from "react-github-calendar";
import Card from "../ui/card";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const explicitTheme = {
  light: ["#f0faf1", "#ceeed2", "#b0e3b6", "#3fb14c", "#2b7934"],
  dark: ["#0b1e0d98", "#153c1a", "#3fb14c", "#b0e3b6", "#e1f4e3"],
};

const GithubContributions = () => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Card className="h-full rounded-3xl bg-background-blur shadow-4xl">
      <h1 className="font-semibold text-2xl">GitHub Contributions</h1>
      <GitHubCalendar
        username="Rithvik8001"
        style={{
          backgroundColor: "transparent",
        }}
        theme={explicitTheme}
        colorScheme={theme ?? ("light" as any)}
        hideMonthLabels
      />
    </Card>
  );
};

export default GithubContributions;
