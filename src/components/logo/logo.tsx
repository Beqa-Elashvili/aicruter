import { MdOutlinePeopleAlt } from "react-icons/md";

const Logo = ({ classname }: { classname?: string }) => {
  return (
    <div className={`${classname} flex items-center gap-1`}>
      <MdOutlinePeopleAlt size={40} />
      <p className="text-2xl font-bold ">
        <span className="text-cyan-500">AI</span>CRUITER
      </p>
    </div>
  );
};
export default Logo;
