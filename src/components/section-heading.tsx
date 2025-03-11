import { cn } from "@/lib/utils";
import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2 className={cn(`text-3xl font-medium capitalize mb-8 text-center ${className}`)}>
      {children}
    </h2>
  );
}
