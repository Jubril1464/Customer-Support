/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  className?: string;
  children: ReactNode | string;
  color?: string;
  bgColor?: string;
  size?: string;
  hoverBgColor?: string;
  onClick?: (prop: any) => void;
  as: string;
  to?: string;
  borderRadius?: string;
  disabled?: boolean;
};
export const Button = ({
  className,
  children,
  color = "text-white",
  bgColor = "bg-[#4C6FFF]",
  size = "sm",
  hoverBgColor = "hover:bg-[#355cff]",
  onClick,
  as,
  to = "/",
  borderRadius = "rounded-lg",
  disabled,
}: ButtonProps) => {
  if (as === "link")
    return (
      <Link
        to={to}
        className={`${className} flex justify-center font-inter items-center gap-2`}
      >
        {children}
      </Link>
    );
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={` ${
        size === "sm"
          ? "h-10 w-[120px]"
          : size === "md"
          ? "h-11 w-[134px]"
          : "h-11 w-full"
      } px-5 font-medium ${borderRadius} ${disabled ? 'disabled:cursor-not-allowed' : 'disabled:cursor-pointer'} flex gap-3 font-medium items-center justify-center font-roboto ${bgColor} ${color} ${className} duration-100 ${hoverBgColor} `}
    >
      {children}
    </button>
  );
};
