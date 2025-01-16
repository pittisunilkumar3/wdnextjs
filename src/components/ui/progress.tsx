import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  orientation?: "horizontal" | "vertical";
  indicatorStyles?: React.CSSProperties;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(
  (
    { className, value, orientation = "horizontal", indicatorStyles, ...props },
    ref
  ) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-full bg-[#26d3b4]",
        orientation === "vertical" ? "h-full w-2" : "h-2 w-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full w-full flex-1 transition-all bg-black",
          orientation === "vertical" ? "absolute bottom-0 w-full" : ""
        )}
        style={{
          ...indicatorStyles,
          ...(orientation === "vertical"
            ? {
                transform: `translateY(${100 - (value || 0)}%)`,
              }
            : {
                transform: `translateX(-${100 - (value || 0)}%)`,
              }),
        }}
      />
    </ProgressPrimitive.Root>
  )
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
