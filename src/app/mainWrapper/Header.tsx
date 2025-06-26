import Logo from "@/components/logo/logo";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Header() {
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
      <Button
        onClick={() => {
          window.location.replace("/dashboard");
        }}
      >
        Dashboard
      </Button>
    </div>
  );
}

export default Header;
