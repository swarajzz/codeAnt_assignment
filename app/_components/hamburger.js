import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { AlignJustify, X } from "lucide-react";
import fullLogo from "@/public/fullLogo.svg";
import { sidebarItems, sidebarFooterItems } from "@/public/data";
import { cloneElement } from "react";

export default function Hamburger({ isOpen, toggleMenu }) {
  const [activeButton, setActiveButton] = useState("/repositories");

  const handleButtonClick = (route) => {
    setActiveButton(route);
  };

  return (
    <>
      <div className="md:hidden border-b border-[#E9EAEB] fixed bg-white top-0 left-0 right-0 p-4 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={fullLogo}
              unoptimized
              alt="CodeAnt AI Logo"
              width={161}
              height={32}
            />
          </div>
          <div className="cursor-pointer block sm:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <X width={24} height={24} />
            ) : (
              <AlignJustify width={24} height={24} />
            )}
          </div>
        </div>
      </div>

      <div
        className={`md:hidden absolute border border-borderColors-1 left-0 right-0 bg-white z-40 overflow-hidden transition-all duration-300 ease-in-out top-16`}
        style={{
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
        }}
      >
        <div className="p-4 overflow-y-auto">
          <select
            defaultValue="default"
            className="w-full text-base px-3 py-2 bg-background border border-borderColors-2 rounded-md focus:outline-none focus:ring-2 focus:ring-ring mb-4"
          >
            <option value="default">Swaraj</option>
            <option value="org1">Organization 1</option>
            <option value="org2">Organization 2</option>
          </select>

          <nav className="px-4">
            <div className="flex flex-col gap-1.5">
              {sidebarItems.map((item) => (
                <Link
                  className="flex text-lg"
                  key={item.route}
                  href={item.label === "Logout" ? "/login" : ""}
                >
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
              ))}
              {sidebarFooterItems.map((item) => (
                <Link
                  className="flex text-lg"
                  key={item.route}
                  href={item.label === "Logout" ? "/login" : ""}
                >
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
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
