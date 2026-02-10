"use client";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
interface InputProps {
  value: string;
  type?: string;
  label?: string;
  className?: string;
  placeholder?: string;
  error?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export default function Input({
  onChange,
  type = "text",
  className,
  label,
  placeholder,
  value,
  error = "",
  disabled = false,
}: InputProps) {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const inputType =
    type === "password" ? (isShowPassword ? "text" : "password") : type;
  return (
    <>
      <div className="w-full flex flex-col pb-5 relative">
        {label && <label>{label}</label>}
        <input
          disabled={disabled}
          value={value}
          className={`${className}  px-2 py-2 rounded-md text-lg outline-1 ${
            error
              ? "outline-[var(--error-border)]"
              : "outline-[var(--main-border)] focus:outline-[var(--main-accent)] "
          } ${disabled ? "bg-gray-200 text-gray-500" : "bg-white"}`}
          type={inputType}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setIsShowPassword((prev) => !prev)}
            className="absolute bottom-[36%] right-[10px] text-xl text-gray-500 hover:cursor-pointer"
          >
            {isShowPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        )}

        {error && <p className="absolute bottom-[-5] text-red-500">{error}</p>}
      </div>
    </>
  );
}
