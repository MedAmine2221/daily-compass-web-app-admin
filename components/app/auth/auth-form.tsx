"use client";

import { FiMail, FiLock } from "react-icons/fi";
import AppInput from "../input";
import { useRouter } from "next/navigation";
import loginSchema from "@/schema/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from "@heroui/input";

export default function AuthForm() {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const login = (e: any) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver : yupResolver(loginSchema())
  });
  
  return (
    <form onSubmit={handleSubmit(login)}>
      <div className="flex flex-col items-center">
        <p className="text-[#4e4db0] font-bold text-3xl">
          USER LOGIN
        </p>
        <AppInput 
         icon={<FiMail size={30} color= {!!errors.email ? "var(--color-red-500)" : "black"} />}
         label="Email"
         type="email"
         name="email"
         placeholder="john@gmail.com"
         register={register}
         errors={errors}
        />
        <AppInput 
         icon={<FiLock size={30} color= {!!errors.password ? "var(--color-red-500)" : "black"} />}
         label="Password"
         type="password"
         name="password"
         placeholder="Password"
         register={register}
         errors={errors}
         password
        />

        <button
          className="bg-linear-to-r from-blue-950 via-[#4e4db0] to-blue-400 w-70 h-12 text-lg mt-6 px-6 py-2 rounded-3xl text-white"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  );
}