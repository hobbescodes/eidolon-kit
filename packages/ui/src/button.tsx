"use client";

import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appName: string;
}

export const Button = ({ children, className, type = "button", appName, ...rest }: ButtonProps) => {
  return (
    <button
      type={type}
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
      {...rest}
    >
      {children}
    </button>
  );
};
