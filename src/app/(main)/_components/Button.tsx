"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function ButtonComp() {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/dashboard/create-interview")}
      className="flex items-center gap-2 mt-4 px-4"
    >
      Create Interview <ArrowRight />
    </Button>
  );
}

export default ButtonComp;
