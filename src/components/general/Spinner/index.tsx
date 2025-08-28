import { cn } from "@/lib/cn";
import * as React from "react";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "h-12 w-12 border-2",
  md: "h-16 w-16 border-2",
  lg: "h-20 w-20 border-3",
};

export default function Spinner({ size = "md", className, ...props }: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        "inline-block animate-spin rounded-full border-current border-t-transparent",
        sizeMap[size],
        className
      )}
      {...props}
    />
  );
}
