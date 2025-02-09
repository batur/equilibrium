"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const trackVariants = cva("relative grow overflow-hidden rounded-full", {
  variants: {
    orientation: {
      vertical: "h-full w-1.5",
      horizontal: "w-full h-1.5",
    },
    variant: {
      primary: "bg-primary/20",
      secondary: "bg-secondary/20",
      zinc: "bg-zinc-300",
    },
    defaultVariants: {
      orientation: "horizontal",
      variant: "primary",
    },
  },
});
const rangeVariants = cva("absolute", {
  variants: {
    orientation: {
      vertical: "w-full",
      horizontal: "h-full",
    },
    variant: {
      primary: "bg-primary",
      secondary: "bg-secondary",
      zinc: "bg-zinc-400",
    },
    defaultVariants: {
      orientation: "horizontal",
      variant: "primary",
    },
  },
});

const thumbVariants = cva(
  "block h-4 w-4 rounded-full border bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "border-primary/50",
        secondary: "border-secondary/50",
        zinc: "border-green-700 focus-visible:ring-green-500 bg-green-500",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface SliderProps
  extends VariantProps<typeof trackVariants>,
    VariantProps<typeof rangeVariants>,
    VariantProps<typeof thumbVariants> {
  orientation?: "vertical" | "horizontal";
  title?: string;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps & React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(
  (
    {
      className,
      orientation = "horizontal",
      variant = "primary",
      title,
      ...props
    },
    ref
  ) => (
    <div className="relative flex flex-row items-end w-8 justify-end">
      <h3 className="absolute -rotate-90 left-3 origin-left whitespace-nowrap text-zinc-700 tracking-wider">
        {title}
      </h3>
      <SliderPrimitive.Root
        ref={ref}
        orientation={orientation}
        className={cn(
          "relative flex touch-none select-none items-center",
          orientation === "vertical" ? "flex-col h-full w-4" : "w-full h-4",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track
          className={cn(trackVariants({ orientation, variant }))}
        >
          <SliderPrimitive.Range
            className={cn(rangeVariants({ orientation, variant }))}
          />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className={thumbVariants({ variant })} />
      </SliderPrimitive.Root>
    </div>
  )
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
