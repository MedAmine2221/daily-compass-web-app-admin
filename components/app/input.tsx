"use client";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function AppInput({
  password,
  icon,
  label,
  name,
  type,
}: {
  password?: boolean;
  icon: React.ReactNode;
  label: string;
  name: string;
  type: string;
}) {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative my-4 w-80">
      <div
        className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors
        ${focused ? "text-[#4e4db0]" : "text-gray-400"}`}
      >
        {icon}
      </div>
      {password && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors
          ${focused ? "text-[#4e4db0]" : "text-gray-400"}`}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      )}

      <input
        onFocus={() => setFocused(true)}
        onBlur={(e) => !e.target.value && setFocused(false)}
        type={password && showPassword ? "text" : type}
        name={name}
        className="
          peer w-full h-12 rounded-2xl bg-white
          pl-12 pr-12 text-black
          border
        border-gray-300
          focus:outline-none focus:border-[#4e4db0] focus:ring-1 focus:ring-[#4e4db0]
        "
      />

      <label
        className={`
          absolute left-12 top-6.5 -translate-y-4
          bg-white
          text-gray-400 text-lg
          transition-all duration-200
          peer-focus:top-1 peer-focus:text-base peer-focus:text-[#4e4db0]
          ${focused ? "top-1 text-xs text-[#4e4db0]" : ""}
        `}
      >
        {label}
      </label>
    </div>
  );
}