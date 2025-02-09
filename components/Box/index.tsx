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
      className={cn(
        "relative flex flex-row gap-6 p-12 bg-zinc-200 shadow-sm shadow-zinc-500/50 w-fit border border-zinc-800/15 border-solid",
        className
      )}
    >
      {children}
      {withScrew && (
        <>
          <ScrewHead className="absolute top-3 left-3 text-zinc-700 opacity-70 fill-zinc-300 blur-[0.5px]" />
          <ScrewHead className="absolute top-3 right-3 text-zinc-700 opacity-70 fill-zinc-300 blur-[0.5px]" />
          <ScrewHead className="absolute bottom-3 left-3 text-zinc-700 opacity-70 fill-zinc-300 blur-[0.5px]" />
          <ScrewHead className="absolute bottom-3 right-3 text-zinc-700 opacity-70 fill-zinc-300 blur-[0.5px]" />
        </>
      )}
    </Card>
  );
};

export default Box;
