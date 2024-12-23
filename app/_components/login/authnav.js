import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { buttonData } from "@/public/data";
import { cloneElement } from "react";

export const AuthNav = ({ selectedOption }) => (
  <Link
    href="/dashboard"
    className="flex flex-col items-center gap-3 md:gap-5 py-6 px-8"
  >
    {buttonData[selectedOption]?.map((button, index) => (
      <Button
        key={index}
        size="lg"
        intent="outline"
        className="w-full max-w-[446px] flex gap-2 items-center justify-center"
      >
        {cloneElement(button.icon, {
          className: "h-6 w-6",
        })}
        <span>{button.label}</span>
      </Button>
    ))}
  </Link>
);
