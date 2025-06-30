"use client";

import { MdOutlinePeopleAlt } from "react-icons/md";

const Logo = ({ classname, size }: { classname?: string; size?: number }) => {
  return (
    <div
      onClick={() => window.location.replace("/")}
      className={`${classname} flex cursor-pointer items-center gap-1`}
    >
      <MdOutlinePeopleAlt size={size ? size : 40} />
      <p className="font-bold">
        <span className="text-cyan-500">AI</span>CRUITER
      </p>
    </div>
  );
};
export default Logo;
