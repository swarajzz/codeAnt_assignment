import Image from "next/image";
import { SwitchOptions } from "@/app/_components/login/switchOptions";

export const AuthHeader = ({ selectedOption, setSelectedOption }) => {
  return (
    <div className="flex flex-col items-center gap-8 px-3 md:px-5 py-6 md:py-9 border-b border-[#D5D7DA]">
      <Image src="/fullLogo.svg" alt="Codeant logo" width={201} height={40} />
      <h1 className="text-2xl font-semibold lg:text-3xl text-primary-300">
        Welcome to CodeAnt AI
      </h1>

      <SwitchOptions
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
    </div>
  );
};
