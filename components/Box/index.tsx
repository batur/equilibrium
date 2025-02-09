import React from "react";
import { Card } from "../ui";
import { ScrewHead } from "../Icons";
import { cn } from "@/lib/utils";

interface BoxProps {
  children: React.ReactNode;
  withScrew?: boolean;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, withScrew, className }) => {
  return (
    <Card
      className={cn("relative flex flex-row gap-8 p-12 bg-zinc-50", className)}
    >
      {children}
      {withScrew && (
        <>
          <ScrewHead className="absolute top-3 left-3 text-zinc-700 opacity-70" />
          <ScrewHead className="absolute top-3 right-3 text-zinc-700 opacity-70" />
          <ScrewHead className="absolute bottom-3 left-3 text-zinc-700 opacity-70" />
          <ScrewHead className="absolute bottom-3 right-3 text-zinc-700 opacity-70" />
        </>
      )}
    </Card>
  );
};

export default Box;
