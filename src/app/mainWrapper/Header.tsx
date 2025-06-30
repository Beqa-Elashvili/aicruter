import Logo from "@/components/logo/logo";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { User2Icon } from "lucide-react";
import { useUser } from "../providers/provider";

function Header() {
  const { user } = useUser();

  const isUser = () => {
    if (user) {
      window.location.replace("/all-interview");
    } else {
      window.location.replace("/auth");
    }
  };
  return (
    <div className="bg-white p-3 md:px-20 flex items-center justify-between">
      <Logo />
      <div className="items-center hidden md:flex font-semibold  gap-12">
        <Link href={"/features"} className="hover:underline">
          Features
        </Link>
        <Link href={"/features"} className="hover:underline">
          How It Works
        </Link>
        <Link href={"/features"} className="hover:underline">
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
            window.location.replace("/dashboard");
          }}
        >
          Dashboard
        </Button>
      </div>
    </div>
  );
}

export default Header;
