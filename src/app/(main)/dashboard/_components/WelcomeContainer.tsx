"use client";
import { useUser } from "@/app/providers/provider";
import React from "react";
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";

function WelcomeContainer() {
  const { user } = useUser();

  return (
    <div className="bg-white p-5 rounded-xl flex items-center justify-between">
      <div>
        <h2 className="text-lg font-bold">Welcome Back, {user?.name}</h2>
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
        <RxAvatar />
      )}
    </div>
  );
}

export default WelcomeContainer;
