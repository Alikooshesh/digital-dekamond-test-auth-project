"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const inputVariants = cva(
  "flex w-full rounded-2xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        error: "border-destructive text-destructive placeholder:text-destructive",
        success: "border-green-500 text-green-600",
      },
      size: {
        sm: "h-24 px-2 text-xs",
        md: "h-48 px-3 text-sm",
        lg: "h-64 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, // we have our own size prop
    VariantProps<typeof inputVariants> {
  label?: string;
  errorMessage?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, variant, size, label, errorMessage,id, ...props }, ref) => {

    const customId = id ?? label

    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label htmlFor={customId} className="mx-8 mb-4 text-sm font-medium text-onBackground">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={customId}
          className={cn(inputVariants({ variant, size, className }))}
          {...props}
        />
        {errorMessage && (
          <span className="text-xs text-destructive">{errorMessage}</span>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
