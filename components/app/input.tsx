"use client";

import { Input } from "@heroui/input";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function AppInput({
  password,
  icon,
  label,
  name,
  type,
  placeholder,
  register,
  errors
}: {
  password?: boolean;
  icon: React.ReactNode;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  register?: any;
  errors?: any
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative my-2 w-80">
      <Input
      className="w-90"
        {...register(name)}
        placeholder={placeholder}
        errorMessage={errors[name]?.message}
        isInvalid={!!errors[name]}
        label={label}
        labelPlacement="outside"
        type={showPassword ? "text" : type}
        variant="bordered"
        startContent={icon}
        endContent={
          password
            ? showPassword
              ? <FiEyeOff onClick={() => setShowPassword(!showPassword)} size={30} />
              : <FiEye onClick={() => setShowPassword(!showPassword)} size={30} />
            : undefined
        }
        classNames={{
          label: "text-base",
          input: "text-base text-black",
          errorMessage: "text-base",
          inputWrapper: "h-13",
        }}
      />

    </div>
  );
}