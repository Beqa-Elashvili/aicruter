import { MdOutlinePeopleAlt } from "react-icons/md";

const Logo = () => {
  return (
    <div className="bg-white flex items-center gap-1">
      <MdOutlinePeopleAlt size={40} />
      <p className="text-2xl font-bold ">
        <span className="text-cyan-500">AI</span>CRUITER
      </p>
    </div>
  );
};
export default Logo;
