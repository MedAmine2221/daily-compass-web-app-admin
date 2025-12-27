"use client";

import { FiMail, FiLock } from "react-icons/fi";
import AppInput from "../input";
import { useRouter } from "next/navigation";

export default function AuthForm() {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const login = (e: any) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <form onSubmit={login}>
      <div className="flex flex-col items-center">
        <p className="text-[#4e4db0] font-bold text-3xl">
          USER LOGIN
        </p>

        <div className="m-10">
          <AppInput
            name="email"
            type="email"
            label="Email"
            icon={<FiMail />}
          />

          <AppInput
            password
            name="password"
            type="password"
            label="Password"
            icon={<FiLock />}
          />
        </div>

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