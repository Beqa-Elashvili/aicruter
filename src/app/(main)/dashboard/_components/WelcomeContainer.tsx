"use client";

import { useUser } from "@/app/providers/provider";
import React from "react";
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import { useRouter } from "next/navigation";

function WelcomeContainer() {
  const { user } = useUser();
  const router = useRouter();

  return (
    <div className="bg-white p-5 rounded-xl flex items-center justify-between">
      <div>
        <h2 className="text-lg font-bold">
          {`${
            user
              ? `Welcome Back, ${user.name}`
              : "Please Sign in before generate interviews"
          }`}
        </h2>
        <h2 className="text-gray-500">
          AI-Driven Interviews, Hassel-Free Hiring
        </h2>
      </div>
      {user?.picture ? (
        <Image
          src={user?.picture}
          alt="userAvatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      ) : (
        <RxAvatar
          onClick={() => router.push("/auth")}
          className="size-12 hover:cursor-pointer text-gray-500"
        />
      )}
    </div>
  );
}

export default WelcomeContainer;
