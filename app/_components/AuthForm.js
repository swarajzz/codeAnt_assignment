"use client";

import Image from "next/image";
import React, { cloneElement, useState } from "react";
import { Button } from "./ui/button";
import { buttonData } from "@/public/data";
import Link from "next/link";

export default function AuthForm() {
  const [selectedOption, setSelectedOption] = useState("saas");

  const options = [
    { label: "SAAS", value: "saas" },
    { label: "Self Hosted", value: "self_hosted" },
  ];

  return (
    <section className="bg-primary-dark-white w-full lg:w-1/2 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-6 my-2 md:my-4 flex flex-col gap-5">
        <div className="bg-white flex flex-col border-[#D5D7DA] border rounded-xl overflow-hidden">
          <div className="flex flex-col items-center gap-8 px-3 md:px-5 py-6 md:py-9 border-b border-[#D5D7DA]">
            <Image
              src="/fullLogo.svg"
              alt="Codeant logo"
              width={201}
              height={40}
            />

            <h1 className="text-2xl font-semibold lg:text-3xl text-primary-300">
              Welcome to CodeAnt AI
            </h1>

            <div className="flex w-full">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedOption(option.value)}
                  className={`w-full px-4 py-3 rounded-lg font-medium text-xl ${
                    selectedOption === option.value
                      ? "bg-accent-200 text-white"
                      : "hover:bg-gray-100 bg-primary-dark-white text-primary-100"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

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
        </div>

        <p className="text-center text-300 text-base">
          By signing up you agree to the <strong>Privacy Policy</strong>
        </p>
      </div>
    </section>
  );
}
