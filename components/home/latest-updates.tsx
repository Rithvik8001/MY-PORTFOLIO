"use client";

import Card from "@/components/ui/card";
import Link from "../ui/link";

const LatestUpdates = () => {
  return (
    <Card className="rounded-3xl h-full shadow-4xl bg-background-blur md:p-8">
      <h1 className="font-semibold sm:text-2xl">Latest updates</h1>
      <p className="text-foreground-muted">😀 Currently learning Next.js!</p>
      <Link
        href="https://www.nextjs.org/"
        className="bg-transparent mt-auto w-max"
        color="green"
      >
        Learn more
      </Link>
    </Card>
  );
};

export default LatestUpdates;
