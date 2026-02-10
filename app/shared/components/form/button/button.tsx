"use client";
import { FaSpinner } from "react-icons/fa6";
interface IButtonProps {
  label: string;
  className?: string;
  variant?: "primary" | "disable" | "danger";
  isLoading?: boolean;
  onClick?: () => void;
  type?: "submit" | "button";
}

export default function Button({
  label,
  className,
  variant = "primary",
  isLoading = false,
  onClick = () => {},
  type = "submit",
}: IButtonProps) {
  const bgColor =
    variant === "primary" && !isLoading
      ? "bg-[var(--main-accent)]"
      : variant === "danger" && !isLoading
        ? "bg-[#F3636]"
        : "bg-[var(--disable)]";

  const hover =
    variant === "primary"
      ? " hover:cursor-pointer"
      : variant === "danger"
        ? "hover:cursor-pointer"
        : "";

  const fontColor = "text-white";

  const clickHandler = () => {
    onClick();
  };

  const completeClass = `${className} w-full ${bgColor} ${fontColor} px-5 rounded-lg py-2 ${hover} duration-200 flex gap-2 items-center`;
  return (
    <>
      <button
        type={type}
        onClick={clickHandler}
        disabled={isLoading}
        className={completeClass}
      >
        {label}

        {isLoading && <FaSpinner className="animate-spin text-xl" />}
      </button>
    </>
  );
}
