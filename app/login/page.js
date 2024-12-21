import { MoveUp } from "lucide-react";
import Image from "next/image";
import LoginForm from "../_components/LoginForm";

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
      <section className="bg-white flex items-center justify-center w-1/2 border border-[#E9EAEB]">
        <div>
          <div className="bg-white shadow flex flex-col py-3 rounded-2xl w-full max-w-[447px]">
            <div className="flex px-6 py-4 gap-2 items-center border-b-2">
              <Image
                src="/codeant-dark.svg"
                alt="Codeant logo"
                width={28}
                height={31}
              />
              <h1 className="text-lg font-bold">AI to Detect & Autofix Code</h1>
            </div>
            <div className="flex justify-between px-6 py-4 gap-5">
              {statistics.map((stat, index) => {
                return (
                  <div key={index} className="flex flex-col items-center">
                    <p className="text-lg font-bold">{stat.value}</p>
                    <p className="text-sm">{stat.metric}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex bg-white shadow max-w-[265px] flex-col justify-between px-6 py-4 gap-5 rounded-2xl translate-x-2/3 -translate-y-3">
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
                  <p className="flex text-sm font-bold">14%</p>
                </div>
                <p className="text-xs">This Week</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold">Issues Fixed</p>
              <p className="text-3xl font-bold">500k+</p>
            </div>
          </div>
        </div>
        <div className="absolute left-0 bottom-0">
          <Image
            src="/codeant.svg"
            alt="Codeant logo"
            width={284}
            height={319}
          />
        </div>
      </section>

      <LoginForm />
    </div>
  );
}