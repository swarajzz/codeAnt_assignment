import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/app/_lib/utils";

const button = cva(
  [
    "inline-flex items-center justify-center rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
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
          "border-borderColors-4",
          "text-primary-200",
          "hover:bg-gray-50",
          "hover:text-accent-foreground",
          "semi-bold",
        ],
        ghost: [
          "text-primary-100",
          "hover:bg-gray-100",
          "hover:text-primary-200",
        ],
        "danger-ghost": [
          "text-red-600",
          "hover:bg-red-50/50",
          "hover:text-red-700",
          "focus:ring-red-500",
        ],
      },
      size: {
        sm: ["text-sm", "py-2", "min-h-9", "px-3"],
        md: ["text-base", "py-2", "min-h-9", "px-3"],
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
  <button className={cn(button({ intent, size, className }))} {...props} />
);
