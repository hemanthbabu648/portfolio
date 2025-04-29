// "use client";

import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Props = {
  size?: "sm" | "md" | "lg" | "out";
  text?: string;
  variant?: string;
  onClick?: () => void;
  isLink?: boolean;
  path?: string;
  type?: "button" | "submit" | "reset";
  customClassNames?: string;
};

const Button = ({
  size,
  text,
  variant = "primary",
  onClick,
  isLink = false,
  path = "/",
  type = "button",
  customClassNames,
}: Props) => {
  const sm = "px-5 py-1 rounded-sm lg:rounded-md";
  const md = "px-5 py-2 bg-com-gradient-primary rounded-md";
  const lg = "px-10 py-3 bg-com-gradient-primary rounded-lg";
  const out = "px-10 py-3 rounded-lg";

  const primary = "bg-com-gradient-primary";
  const secondary = "bg-com-gradient-secondary";
  const outline = "border";

  if (isLink) {
    return (
      <Link
        href={path}
        className={clsx({
          [sm]: size === "sm",
          [md]: size === "md",
          [lg]: size === "lg",
          [primary]: variant === "primary",
          [outline]: variant === "outline",
          [secondary]: variant === "secondary",
        })}
        target="_blank"
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      className={clsx(customClassNames, {
        [sm]: size === "sm",
        [md]: size === "md",
        [lg]: size === "lg",
        [primary]: variant === "primary",
        [outline]: variant === "outline",
        [secondary]: variant === "secondary",
        [out]: variant === "out",
      })}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
