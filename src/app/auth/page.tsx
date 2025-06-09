"use client";

import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo/logo";
import { supabase } from "../services/suparbaseClient";

function Login() {
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.error("Error -->>", error.message);
    }
  };
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex flex-col  gap-1 items-center justify-center border rounded-xl p-8  ">
        <Logo />
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src={"/login.png"}
            alt="login"
            width={600}
            height={400}
            className="w-[400px] h-[300px]  rounded-lg"
          />
          <h2 className="text-2xl font-bold">Welcome to AiCruiter</h2>
          <p className="text-gray-500">Sign In With Google Account</p>
          <Button onClick={signInWithGoogle} className="w-full mt-7">
            Login With Google
            <FcGoogle />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
