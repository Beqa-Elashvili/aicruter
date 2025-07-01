"use client";

import Logo from "@/components/logo/logo";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { User2Icon } from "lucide-react";
import { useUser } from "../providers/provider";
import { useRouter } from "next/navigation";

function Header() {
  const { user } = useUser();
  const router = useRouter();

  const isUser = () => {
    if (user) {
      router.push("/all-interview");
    } else {
      router.push("/auth");
    }
  };
  return (
    <div className="bg-white p-3 md:px-20 flex items-center justify-between">
      <Logo />
      <div className="items-center hidden md:flex font-semibold  gap-12">
        <Link href="#features" className="hover:underline">
          Features
        </Link>
        <Link href="#how-it-works" className="hover:underline">
          How It Works
        </Link>
        <Link href="#explore" className="hover:underline">
          explore
        </Link>
      </div>
      <div className="flex items-center  gap-2">
        <Button variant={"outline"} onClick={isUser}>
          <User2Icon />

          <p className="hidden md:block">
            {user
              ? user?.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
              : "Sign In"}
          </p>
        </Button>
        <Button
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          Dashboard
        </Button>
      </div>
    </div>
  );
}

export default Header;
