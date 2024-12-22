"use client";

import Link from "next/link";
import fullLogo from "@/public/fullLogo.svg";
import { Button } from "./ui/button";
import { sidebarFooterItems, sidebarItems } from "@/public/data";
import Image from "next/image";
import { cloneElement, useState } from "react";

export default function Sidebar() {
  const [activeButton, setActiveButton] = useState("/repositories");
  const handleButtonClick = (route) => {
    setActiveButton(route);
  };

  return (
    <div className="flex w-full bg-white flex-col h-screen border-r bg-background max-w-[242px] top-0">
      <div className="p-5">
        <div className="flex items-center gap-2 mb-6">
          <Image src={fullLogo} unoptimized alt="CodeAnt AI Logo" width={161} height={32} />
        </div>
        <select
          defaultValue="default"
          className="w-full text-base px-3 py-2 bg-background border border-[#D5D7DA] rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="default">Swaraj</option>
          <option value="org1">Organization 1</option>
          <option value="org2">Organization 2</option>
        </select>
      </div>

      <nav className="px-4">
        <div className="flex flex-col gap-1.5">
          {sidebarItems.map((item) => {
            return (
              <Link className="flex text-lg" key={item.route} href="#">
                <Button
                  intent={activeButton === item.route ? "" : "ghost"}
                  size={"md"}
                  className="w-full flex justify-start gap-2"
                  onClick={() => handleButtonClick(item.route)}
                >
                  {cloneElement(item.icon, {
                    className: "h-5 w-5",
                  })}

                  <span className="font-semibold"> {item.label} </span>
                </Button>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="p-4 mt-auto border-t">
        <div className="flex flex-col">
          {sidebarFooterItems.map((item, index) => {
            return (
              <Link className="flex text-lg" key={item.route} href="#">
                <Button
                  intent={
                    item.route === "/logout"
                      ? "danger-ghost"
                      : activeButton === item.route
                      ? ""
                      : "ghost"
                  }
                  size={"md"}
                  className="w-full flex justify-start gap-2"
                  onClick={() => handleButtonClick(item.route)}
                >
                  {cloneElement(item.icon, {
                    className: "h-5 w-5",
                  })}

                  <span> {item.label} </span>
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
