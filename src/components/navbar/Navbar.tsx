"use client";

import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import Link from "next/link";
import { navLinks } from "@/constants/data";
import { AlignRightOutlined } from "@ant-design/icons";
import clsx from "clsx";
import { scrollToSection } from "@/utils";

type Props = {};

function Navbar({}: Props) {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [active, setActive] = React.useState<String>("#hero");
  return (
    <div className="h-16 lg:h-32 flex items-center justify-between lg:gap-5">
      <Link
        href="#"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scroll(0, 0);
        }}
      >
        <Image
          src="/logo.svg"
          width={80}
          height={80}
          alt="logo"
          className="w-12 h-12 lg:w-20 lg:h-20"
        />
      </Link>

      <div className="hidden md:flex items-center gap-10">
        <ul className="flex items-center gap-5 lg:gap-10 xl:gap-20">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className={clsx(
                active === item.url
                  ? "text-white underline"
                  : "text-com-gray no-underline"
              )}
              onClick={() => setActive(item.url)}
            >
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <Button
          size="sm"
          text="Contact"
          variant="primary"
          onClick={() => scrollToSection("contact")}
        />
      </div>

      <div onClick={() => setToggle(!toggle)} className="sm:hidden">
        <AlignRightOutlined style={{ fontSize: "28px" }} />
        {toggle && (
          <div className="absolute min-h-screen bg-com-primary z-10 w-full right-0 top-16">
            <div className="flex justify-center flex-col items-center gap-10 mt-20 text-lg">
              <ul className="flex flex-col items-center gap-5 lg:gap-16">
                {navLinks.map((item) => (
                  <li
                    key={item.id}
                    className={clsx(
                      active === item.url
                        ? "text-white underline"
                        : "text-com-gray no-underline"
                    )}
                    onClick={() => setActive(item.url)}
                  >
                    <Link href={item.url}>{item.name}</Link>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                text="Contact"
                variant="primary"
                onClick={() => scrollToSection("contact")}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
