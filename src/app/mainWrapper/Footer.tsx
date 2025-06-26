import Logo from "@/components/logo/logo";
import { Bot } from "lucide-react";
import Link from "next/link";
import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { toast } from "sonner";

function Footer() {
  const copyEmail = () => {
    navigator.clipboard.writeText("beqaelashvili3@gmail.com");
    toast("/copied!");
  };
  return (
    <div className="p-3  fixed bottom-0 bg-secondary w-full border-t gap-1  flex flex-col items-center text-center md:flex-row md:justify-between md:text-lef">
      <Logo />
      <div className="flex items-center  justify-between w-full  md:w-1/5 px-4 md:px-0  gap-12 font-semibold">
        <Link
          className="flex items-center gap-1"
          href={"https://www.linkedin.com/in/beqa-elashvili-493284234/"}
        >
          <RxLinkedinLogo className="text-blue-600" /> LinkedIn
        </Link>
        <Link
          className="flex items-center gap-1"
          href={"https://www.linkedin.com/in/beqa-elashvili-493284234/"}
        >
          <RxGithubLogo className="text-gray-500" /> GitHub
        </Link>
        <Link className="flex items-center gap-1" href={"https://vapi.ai/"}>
          <Bot className="text-gray-600" /> Vapi.ai
        </Link>
      </div>
      <h2
        onClick={copyEmail}
        className="text-gray-500 text-sm flex items-center gap-1"
      >
        @ beqaelashvili3@gmail.com. <span>let's Connect.</span>
      </h2>
    </div>
  );
}

export default Footer;
