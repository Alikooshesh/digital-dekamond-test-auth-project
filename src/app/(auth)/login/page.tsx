"use client";

import AuthForm from "@/components/pages/auth/AuthForm";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const Page = () => {
  const router = useRouter();
  const { user } = useUser();

  useEffect(()=>{
    if (user) {
        router.push("/dashboard")
      }
  },[[user, router]])

  return (
    <>
      <div className="w-screen h-screen overflow-y-auto flex items-center justify-center">
        <section className="w-full max-w-500 mx-auto flex flex-col gap-16">
          <h2 className="text-gray-700 font-bold text-2xl text-center">
            Welcome Back!
          </h2>
          <p className="text-onBackground text-md text-center">
            Login using your phone number.
          </p>

          <AuthForm />
        </section>
      </div>
    </>
  );
};

export default Page;
