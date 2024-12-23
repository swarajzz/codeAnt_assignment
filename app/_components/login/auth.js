"use client";

import React, { useState } from "react";
import { AuthNav } from "@/app/_components/login/authnav";
import { AuthHeader } from "./authheader";

export default function Auth() {
  const [selectedOption, setSelectedOption] = useState("saas");

  return (
    <section className="bg-primary-dark-white w-full lg:w-1/2 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-6 my-2 md:my-4 flex flex-col gap-5">
        <div className="bg-white flex flex-col border-[#D5D7DA] border rounded-xl overflow-hidden">
          <AuthHeader
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />

          <AuthNav selectedOption={selectedOption} />
        </div>

        <p className="text-center text-300 text-base">
          By signing up you agree to the <strong>Privacy Policy</strong>
        </p>
      </div>
    </section>
  );
}
