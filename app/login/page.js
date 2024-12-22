import { MoveUp } from "lucide-react";
import Image from "next/image";
import AuthForm from "@/app/_components/authForm";

export default function Login() {
  const statistics = [
    {
      value: "30+",
      metric: "Languages Supported",
    },
    {
      value: "10k+",
      metric: "Active Developers",
    },
    {
      value: "100k+",
      metric: "Hours Saved",
    },
  ];

  return (
    <div className="min-h-screen flex w-full">
      <section className="hidden bg-white lg:flex items-center justify-center w-1/2 border border-borderColors-1">
        <div className="z-10 max-w-[474px] mx-4">
          <div className="bg-white shadow-1 flex flex-col py-3 rounded-2xl w-full max-w-[447px]">
            <div className="flex px-4 lg:px-6 py-4 gap-2 items-center border-b border-borderColors-3">
              <Image
                src="/codeant-dark.svg"
                alt="Codeant logo"
                width={28}
                height={31}
              />
              <h1 className="text-lg font-bold text-primary-400">
                AI to Detect & Autofix Code
              </h1>
            </div>
            <div className="flex justify-between px-4 lg:px-6 py-4 gap-5">
              {statistics.map((stat, index) => {
                return (
                  <div key={index} className="flex flex-col items-center">
                    <p className="text-lg font-bold text-primary-400">
                      {stat.value}
                    </p>
                    <p className="text-sm text-primary-200">{stat.metric}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex bg-white shadow-1 max-w-[265px] flex-col justify-between px-5 lg:px-7 py-4 gap-5 rounded-2xl translate-x-2/3 -translate-y-3">
            <div className="flex justify-between">
              <div>
                <Image
                  src="/group4.svg"
                  alt="Codeant logo"
                  width={56}
                  height={56}
                />
              </div>
              <div className="">
                <div className="flex items-center text-accent-100">
                  <MoveUp size={12} strokeWidth={3} />
                  <p className="flex text-sm font-bold text-primary-200">14%</p>
                </div>
                <p className="text-xs">This Week</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-primary-200">Issues Fixed</p>
              <p className="text-3xl font-bold text-primary-400">500k+</p>
            </div>
          </div>
        </div>
        <div className="absolute left-0 bottom-0 max-w-64">
          <Image
            src="/codeant.svg"
            alt="Codeant logo"
            width={284}
            height={319}
          />
        </div>
      </section>

      <AuthForm />
    </div>
  );
}
