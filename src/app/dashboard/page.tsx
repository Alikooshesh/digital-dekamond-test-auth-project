"use client";

import Button from "@/components/general/Button";
import WelcomeBox from "@/components/pages/dashboard/WelcomeBox";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const { user, logout } = useUser();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [[user, router]]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full max-w-500 mx-auto px-8 flex flex-col gap-32">
        {!user ? <p>Bye Bye ...</p> : <WelcomeBox {...user} />}
        <Button onClick={logout} variant="outline" role="Logout">
            Logout
        </Button>
      </div>
    </div>
  );
};

export default Page;
