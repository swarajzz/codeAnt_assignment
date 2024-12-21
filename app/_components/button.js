import React from "react";
import { cva } from "class-variance-authority";

const button = cva(
  [
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-accent-200",
          "text-white",
          "border-transparent",
          "hover:bg-accent-100",
        ],
        outline: [
          "border",
          "border-[#D8DAE5]",
          "text-primary-200",
          "hover:bg-accent",
          "hover:text-accent-foreground",
        ],
        destructive: [
          "bg-accent-400",
          "text-primary-200",
          "border-gray-400",
          "hover:bg-accent-300",
        ],
      },
      size: {
        sm: ["text-sm", "py-1", "min-h-9", "px-3"],
        md: ["text-xs", "py-4", "min-h-9", "px-10"],
        lg: ["text-md", "py-2", "px-4", "min-h-14", "px-5", "font-semibold"],
      },
    },
    compoundVariants: [{ intent: "primary", size: "md" }],
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  }
);

export const Button = ({ className, intent, size, ...props }) => (
  <button className={button({ intent, size, className })} {...props} />
);
